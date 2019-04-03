/*!
 * Sofrito v0.0.1
 * A savoury front-end base with advanced typographic, layout, performance and build ingredients.
 * (c) 2019 Laurence Hughes
 * MIT License
 * https://github.com/fuzzylogicxx/sofrito
 */

/*!
 * Cookie Consent by https://cookieconsent.insites.com/
 * v 3.1.0
*/

!(function(e){if(!e.hasInitialised){var t={escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(e,t){var i=" ";return 1===e.nodeType&&(i+e.className+i).replace(/[\n\t]/g,i).indexOf(i+t+i)>=0},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var i=new RegExp("\\b"+this.escapeRegExp(t)+"\\b");e.className=e.className.replace(i,"")},interpolateString:function(e,t){var i=/{{([a-z][a-z0-9\-_]*)}}/gi;return e.replace(i,(function(e){return t(arguments[1])||""}))},getCookie:function(e){var t="; "+document.cookie,i=t.split("; "+e+"=");return i.length<2?void 0:i.pop().split(";").shift()},setCookie:function(e,t,i,n,o,s){var r=new Date;r.setDate(r.getDate()+(i||365));var a=[e+"="+t,"expires="+r.toUTCString(),"path="+(o||"/")];n&&a.push("domain="+n),s&&a.push("secure"),document.cookie=a.join(";")},deepExtend:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(i in e&&this.isPlainObject(e[i])&&this.isPlainObject(t[i])?this.deepExtend(e[i],t[i]):e[i]=t[i]);return e},throttle:function(e,t){var i=!1;return function(){i||(e.apply(this,arguments),i=!0,setTimeout((function(){i=!1}),t))}},hash:function(e){var t,i,n,o=0;if(0===e.length)return o;for(t=0,n=e.length;t<n;++t)i=e.charCodeAt(t),o=(o<<5)-o+i,o|=0;return o},normaliseHex:function(e){return"#"==e[0]&&(e=e.substr(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e},getContrast:function(e){e=this.normaliseHex(e);var t=parseInt(e.substr(0,2),16),i=parseInt(e.substr(2,2),16),n=parseInt(e.substr(4,2),16),o=(299*t+587*i+114*n)/1e3;return o>=128?"#000":"#fff"},getLuminance:function(e){var t=parseInt(this.normaliseHex(e),16),i=38,n=(t>>16)+i,o=(t>>8&255)+i,s=(255&t)+i,r=(16777216+65536*(n<255?n<1?0:n:255)+256*(o<255?o<1?0:o:255)+(s<255?s<1?0:s:255)).toString(16).slice(1);return"#"+r},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(e){return"object"==typeof e&&null!==e&&e.constructor==Object},traverseDOMPath:function(e,i){return e&&e.parentNode?t.hasClass(e,i)?e:this.traverseDOMPath(e.parentNode,i):null}};e.status={deny:"deny",allow:"allow",dismiss:"dismiss"},e.transitionEnd=(function(){var e=document.createElement("div"),t={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var i in t)if(t.hasOwnProperty(i)&&"undefined"!=typeof e.style[i+"ransition"])return t[i];return""})(),e.hasTransition=!!e.transitionEnd;var i=Object.keys(e.status).map(t.escapeRegExp);e.customStyles={},e.Popup=(function(){function n(){this.initialise.apply(this,arguments)}function o(e){this.openingTimeout=null,t.removeClass(e,"cc-invisible")}function s(t){t.style.display="none",t.removeEventListener(e.transitionEnd,this.afterTransition),this.afterTransition=null}function r(){var t=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return t(e.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return t(e.status.allow),!0;var i=Object.keys(e.status),n=this.getStatus(),o=i.indexOf(n)>=0;return o&&t(n),o}function a(){var e=this.options.position.split("-"),t=[];return e.forEach((function(e){t.push("cc-"+e)})),t}function c(){var e=this.options,i="top"==e.position||"bottom"==e.position?"banner":"floating";t.isMobile()&&(i="floating");var n=["cc-"+i,"cc-type-"+e.type,"cc-theme-"+e.theme];e["static"]&&n.push("cc-static"),n.push.apply(n,a.call(this));p.call(this,this.options.palette);return this.customStyleSelector&&n.push(this.customStyleSelector),n}function l(){var e={},i=this.options;i.showLink||(i.elements.link="",i.elements.messagelink=i.elements.message),Object.keys(i.elements).forEach((function(n){e[n]=t.interpolateString(i.elements[n],(function(e){var t=i.content[e];return e&&"string"==typeof t&&t.length?t:""}))}));var n=i.compliance[i.type];n||(n=i.compliance.info),e.compliance=t.interpolateString(n,(function(t){return e[t]}));var o=i.layouts[i.layout];return o||(o=i.layouts.basic),t.interpolateString(o,(function(t){return e[t]}))}function u(i){var n=this.options,o=document.createElement("div"),s=n.container&&1===n.container.nodeType?n.container:document.body;o.innerHTML=i;var r=o.children[0];return r.style.display="none",t.hasClass(r,"cc-window")&&e.hasTransition&&t.addClass(r,"cc-invisible"),this.onButtonClick=h.bind(this),r.addEventListener("click",this.onButtonClick),n.autoAttach&&(s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r)),r}function h(n){var o=t.traverseDOMPath(n.target,"cc-btn")||n.target;if(t.hasClass(o,"cc-btn")){var s=o.className.match(new RegExp("\\bcc-("+i.join("|")+")\\b")),r=s&&s[1]||!1;r&&(this.setStatus(r),this.close(!0))}t.hasClass(o,"cc-close")&&(this.setStatus(e.status.dismiss),this.close(!0)),t.hasClass(o,"cc-revoke")&&this.revokeChoice()}function p(e){var i=t.hash(JSON.stringify(e)),n="cc-color-override-"+i,o=t.isPlainObject(e);return this.customStyleSelector=o?n:null,o&&d(i,e,"."+n),o}function d(i,n,o){if(e.customStyles[i])return void++e.customStyles[i].references;var s={},r=n.popup,a=n.button,c=n.highlight;r&&(r.text=r.text?r.text:t.getContrast(r.background),r.link=r.link?r.link:r.text,s[o+".cc-window"]=["color: "+r.text,"background-color: "+r.background],s[o+".cc-revoke"]=["color: "+r.text,"background-color: "+r.background],s[o+" .cc-link,"+o+" .cc-link:active,"+o+" .cc-link:visited"]=["color: "+r.link],a&&(a.text=a.text?a.text:t.getContrast(a.background),a.border=a.border?a.border:"transparent",s[o+" .cc-btn"]=["color: "+a.text,"border-color: "+a.border,"background-color: "+a.background],a.padding&&s[o+" .cc-btn"].push("padding: "+a.padding),"transparent"!=a.background&&(s[o+" .cc-btn:hover, "+o+" .cc-btn:focus"]=["background-color: "+(a.hover||v(a.background))]),c?(c.text=c.text?c.text:t.getContrast(c.background),c.border=c.border?c.border:"transparent",s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background]):s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+r.text]));var l=document.createElement("style");document.head.appendChild(l),e.customStyles[i]={references:1,element:l.sheet};var u=-1;for(var h in s)s.hasOwnProperty(h)&&l.sheet.insertRule(h+"{"+s[h].join(";")+"}",++u)}function v(e){return e=t.normaliseHex(e),"000000"==e?"#222":t.getLuminance(e)}function f(i){if(t.isPlainObject(i)){var n=t.hash(JSON.stringify(i)),o=e.customStyles[n];if(o&&!--o.references){var s=o.element.ownerNode;s&&s.parentNode&&s.parentNode.removeChild(s),e.customStyles[n]=null}}}function m(e,t){for(var i=0,n=e.length;i<n;++i){var o=e[i];if(o instanceof RegExp&&o.test(t)||"string"==typeof o&&o.length&&o===t)return!0}return!1}function b(){var i=this.setStatus.bind(this),n=this.close.bind(this),o=this.options.dismissOnTimeout;"number"==typeof o&&o>=0&&(this.dismissTimeout=window.setTimeout((function(){i(e.status.dismiss),n(!0)}),Math.floor(o)));var s=this.options.dismissOnScroll;if("number"==typeof s&&s>=0){var r=function(t){window.pageYOffset>Math.floor(s)&&(i(e.status.dismiss),n(!0),window.removeEventListener("scroll",r),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=r,window.addEventListener("scroll",r))}var a=this.options.dismissOnWindowClick,c=this.options.ignoreClicksFrom;if(a){var l=function(o){for(var s=!1,r=o.path.length,a=c.length,u=0;u<r;u++)if(!s)for(var h=0;h<a;h++)s||(s=t.hasClass(o.path[u],c[h]));s||(i(e.status.dismiss),n(!0),window.removeEventListener("click",l),this.onWindowClick=null)}.bind(this);this.options.enabled&&(this.onWindowClick=l,window.addEventListener("click",l))}}function g(){if("info"!=this.options.type&&(this.options.revokable=!0),t.isMobile()&&(this.options.animateRevokable=!1),this.options.revokable){var e=a.call(this);this.options.animateRevokable&&e.push("cc-animate"),this.customStyleSelector&&e.push(this.customStyleSelector);var i=this.options.revokeBtn.replace("{{classes}}",e.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=u.call(this,i);var n=this.revokeBtn;if(this.options.animateRevokable){var o=t.throttle((function(e){var i=!1,o=20,s=window.innerHeight-20;t.hasClass(n,"cc-top")&&e.clientY<o&&(i=!0),t.hasClass(n,"cc-bottom")&&e.clientY>s&&(i=!0),i?t.hasClass(n,"cc-active")||t.addClass(n,"cc-active"):t.hasClass(n,"cc-active")&&t.removeClass(n,"cc-active")}),200);this.onMouseMove=o,window.addEventListener("mousemove",o)}}}var y={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(e){},onStatusChange:function(e,t){},onRevokeChoice:function(){},onNoCookieLaw:function(e,t){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block","static":!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};return n.prototype.initialise=function(e){this.options&&this.destroy(),t.deepExtend(this.options={},y),t.isPlainObject(e)&&t.deepExtend(this.options,e),r.call(this)&&(this.options.enabled=!1),m(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),m(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var i=this.options.window.replace("{{classes}}",c.call(this).join(" ")).replace("{{children}}",l.call(this)),n=this.options.overrideHTML;if("string"==typeof n&&n.length&&(i=n),this.options["static"]){var o=u.call(this,'<div class="cc-grower">'+i+"</div>");o.style.display="",this.element=o.firstChild,this.element.style.display="none",t.addClass(this.element,"cc-invisible")}else this.element=u.call(this,i);b.call(this),g.call(this),this.options.autoOpen&&this.autoOpen()},n.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,f(this.options.palette),this.options=null},n.prototype.open=function(t){if(this.element)return this.isOpen()||(e.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},n.prototype.close=function(t){if(this.element)return this.isOpen()&&(e.hasTransition?this.fadeOut():this.element.style.display="none",t&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},n.prototype.fadeIn=function(){var i=this.element;if(e.hasTransition&&i&&(this.afterTransition&&s.call(this,i),t.hasClass(i,"cc-invisible"))){if(i.style.display="",this.options["static"]){var n=this.element.clientHeight;this.element.parentNode.style.maxHeight=n+"px"}var r=20;this.openingTimeout=setTimeout(o.bind(this,i),r)}},n.prototype.fadeOut=function(){var i=this.element;e.hasTransition&&i&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),o.bind(this,i)),t.hasClass(i,"cc-invisible")||(this.options["static"]&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=s.bind(this,i),i.addEventListener(e.transitionEnd,this.afterTransition),t.addClass(i,"cc-invisible")))},n.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!e.hasTransition||!t.hasClass(this.element,"cc-invisible"))},n.prototype.toggleRevokeButton=function(e){this.revokeBtn&&(this.revokeBtn.style.display=e?"":"none")},n.prototype.revokeChoice=function(e){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),e||this.autoOpen()},n.prototype.hasAnswered=function(t){return Object.keys(e.status).indexOf(this.getStatus())>=0},n.prototype.hasConsented=function(t){var i=this.getStatus();return i==e.status.allow||i==e.status.dismiss},n.prototype.autoOpen=function(e){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},n.prototype.setStatus=function(i){var n=this.options.cookie,o=t.getCookie(n.name),s=Object.keys(e.status).indexOf(o)>=0;Object.keys(e.status).indexOf(i)>=0?(t.setCookie(n.name,i,n.expiryDays,n.domain,n.path,n.secure),this.options.onStatusChange.call(this,i,s)):this.clearStatus()},n.prototype.getStatus=function(){return t.getCookie(this.options.cookie.name)},n.prototype.clearStatus=function(){var e=this.options.cookie;t.setCookie(e.name,"",-1,e.domain,e.path)},n})(),e.Location=(function(){function e(e){t.deepExtend(this.options={},s),t.isPlainObject(e)&&t.deepExtend(this.options,e),this.currentServiceIndex=-1}function i(e,t,i){var n,o=document.createElement("script");o.type="text/"+(e.type||"javascript"),o.src=e.src||e,o.async=!1,o.onreadystatechange=o.onload=function(){var e=o.readyState;clearTimeout(n),t.done||e&&!/loaded|complete/.test(e)||(t.done=!0,t(),o.onreadystatechange=o.onload=null)},document.body.appendChild(o),n=setTimeout((function(){t.done=!0,t(),o.onreadystatechange=o.onload=null}),i)}function n(e,t,i,n,o){var s=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(s.open(n?"POST":"GET",e,1),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(o))for(var r=0,a=o.length;r<a;++r){var c=o[r].split(":",2);s.setRequestHeader(c[0].replace(/^\s+|\s+$/g,""),c[1].replace(/^\s+|\s+$/g,""))}"function"==typeof t&&(s.onreadystatechange=function(){s.readyState>3&&t(s)}),s.send(n)}function o(e){return new Error("Error ["+(e.code||"UNKNOWN")+"]: "+e.error)}var s={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(e,t){try{var i=JSON.parse(t);return i.error?o(i):{code:i.country}}catch(n){return o({error:"Invalid response ("+n+")"})}}}},ipinfodb:function(e){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(e,t){try{var i=JSON.parse(t);return"ERROR"==i.statusCode?o({error:i.statusMessage}):{code:i.countryCode}}catch(n){return o({error:"Invalid response ("+n+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(e){return window.geoip2?void geoip2.country((function(t){try{e({code:t.country.iso_code})}catch(i){e(o(i))}}),(function(t){e(o(t))})):void e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};return e.prototype.getNextService=function(){var e;do e=this.getServiceByIdx(++this.currentServiceIndex);while(this.currentServiceIndex<this.options.services.length&&!e);return e},e.prototype.getServiceByIdx=function(e){var i=this.options.services[e];if("function"==typeof i){var n=i();return n.name&&t.deepExtend(n,this.options.serviceDefinitions[n.name](n)),n}return"string"==typeof i?this.options.serviceDefinitions[i]():t.isPlainObject(i)?this.options.serviceDefinitions[i.name](i):null},e.prototype.locate=function(e,t){var i=this.getNextService();return i?(this.callbackComplete=e,this.callbackError=t,void this.runService(i,this.runNextServiceOnError.bind(this))):void t(new Error("No services to run"))},e.prototype.setupUrl=function(e){var t=this.getCurrentServiceOpts();return e.url.replace(/\{(.*?)\}/g,(function(i,n){if("callback"===n){var o="callback"+Date.now();return window[o]=function(t){e.__JSONP_DATA=JSON.stringify(t)},o}if(n in t.interpolateUrl)return t.interpolateUrl[n]}))},e.prototype.runService=function(e,t){var o=this;if(e&&e.url&&e.callback){var s=e.isScript?i:n,r=this.setupUrl(e);s(r,(function(i){var n=i?i.responseText:"";e.__JSONP_DATA&&(n=e.__JSONP_DATA,delete e.__JSONP_DATA),o.runServiceCallback.call(o,t,e,n)}),this.options.timeout,e.data,e.headers)}},e.prototype.runServiceCallback=function(e,t,i){var n=this,o=function(t){s||n.onServiceResult.call(n,e,t)},s=t.callback(o,i);s&&this.onServiceResult.call(this,e,s)},e.prototype.onServiceResult=function(e,t){t instanceof Error||t&&t.error?e.call(this,t,null):e.call(this,null,t)},e.prototype.runNextServiceOnError=function(e,t){if(e){this.logError(e);var i=this.getNextService();i?this.runService(i,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,t)},e.prototype.getCurrentServiceOpts=function(){var e=this.options.services[this.currentServiceIndex];return"string"==typeof e?{name:e}:"function"==typeof e?e():t.isPlainObject(e)?e:{}},e.prototype.completeService=function(e,t){this.currentServiceIndex=-1,e&&e(t)},e.prototype.logError=function(e){var t=this.currentServiceIndex,i=this.getServiceByIdx(t);console.warn("The service["+t+"] ("+i.url+") responded with the following error",e)},e})(),e.Law=(function(){function e(e){this.initialise.apply(this,arguments)}var i={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};return e.prototype.initialise=function(e){t.deepExtend(this.options={},i),t.isPlainObject(e)&&t.deepExtend(this.options,e)},e.prototype.get=function(e){var t=this.options;return{hasLaw:t.hasLaw.indexOf(e)>=0,revokable:t.revokable.indexOf(e)>=0,explicitAction:t.explicitAction.indexOf(e)>=0}},e.prototype.applyLaw=function(e,t){var i=this.get(t);return i.hasLaw||(e.enabled=!1,"function"==typeof e.onNoCookieLaw&&e.onNoCookieLaw(t,i)),this.options.regionalLaw&&(i.revokable&&(e.revokable=!0),i.explicitAction&&(e.dismissOnScroll=!1,e.dismissOnTimeout=!1)),e},e})(),e.initialise=function(i,n,o){var s=new e.Law(i.law);n||(n=function(){}),o||(o=function(){});var r=Object.keys(e.status),a=t.getCookie("cookieconsent_status"),c=r.indexOf(a)>=0;return c?void n(new e.Popup(i)):void e.getCountryCode(i,(function(t){delete i.law,delete i.location,t.code&&(i=s.applyLaw(i,t.code)),n(new e.Popup(i))}),(function(t){delete i.law,delete i.location,o(t,new e.Popup(i))}))},e.getCountryCode=function(t,i,n){if(t.law&&t.law.countryCode)return void i({code:t.law.countryCode});if(t.location){var o=new e.Location(t.location);return void o.locate((function(e){i(e||{})}),n)}i({})},e.utils=t,e.hasInitialised=!0,window.cookieconsent=e}})(window.cookieconsent||{});

/*
Details Element Polyfill 2.3.1
Copyright © 2019 Javan Makhmali
*/

(function() {
  "use strict";
  var element = document.createElement("details");
  element.innerHTML = "<summary>a</summary>b";
  element.setAttribute("style", "position: absolute; left: -9999px");
  var support = {
    open: "open" in element && elementExpands(),
    toggle: "ontoggle" in element
  };
  function elementExpands() {
    (document.body || document.documentElement).appendChild(element);
    var closedHeight = element.offsetHeight;
    element.open = true;
    var openedHeight = element.offsetHeight;
    element.parentNode.removeChild(element);
    return closedHeight != openedHeight;
  }
  var styles = '\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "►";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "▼";\n}\n';
  var _ref = [], forEach = _ref.forEach, slice = _ref.slice;
  if (!support.open) {
    polyfillStyles();
    polyfillProperties();
    polyfillToggle();
    polyfillAccessibility();
  }
  if (support.open && !support.toggle) {
    polyfillToggleEvent();
  }
  function polyfillStyles() {
    document.head.insertAdjacentHTML("afterbegin", "<style>" + styles + "</style>");
  }
  function polyfillProperties() {
    var prototype = document.createElement("details").constructor.prototype;
    var setAttribute = prototype.setAttribute, removeAttribute = prototype.removeAttribute;
    var open = Object.getOwnPropertyDescriptor(prototype, "open");
    Object.defineProperties(prototype, {
      open: {
        get: function get() {
          if (this.tagName == "DETAILS") {
            return this.hasAttribute("open");
          } else {
            if (open && open.get) {
              return open.get.call(this);
            }
          }
        },
        set: function set(value) {
          if (this.tagName == "DETAILS") {
            return value ? this.setAttribute("open", "") : this.removeAttribute("open");
          } else {
            if (open && open.set) {
              return open.set.call(this, value);
            }
          }
        }
      },
      setAttribute: {
        value: function value(name, _value) {
          var _this = this;
          var call = function call() {
            return setAttribute.call(_this, name, _value);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (!wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", true);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      },
      removeAttribute: {
        value: function value(name) {
          var _this2 = this;
          var call = function call() {
            return removeAttribute.call(_this2, name);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", false);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      }
    });
  }
  function polyfillToggle() {
    onTogglingTrigger((function(element) {
      element.hasAttribute("open") ? element.removeAttribute("open") : element.setAttribute("open", "");
    }));
  }
  function polyfillToggleEvent() {
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, (function(mutation) {
          var target = mutation.target, attributeName = mutation.attributeName;
          if (target.tagName == "DETAILS" && attributeName == "open") {
            triggerToggle(target);
          }
        }));
      }).observe(document.documentElement, {
        attributes: true,
        subtree: true
      });
    } else {
      onTogglingTrigger((function(element) {
        var wasOpen = element.getAttribute("open");
        setTimeout((function() {
          var isOpen = element.getAttribute("open");
          if (wasOpen != isOpen) {
            triggerToggle(element);
          }
        }), 1);
      }));
    }
  }
  function polyfillAccessibility() {
    setAccessibilityAttributes(document);
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, (function(mutation) {
          forEach.call(mutation.addedNodes, setAccessibilityAttributes);
        }));
      }).observe(document.documentElement, {
        subtree: true,
        childList: true
      });
    } else {
      document.addEventListener("DOMNodeInserted", (function(event) {
        setAccessibilityAttributes(event.target);
      }));
    }
  }
  function setAccessibilityAttributes(root) {
    findElementsWithTagName(root, "SUMMARY").forEach((function(summary) {
      var details = findClosestElementWithTagName(summary, "DETAILS");
      summary.setAttribute("aria-expanded", details.hasAttribute("open"));
      if (!summary.hasAttribute("tabindex")) summary.setAttribute("tabindex", "0");
      if (!summary.hasAttribute("role")) summary.setAttribute("role", "button");
    }));
  }
  function eventIsSignificant(event) {
    return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable);
  }
  function onTogglingTrigger(callback) {
    addEventListener("click", (function(event) {
      if (eventIsSignificant(event)) {
        if (event.which <= 1) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
          }
        }
      }
    }), false);
    addEventListener("keydown", (function(event) {
      if (eventIsSignificant(event)) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
            event.preventDefault();
          }
        }
      }
    }), false);
  }
  function triggerToggle(element) {
    var event = document.createEvent("Event");
    event.initEvent("toggle", false, false);
    element.dispatchEvent(event);
  }
  function findElementsWithTagName(root, tagName) {
    return (root.tagName == tagName ? [ root ] : []).concat(typeof root.getElementsByTagName == "function" ? slice.call(root.getElementsByTagName(tagName)) : []);
  }
  function findClosestElementWithTagName(element, tagName) {
    if (typeof element.closest == "function") {
      return element.closest(tagName);
    } else {
      while (element) {
        if (element.tagName == tagName) {
          return element;
        } else {
          element = element.parentNode;
        }
      }
    }
  }
})();

/*!
 * houdinijs v11.0.2
 * A simple collapse-and-expand script
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/houdini
 */

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], (function () {
			return factory(root);
		}));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.Houdini = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

	//
	// Variables
	//

	var defaults = {

		// Content
		contentClass: 'houdini',
		expanded: false,
		expandedClass: 'is-expanded',

		// Toggle Buttons
		btnAfter: false,
		btnClass: 'houdini-toggle',
		btnAttribute: 'data-houdini-toggle',
		btnTextAttribute: 'data-houdini-button',
		btnLabelAttribute: 'data-houdini-label',
		bntPreexisting: 'data-houdini-button-preexisting',

		// Accordion
		isAccordion: false,
		collapseOthers: false,
		headingClass: 'houdini-heading',

		// Icons
		icon: -1,
		iconClass: 'houdini-toggle-icon',
		iconAttribute: 'data-houdini-icon',
		iconShow: '+',
		iconHide: '&ndash;',

		// Custom Events
		emitEvents: true

	};


	//
	// Methods
	//

	/**
	 * Merge two or more objects together.
	 * @param   {Object}   objects  The objects to merge together
	 * @returns {Object}            Merged values of defaults and options
	 */
	var extend = function () {
		var merged = {};
		Array.prototype.forEach.call(arguments, (function (obj) {
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) return;
				merged[key] = obj[key];
			}
		}));
		return merged;
	};

	/**
	 * Emit a custom event
	 * @param  {String} type     The event type
	 * @param  {Object} settings The settings object
	 * @param  {Node}   content  The content element
	 * @param  {Node}   btn      The toggle button element
	 */
	var emitEvent = function (type, settings, details) {
		if (!settings.emitEvents || typeof window.CustomEvent !== 'function') return;
		var event = new CustomEvent(type, {
			bubbles: true,
			detail: details
		});
		if (details.content) {
			details.content.dispatchEvent(event);
		} else {
			document.dispatchEvent(event);
		}
	};

	/**
	 * Add button to accordion headings
	 * @param  {Node}   elem     The accordion content
	 * @param  {Object} settings The settings object
	 */
	var wrapInBtn = function (elem, settings) {

		// Variables
		var heading = document.querySelector('[' + settings.btnAttribute + '="' + elem.id + '"]');
		if (!heading) return;
		var isExpanded = elem.classList.contains(settings.expandedClass);

		// Update heading attributes
		heading.classList.add(settings.headingClass);
		heading.removeAttribute(settings.btnAttribute);

		// Create the icon
		var icon = '';
		if (settings.icon) {
			icon =
				'<span' +
					' class="' + settings.iconClass + '"' +
					' ' + settings.iconAttribute +
				'>' +
					(isExpanded ? settings.iconHide : settings.iconShow) +
				'</span>';
		}

		// Wrap heading in a button
		heading.innerHTML =
			'<button' +
				' class="' + settings.btnClass + '"' +
				' ' + settings.btnAttribute + '="' + elem.id + '"' +
				' aria-expanded="' + (isExpanded ? true : false) + '"' +
			'>' +
				heading.innerHTML +
				icon +
			'</button>';

		return heading;

	};

	/**
	 * Get a preexisting button for the content
	 * @param  {Node}   elem     The disclosure content
	 * @param  {Object} settings The settings object
	 * @return {Node}            The preexisting button
	 */
	var getExistingBtn = function (elem, settings) {
		var btn = document.querySelector('[' + settings.btnAttribute + '="' + elem.id + '"]');
		if (!btn) return;
		btn.removeAttribute('hidden');
		if (btn.tagName.toLowerCase() === 'a') {
			btn.setAttribute('role', 'button');
		}
		btn.setAttribute(settings.btnPreexisting, 'true');
		return btn;
	};

	/**
	 * Add a new toggle button to the DOM
	 * @param  {Node}   elem     The disclosure content
	 * @param  {Object} settings The settings object
	 */
	var addNewBtn = function (elem, settings) {

		// Variables
		var text = elem.getAttribute(settings.btnTextAttribute);
		var isExpanded = elem.classList.contains(settings.expandedClass);
		var label = elem.getAttribute(settings.btnLabelAttribute);

		// Create the button
		var existingBtn = getExistingBtn(elem, settings);
		var btn = existingBtn ? existingBtn : document.createElement('button');

		// Add button text
		if (!existingBtn) {
			// btn.textContent = text && text.length > 0 ? text : settings.btnText; // @todo
			if (!text || text.length < 1) return;
			btn.textContent = text;
		}

		// Add selectors and labels
		btn.setAttribute(settings.btnAttribute, elem.id);
		btn.className = settings.btnClass;

		// Add an icon
		var icon = '';
		if (settings.icon) {
			btn.innerHTML +=
				'<span' +
					' class="' + settings.iconClass + '"' +
					' ' + settings.iconAttribute +
				'>' +
					(isExpanded ? settings.iconHide : settings.iconShow) +
				'</span>';
		}

		// Add a11y attributes
		btn.setAttribute('aria-expanded', isExpanded);
		if (label) {
			btn.setAttribute('aria-label', label);
		}

		// Inject into the DOM
		if (!existingBtn) {
			elem.parentNode.insertBefore(btn, settings.btnAfter ? elem.nextSibling : elem);
		}

		return btn;

	};

	/**
	 * Create the disclosure button
	 * @param  {Node}   elem     The disclosure content
	 * @param  {Object} settings The settings object
	 */
	var createBtn = function (elem, settings) {
		if (settings.isAccordion) {
			return wrapInBtn(elem, settings);
		}
		return addNewBtn(elem, settings);
	};

	/**
	 * Remove button from accordion headings
	 * @param  {Node}   elem     The accordion content
	 * @param  {Object} settings The settings object
	 */
	var unwrapInBtn = function (elem, settings) {

		// Variables
		var btn = document.querySelector('[' + settings.btnAttribute + '="' + elem.id + '"]');
		if (!btn) return;

		// Update heading attributes
		heading.classList.remove(settings.headingClass);
		btn.parentNode.setAttribute(settings.btnAttribute, elem.id);

		// Unwrap heading in a button
		var heading = btn.cloneNode(true);
		var icon = heading.querySelector('[' + settings.iconAttribute + ']');
		if (icon) {
			heading.removeChild(icon);
		}
		btn.parentNode.innerHTML = heading.innerHTML;

	};

	/**
	 * Remove toggle button from the DOM
	 * @param  {Node}   elem     The disclosure content
 	 * @param  {Object} settings The settings object
	 */
	var removeNewBtn = function (elem, settings) {
		var btn = document.querySelector('[' + settings.btnAttribute + '="' + elem.id + '"]');
		if (!btn) return;
		if (btn.hasAttribute(settings.btnPreexisting)) {
			btn.setAttribute('hidden', 'hidden');
			return;
		}
		btn.parentNode.removeChild(btn);
	};

	/**
	 * Remove button elements
	 * @param  {Node}   elem     The disclosure content
	 * @param  {Object} settings The settings object
	 */
	var removeBtn = function (elem, settings) {
		if (settings.isAccordion) {
			unwrapInBtn(elem, settings);
		} else {
			removeNewBtn(elem, settings);
		}
	};

	/**
	 * Collapse a toggle button
	 * @param  {Node} btn        The button
	 * @param  {Object} settings The settings object
	 */
	var collapseBtn = function (btn, settings) {

		// Update a11y attributes
		btn.setAttribute('aria-expanded', 'false');
		btn.removeAttribute('aria-controls');

		// Toggle icons
		var icon = btn.querySelector('[' + settings.iconAttribute + ']');
		if (icon) {
			icon.innerHTML = settings.iconShow;
		}

	};

	/**
	 * Collapse disclosure content
	 * @param  {Node}   btn      The toggle button
	 * @param  {Node}   target   The disclosure content
	 * @param  {Object} settings The settings object
	 */
	var collapseContent = function (btn, target, settings) {

		// Update button text
		collapseBtn(btn, settings);

		// Collapse content
		target.classList.remove(settings.expandedClass);

		// Emit event
		emitEvent('houdiniCollapse', settings, {
			button: btn,
			content: target
		});

	};

	/**
	 * Collapse open accordion content in a group
	 * @param  {Node}   btn      The toggle button
	 * @param  {Node}   target   The disclosure content
	 * @param  {String} selector The selector for this instantiation
	 * @param  {Object} settings The settings object
	 */
	var collapseOthers = function (btn, target, selector, settings) {

		// Only run for accordions where others should be collapsed
		if (!settings.isAccordion || !settings.collapseOthers) return;

		// Close open content areas
		Array.prototype.forEach.call(document.querySelectorAll(selector + '.' + settings.expandedClass), (function (content) {
			var btn = document.querySelector('[' + settings.btnAttribute + '="' + content.id + '"]');
			collapseContent(btn, content, settings);
		}));

	};

	/**
	 * Expand a toggle button
	 * @param  {Node} btn        The button
	 * @param  {Object} settings The settings object
	 */
	var expandBtn = function (btn, target, settings) {

		// Update a11y attributes
		btn.setAttribute('aria-expanded', true);
		btn.setAttribute('aria-controls', target.id);

		// Toggle icons
		var icon = btn.querySelector('[' + settings.iconAttribute + ']');
		if (icon) {
			icon.innerHTML = settings.iconHide;
		}

	};

	/**
	 * Expand disclosure content
	 * @param  {Node}   btn      The button
	 * @param  {Node}   target   The disclosure content
	 * @param  {Object} settings The settings object
	 */
	var expandContent = function (btn, target, settings) {

		// Update button text
		expandBtn(btn, target, settings);

		// Expand content
		target.classList.add(settings.expandedClass);

		// Update focus
		if (settings.btnAfter && !settings.isAccordion) {
			target.focus();
		}

		// Emit event
		emitEvent('houdiniExpand', settings, {
			button: btn,
			content: target
		});

	};

	/**
	 * Toggle disclosure content visibility
	 * @param  {Node}   btn      The button
	 * @param  {Node}   target   The disclosure content
	 * @param  {String} selector The selector for this instantiation
	 * @param  {Object} settings The settings object
	 * @return {[type]}          [description]
	 */
	var toggleContent = function (btn, selector, settings, event) {

		// Variables
		var isExpanded = btn.getAttribute('aria-expanded');
		var target = document.querySelector('#' + btn.getAttribute(settings.btnAttribute));
		if (!target || !target.matches(selector)) return;

		// Prevent default click event
		// For links or buttons inside a form
		if (event) {
			event.preventDefault();
		}

		// Toggle content visibility
		// Must explicitly specify true here and use type coercion because value returned is a string
		if (isExpanded == 'true') {
			collapseContent(btn, target, settings);
		} else {
			collapseOthers(btn, target, selector, settings);
			expandContent(btn, target, settings);
		}

	};

	/**
	 * Get the content element from the DOM
	 * @param  {String|Node} target The selector
	 * @param  {String}      att    The data attribute for toggle buttons
	 * @return {Node}               The content element
	 */
	var getContent = function (target, att) {

		var content = target;

		// If selector string instead of element
		if (typeof target === 'string') {
			content = document.querySelector(target);
		}

		// If button instead of content
		if (content && content.matches('[' + att + ']')) {
			content = document.querySelector('#' + content.getAttribute(att));
		}

		return content;

	};

	/**
	 * Get the button element from the DOM
	 * @param  {String|Node} target   The element or selector string
	 * @param  {String}      selector The selector for this instantiation
	 * @return {Node}                 The button element
	 */
	var getBtn = function (target, selector, settings) {

		var btn = target;

		// If selector string instead of element
		if (typeof target === 'string') {
			btn = document.querySelector(target);
		}

		// If content area instead of button
		if (btn && btn.matches(selector)) {
			btn = document.querySelector('[' + settings.btnAttribute + '="' + btn.id + '"]');
		}

		return btn;

	};

	/**
	 * Restore the DOM to its original state
	 * @param  {String} selector The selector for this instantiation
	 * @param  {Object} settings The settings object
	 */
	var teardown = function (selector, settings) {
		Array.prototype.forEach.call(document.querySelectorAll(selector), (function (content) {

			// Remove the toggle button
			removeBtn(content, settings);

			// Add the content class
			content.classList.remove(settings.contentClass);

			// Restore default expanded state
			if (settings.expandedOnInit.indexOf(content.id) < 0) {
				content.classList.remove(settings.expandedClass);
			} else {
				content.classList.add(settings.expandedClass);
			}

		}));
	};


	//
	// Constructor
	//

	var Constructor = function (selector, options) {

		//
		// Variables
		//

		var publicAPIs = {};
		var settings;


		//
		// Methods
		//

		/**
		 * Toggle a disclosure
		 * @param  {String|Node} target The content or button to toggle
		 */
		publicAPIs.toggle = function (target) {
			toggleContent(getBtn(target, selector, settings), selector, settings);
		};

		/**
		 * Expand a disclosure
		 * @param  {String|Node} target The content or button to toggle
		 */
		publicAPIs.expand = function (target) {
			expandContent(getBtn(target, selector, settings), getContent(target, settings.btnAttribute), settings);
		};

		/**
		 * Collapse a disclosure
		 * @param  {String|Node} target The content or button to toggle
		 */
		publicAPIs.collapse = function (target) {
			var btn = getBtn(target, selector, settings);
			var content = getContent(target, settings.btnAttribute);
			collapseOthers(btn, content, selector, settings);
			collapseContent(btn, content, settings);
		};

		/**
		 * Add required markup to the DOM
		 */
		publicAPIs.setup = function () {

			// Add markup
			Array.prototype.forEach.call(document.querySelectorAll(selector), (function (content) {

				// If already setup, bail
				if (content.classList.contains(settings.contentClass)) return;

				// Create the toggle button
				if (!createBtn(content, settings)) return;

				// Add the content class
				content.classList.add(settings.contentClass);

				// Cache items that are expanded by default
				if (content.classList.contains(settings.expandedClass)) {
					settings.expandedOnInit.push(content.id);
				}

				// If the button appears after the content, give it a tabindex so it can be focused
				if (settings.btnAfter && !content.getAttribute('tabindex')) {
					content.setAttribute('tabindex', -1);
				}

				// If item should be expanded by default, expand it
				if (settings.expanded) {
					content.classList.add(settings.expandedClass);
				}

			}));

			// Emit event
			emitEvent('houdiniSetup', settings, {
				settings: settings
			});

		};

		/**
		 * Handle click events
		 */
		var clickHandler = function (event) {

			// Only run if clicked element matches our selector
			var toggle = event.target.closest('[' + settings.btnAttribute + ']');
			if (!toggle) return;

			// Show/hide content
			toggleContent(toggle, selector, settings, event);

		};

		/**
		 * Destroy the current instatiation
		 */
		publicAPIs.destroy = function () {
			document.removeEventListener('click', clickHandler, false);
			teardown(selector, settings);
			emitEvent('houdiniDestroy', settings, {
				settings: settings
			});
			settings = null;
		};

		/**
		 * Initialize the plugin
		 */
		var init = function () {

			// Merge user options into defaults
			settings = extend(defaults, options || {});
			settings.expandedOnInit = [];
			if (settings.icon < 0) {
				settings.icon = settings.isAccordion;
			}

			// Setup the DOM
			publicAPIs.setup();

			// Add event listener
			document.addEventListener('click', clickHandler, false);

			// Emit event
			emitEvent('houdiniInitialize', settings, {
				settings: settings
			});

		};

		// Initialize the plugin
		init(options);

		// Return the public APIs
		return publicAPIs;

	};


	//
	// Return the constructor
	//

	return Constructor;

}));

