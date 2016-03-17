function formToHash(e){for(var t,n={},r=0,a=e.elements.length;a>r;r++)if(t=e.elements[r],""!=t.name&&!t.disabled)switch(t.tagName.toLowerCase()){case"fieldset":break;case"input":switch(t.type.toLowerCase()){case"radio":t.checked&&(n[t.name]=t.value);break;case"checkbox":t.checked&&(n[t.name]?n[t.name].push(t.value):n[t.name]=[t.value]);break;case"button":break;case"image":break;default:n[t.name]=t.value}break;case"select":if(t.multiple)for(var i=0,o=t.options.length;o>i;i++)t.options[i].selected&&(n[t.name]?n[t.name].push(t.options[i].value):n[t.name]=[t.options[i].value]);else n[t.name]=t.value;break;default:n[t.name]=t.value}return e=t=null,n}var Ajax=function(){function e(e,r){function a(){}var i=r.async!==!1,o=r.method||"GET",s=r.encode||"UTF-8",c=r.data||null,u=r.success||a,l=r.failure||a,f=r.before||a,o=o.toUpperCase();c&&"object"==typeof c&&(c=t(c)),"GET"==o&&c&&(e+=(-1==e.indexOf("?")?"?":"&")+c,c=null);var p=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return p.onreadystatechange=function(){n(p,u,l,f)},p.open(o,e,i),"POST"==o&&p.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset="+s),p.setRequestHeader("If-Modified-Since","0"),p.setRequestHeader("Cache-Control","no-cache"),p.send(c),p}function t(e){var t=[];for(var n in e){var r=e[n];if(r.constructor==Array)for(var a=0,i=r.length;i>a;a++)t.push(n+"[]="+encodeURIComponent(r[a]));else t.push(n+"="+encodeURIComponent(r))}return t.join("&")}function n(e,t,n,r){var a=e.readyState;if(4==a){var i=e.status;i>=200&&300>i?t(e):n(e)}else 3==a&&r(e)}return{request:e}}();!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.JsBridge=t()}(this,function(){var e=function(e){this.target=document.getElementById(e.target),this.responseCallback=e.responseCallback,this.url=e.url};return e.prototype.show=function(e){var t=this,n=t.responseCallback,r=JSON.parse(e);return r=r.userInfo?r.userInfo:r,1!=r.code?t.error():void n(r)},e.prototype.error=function(){var e=this,t=e.responseCallback;t({code:0})},e.prototype.send=function(e){function t(e){window.WebViewJavascriptBridge?e(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){e(WebViewJavascriptBridge)},!1)}var n=this,r=n.target,a=function(){Ajax.request(n.url,{method:"GET",success:function(e){n.show(e.responseText)},failure:function(){n.error()},before:function(e){}})};window.java&&window.java.send?r?r.addEventListener("touchend",function(){window.java.send(e)}):window.java.send(e):window.isIOS?t(function(t){t.init(function(e,t){n.show(e)}),r?r.addEventListener("touchend",function(){t.send(e,function(e){n.show(e)})}):t.send(e,function(e){n.show(e)})}):r?r.addEventListener("touchend",function(){a()}):a()},function(t){return t?new e(t):{}}}),!function(e){function t(){var t=o.getBoundingClientRect().width;t/n>540&&(t=540*n),e.rem=t/16,o.style.fontSize=e.rem+"px"}var n,r,a,i=e.document,o=i.documentElement,s=i.querySelector('meta[name="viewport"]'),c=i.querySelector('meta[name="flexible"]');if(s){var u=s.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);u&&(r=parseFloat(u[2]),n=parseInt(1/r))}else if(c){var u=c.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);u&&(n=parseFloat(u[2]),r=parseFloat((1/n).toFixed(2)))}if(!n&&!r){var l=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),n=e.devicePixelRatio;n=l?n>=3?3:n>=2?2:1:1,r=1/n}if(o.setAttribute("data-dpr",n),!s)if(s=i.createElement("meta"),s.setAttribute("name","viewport"),s.setAttribute("content","initial-scale="+r+", maximum-scale="+r+", minimum-scale="+r+", user-scalable=no minimal-ui"),o.firstElementChild)o.firstElementChild.appendChild(s);else{var f=i.createElement("div");f.appendChild(s),i.write(f.innerHTML)}e.dpr=n,e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(t,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(t,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*n+"px":i.addEventListener("DOMContentLoaded",function(){i.body.style.fontSize=12*n+"px"},!1),t()}(window),!function(){function e(e){return e.replace($,"").replace(b,",").replace(y,"").replace(x,"").replace(T,"").split(k)}function t(e){return"'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function n(n,r){function a(e){return p+=e.split(/\n/).length-1,l&&(e=e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),e&&(e=w[1]+t(e)+w[2]+"\n"),e}function i(t){var n=p;if(u?t=u(t,r):o&&(t=t.replace(/\n/g,function(){return p++,"$line="+p+";"})),0===t.indexOf("=")){var a=f&&!/^=[=#]/.test(t);if(t=t.replace(/^=[=#]?|[\s;]*$/g,""),a){var i=t.replace(/\s*\([^\)]+\)/,"");d[i]||/^(include|print)$/.test(i)||(t="$escape("+t+")")}else t="$string("+t+")";t=w[1]+t+w[2]}return o&&(t="$line="+n+";"+t),g(e(t),function(e){if(e&&!v[e]){var t;t="print"===e?b:"include"===e?y:d[e]?"$utils."+e:m[e]?"$helpers."+e:"$data."+e,x+=e+"="+t+",",v[e]=!0}}),t+"\n"}var o=r.debug,s=r.openTag,c=r.closeTag,u=r.parser,l=r.compress,f=r.escape,p=1,v={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},h="".trim,w=h?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],$=h?"$out+=text;return $out;":"$out.push(text);",b="function(){var text=''.concat.apply('',arguments);"+$+"}",y="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+$+"}",x="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(o?"$line=0,":""),T=w[0],k="return new String("+w[3]+");";g(n.split(s),function(e){e=e.split(c);var t=e[0],n=e[1];1===e.length?T+=a(t):(T+=i(t),n&&(T+=a(n)))});var E=x+T+k;o&&(E="try{"+E+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+t(n)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var j=new Function("$data","$filename",E);return j.prototype=d,j}catch(C){throw C.temp="function anonymous($data,$filename) {"+E+"}",C}}var r=function(e,t){return"string"==typeof t?h(t,{filename:e}):o(e,t)};r.version="3.0.0",r.config=function(e,t){a[e]=t};var a=r.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},i=r.cache={};r.render=function(e,t){return h(e,t)};var o=r.renderFile=function(e,t){var n=r.get(e)||v({filename:e,name:"Render Error",message:"Template not found"});return t?n(t):n};r.get=function(e){var t;if(i[e])t=i[e];else if("object"==typeof document){var n=document.getElementById(e);if(n){var r=(n.value||n.innerHTML).replace(/^\s*|\s*$/g,"");t=h(r,{filename:e})}}return t};var s=function(e,t){return"string"!=typeof e&&(t=typeof e,"number"===t?e+="":e="function"===t?s(e.call(e)):""),e},c={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},u=function(e){return c[e]},l=function(e){return s(e).replace(/&(?![\w#]+;)|[<>"']/g,u)},f=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},p=function(e,t){var n,r;if(f(e))for(n=0,r=e.length;r>n;n++)t.call(e,e[n],n,e);else for(n in e)t.call(e,e[n],n)},d=r.utils={$helpers:{},$include:o,$string:s,$escape:l,$each:p};r.helper=function(e,t){m[e]=t};var m=r.helpers=d.$helpers;r.onerror=function(e){var t="Template Error\n\n";for(var n in e)t+="<"+n+">\n"+e[n]+"\n\n";"object"==typeof console&&console.error(t)};var v=function(e){return r.onerror(e),function(){return"{Template Error}"}},h=r.compile=function(e,t){function r(n){try{return new c(n,s)+""}catch(r){return t.debug?v(r)():(t.debug=!0,h(e,t)(n))}}t=t||{};for(var o in a)void 0===t[o]&&(t[o]=a[o]);var s=t.filename;try{var c=n(e,t)}catch(u){return u.filename=s||"anonymous",u.name="Syntax Error",v(u)}return r.prototype=c.prototype,r.toString=function(){return c.toString()},s&&t.cache&&(i[s]=r),r},g=d.$each,w="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",$=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,b=/[^\w$]+/g,y=new RegExp(["\\b"+w.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),x=/^\d[^,]*|,\d[^,]*/g,T=/^,+|,+$/g,k=/^$|,+/;a.openTag="{{",a.closeTag="}}";var E=function(e,t){var n=t.split(":"),r=n.shift(),a=n.join(":")||"";return a&&(a=", "+a),"$helpers."+r+"("+e+a+")"};a.parser=function(e){e=e.replace(/^\s/,"");var t=e.split(" "),n=t.shift(),a=t.join(" ");switch(n){case"if":e="if("+a+"){";break;case"else":t="if"===t.shift()?" if("+t.join(" ")+")":"",e="}else"+t+"{";break;case"/if":e="}";break;case"each":var i=t[0]||"$data",o=t[1]||"as",s=t[2]||"$value",c=t[3]||"$index",u=s+","+c;"as"!==o&&(i="[]"),e="$each("+i+",function("+u+"){";break;case"/each":e="});";break;case"echo":e="print("+a+");";break;case"print":case"include":e=n+"("+t.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(a)){var l=!0;0===e.indexOf("#")&&(e=e.substr(1),l=!1);for(var f=0,p=e.split("|"),d=p.length,m=p[f++];d>f;f++)m=E(m,p[f]);e=(l?"=":"=#")+m}else e=r.helpers[n]?"=#"+n+"("+t.join(",")+");":"="+e}return e},"function"==typeof define?define(function(){return r}):"undefined"!=typeof exports?module.exports=r:this.template=r}();