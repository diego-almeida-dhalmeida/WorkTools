
(function(){
  const IS_ROOT = !!document.getElementById('app-list');
  const PREFIX = IS_ROOT ? '' : '..';
  const LS_THEME = "wt_theme";
  const LS_LANG = "wt_lang";
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const lang = localStorage.getItem(LS_LANG) || "en";
  const theme = localStorage.getItem(LS_THEME) || "dark";

  // apply theme
  if(theme === "light"){
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }

  // load i18n
  async function loadI18n(code){
    try{
      const res = await fetch(`${PREFIX}/assets/i18n/${code}.json`);
      return await res.json();
    }catch(e){
      return code === "pt" ? {} : {};
    }
  }

  // icons
  const Sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  const Moon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
  const Globe = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>';
  const Back = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6"/></svg>';
  const Mail = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>';

  // build header/footer
  async function buildChrome(strings){
    const VERSION = "1.0.0";
    const NOW = new Date();
    const YEAR = NOW.getFullYear();

    const h = document.createElement("header");
    h.innerHTML = `
      <div class="container" style="display:flex; align-items:center; gap:16px">
        <div class="brand">
          <span class="badge">v${VERSION}</span>
          <span id="title">${strings.app_title}</span>
        </div>
        <div class="controls">
          <div class="toolbar">
            <button class="iconbtn back-btn" data-action="back" title="${strings.back}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6"/></svg>
              <span>${strings.back}</span>
            </button>
            <div class="langswitch" role="group" aria-label="${strings.language}">
              <button data-lang="en" class="${(localStorage.getItem('wt_lang')||'en')==='en'?'active':''}">EN</button>
              <button data-lang="pt" class="${(localStorage.getItem('wt_lang')||'en')==='pt'?'active':''}">PT</button>
            </div>
            <button class="iconbtn" id="themeToggle" title="${strings.theme}">
              <span class="icon"></span>
              <span id="themeLabel"></span>
            </button>
            <a class="iconbtn" href="mailto:diego.almeida@dhalmeida.com" title="${strings.contact}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
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
            <p class="muted">${strings.tagline_footer}</p>
            <div class="kvs">
              <div class="row"><span class="key">${strings.version}</span><span class="val">${VERSION}</span></div>
              <div class="row"><span class="key">${strings.author}</span><span class="val">${strings.company}</span></div>
            </div>
          </div>
          <div>
            <h4>${strings.contact}</h4>
            <div class="kvs">
              <div class="row"><span class="key">${strings.email}</span><span class="val"><a href="mailto:diego.almeida@dhalmeida.com">diego.almeida@dhalmeida.com</a></span></div>
              <div class="row"><span class="key">${strings.website}</span><span class="val"><a href="/">/index.html</a></span></div>
            </div>
          </div>
        </div>
        <div class="copyright">© ${YEAR} <span class="sig">${strings.madeby}</span>. ${strings.rights}</div>
      </div>`;
    document.body.appendChild(f);

    // handlers
    h.querySelector(".langswitch").addEventListener("click", (e)=>{
      const b = e.target.closest("button[data-lang]");
      if(!b) return;
      const code = b.getAttribute("data-lang");
      localStorage.setItem("wt_lang", code);
      location.reload();
    });
    const themeToggle = h.querySelector("#themeToggle");
    const iconSpan = themeToggle.querySelector(".icon");
    const label = h.querySelector("#themeLabel");
    const Sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
    const Moon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
    const isLight = document.documentElement.classList.contains("light");
    iconSpan.innerHTML = isLight ? Sun : Moon;
    label.textContent = isLight ? strings.light : strings.dark;

    themeToggle.addEventListener("click", ()=>{
      const root = document.documentElement;
      const toggled = root.classList.toggle("light");
      localStorage.setItem("wt_theme", toggled ? "light" : "dark");
      iconSpan.innerHTML = toggled ? Sun : Moon;
      label.textContent = toggled ? strings.light : strings.dark;
    });
    h.querySelector("[data-action=back]").addEventListener("click", ()=>{
      if(document.referrer && document.referrer !== location.href) history.back();
      else location.href = "/index.html";
    });
  }</span>
        </div>
        <div class="controls">
          <div class="toolbar">
            <button class="iconbtn back-btn" data-action="back" title="${strings.back}">${Back}<span>${strings.back}</span></button>
            <div class="langswitch" role="group" aria-label="${strings.language}">
              <button data-lang="en" class="${(lang==='en')?'active':''}">EN</button>
              <button data-lang="pt" class="${(lang==='pt')?'active':''}">PT</button>
            </div>
            <button class="iconbtn" id="themeToggle" title="${strings.theme}">
              <span class="icon">${theme==='light'?Sun:Moon}</span>
              <span id="themeLabel">${theme==='light'?strings.light:strings.dark}</span>
            </button>
            <a class="iconbtn" href="mailto:diego.almeida@dhalmeida.com" title="${strings.contact}">${Mail}<span>${strings.contact}</span></a>
          </div>
        </div>
      </div>`;
    document.body.prepend(h);

    const f = document.createElement("footer");
    f.innerHTML = `<div class="container">© <span class="sig">${strings.madeby}</span></div>`;
    document.body.appendChild(f);

    // handlers
    h.querySelector(".langswitch").addEventListener("click", (e)=>{
      const b = e.target.closest("button[data-lang]");
      if(!b) return;
      const code = b.getAttribute("data-lang");
      localStorage.setItem(LS_LANG, code);
      location.reload();
    });
    h.querySelector("#themeToggle").addEventListener("click", ()=>{
      const root = document.documentElement;
      const isLight = root.classList.toggle("light");
      localStorage.setItem(LS_THEME, isLight ? "light" : "dark");
      const label = document.getElementById("themeLabel");
      label.textContent = isLight ? strings.light : strings.dark;
      h.querySelector("#themeToggle .icon").innerHTML = isLight ? Sun : Moon;
    });
    h.querySelector("[data-action=back]").addEventListener("click", ()=>{
      if(document.referrer && document.referrer !== location.href) history.back();
      else location.href = "/index.html";
    });
  }

  async function init(){
    const strings = await loadI18n(lang);
    document.title = strings.app_title;
    await buildChrome(strings);

    // render root app list if container exists
    const listEl = document.getElementById("app-list");
    if(listEl){
      try{
        const res = await fetch("/apps.json");
        const data = await res.json();
        const apps = data.apps || [];
        listEl.innerHTML = apps.map(a => `
          <a class="card" href="${a.path}/index.html">
            <h3>${a.title[lang] || a.title["en"]}</h3>
            <p>${a.description[lang] || ""}</p>
          </a>
        `).join("");
        const hint = document.getElementById("root-hint");
        if(hint) hint.textContent = strings.root_index_hint;
      }catch(e){ /* no-op */ }
    }

    // embed original content if present
    const embed = document.querySelector("[data-embed]");
    if(embed){
      const url = embed.getAttribute("data-embed");
      fetch(url).then(r=>r.text()).then(html=>{
        document.getElementById("content").innerHTML = html;
        const hint = document.getElementById("internal-hint");
        if(hint) hint.textContent = strings.internal_index_hint;
      });
    }
  }
  document.addEventListener("DOMContentLoaded", init);
})();
