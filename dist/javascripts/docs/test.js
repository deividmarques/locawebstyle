var stressTest=function(){function t(t,e){b.call(y(e),function(n){try{var a=n.replace(/\-([a-z])/gi,function(t,e){return e.toUpperCase()}),s=e[n];t.style[a]="number"==typeof s&&"zIndex"!=a?s+"px":s}catch(i){}})}function e(t){var e=t.all||n(document),a={};return b.call(e,function(t){t.className&&!t.toString().match(/svg/i)?b.call(w.call(t.className.split(v),function(t){return t.length>0}),function(e){a["."+e]||(a["."+e]=[]),a["."+e].push(t)}):t.id&&(a["#"+t.id]||(a["#"+t.id]=[]),a["#"+t.id].push(t))}),a}function n(t,e){if(e||(e="*"),"undefined"!=typeof t.length){var a=[];return b.call(t,function(t){b.call(n(t,e),function(t){a.push(t)})}),a}var s=e.split(" ");if(s.length>1){var a=[];return b.call(s,function(e){b.call(n(t,e),function(t){a.push(t)})}),a}return t.all&&"*"==e?t.all:t.getElementsByTagName(e)}function a(t,e,n){var a=e.split("."),s=t.attachEvent?function(){n.call(t,window.event)}:n;t.__events||(t.__events={}),t.__events[e]||(t.__events[e]=[]),t.__events[e].push(s),t.attachEvent?t.attachEvent("on"+a[0],s):t.addEventListener&&t.addEventListener(a[0],s,!0)}function s(t,e,n){if(!n&&t.__events&&t.__events[e]){var a=[],i=t.__events[e];a.push.apply(a,i),i.slice(i.length),b.call(a,function(n){s(t,e,n)})}else{var o=e.split(".");if(t.detachEvent?t.detachEvent("on"+o[0],n):t.removeEventListener&&t.removeEventListener(o[0],n,!0),t.__events&&t.__events[e]){var r=_.call(t.__events[e],n);r>-1&&t.__events[e].splice(r,1)}}t=null}function i(t,e){b.call(t,function(t){t&&(t.className=o(w.call((t.className||"").split(v),function(t){return t!=e})).join(" "))})}function o(t){var e={};return b.call(t,function(t){e[t]=!0}),y(e)}function r(t,e){b.call(t,function(t){if(t){var n=(t.className||"").split(" ");n.push(e),t.className=o(n).join(" ")}})}function l(t,e){var n=e.substr(0,1);e=e.substr(1),"."===n?i(t,e):"#"===n&&b.call(t,function(t){t.attributes.removeNamedItem("id")})}function c(t,e){var n=e.substr(0,1);e=e.substr(1),"."===n?r(t,e):"#"===n&&b.call(t,function(t){t.id=e})}function u(t,e,a){var s=e.elms[t]||[];l(s,t),e.beforeTest&&e.beforeTest({elms:s,selector:t}),d(e,e.times,function(i){c(s,t),t==m?e.baseTime=i:(e.results[t]={length:s.length,children:n(s).length,time:i,delta:i-e.baseTime},e.afterTest&&e.afterTest({elms:s,selector:t,result:e.results[t]})),a(t,i)})}function d(t,e,n){var i=+new Date,o=!1,r=t.work||function(){o=!1,window.scrollTo(0,e%2===0?100:0)};e*=2,a(window,"scroll.stressTest",function(){o||(o=!0,--e>0&&!t.cancel?setTimeout(r,0):setTimeout(function(){s(window,"scroll.stressTest"),n(+new Date-i)},0))}),r()}function h(t,e,n){return e=e||{},b.call(y(t),function(a){(n||!e.hasOwnProperty(a))&&(e[a]=t[a])}),e}function f(t){t=h({times:0,beforeTest:null,afterTest:null,elms:e(t.all),results:{},finish:null},t),window.scrollTo(0,0);var n=t.queue=y(t.elms),i=function(e,a){n.length>0&&!t.cancel?u(n.shift(),t,i):(s(document,"keydown.stressTest"),t.finish&&t.finish())};a(document,"keydown.stressTest",function(e){27==e.keyCode&&(t.cancel=!0)}),t.times=15,u(m,t,function(e,n){t.times=Math.round(45/n*750),u(m,t,i)})}function p(t,e,n){e=e||0,n=n||2;for(var a=(t+".").split(".");a[0].length<e;)a[0]="0"+a[0];if(1>n)a[1]="";else if(a[1].length>n)a[1]=a[1].substr(0,n);else for(;a[1].length<n;)a[1]+="0";return a[0]+(a[1].length>0?"."+a[1]:"")}function g(e,a){var s="<table><thead><tr><th>Selector</th><th># Elms.</th><th># Child.</th><th> </th><th>Delta</th><th>Total</th></tr></thead>",i=y(e.results),o=i.sort(function(t,n){return e.results[t].time-e.results[n].time}).slice(0,20);b.call(o,function(t){s+='<tr><td>Removing <strong style="font:12px monospace">'+t+'</strong></td><td style="text-align:right; font:12px monospace">'+e.results[t].length+'</td><td style="text-align:right; font:12px monospace">'+e.results[t].children+'</td><td style="text-align:right">'+(e.results[t].delta<0?'<span style="color:red">saves</span>':'<span style="color:green">adds</span>')+'</td><td style="text-align:right; font:12px monospace">'+p(Math.abs(e.results[t].delta)/e.times)+'ms</td><td style="text-align:right; font:12px monospace">'+p(e.results[t].time/e.times)+"ms</td></tr>\n"}),s+='</table><hr/><table><tr><td style="text-align:right">Selectors Tested:</td><td style="font:12px monospace">'+i.length+'</td></tr><tr><td style="text-align:right">Baseline Time:</td><td style="font:12px monospace">'+p(e.baseTime/e.times)+'ms</td></tr><tr><td style="text-align:right">Num. Tests:</td><td style="font:12px monospace">'+e.times+"</td></tr>",w.call(i,function(t){return e.results[t].time<=15}).length&&(s+='<tr><td style="color:red; text-align:right;font-weight:bold">Warning:</td><td>Increase the number<br />of tests to get more<br />accurate results</td></tr>'),a.innerHTML=s+"</table>",b.call(n(a,"td th"),function(e){t(e,{padding:1,verticalAlign:"top",whiteSpace:"nowrap",fontSize:12})})}var m="LocawebStyle",v=/\s+/,y=Object.keys||function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e},b=Array.prototype.forEach||function(t){for(var e=0,n=this.length;n>e;e++)t.call(this,this[e],e,this)},w=Array.prototype.filter||function(t){var e=[];return b.call(this,function(n){t(n)&&e.push(n)}),e},_=Array.prototype.indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]===t)return e;return-1};return f.bind=a,f.unbind=s,f.bookmarklet=function(){f.report&&f.report.close();var e=document.createElement("iframe"),i=document.createElement("iframe");h({scrolling:"no",frameBorder:"no"},e,!0),document.body.appendChild(e),e.doc=e.contentDocument||e.contentWindow.document,e.doc.write("<html><head></head><body></body></html>"),e.doc.close();var o=e.doc.createElement("div"),r=e.doc.createElement("a"),l={finish:function(){this.cancel?e.close():g(this,o)},beforeTest:function(t){var e=this.queue.length;o.innerHTML="Testing <strong>"+t.selector+"</strong><br/>"+e+" test"+(1===e?"":"s")+" remain"},all:n(document)};e.resize=function(){var n=e.doc.body;t(e,{width:n.scrollWidth,height:n.scrollHeight})},setInterval(e.resize,100);var c=0;b.call(l.all,function(t){var e=parseInt(t.style.zIndex,10);!isNaN(e)&&e>c&&(c=e)}),c+=99999,t(e,{position:"fixed",top:"30%",right:10,zIndex:c,background:"white",padding:2,border:"solid 2px #aaa",width:200,height:40,borderRadius:4,boxShadow:"0 0 8px #eee"}),t(e.doc.body,{font:"12px Helvetica,Arials,sans-serif",color:"#444"}),t(o,{whiteSpace:"nowrap"}),r.innerHTML="&#215;",t(r,{position:"absolute",top:0,right:0,textDecoration:"none",fontWeight:"bold",cursor:"pointer",color:"red",fontSize:"1.3em",lineHeight:8}),e.close=function(){e.parentNode.removeChild(e),i.parentNode.removeChild(i),s(r,"click"),f.report=null,l.cancel=!0},a(r,"click",e.close),t(i,{height:2*window.screen.height,width:window.screen.width,position:"absolute",top:0,left:0,visible:"hidden",zIndex:c-1}),document.body.appendChild(i),e.doc.body.appendChild(r),e.doc.body.appendChild(o),f.report=e,f(l)},f}();