(function(){
  const IS_ROOT = !!document.getElementById('app-list');
function __isRoot(){
  if (document.getElementById('app-list')) return true;
  const p = location.pathname.replace(/\/+/g,'/');
  if (location.protocol === 'file:'){
    const scripts = Array.from(document.scripts).map(s=>s.getAttribute('src')||'');
    if (scripts.some(s=>s.includes('../assets/js/app.js'))) return false;
    return true;
  } else {
    return /\/WorkTools\/?(index\.html)?$/.test(p);
  }
}

  const PREFIX = IS_ROOT ? '' : '..';
  const LS_THEME='wt_theme', LS_LANG='wt_lang';
  const BASE_PATH = '/WorkTools';
  const IS_FILE = location.protocol === 'file:';

  // Inline apps list (file:// proof)
  const APPS = [{"id": "apextestcoverageviewer", "path": "ApexTestCoverageViewer", "title": {"en": "ApexTestCoverageViewer", "pt": "ApexTestCoverageViewer"}, "description": {"en": "Open the ApexTestCoverageViewer utility.", "pt": "Abrir o utilitário ApexTestCoverageViewer."}}, {"id": "ganttcharteditor", "path": "GanttChartEditor", "title": {"en": "GanttChartEditor", "pt": "GanttChartEditor"}, "description": {"en": "Open the GanttChartEditor utility.", "pt": "Abrir o utilitário GanttChartEditor."}}];

  function renderApps(list, lang){
    const html = (APPS || []).map(a => `<a class="card" href="${a.path}/index.html">
      <h3>${(a.title && a.title[lang]) || (a.title && a.title['en']) || a.path}</h3>
      <p>${(a.description && a.description[lang]) || ''}</p>
    </a>`).join('');
    list.innerHTML = html;
  }

  function currentLang(){ return localStorage.getItem(LS_LANG) || 'en'; }
  function isLight(){ return (localStorage.getItem(LS_THEME)||'dark') === 'light'; }

  async function buildChrome(strings){
    if(isLight()) document.documentElement.classList.add('light');

    // HEADER
    const h = document.createElement('header');
    const headerBack = !__isRoot() ? `${headerBack}` : '';
    h.innerHTML = `
      <div class="container" style="display:flex; align-items:center; gap:16px">
        <div class="brand">
          <a href="${IS_ROOT?'./':'../'}versions.html" class="badge">v1.0.2</a>
          <span id="title">${strings.app_title}</span>
        </div>
        <div class="controls">
          <div class="toolbar">
            ${!__isRoot() ? `<button class="iconbtn back-btn" data-action="back" title="${strings.back}"><span>←</span><span>${strings.back}</span></button>` : ''}
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
      </div>`
document.body.prepend(h);

    // FOOTER
    const f = document.createElement('footer');
    f.innerHTML = `<div class="container">
      <div class="footgrid">
        <div>
          <h4>${strings.footer_title||'About this project'}</h4>
          <div class="kvs">
            <div class="row"><span class="key">${strings.version||'Version'}</span><span class="val"><a href="versions.html">1.0.0</a></span></div>
            <div class="row"><span class="key">${strings.author||'Author'}</span><span class="val">${strings.company||'Dhalmeida'}</span></div>
          </div>
        </div>
        <div>
          <h4>${strings.contact}</h4>
          <div class="kvs">
            <div class="row"><span class="key">${strings.email||'Email'}</span><span class="val"><a href="mailto:diego.almeida@dhalmeida.com">diego.almeida@dhalmeida.com</a></span></div>
            <div class="row"><span class="key">${strings.website||'Website'}</span><span class="val"><a href="${IS_ROOT?'./':'../'}index.html">${strings.app_title}</a></span></div>
          </div>
        </div>
      </div>
      <div class="copyright">© <span class="sig">${strings.madeby}</span>. ${strings.rights||''}</div>
    </div>`;
    document.body.appendChild(f);
    
    if(__isRoot()){ const b = h.querySelector('[data-action=back]'); if(b) b.remove(); }
        document.querySelectorAll('[data-action=back]').forEach(el=>{ if(!h.contains(el)) el.remove(); });
        /*FORCE_REMOVE_BACK_ON_ROOT*/
    if(IS_ROOT){ document.querySelectorAll('[data-action=back]').forEach(el=>el.remove()); }
    if(IS_ROOT){ const b = h.querySelector('[data-action=back]'); if(b) b.remove(); }

    if(IS_ROOT){ const b = h.querySelector('[data-action=back]'); if(b) b.remove(); }

    // EVENTS
    h.querySelector('.langswitch').addEventListener('click', e=>{
      const b = e.target.closest('button[data-lang]');
      if(!b) return;
      localStorage.setItem(LS_LANG, b.dataset.lang);
      location.reload();
    });
    h.querySelector('#themeToggle').addEventListener('click', ()=>{
      const root = document.documentElement;
      const on = root.classList.toggle('light');
      localStorage.setItem(LS_THEME, on ? 'light' : 'dark');
      h.querySelector('#themeLabel').textContent = on ? strings.light : strings.dark;
      h.querySelector('#themeToggle .icon').textContent = on ? '☀' : '☾';
    });
    const __back = h.querySelector('[data-action=back]'); if(__back){ __back.addEventListener('click', ()=>{ try{ if(document.referrer && document.referrer !== location.href){ history.back(); return; } }catch(e){} const rootHref = IS_FILE ? (IS_ROOT ? 'index.html' : '../index.html') : (BASE_PATH + '/index.html'); location.href = rootHref; }); }
  }

  function t(lang){
    // simple sync table; if missing keys, fall back to en
    const en = {
      "app_title":"Various Apps","language":"Language","theme":"Theme","dark":"Dark","light":"Light",
      "back":"Back","contact":"Contact","madeby":"By Dhalmeida","footer_title":"About this project",
      "version":"Version","author":"Author","email":"Email","website":"Website","rights":"All rights reserved.","company":"Dhalmeida","":"Utilities with a unified look and feel."
    };
    const pt = {
      "app_title":"Aplicativos Diversos","language":"Idioma","theme":"Tema","dark":"Escuro","light":"Claro",
      "back":"Voltar","contact":"Contato","madeby":"By Dhalmeida","footer_title":"Sobre este projeto",
      "version":"Versão","author":"Autor","email":"E-mail","website":"Site","rights":"Todos os direitos reservados.","company":"Dhalmeida","":"Utilitários com uma aparência unificada."
    };
    return lang==='pt' ? pt : en;
  }

  document.addEventListener('DOMContentLoaded', ()=>{ window.WT = window.WT || {};
    if(window.WT && WT.__built) return; WT = window.WT || {}; WT.__built = true;
    const lang = currentLang();
    const strings = t(lang);
    window.WT = window.WT || {}; WT.__sig='WT v1.0.1'; WT.init = function(){ if(document.querySelector('header')) return; console.log('WT v1.0.1 init'); WT.init();
if(document.readyState==='complete'||document.readyState==='interactive'){ try{ WT.init(); }catch(e){} } };
    (window.WT = window.WT || {}).init = function(){ if(document.querySelector('header')) return; WT.init(); };
    WT.init();

    if(IS_ROOT){
      const list = document.getElementById('app-list');
      if(list) renderApps(list, lang);
    }
  });
})();