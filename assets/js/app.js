(function(){
  const VERSION = "v1.0.6";
  const BASE_PATH = "/WorkTools";
  const IS_FILE = location.protocol === "file:";
  const LS_THEME = "wt_theme";
  const LS_LANG = "wt_lang";
  const APPS = [{"id": "apextestcoverageviewer", "path": "ApexTestCoverageViewer", "title": {"en": "ApexTestCoverageViewer", "pt": "ApexTestCoverageViewer"}, "description": {"en": "Open the ApexTestCoverageViewer utility.", "pt": "Abrir o utilitário ApexTestCoverageViewer."}}, {"id": "ganttcharteditor", "path": "GanttChartEditor", "title": {"en": "GanttChartEditor", "pt": "GanttChartEditor"}, "description": {"en": "Open the GanttChartEditor utility.", "pt": "Abrir o utilitário GanttChartEditor."}}];

  function currentLang() { return localStorage.getItem(LS_LANG) || "en"; }
  function isLight() { return (localStorage.getItem(LS_THEME)||"dark") === "light"; }
  function __isRoot(){
    if (document.getElementById("app-list")) return true;
    const p = location.pathname.replace(/\/+/g,'/');
    if (IS_FILE) {
      const scripts = Array.from(document.scripts).map(s=>s.getAttribute("src")||"");
      if (scripts.some(s=>s.includes("../assets/js/app.js"))) return false;
      return true;
    } else {
      return /\/WorkTools\/?(index\.html)?$/.test(p);
    }
  }

  function t(lang){
    const en = {
      app_title:"Various Apps", language:"Language", theme:"Theme", dark:"Dark", light:"Light",
      back:"Back", contact:"Contact", madeby:"By Dhalmeida", footer_title:"About this project",
      version:"Version", author:"Author", email:"Email", website:"Website", rights:"All rights reserved.", company:"Dhalmeida"
    };
    const pt = {
      app_title:"Aplicativos Diversos", language:"Idioma", theme:"Tema", dark:"Escuro", light:"Claro",
      back:"Voltar", contact:"Contato", madeby:"By Dhalmeida", footer_title:"Sobre este projeto",
      version:"Versão", author:"Autor", email:"E-mail", website:"Site", rights:"Todos os direitos reservados.", company:"Dhalmeida"
    };
    return lang==="pt" ? pt : en;
  }

  function buildChrome(strings){
    if(isLight()) document.documentElement.classList.add("light");

    const h = document.createElement("header");
    const headerBack = !__isRoot()
      ? `<button class="iconbtn back-btn" data-action="back" title="${strings.back}"><span>←</span><span>${strings.back}</span></button>`
      : "";
    h.innerHTML = `
      <div class="container" style="display:flex; align-items:center; gap:16px">
        <div class="brand">
          <a href="${__isRoot()?'./':'../'}versions.html" class="badge">${VERSION}</a>
          <span id="title">${strings.app_title}</span>
        </div>
        <div class="controls">
          <div class="toolbar">
            ${headerBack}
            <div class="langswitch" role="group" aria-label="${strings.language}">
              <button data-lang="en" class="${currentLang()==='en'?'active':''}">EN</button>
              <button data-lang="pt" class="${currentLang()==='pt'?'active':''}">PT</button>
            </div>
            <button class="iconbtn" id="themeToggle" title="${strings.theme}">
              <span class="icon">☾</span>
              <span id="themeLabel">${isLight()?strings.light:strings.dark}</span>
            </button>
            <a class="iconbtn" href="mailto:diego.almeida@dhalmeida.com" title="${strings.contact}">
              <span>${strings.contact}</span>
            </a>
          </div>
        </div>
      </div>`;
    document.body.prepend(h);

    const f = document.createElement("footer");
    f.innerHTML = `
      <div class="container">
        <div class="footgrid">
          <div>
            <h4>${strings.footer_title}</h4>
            <div class="kvs">
              <div class="row"><span class="key">${strings.version}</span><span class="val"><a href="${__isRoot()?'./':'../'}versions.html">${VERSION}</a></span></div>
              <div class="row"><span class="key">${strings.author}</span><span class="val">${strings.company}</span></div>
            </div>
          </div>
          <div>
            <h4>${strings.contact}</h4>
            <div class="kvs">
              <div class="row"><span class="key">${strings.email}</span><span class="val"><a href="mailto:diego.almeida@dhalmeida.com">diego.almeida@dhalmeida.com</a></span></div>
              <div class="row"><span class="key">${strings.website}</span><span class="val"><a href="${__isRoot()?'./':'../'}index.html">${strings.app_title}</a></span></div>
            </div>
          </div>
        </div>
        <div class="copyright">© <span class="sig">${strings.madeby}</span>. ${strings.rights}</div>
      </div>`;
    document.body.appendChild(f);

    const langsw = h.querySelector(".langswitch");
    if (langsw) langsw.addEventListener("click", (e)=>{
      const b = e.target.closest("button[data-lang]"); if(!b) return;
      localStorage.setItem(LS_LANG, b.dataset.lang); location.reload();
    });

    const tt = h.querySelector("#themeToggle");
    if (tt) tt.addEventListener("click", ()=>{
      const root = document.documentElement;
      const on = root.classList.toggle("light");
      localStorage.setItem(LS_THEME, on ? "light" : "dark");
      h.querySelector("#themeLabel").textContent = on ? strings.light : strings.dark;
      h.querySelector("#themeToggle .icon").textContent = on ? "☀" : "☾";
    });

    const backBtn = h.querySelector("[data-action=back]");
    if (backBtn) backBtn.addEventListener("click", ()=>{
      try { if (document.referrer && document.referrer !== location.href) { history.back(); return; } } catch(e){}
      const rootHref = IS_FILE ? (__isRoot() ? "index.html" : "../index.html") : (BASE_PATH + "/index.html");
      location.href = rootHref;
    });

    if (__isRoot()) {
      const list = document.getElementById("app-list");
      if (list) list.innerHTML = (APPS||[]).map(a=>`
        <a class="card" href="${a.path}/index.html">
          <h3>${(a.title&&a.title[currentLang()])||(a.title&&a.title.en)||a.path}</h3>
          <p>${(a.description&&a.description[currentLang()])||''}</p>
        </a>
      `).join("");
    }
  }

  window.WT = window.WT || {};
  WT.init = function(){
    if (document.querySelector("header")) return;
    const strings = t(currentLang());
    try { buildChrome(strings); } catch(e) { console.error("WT init error", e); }
  };

  console.log("WT v1.0.3 boot");
  document.addEventListener("DOMContentLoaded", ()=>{ try{ WT.init(); }catch(e){} });
  if (document.readyState==="complete" || document.readyState==="interactive") { try{ WT.init(); }catch(e){} }
})();