;(function () {

    'use strict';

    window.addEventListener("load", (function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#000"
        },
        "button": {
          "background": "#f1d600"
        }
      },
      "theme": "classic"
    })}));

})();

;(function () {

    'use strict';

    // Our nav list has a "Locations" item which links to a "Locations" page containing a list of links to wonderworld locations pages.
    // That nav item also contains a nested subnavigation menu which is a list of links to those wonderworld location pages.
    // Here’s our enhancement:
    // So long as we have Houdini https://github.com/cferdinandi/houdini available, remove the parent nav link
    // And have houdini hide the subnav and make it togglable open/shut via a button (the right element for accessibility) injected into the DOM above the subnav.

    // var removeSubnavParentAnchor = function() {
    //   var navLink = document.querySelector('#nav-locations a');
    //   navLink.parentNode.removeChild(navLink);
    // };

    // var enhanceNav = function() {
    //   var disclosure = new Houdini('[data-houdini]', {
    //     icon: -1, // If true, include an expand/collapse icon
    //     iconClass: 'houdini-toggle-icon', // The class to use for the expand/collapse icon
    //     iconAttribute: 'data-houdini-icon', // The data attribute to use for the expand/collapse icon
    //     iconShow: '<svg width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M7.112 2.391L4.63 7.328a1 1 0 0 1-1.773.026L.187 2.418a1 1 0 0 1 .88-1.476h5.151a1 1 0 0 1 .894 1.45z" fill-rule="evenodd"/></svg>', // The icon to expand an accordion
    //     iconHide: '<svg width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path transform="rotate(180 4 4)" d="M7.112 2.391L4.63 7.328a1 1 0 0 1-1.773.026L.187 2.418a1 1 0 0 1 .88-1.476h5.151a1 1 0 0 1 .894 1.45z" fill-rule="evenodd"/></svg>' // The icon to collapse an accordion
    //   });

    //   // Our initial markup has the 'hidden' attribute on the (now togglable) subnav because we didn’t want it flashing visible then hiding.
    //   // It was OK to do this because the subnav wasn’t necessary for screen readers because there was a link to a page with locations links.
    //   // But now that houdini has done its thing let’s delete the hidden attribute so our new JS-powered nav is available to screen-reader folks too.
    //   var toggleableSubmenu = document.querySelector('#global-locations-menu');
    //   toggleableSubmenu.removeAttribute('hidden');
    // };

    // // Running order should be:
    // // 1) enhanceNav() kicks off Houdini
    // // 2) houdini emits houdiniInitialize which is heard by our eventListener which calls removeSubnavParentAnchor()
    // // 3) houdini continues with other stuff
    // // 4) we remove attribute 'hidden' from the toggleable submenu

    // document.addEventListener('houdiniInitialize', removeSubnavParentAnchor, false);

    // enhanceNav();

})();

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);