(function(){
  const VERSION = "v1.0.11";
  const BASE_PATH = "/WorkTools";
  const IS_FILE = location.protocol === "file:";
  const LS_THEME = "wt_theme";
  const LS_LANG  = "wt_lang";

  function currentLang(){ return localStorage.getItem(LS_LANG) || "en"; }
  function isLight(){ return (localStorage.getItem(LS_THEME)||"dark")==="light"; }
  function __isRoot(){
    if (document.getElementById("app-list")) return true;
    const p = location.pathname.replace(/\/+/g,'/');
    return IS_FILE ? /WorkTools\/(index\.html)?$/i.test(p) : /\/WorkTools\/?(index\.html)?$/.test(p);
  }
  function t(lang){
    const en = { app_title:"Various Apps", language:"Language", theme:"Theme", dark:"Dark", light:"Light", back:"Back", contact:"Contact", footer_title:"About this project", version:"Version", author:"Author", email:"Email", website:"Website", rights:"All rights reserved.", company:"Dhalmeida" };
    const pt = { app_title:"Aplicativos Diversos", language:"Idioma", theme:"Tema", dark:"Escuro", light:"Claro", back:"Voltar", contact:"Contato", footer_title:"Sobre este projeto", version:"Versão", author:"Autor", email:"E-mail", website:"Site", rights:"Todos os direitos reservados.", company:"Dhalmeida" };
    return lang==="pt" ? pt : en;
  }

  function buildChrome(strings){
    // theme early
    if (isLight()) document.documentElement.classList.add("light");

    // header
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
            <button class="iconbtn" id="themeToggle" title="${strings.theme}"><span class="icon">☾</span><span id="themeLabel">${isLight()?strings.light:strings.dark}</span></button>
            <a class="iconbtn" href="mailto:diego.almeida@dhalmeida.com" title="${strings.contact}"><span>${strings.contact}</span></a>
          </div>
        </div>
      </div>`;
    document.body.prepend(h);

    // footer
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
        <div class="copyright">© <span class="sig">By Dhalmeida</span>. ${strings.rights}</div>
      </div>`;
    document.body.appendChild(f);

    // layout guard
    (function () {
      const main = document.querySelector('body > main');
      const hdr  = document.querySelector('header');
      const ftr  = document.querySelector('footer');
      if (hdr) { hdr.style.position='sticky'; hdr.style.top='0'; hdr.style.zIndex='10000'; hdr.style.isolation='isolate'; }
      if (ftr) { ftr.style.position='relative'; ftr.style.zIndex='9999';  ftr.style.isolation='isolate'; }
      const h = hdr ? hdr.offsetHeight : 0;
      const b = ftr ? ftr.offsetHeight : 0;
      document.documentElement.style.setProperty('--wt-hdr', h + 'px');
      document.documentElement.style.setProperty('--wt-ftr', b + 'px');
      if (main) { main.style.minHeight = `calc(100vh - ${h}px - ${b}px)`; main.style.paddingTop='8px'; main.style.paddingBottom='8px'; }
      const app = document.getElementById('apex-app');
      if (app) { app.style.position='relative'; app.style.zIndex='0'; app.style.minHeight='auto'; app.style.height='auto'; }
      console.debug('WT v1.0.10 chrome mounted');
    })();

    // events
    const langsw = h.querySelector(".langswitch");
    if (langsw) langsw.addEventListener("click", (e)=>{
      const b = e.target.closest("button[data-lang]"); if(!b) return;
      localStorage.setItem(LS_LANG, b.dataset.lang); location.reload();
    });
    const tt = h.querySelector("#themeToggle");
    if (tt) tt.addEventListener("click", ()=>{
      const on = document.documentElement.classList.toggle("light");
      localStorage.setItem(LS_THEME, on?'light':'dark');
      h.querySelector("#themeLabel").textContent = on ? 'Light' : 'Dark';
      h.querySelector("#themeToggle .icon").textContent = on ? '☀' : '☾';
    });
    const back = h.querySelector("[data-action=back]");
    if (back) back.addEventListener("click", ()=>{
      try { if (document.referrer && document.referrer !== location.href) { history.back(); return; } } catch(e){}
      location.href = IS_FILE ? (__isRoot() ? "index.html" : "../index.html") : BASE_PATH + "/index.html";
    });
  }

  window.WT = window.WT || {};
  WT.init = function(){ if (document.querySelector('header')) return; try{ buildChrome(t(currentLang())); }catch(e){ console.error(e); } };
  document.addEventListener('DOMContentLoaded', ()=>{ try{ WT.init(); }catch(e){} });
  if (document.readyState==='complete' || document.readyState==='interactive'){ try{ WT.init(); }catch(e){} }
})();