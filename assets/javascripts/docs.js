var Holder=Holder||{};!function(t,e){function n(t,e,n){e=parseInt(e,10),t=parseInt(t,10);var a=Math.max(e,t),o=Math.min(e,t),i=1/12,s=Math.min(.75*o,.75*a*i);return{height:Math.round(Math.max(n.size,s))}}function a(t){var e=[];for(p in t)t.hasOwnProperty(p)&&e.push(p+":"+t[p]);return e.join(";")}function o(t){var e=t.ctx,a=t.dimensions,o=t.template,i=t.ratio,s=t.holder,r="literal"==s.textmode,l="exact"==s.textmode,c=n(a.width,a.height,o),u=c.height,d=a.width*i,h=a.height*i,f=o.font?o.font:"Arial,Helvetica,sans-serif";canvas.width=d,canvas.height=h,e.textAlign="center",e.textBaseline="middle",e.fillStyle=o.background,e.fillRect(0,0,d,h),e.fillStyle=o.foreground,e.font="bold "+u+"px "+f;var p=o.text?o.text:Math.floor(a.width)+"x"+Math.floor(a.height);if(r){var a=s.dimensions;p=a.width+"x"+a.height}else if(l&&s.exact_dimensions){var a=s.exact_dimensions;p=Math.floor(a.width)+"x"+Math.floor(a.height)}var m=e.measureText(p).width;return m/d>=.75&&(u=Math.floor(.75*u*(d/m))),e.font="bold "+u*i+"px "+f,e.fillText(p,d/2,h/2,d),canvas.toDataURL("image/png")}function i(t){var e=t.dimensions,a=t.template,o=t.holder,i="literal"==o.textmode,s="exact"==o.textmode,r=n(e.width,e.height,a),l=r.height,c=e.width,u=e.height,d=a.font?a.font:"Arial,Helvetica,sans-serif",h=a.text?a.text:Math.floor(e.width)+"x"+Math.floor(e.height);if(i){var e=o.dimensions;h=e.width+"x"+e.height}else if(s&&o.exact_dimensions){var e=o.exact_dimensions;h=Math.floor(e.width)+"x"+Math.floor(e.height)}var f=D({text:h,width:c,height:u,text_height:l,font:d,template:a});return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(f)))}function s(t){return v.use_canvas&&!v.use_svg?o(t):i(t)}function r(t,e,n,a){var o=n.dimensions,i=n.theme,r=n.text?decodeURIComponent(n.text):n.text,l=o.width+"x"+o.height;i=r?m(i,{text:r}):i,i=n.font?m(i,{font:n.font}):i,e.setAttribute("data-src",a),n.theme=i,e.holder_data=n,"image"==t?(e.setAttribute("alt",r?r:i.text?i.text+" ["+l+"]":l),(v.use_fallback||!n.auto)&&(e.style.width=o.width+"px",e.style.height=o.height+"px"),v.use_fallback?e.style.backgroundColor=i.background:(e.setAttribute("src",s({ctx:k,dimensions:o,template:i,ratio:x,holder:n})),n.textmode&&"exact"==n.textmode&&(_.push(e),u(e)))):"background"==t?v.use_fallback||(e.style.backgroundImage="url("+s({ctx:k,dimensions:o,template:i,ratio:x,holder:n})+")",e.style.backgroundSize=o.width+"px "+o.height+"px"):"fluid"==t&&(e.setAttribute("alt",r?r:i.text?i.text+" ["+l+"]":l),"%"==o.height.slice(-1)?e.style.height=o.height:null!=n.auto&&n.auto||(e.style.height=o.height+"px"),"%"==o.width.slice(-1)?e.style.width=o.width:null!=n.auto&&n.auto||(e.style.width=o.width+"px"),("inline"==e.style.display||""===e.style.display||"none"==e.style.display)&&(e.style.display="block"),c(e),v.use_fallback?e.style.backgroundColor=i.background:(_.push(e),u(e)))}function l(t,e){var n={height:t.clientHeight,width:t.clientWidth};return n.height||n.width?(t.removeAttribute("data-holder-invisible"),n):(t.setAttribute("data-holder-invisible",!0),void e.call(this,t))}function c(e){if(e.holder_data){var n=l(e,t.invisible_error_fn(c));if(n){var a=e.holder_data;a.initial_dimensions=n,a.fluid_data={fluid_height:"%"==a.dimensions.height.slice(-1),fluid_width:"%"==a.dimensions.width.slice(-1),mode:null},a.fluid_data.fluid_width&&!a.fluid_data.fluid_height?(a.fluid_data.mode="width",a.fluid_data.ratio=a.initial_dimensions.width/parseFloat(a.dimensions.height)):!a.fluid_data.fluid_width&&a.fluid_data.fluid_height&&(a.fluid_data.mode="height",a.fluid_data.ratio=parseFloat(a.dimensions.width)/a.initial_dimensions.height)}}}function u(e){var n;n=null==e.nodeType?_:[e];for(var a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o.holder_data){var i=o.holder_data,r=l(o,t.invisible_error_fn(u));if(r){if(i.fluid){if(i.auto)switch(i.fluid_data.mode){case"width":r.height=r.width/i.fluid_data.ratio;break;case"height":r.width=r.height*i.fluid_data.ratio}o.setAttribute("src",s({ctx:k,dimensions:r,template:i.theme,ratio:x,holder:i}))}i.textmode&&"exact"==i.textmode&&(i.exact_dimensions=r,o.setAttribute("src",s({ctx:k,dimensions:i.dimensions,template:i.theme,ratio:x,holder:i})))}}}}function d(e,n){for(var a={theme:m(C.themes.gray,{})},o=!1,i=e.length,s=0;i>s;s++){var r=e[s];t.flags.dimensions.match(r)?(o=!0,a.dimensions=t.flags.dimensions.output(r)):t.flags.fluid.match(r)?(o=!0,a.dimensions=t.flags.fluid.output(r),a.fluid=!0):t.flags.textmode.match(r)?a.textmode=t.flags.textmode.output(r):t.flags.colors.match(r)?a.theme=t.flags.colors.output(r):n.themes[r]?n.themes.hasOwnProperty(r)&&(a.theme=m(n.themes[r],{})):t.flags.font.match(r)?a.font=t.flags.font.output(r):t.flags.auto.match(r)?a.auto=!0:t.flags.text.match(r)&&(a.text=t.flags.text.output(r))}return o?a:!1}function h(t,e){var n="complete",a="readystatechange",o=!1,i=o,s=!0,r=t.document,l=r.documentElement,c=r.addEventListener?"addEventListener":"attachEvent",u=r.addEventListener?"removeEventListener":"detachEvent",d=r.addEventListener?"":"on",h=function(s){(s.type!=a||r.readyState==n)&&(("load"==s.type?t:r)[u](d+s.type,h,o),!i&&(i=!0)&&e.call(t,null))},f=function(){try{l.doScroll("left")}catch(t){return void setTimeout(f,50)}h("poll")};if(r.readyState==n)e.call(t,"lazy");else{if(r.createEventObject&&l.doScroll){try{s=!t.frameElement}catch(p){}s&&f()}r[c](d+"DOMContentLoaded",h,o),r[c](d+a,h,o),t[c](d+"load",h,o)}}function f(t,e){var t=t.match(/^(\W)?(.*)/),e=e||document,n=e["getElement"+(t[1]?"#"==t[1]?"ById":"sByClassName":"sByTagName")],a=n.call(e,t[2]),o=[];return null!==a&&(o=a.length||0===a.length?a:[a]),o}function m(t,e){var n={};for(var a in t)t.hasOwnProperty(a)&&(n[a]=t[a]);for(var a in e)e.hasOwnProperty(a)&&(n[a]=e[a]);return n}var g={use_svg:!1,use_canvas:!1,use_fallback:!1},v={},y=!1;canvas=document.createElement("canvas");var b=1,w=1,_=[];if(canvas.getContext)if(canvas.toDataURL("image/png").indexOf("data:image/png")<0)g.use_fallback=!0;else var k=canvas.getContext("2d");else g.use_fallback=!0;document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(g.use_svg=!0,g.use_canvas=!1),g.use_fallback||(b=window.devicePixelRatio||1,w=k.webkitBackingStorePixelRatio||k.mozBackingStorePixelRatio||k.msBackingStorePixelRatio||k.oBackingStorePixelRatio||k.backingStorePixelRatio||1);var x=b/w,C={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12},sky:{background:"#0D8FDB",foreground:"#fff",size:12},vine:{background:"#39DBAC",foreground:"#1E292C",size:12},lava:{background:"#F8591A",foreground:"#1C2846",size:12}},stylesheet:""};t.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(t){var e=this.regex.exec(t);return{width:+e[1],height:+e[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(t){var e=this.regex.exec(t);return{width:e[1],height:e[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(t){var e=this.regex.exec(t);return{size:C.themes.gray.size,foreground:"#"+e[2],background:"#"+e[1]}}},text:{regex:/text\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},font:{regex:/font\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(t){return this.regex.exec(t)[1]}}};var D=function(){if(window.XMLSerializer){var t=new XMLSerializer,e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.webkitMatchesSelector&&n.setAttribute("xmlns","http://www.w3.org/2000/svg");var o=document.createElementNS(e,"rect"),i=document.createElementNS(e,"text"),s=document.createTextNode(null);return i.setAttribute("text-anchor","middle"),i.appendChild(s),n.appendChild(o),n.appendChild(i),function(e){return n.setAttribute("width",e.width),n.setAttribute("height",e.height),o.setAttribute("width",e.width),o.setAttribute("height",e.height),o.setAttribute("fill",e.template.background),i.setAttribute("x",e.width/2),i.setAttribute("y",e.height/2),s.nodeValue=e.text,i.setAttribute("style",a({fill:e.template.foreground,"font-weight":"bold","font-size":e.text_height+"px","font-family":e.font,"dominant-baseline":"central"})),t.serializeToString(n)}}}();for(var $ in t.flags)t.flags.hasOwnProperty($)&&(t.flags[$].match=function(t){return t.match(this.regex)});t.invisible_error_fn=function(){return function(t){if(t.hasAttribute("data-holder-invisible"))throw new Error("Holder: invisible placeholder")}},t.add_theme=function(e,n){return null!=e&&null!=n&&(C.themes[e]=n),t},t.add_image=function(e,n){var a=f(n);if(a.length)for(var o=0,i=a.length;i>o;o++){var s=document.createElement("img");s.setAttribute("data-src",e),a[o].appendChild(s)}return t},t.run=function(e){v=m({},g),y=!0;var n=m(C,e),a=[],o=[],i=[];for(null!=n.use_canvas&&n.use_canvas&&(v.use_canvas=!0,v.use_svg=!1),"string"==typeof n.images?o=f(n.images):window.NodeList&&n.images instanceof window.NodeList?o=n.images:window.Node&&n.images instanceof window.Node?o=[n.images]:window.HTMLCollection&&n.images instanceof window.HTMLCollection&&(o=n.images),"string"==typeof n.bgnodes?i=f(n.bgnodes):window.NodeList&&n.elements instanceof window.NodeList?i=n.bgnodes:window.Node&&n.bgnodes instanceof window.Node&&(i=[n.bgnodes]),u=0,c=o.length;c>u;u++)a.push(o[u]);var s=document.getElementById("holderjs-style");s||(s=document.createElement("style"),s.setAttribute("id","holderjs-style"),s.type="text/css",document.getElementsByTagName("head")[0].appendChild(s)),n.nocss||(s.styleSheet?s.styleSheet.cssText+=n.stylesheet:n.stylesheet.length&&s.appendChild(document.createTextNode(n.stylesheet)));for(var l=new RegExp(n.domain+'/(.*?)"?\\)'),c=i.length,u=0;c>u;u++){var h=window.getComputedStyle(i[u],null).getPropertyValue("background-image"),p=h.match(l),b=i[u].getAttribute("data-background-src");if(p){var w=d(p[1].split("/"),n);w&&r("background",i[u],w,h)}else if(null!=b){var w=d(b.substr(b.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);w&&r("background",i[u],w,h)}}for(c=a.length,u=0;c>u;u++){var _,k;k=_=h=null;try{k=a[u].getAttribute("src"),attr_datasrc=a[u].getAttribute("data-src")}catch(x){}if(null==attr_datasrc&&k&&k.indexOf(n.domain)>=0?h=k:attr_datasrc&&attr_datasrc.indexOf(n.domain)>=0&&(h=attr_datasrc),h){var w=d(h.substr(h.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);w&&(w.fluid?r("fluid",a[u],w,h):r("image",a[u],w,h))}}return t},h(e,function(){window.addEventListener?(window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)):window.attachEvent("onresize",u),y||t.run({}),"object"==typeof window.Turbolinks&&document.addEventListener("page:change",function(){t.run({})})}),"function"==typeof define&&define.amd&&define([],function(){return t}),function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var a,o,i=0,s=n,r="";e.charAt(0|i)||(s="=",i%1);r+=s.charAt(63&a>>8-8*(i%1))){if(o=e.charCodeAt(i+=.75),o>255)throw new t("'btoa' failed");a=a<<8|o}return r}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed");for(var a,o,i=0,s=0,r="";o=e.charAt(s++);~o&&(a=i%4?64*a+o:o,i++%4)?r+=String.fromCharCode(255&a>>(6&-2*i)):0)o=n.indexOf(o);return r})}(),document.getElementsByClassName||(document.getElementsByClassName=function(t){var e,n,a,o=document,i=[];if(o.querySelectorAll)return o.querySelectorAll("."+t);if(o.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+t+" ')]",e=o.evaluate(n,o,null,0,null);a=e.iterateNext();)i.push(a);else for(e=o.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+t+"(\\s|$)"),a=0;a<e.length;a++)n.test(e[a].className)&&i.push(e[a]);return i}),window.getComputedStyle||(window.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(t){var e=this.__proto__||this.constructor.prototype;return t in this&&(!(t in e)||e[t]!==this[t])})}(Holder,window),$("#search").keyup(function(){var t=$("#search").val(),e=new RegExp(t,"i"),n='<ul class="ls-search">';n+='<li class="ls-no-list-style"><h2 class="ls-title-2">Resultado da busca</h2></li>',$.getJSON("/locawebstyle/assets/javascripts/busca.json",function(t){console.log(this),$.each(t,function(t,a){(-1!=a.title.search(e)||-1!=a.path.search(e))&&(n+='<li class="ls-no-list-style"><a class="ls-display-block" href="/locawebstyle/'+a.path+'">'+a.title,n+="<p>"+a.description+"</p></a></li>")}),$("#results").html(n)})});var lsdocs=function(){"use strict";function t(){a(),o(),n(),e(),i()}function e(){$(".doc-test-themes").find("a").on("click",function(){var t=$(this).data("toggle-class");$("html").attr("class",$("html").attr("class").split(" ").map(function(t){return/ls-theme/.test(t)?"":t}).join(" ").replace(/  /g,"")).addClass(t)})}function n(){$(".doc-menu").on("click",function(){$(this).toggleClass("active")})}function a(){$("code.language-html").each(function(){var t=$(this).html();$(this).text(t),$(this).removeClass("language-html").addClass("language-markup")})}function o(){if($("html").hasClass("ls-screen-lg")||$("html").hasClass("ls-screen-md")){var t=$(".doc-sidebar-inner").width();$(".doc-sidebar-inner").height()<$(window).height()&&$(window).scroll(function(){var e=$(this).scrollTop();e+$(window).height()+40==$(document).height()+40&&$(".doc-sidebar-inner").css("margin-top","0px"),e>="391"?$(".doc-sidebar-inner").addClass("doc-affix").css("width",t):$(".doc-sidebar-inner").removeClass("doc-affix").removeAttr("style")})}}function i(){$("#doc-ux").length&&$(".doc-intro-content").append('<a href="#doc-ux" class="ls-tag doc-tag-ux">Informa\xe7\xf5es de utiliza\xe7\xe3o</a>')}return{init:t}}();$(window).load(function(){lsdocs.init(),cheet("\u2191 \u2191 \u2193 \u2193 \u2190 \u2192 \u2190 \u2192 b a",function(){$("html").addClass("ls-show-barbecue"),$(".doc-highlight").prepend('<video autoplay loop id="bgvid"><source src="http://tableless.com.br/coisas/porkbbq3.mp4" type="video/mp4"></video>')})}),!function(){function t(t){var e,n=t?t.keyCode:event.keyCode;if(!c[n]){c[n]=!0;for(e in s)s[e].keydown(n)}}function e(t){var e=t?t.keyCode:event.keyCode;c[e]=!1}function n(){var t;for(t in c)c[t]=!1}function a(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&(t["e"+e+n]=n,t[e+n]=function(){t["e"+e+n](window.event)},t.attachEvent("on"+e,t[e+n]))}var o,i,s={},r={backspace:8,tab:9,enter:13,"return":13,shift:16,"\u21e7":16,control:17,ctrl:17,"\u2303":17,alt:18,option:18,"\u2325":18,pause:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,L:37,"\u2190":37,up:38,U:38,"\u2191":38,right:39,R:39,"\u2192":39,down:40,D:40,"\u2193":40,insert:45,"delete":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,"\u2318":91,command:91,kp_0:96,kp_1:97,kp_2:98,kp_3:99,kp_4:100,kp_5:101,kp_6:102,kp_7:103,kp_8:104,kp_9:105,kp_multiply:106,kp_plus:107,kp_minus:109,kp_decimal:110,kp_divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,equal:187,"=":187,comma:188,",":188,minus:189,"-":189,period:190,".":190},l=function(){},c={};i=function(t,e,n,a){var o;for(this.str=t,this.next=e?e:l,this.fail=n?n:l,this.done=a?a:l,this.seq=t.split(" "),this.keys=[],o=0;o<this.seq.length;++o)this.keys.push(r[this.seq[o]]);this.idx=0},i.prototype.keydown=function(t){var e=this.idx;return t!==this.keys[e]?void(e>0&&(this.idx=0,this.fail(this.str),o.__fail(this.str))):(this.next(this.str,this.seq[e],e,this.seq),o.__next(this.str,this.seq[e],e,this.seq),void(++this.idx===this.keys.length&&(this.done(this.str),o.__done(this.str),this.idx=0)))},o=function(t,e){var n,a,o;"function"==typeof e?o=e:null!=e&&(n=e.next,a=e.fail,o=e.done),s[t]=new i(t,n,a,o)},o.disable=function(t){delete s[t]},a(window,"keydown",t),a(window,"keyup",e),a(window,"blur",n),a(window,"focus",n),o.__next=l,o.next=function(t){o.__next=null===t?l:t},o.__fail=l,o.fail=function(t){o.__fail=null===t?l:t},o.__done=l,o.done=function(t){o.__done=null===t?l:t},window.cheet=o,"undefined"!=typeof module&&(module.exports=o)}(),lsdocs.icones=function(){"use strict";function t(){e(),n()}function e(){var t='<form class="doc-search-icons"><input type="search" id="searchIcons" aria-label="Buscar \xedcone" placeholder="Buscar \xedcone"><p id="searchResultText"></p></form>';$(".list-icons").eq(0).before(t)}function n(){$("#searchIcons").on("keyup",function(){var t=$(this).val(),e=$("#searchResultText"),n=a.find('[class*="'+t+'"]');console.log(n),t.length>0?0===n.size()?(e.html("Nenhum \xedcone encontrado com o termo: <b>"+t+"</b>"),a.hide()):(a.hide(),n.parent(".list-icons li").show(),e.html("Encontrado(s) <b>"+n.size()+"</b> \xedcone(s)")):(a.show(),e.html("&nbsp;"))})}var a=$(".list-icons li");return{init:t}}(),$(window).load(function(){lsdocs.icones.init()}),window.tourGuiadoDoc={},tourGuiadoDoc=function(){"use strict";function t(){locastyle.guidedTour.init(e)}var e={id:"tourDemoDoc",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:"passo1",title:"O t\xedtulo do passo 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",placement:"bottom",arrowOffset:"center"},{target:"passo2",title:"T\xedtulo passo 2",content:"Este \xe9 o texto do passo 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",placement:"left",arrowOffset:"center"},{target:"demo-init",title:"T\xedtulo passo 3- Final",content:"Um textinho do passo 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",placement:"right",arrowOffset:"center"}]};return{init:t}}(),window.setTimeout(function(){tourGuiadoDoc.init()},1e3);