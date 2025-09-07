(function(){
  // ===== WorkTools chrome v1.0.23 =====
  var VERSION = "v1.0.23";
  var BASE_PATH = "/WorkTools";
  var IS_FILE = location.protocol === "file:";
  var LS_THEME = "wt_theme";
  var LS_LANG  = "wt_lang";
  // root apps registry (extend here if new tools are added)
  var APPS = [
    { id: "apextestcoverageviewer", path: "ApexTestCoverageViewer", 
      title: { en: "ApexTestCoverageViewer", pt: "ApexTestCoverageViewer" },
      description: { en: "Open the ApexTestCoverageViewer utility.", pt: "Abrir o utilitário ApexTestCoverageViewer." } },
    { id: "ganttcharteditor", path: "GanttChartEditor",
      title: { en: "GanttChartEditor", pt: "GanttChartEditor" },
      description: { en: "Open the GanttChartEditor utility.", pt: "Abrir o utilitário GanttChartEditor." } }
  ];


  // ultra-safe logger (no rest params)
  var WTV = "WTv1.0.23";
  function WTL(){ try{ var a=[ "["+WTV+"]" ]; for(var i=0;i<arguments.length;i++) a.push(arguments[i]); console.log.apply(console, a); }catch(e){} }
  window.addEventListener("error", function(e){ try{ console.error("["+WTV+":error]", e.message); }catch(_){}});
  window.addEventListener("unhandledrejection", function(e){ try{ console.error("["+WTV+":promise]", e.reason); }catch(_){}});
  WTL("app.js loaded", {ready: document.readyState, url: location.href});

  function currentLang(){ try{return localStorage.getItem(LS_LANG)||"en";}catch(_){return "en";} }
  function isLight(){ try{return (localStorage.getItem(LS_THEME)||"dark")==="light";}catch(_){return false;} }

  function __isRoot(){
    if (document.getElementById("app-list")) return true;
    var p = location.pathname.replace(/\/+/g,'/');
    if (IS_FILE) return /WorkTools\/(index\.html)?$/i.test(p);
    return /\/WorkTools\/?(index\.html)?$/.test(p);
  }

  function t(lang){
    var en = { app_title:"Various Apps", language:"Language", theme:"Theme", dark:"Dark", light:"Light", back:"Back", contact:"Contact", footer_title:"About this project", version:"Version", author:"Author", email:"Email", website:"Website", rights:"All rights reserved.", company:"Dhalmeida" };
    var pt = { app_title:"Aplicativos Diversos", language:"Idioma", theme:"Tema", dark:"Escuro", light:"Claro", back:"Voltar", contact:"Contato", footer_title:"Sobre este projeto", version:"Versão", author:"Autor", email:"E-mail", website:"Site", rights:"Todos os direitos reservados.", company:"Dhalmeida" };
    return lang==="pt" ? pt : en;
  }

  function buildChrome(strings){
  function renderRoot(){
    try{
      var list = document.getElementById('app-list');
      if (!list) return;
      var lang = currentLang();
      list.innerHTML = (APPS||[]).map(function(a){
        var title = (a.title && (a.title[lang] || a.title.en)) || a.path;
        var desc  = (a.description && (a.description[lang] || a.description.en)) || "";
        return '<a class="card" href="'+a.path+'/index.html"><h3>'+title+'</h3><p>'+desc+'</p></a>';
      }).join('');
    }catch(e){ try{ console.error(e); }catch(_){ } }
  }

    WTL("chrome:mount:start");

    if (isLight()) document.documentElement.classList.add("light");

    var h = document.createElement("header"); h.setAttribute("data-wt","1");
    var headerBack = !__isRoot()
      ? '<button class="iconbtn back-btn" data-action="back" title="'+strings.back+'"><span>←</span><span>'+strings.back+'</span></button>'
      : "";
    h.innerHTML =
      '<div class="container" style="display:flex;align-items:center;gap:16px">'
      + '<div class="brand">'
      +   '<a href="'+(__isRoot()?'./':'../')+'versions.html" class="badge">'+VERSION+'</a>'
      +   '<span id="title">'+strings.app_title+'</span>'
      + '</div>'
      + '<div class="controls"><div class="toolbar">'
      +   headerBack
      +   '<div class="langswitch" role="group" aria-label="'+strings.language+'">'
      +     '<button data-lang="en" class="'+(currentLang()==='en'?'active':'')+'">EN</button>'
      +     '<button data-lang="pt" class="'+(currentLang()==='pt'?'active':'')+'">PT</button>'
      +   '</div>'
      +   '<button class="iconbtn" id="themeToggle" title="'+strings.theme+'"><span class="icon">☾</span><span id="themeLabel">'+(isLight()?strings.light:strings.dark)+'</span></button>'
      +   '<a class="iconbtn" href="mailto:diego.almeida@dhalmeida.com" title="'+strings.contact+'"><span>'+strings.contact+'</span></a>'
      + '</div></div></div>';
    document.body.prepend(h);

    var f = document.createElement("footer"); f.setAttribute("data-wt","1");
    f.innerHTML =
      '<div class="container">'
      + '<div class="footgrid">'
      +   '<div><h4>'+strings.footer_title+'</h4><div class="kvs">'
      +     '<div class="row"><span class="key">'+strings.version+'</span><span class="val"><a href="'+(__isRoot()?'./':'../')+'versions.html">'+VERSION+'</a></span></div>'
      +     '<div class="row"><span class="key">'+strings.author+'</span><span class="val">'+strings.company+'</span></div>'
      +   '</div></div>'
      +   '<div><h4>'+strings.contact+'</h4><div class="kvs">'
      +     '<div class="row"><span class="key">'+strings.email+'</span><span class="val"><a href="mailto:diego.almeida@dhalmeida.com">diego.almeida@dhalmeida.com</a></span></div>'
      +     '<div class="row"><span class="key">'+strings.website+'</span><span class="val"><a href="'+(__isRoot()?'./':'../')+'index.html">'+strings.app_title+'</a></span></div>'
      +   '</div></div>'
      + '</div>'
      + '<div class="copyright">© <span class="sig">By Dhalmeida</span>. '+strings.rights+'</div>'
      + '</div>';
    document.body.appendChild(f);

    // guard layout
    var main = document.querySelector('body > main');
    var hdr  = document.querySelector('header');
    var ftr  = document.querySelector('footer');
    if (hdr) { hdr.style.position='sticky'; hdr.style.top='0'; hdr.style.zIndex='10000'; hdr.style.isolation='isolate'; hdr.style.background='rgba(0,0,0,.6)'; }
    if (ftr) { ftr.style.position='relative'; ftr.style.zIndex='9999';  ftr.style.isolation='isolate'; ftr.style.background='rgba(0,0,0,.6)'; }
    var hh = hdr ? hdr.offsetHeight : 0;
    var ff = ftr ? ftr.offsetHeight : 0;
    try{
      document.documentElement.style.setProperty('--wt-hdr', hh+'px');
      document.documentElement.style.setProperty('--wt-ftr', ff+'px');
    }catch(_){}
    if (main) { main.style.minHeight = 'calc(100vh - '+hh+'px - '+ff+'px)'; main.style.paddingTop='8px'; main.style.paddingBottom='8px'; }
    var app = document.getElementById('apex-app');
    if (app) { app.style.position='relative'; app.style.zIndex='0'; app.style.minHeight='auto'; app.style.height='auto'; }

    // events
    var langsw = h.querySelector(".langswitch");
    if (langsw) langsw.addEventListener("click", function(e){
      var b = e.target.closest("button[data-lang]"); if(!b) return;
      try{ localStorage.setItem(LS_LANG, b.getAttribute("data-lang")); }catch(_){}
      location.reload();
    });
    var tt = h.querySelector("#themeToggle");
    if (tt) tt.addEventListener("click", function(){
      var on = document.documentElement.classList.toggle("light");
      try{ localStorage.setItem(LS_THEME, on?'light':'dark'); }catch(_){}
      h.querySelector("#themeLabel").textContent = on ? 'Light' : 'Dark';
      h.querySelector("#themeToggle .icon").textContent = on ? '☀' : '☾';
    });
    var back = h.querySelector("[data-action=back]");
    if (back) back.addEventListener("click", function(){
      try { if (document.referrer && document.referrer !== location.href) { history.back(); return; } } catch(e){}
      location.href = IS_FILE ? (__isRoot() ? "index.html" : "../index.html") : BASE_PATH + "/index.html";
    });

    
    // render root app list
    if (__isRoot()) {
      try {
        var list = document.getElementById('app-list');
        if (list) {
          var lang = currentLang();
          list.innerHTML = (APPS||[]).map(function(a){
            var title = (a.title && (a.title[lang] || a.title.en)) || a.path;
            var desc  = (a.description && (a.description[lang] || a.description.en)) || "";
            return '<a class="card" href="'+a.path+'/index.html">'
                   + '<h3>'+title+'</h3>'
                   + '<p>'+desc+'</p>'
                   + '</a>';
          }).join('');
        }
      } catch(e) { try{ console.error(e); }catch(_){ } }
    }

    if (__isRoot()) { renderRoot(); }
    WTL("chrome:mount:end", {header: !!document.querySelector('header[data-wt]'), footer: !!document.querySelector('footer[data-wt]')});
  }

  window.WT = window.WT || {};
  WT.init = function(){
    WTL("init:start", {hasWTHeader: !!document.querySelector('header[data-wt]')});
    if (document.querySelector('header[data-wt]')) return;
    try{ buildChrome(t(currentLang())); }catch(e){ console.error(e); }
    WTL("init:done", {hasWTHeader: !!document.querySelector('header[data-wt]'), hasWTFooter: !!document.querySelector('footer[data-wt]')});
  };
  document.addEventListener('DOMContentLoaded', function(){ try{ WT.init(); }catch(e){} });
  if (document.readyState==='complete' || document.readyState==='interactive'){ try{ WT.init(); }catch(e){} }
})();