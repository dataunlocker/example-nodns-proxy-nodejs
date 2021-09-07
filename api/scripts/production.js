(()=>{"use strict";var e={667:(e,n)=>{n.C=void 0,function(e){e[e.loading=0]="loading",e[e.ready=1]="ready",e[e.error=2]="error"}(n.C||(n.C={}))}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}(()=>{var e,n=function(e){e&&localStorage&&localStorage.__du&&console.log.apply(console,["DataUnlocker |"].concat(e[0]))},r=function(e,n){return c(n,"toString",{value:function(){return e+"() { [native code] }"}}),n},o=[],i=!1,a=function(e,n){var t=(n?n.ownerDocument.defaultView:null)||window,r=t.performance;if(!r)return!0;i||t!==window||(r.addEventListener("resourcetimingbufferfull",(function(){for(var e=new Set,n=0,t=r.getEntriesByType("resource");n<t.length;n++){var i=t[n];e.add(i.name)}o.push(e),o.length>3&&o.shift(),r.clearResourceTimings()})),i=!0),e=e.replace(/^\/\//,location.protocol+"//");var a=r.getEntriesByName(e);if(a&&0===a.length&&"/"!==e[e.length-1]&&(a=r.getEntriesByName(e+"/")),0===a.length)for(var u=0,c=o;u<c.length;u++){var s=c[u];(s.has(e)||s.has(e+"/"))&&(a=[{name:e}])}return 0!==a.length},u=function(e,n){if(!e)return{enumerable:!0,configurable:!0};var t=Object.getOwnPropertyDescriptor(e,n);return t||u(Object.getPrototypeOf(e),n)},c=function(e,t,r){var o,i=u(e,t);if(!e||!1===(null===(o=Object.getOwnPropertyDescriptor(e,t))||void 0===o?void 0:o.configurable))return n([["Unable to redefine property "+String(t)+" on "+e+", as it is not configurable. Original "+String(t)+" will be used."]]),{object:e,originalDescriptor:i,originalGet:function(){return i.get?i.get:function(){return i.value}},originalSet:i.set?i.set:function(n){return e[t]=n}};var a=void 0!==r.value,c={enumerable:void 0!==r.enumerable?r.enumerable:i.enumerable,configurable:void 0!==r.configurable?r.configurable:i.configurable};a?(c.writable=void 0!==r.writable?r.writable:void 0===i.writable||i.writable,c.value=r.value||i.value):(c.get=r.get||i.get||function(){return e[t]},c.set=r.set||i.set||function(n){return e[t]=n});try{Object.defineProperty(e,t,c)}catch(r){n([["Unable to redefine property "+String(t)+" on "+e+": "+r.message+". Original "+String(t)+" will be used."]])}return{object:e,originalDescriptor:i,originalGet:a?function(){return i.value}:i.get?i.get:function(){},originalSet:a?function(n){return e[t]=n}:i.set?i.set:function(e){return e}}},s=function(e){return e.hasOwnProperty("__du")?(n([["Not patching "+e.constructor.name+(e.src?" src="+e.src:"")+": it's already patched."]]),!1):(n([["Patching "+e.constructor.name+(e.src?" src="+e.src:"")+"."]]),c(e,"__du",{value:null,enumerable:!1}),!0)},l=Math.pow(2,32),f=function(e){for(var n=0,t=1779033703^e.length;n<e.length;n++)t=(t=Math.imul(t^e.charCodeAt(n),3432918353))<<13|t>>>19;return function(e){return void 0===e&&(e=0),t=Math.imul(t^t>>>16,(2246822507+e)%l),t=Math.imul(t^t>>>13,3266489909),(t^=t>>>16)>>>0}},d=function(e,n,t){void 0===t&&(t=1),t>0&&(e=btoa(e).replace(/[=]+$/,""));for(var r,o,i,a,u,c=f(n),s=new Array(e.length),l=e.length,d=c(e.length),p=0,g=0;l-- >0;)s[l]=(a=e[l],u=void 0,u=a.charCodeAt(0),o=(g=u>96?u-59:u>64?u-53:u>46?u-46:43===u?0:1)+t*d,i=64,r=p=o<0?(o%i+i)%i:o%i,String.fromCharCode(r>37?r+59:r>11?r+53:r>0?r+46:43)),d=c(t>0?g:p);var v=s.join("");return t>0?v.replace(/\//g,"-"):atob(v)},p=function(e){return(f(e)()+Math.floor(Date.now()/864e5))%l},g=function(e){return Math.floor(Number.MAX_SAFE_INTEGER*e).toString(36)},v=function(e,n,t){var r,o=p(n),i=(r=o,function(){var e=r+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/l});return function(e,n){for(var t=[],r=0;r<e.length&&t.push(e.substring(r,r+=3+(20*n()>>0))););return t.join("/")}(d(e+(-1===e.indexOf("?")?"?__du=":"&__du=")+(t?t.join(",")+"+":"")+g(i()),n),i)},h=function(e){return console.error.call(console,e)},y=function(e,n,t){var r=e.currentTarget,o=e.target,i=n||r,a=t||o,u=function(e,n){for(var t={},r=0,o=Object.entries(n);r<o.length;r++){var i=o[r],a=i[0],u=i[1];t[a]=c(e,a,u)}return t}(e,{currentTarget:{get:function(){return i}},target:{get:function(){return a}},srcElement:{get:function(){return a}},path:{get:function(){return u.originalGet.apply(this).slice().map((function(e){return n&&r===e?n:t&&o===e?t:e}))}}}).path;return function(){delete e.currentTarget,delete e.target,delete e.srcElement,delete e.path}},m=function(e,n){try{return e(n)}catch(e){h(e)}},b=function(e,t){try{if("function"==typeof e)return e(t);if(e&&"function"==typeof e.handleEvent)return e.handleEvent(t);n([["Event listener",e,"was not invoked as it is not a function nor an object implementing EventListener interface. Event:",t]])}catch(e){h(e)}},w=function(e,t){if("function"==typeof e.addEventListener){var o=e.constructor.name,i=[],a=[],u=[],s=[],l=function(e){var n=a[e];return!!n&&(n(),a[e]=void 0,!0)},f=c(e,"addEventListener",{value:r("addEventListener",(function(e,r){var a=t.findIndex((function(n){return n.event===e}));return-1!==a?(i[a].push(r),void n([[o+'.addEventListener("'+e+'", ...): will be intercepted.']])):f().apply(this,arguments)}))}).originalGet;if("function"==typeof e.setAttribute)var d=c(e,"setAttribute",{value:r("setAttribute",(function(r,i){var a=t.findIndex((function(e){return"on"+e.event===r}));return-1!==a&&u[a]?(n([[o+".on"+r+": will be intercepted."]]),u[a](Function(i).bind(e)),this):d().apply(this,arguments)}))}).originalGet;for(var p=function(r){var d=t[r],p=d.event,g=d.on,v="on"+p,h="function"==typeof e[v]?e[v].bind(e):null,m=-1,w=function(e){(h=e)?-1===m&&(m=i[r].length-1):m=-1},R=function(a){n([[o+": invoking "+((h?1:0)+i[r].length)+" "+t[r].event+" callbacks with",a]]),-1===m&&h&&b(h,a),i[r].forEach((function(n,t){b("function"==typeof n?n.bind(e):n,a),t===m&&h&&b(h,a)}))};i.push([]),u.push(w),s.push(R),h&&(e[v]=null),void 0!==e[v]&&c(e,v,{set:function(e){return n([[o+"."+v+": will be intercepted."]]),w("function"==typeof e?e.bind(this):null),e},get:function(){return h}}),f().call(e,p,(function(e){var i=y(e);a[r]=function(){R(e),i()},g&&g((function(){return l(r)}),(function(e,n){return n?(s[t.findIndex((function(n){return n.event===e}))](n),!0):l(t.findIndex((function(n){return n.event===e})))}),(function(e){return r=t.findIndex((function(n){return n.event===e})),n([[o+": discarding "+(a[r]||[]).length+" "+(t[r]||{}).event+" events."]]),void(a[r]=void 0);var r}))}))},g=0;g<t.length;++g)p(g)}},R="undefined"!=typeof window&&window,x=new Set(Object.keys(R)),E={},P=1,O=function(e,t){if(!/^https?:\/\//.test(e)||e.replace(/^https?:\/\//,"").replace(/\/.*$/,"")===location.host)return 0;if(e.startsWith(location.protocol+"//"+t.o))return 0;for(var r={window:{}},o=P++,i=0,a=Object.keys(window);i<a.length;i++){var u=a[i];if(!x.has(u)&&!u.startsWith("webkit")&&"window"!==u){var c=void 0;try{c=window[u]}catch(e){n([['Assessing window variable "'+u+'" for the snapshot '+o+" failed:",e]]);continue}c!==R&&(r.window[u]={ref:c,entries:c instanceof Object?Object.entries(c).concat(c instanceof Array?[["length",c.length]]:[]):[]})}}return E[o]=r,n([["Saved snapshot "+o+" for window["+Object.keys(r.window).join("|")+"], before loading third-party "+e+"."]]),o},S=function(e,t){var r=t.window,o=window,i=r[e];if(i){if(o[e]!==i.ref&&(n([["  + Restoring "+e+" as it has changed. Current value:",o[e],"Restoring this value:",i.ref]]),m((function(){return o[e]=i.ref}))),o[e]instanceof Object){for(var a=function(t){if(i.entries.find((function(e){return e[0]===t})))return"continue";n([["  - Deleting "+e+"['"+t+"'] as it wasn't assigned in the snapshot. Deleting this value:",o[e][t]]]),delete o[e][t]},u=0,c=Object.keys(o[e]);u<c.length;u++){a(c[u])}for(var s=function(t,r){if(o[e][t]===r)return"continue";n([["  + Restoring "+e+"['"+t+"'] as it has changed. Current value:",o[e][t],"Restoring this value:",r]]),m((function(){return o[e][t]=r}))},l=0,f=i.entries;l<f.length;l++){var d=f[l];s(d[0],d[1])}}}else o[e]&&(n([["  - "+e+" was not defined, deleting "+e+"."]]),delete o[e])},N=function(e){delete E[e]},I=window.document.createElement,C=window.MutationObserver,j=t(667),T=j.C.loading,q=null,A=c([],"push",{value:function(e){q=e,function(e){n([["Async configuration is applied: proxy enabled for "+e.a.join(", ")+"; disabled for "+e.b.join(", ")+"; proxy all other services: "+(e.c?"yes":"no")+"."]]),n([["Sync mode is now enabled. Resolving "+B.length+" queued replays..."]]),k.on(Y),G(j.C.ready);for(var t=0,r=B;t<r.length;t++){var o=r[t];Y(o)}}(e)}}).object,L="3.0.3",D={type:"path",urlKey:"q8qhgn479rmo",encKey:"ncaz4jhlts7l"},M="nodns-proxy-nodejs.vercel.app",_="dns"===D.type?D.urlKey+"."+M:M+"/"+D.urlKey,H=function(e,n){return v(e,D.encKey,n)},k=(e=[],Object.freeze({on:function(n){return"function"==typeof n&&e.push(n)},emit:function(n){var t=this;return e.forEach((function(e){return e.apply(t,[n])}))}})),B=[],U=Object.freeze({cb:k,v:L,i:document.getElementsByTagName("SCRIPT").length,h:"JFxRclc7eGo9VmkwfDlwQz5ySDB3RWAmIw",r:function(e,t,r){var o=E[e];if(o){n([["Walking the snapshot "+e+" to restore "+t.join(",")]]);for(var i=0,a=t;i<a.length;i++){var u=a[i];S(u,o)}"function"==typeof r&&r(o,(function(e){return S(e,o)})),N(e)}else n([["Unable to restore snapshot "+e+": it doesn't exists or was discarded."]])},o:M,e:B,ep:H,dp:function(e){return n=D.encKey,d(e.replace(/\//g,""),n,-1);var n},a:function(){return T},d:A,c:Number("-1631020083660"),p:D}),G=function(e){return T=e},K=function(){return T},X=function(){return q},W=function(e){if(n([["Proxy for "+e.url+" is canceled"+(e.onNoProxy?", releasing initial handlers.":"")+"."]]),e.onNoProxy)try{e.onNoProxy()}catch(t){n([["Error when releasing "+e.url,t]])}},Y=function(e){var t=X();if(!t)return n([["Replay is not possible as no async data was injected. Releasing "+e.url]]),void W(e);var r=function(e,t,r){if(!e)return"";var o=t.a,i=t.b,a=t.c,u=(0===e.indexOf("/")?location.protocol:e).replace(/:.*$/,""),c=e.match(/^(?:https?:)?\/\/([^/]+)(.*)/)||[],s=(c[0],c[1]),l=c[2],f=location.protocol+"//"+_;if(!s)return n([["Not proxying "+e+" (no domain)"]]),"";if(0===s.indexOf(location.hostname))return n([["Not proxying "+e+" (same domain)"]]),"";if(0===e.indexOf(f))return n([["Not proxying "+e+" (already attempted)"]]),"";var d=s.toLowerCase(),p="*."+(d.match(/(?:[^\.]+\.)?[^\.]+$/)||[""])[0],g=-1!==o.indexOf(d),v=-1!==i.indexOf(d),h=-1!==o.indexOf(p),y=-1!==i.indexOf(p);return v||!g&&(a?y:!h)?(n([["Not proxying "+e+" (disabled by configuration)"]]),""):f+"/"+H(u+"/"+s+(l||""),r)}(e.url,t,e.flags);if(r){n([["Replaying "+e.url+" -> "+r]]);try{e.onProxy(r)}catch(t){n([["Error when replaying "+e.url+", "+t.message,t]]),W(e)}}else W(e)},$=/^(?:https?:)?\/\//,F=location&&location.protocol||"https",z=location&&location.host||"",V=F+"//"+_.replace(/^\*/,(function(){return g(p(D.urlKey))}))+"/"+v(F.replace(/:/,"")+"/api.dataunlocker.com/static/v1/async.js?v="+encodeURIComponent(L),D.encKey),Q=_.split("/")[0].replace(/:[0-9]+$/,"").endsWith(z.replace(/:[0-9]+$/,"")),J=function(){G(j.C.error);for(var e=0,n=B;e<n.length;e++){var t=n[e];W(t)}},Z=!1,ee=function(e){if(!e.url)return n([["No URL to replay, canceling job."]]),void W(e);if(K()===j.C.error)return n([["Replay is not possible as there was an error when loading async data. Releasing "+e.url]]),void W(e);var t=(z.match(/(?:[^.]+\.)?[^.]+$/)||[])[0]||z;if(!$.test(e.url)||e.url.replace($,"").replace(/\/.*/,"").endsWith(t))return n([["Same-domain requests are not replayed: canceling "+e.url+" (the current domain is "+t+")"]]),void W(e);n([["Queuing replay for "+e.url]]),K()!==j.C.ready&&B.push(e),k.emit(e),function(){if(!Z){if(Z=!0,!Q)return n([["Unable to request async script at "+_+" from origin "+z+": proxy url and "+z+' must have a common origin suffix, i.e. "'+_.split("/")[0]+'" must end with "'+z+'". Canceling existing jobs.']]),void J();n([["Requesting async data."]]);var e=I.call(document,"SCRIPT"),t=function(){n([["Removing async script from DOM."]]),e.parentNode&&e.parentNode.removeChild(e)};e.setAttribute("async",""),e.setAttribute("src",V),e.addEventListener("load",(function(){t()})),e.addEventListener("error",(function(e){t(),n([["Async data loading error, cancelling existing jobs.",e]]),J()})),document.head.appendChild(e)}}()},ne=function(){var e="edgtZ28";c(window,e,{enumerable:!1,configurable:!1,get:function(){return U}}),n([["window['"+e+"'] now holds DataUnlocker data",U]])},te=navigator.sendBeacon.bind(navigator),re=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],oe=function(){n([["Patching navigator.sendBeacon()"]]),c(navigator,"sendBeacon",{value:r("sendBeacon",(function(e,t){if(window.hasOwnProperty("fetch")){var r=!t||!(t instanceof Blob&&!re.find((function(e){return t.type.startsWith(e)}))),o={method:"POST",keepalive:!0,credentials:r?"same-origin":"include",mode:r?"no-cors":"cors"};if(o.body=t||0===t?t:"",o.importance="low",o.body instanceof Blob){if(o.body.size>65536)return!1}else if(o.body&&"function"==typeof o.body.toString&&o.body.toString().length>65536)return!1;return n([["Fetching navigator.sendBeacon("+e+"), mode="+o.mode]]),fetch(e,o),!0}var i=te(e,t);return i&&ee({url:e,onProxy:function(r){!function(e,t){if(performance){var r=3e4;n([["Added a beacon watcher job for "+e]]);var o=function(){var i=performance.getEntriesByName(e),a=i[i.length-1];if(a){var u=a.duration||0;0===(0===u?a.responseEnd-a.startTime||0:u)?(n([["Beacon send was blocked, replaying "+e]]),t()):n([["Beacon was sent successfully, not replaying "+e]])}else{if((r-=500)<=0)return void n([["Beacon request to "+e+" was not detected for "+r+"ms, aborting"]]);setTimeout(o,500)}};setTimeout(o,0)}}(e,(function(){te(r,t)}))}}),i}))})},ie=function(e){var t=e.tagName,r=e.onProxy;return function(e,o){if(s(e)){var i=o&&e.src&&"SCRIPT"===t?O(e.src,U):0;if("SCRIPT"===t&&C&&!o){var u=setTimeout((function(){n([['Detaching observer after 10s because <SCRIPT src="'+e.src+'"> was never attached to DOM.']]),c.disconnect()}),1e4),c=new C((function(){document.contains(e)&&(clearTimeout(u),c.disconnect(),e.src&&(i=O(e.src,U)))}));c.observe(document,{childList:!0,subtree:!0})}w(e,[{event:"error",on:function(o,i){n([["Error on <"+t+(e.src?" src="+e.src:"")+"> element, resolving..."]]),ee({url:e.src,onProxy:function(n){return r({newUrl:n,element:e,releaseErrorHandlers:o,fireLoadHandlers:function(n){var t=y(n,e,e);i("load",n),t()}})},onNoProxy:o})}},{event:"load",on:function(t){if(e.src&&!a(e.src,e)){var o=function(){i&&N(i),t()};return n([["Seems like "+e.src+" wasn't properly loaded. Requesting a proxy."]]),void ee({url:e.src,flags:["npe"].concat(i?["ss="+i]:[]),onProxy:function(n){return r({newUrl:n,element:e,releaseErrorHandlers:o,fireLoadHandlers:o})},onNoProxy:o})}return t()}}])}}},ae=ie({tagName:"IMG",onProxy:function(e){var t=e.newUrl,r=e.element;n([["Replacing image src from "+r.src+" to "+t]]),r.src=t}}),ue=ie({tagName:"SCRIPT",onProxy:function(e){var t=e.newUrl,r=e.element,o=e.releaseErrorHandlers,i=e.fireLoadHandlers;if(r.src){for(var a=I.call(document,"SCRIPT"),u=function(){n([["Removing <SCRIPT src="+a.src+"> from the DOM."]]),a.parentNode&&a.parentNode.removeChild(a)},c=0,s=[].slice.call(r.attributes);c<s.length;c++){var l=s[c],f=l.name,d=l.value;"src"!==f&&"onerror"!==f&&"onload"!==f&&a.setAttribute(f,d)}a.setAttribute("src",t),a.addEventListener("error",(function(){o(),u()})),a.addEventListener("load",(function(e){i(e),u()})),r.parentNode?(n([["Inserting <SCRIPT src="+t+"> to the DOM, before <SCRIPT src="+r.src+">."]]),r.parentNode.insertBefore(a,r)):(n([["Inserting <SCRIPT src="+t+"> to <HEAD> (original script src="+r.src+")."]]),document.head.appendChild(a))}else o()}}),ce=function(){n([["Patching document.createElement()"]]),c(Document.prototype,"createElement",{value:r("createElement",(function(){var e=(arguments[0]||"").toUpperCase(),n=I.apply(this,[].slice.call(arguments));return"SCRIPT"===e?ue(n):"IMG"===e&&ae(n),n}))})},se=function(){if(C){var e=new C((function(e){for(var n=0,t=e;n<t.length;n++)for(var r=t[n],o=0;o<r.addedNodes.length;++o){var i=r.addedNodes[o];i instanceof HTMLScriptElement?ue(i,!0):i instanceof HTMLImageElement&&ae(i)}}));document.addEventListener("DOMContentLoaded",(function(){requestAnimationFrame((function(){n([["Async DOMContentLoaded: disabling mutation observer."]]),e.disconnect()}))})),n([["Enabling mutation observer for elements which are already in the DOM."]]),e.observe(document,{childList:!0,subtree:!0})}},le=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,u)}c((r=r.apply(e,n||[])).next())}))},fe=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},de=window.fetch,pe=function(){de&&(n([["Patching fetch()"]]),c(window,"fetch",{value:r("fetch",(function(e,t){return le(void 0,void 0,void 0,(function(){var r,o,i,u,s,l,f;return fe(this,(function(d){switch(d.label){case 0:r=e instanceof Request?e.url:e,o=e instanceof Request&&e.clone?function(){try{return e.clone()}catch(t){n([["fetch("+e.url+"): Request.clone() failed. In case fetch is proxied, the original input will be used:",e,"Failure details:",t]])}}():void 0,i=function(i,a){return new Promise((function(u,s){ee({url:r,onProxy:function(r){!function(e,t){var r=t.originalInput,o=t.originalError,i=t.originalResult,a=t.originalRequestInit,u=t.clonedInput,s=t.resolve,l=t.reject;le(void 0,void 0,void 0,(function(){var t,f,d,p,g,v,h;return fe(this,(function(y){switch(y.label){case 0:t=function(){return o?l(o):s(i)},y.label=1;case 1:if(y.trys.push([1,8,,9]),!(r instanceof Request))return[3,6];d=void 0,p=u||r,y.label=2;case 2:return y.trys.push([2,4,,5]),[4,p.blob()];case 3:return d=y.sent(),[3,5];case 4:return g=y.sent(),n([["fetch: extracting request body with Request.blob() failed with "+(g.message||g)+"; will copy Request from",p]]),[3,5];case 5:return d&&"HEAD"!==p.method&&"GET"!==p.method&&c(p,"body",{value:d}),r=new Request(e,p),[3,7];case 6:r=e,y.label=7;case 7:return[3,9];case 8:return v=y.sent(),n([["fetch("+(r.url||r)+"): unable to build proxied request. Releasing original handlers. Error details:",v]]),[2,t()];case 9:return y.trys.push([9,11,,12]),[4,de.bind(window)(r,a)];case 10:return f=y.sent(),[3,12];case 11:return h=y.sent(),n([["fetch("+(r.url||r)+"): proxied request returned an error. Releasing original handlers. Error details:",h]]),[2,t()];case 12:return 0!==f.status&&(f.status<100||f.status>399)?(n([["fetch("+(r.url||r)+"): proxied request returned a non-successful status "+f.status+". Releasing original handlers."]]),[2,t()]):[2,s(f)]}}))}))}(r,{originalInput:e,originalError:a,originalResult:i,originalRequestInit:t,clonedInput:o,resolve:u,reject:s})},onNoProxy:function(){a?s(a):u(i)}})}))},d.label=1;case 1:return d.trys.push([1,3,,5]),[4,de(e,t)];case 2:return u=d.sent(),[3,5];case 3:return s=d.sent(),[4,i(void 0,s)];case 4:return[2,d.sent()];case 5:if(l=0!==u.status&&(u.status<100||u.status>399),0!==u.status||!u.clone)return[3,10];d.label=6;case 6:return d.trys.push([6,9,,10]),[4,u.clone().text()];case 7:return d.sent(),[4,new Promise((function(e){return setTimeout(e,0)}))];case 8:return d.sent(),a(r)||(l=!0),[3,10];case 9:return f=d.sent(),n([["Received an error when cloning and waiting on the body of fetch("+r+"). Proxy will not be attempted",f]]),[3,10];case 10:return l?[4,i(u)]:[3,12];case 11:return[2,d.sent()];case 12:return[2,u]}}))}))}))}))},ge=Image,ve=function(){n([["Patching new Image()"]]),c(window,"Image",{value:r("Image",(function(e,n){var t=new ge(e,n);return ae(t),t}))})},he=window.XMLHttpRequest,ye=function(e){var t=new he(e);return function(e){if(s(e)){var t,o;n([["Patching new XHR object's addEventListener, onload, onloadend, onerror, onreadystatechange, open, send, setRequestHeader."]]);var i=[],a=!1,u=!1,l=e.constructor.name,f=e.hasOwnProperty("open")?e.open:null;c(e,"open",{value:r("open",(function(){return t=[].slice.call(arguments),n([[l+': saved arguments of .open("'+t.join('", "')+'")']]),(f||he.prototype.open).apply(this,t)}))});var d=e.hasOwnProperty("send")?e.send:null;c(e,"send",{value:r("send",(function(){return o=[].slice.call(arguments),a=!0,n([[l+': saved arguments of .send("'+o.join('", "')+'")']]),(d||he.prototype.send).apply(this,o)}))});var p=c(e,"setRequestHeader",{value:r("setRequestHeader",(function(e,t){n([[l+': saving arguments of .setRequestHeader("'+e+'", "'+t+'")']]);try{var r=p().apply(this,arguments);return i.push([e,t]),r}catch(r){throw n([[l+': saving arguments of xhr.setRequestHeader("'+e+'", "'+t+'") fails with error: '+r.message]]),r}}))}).originalGet,g=!1,v=!0;w(e,[{event:"error",on:function(e){return g&&e()}},{event:"load",on:function(e){if(!a){if(v)return e();v=!0}}},{event:"loadend",on:function(e){if(u=!1,!a)return e();n([[l+": not invoking loadend as the request is being considered for proxy."]])}},{event:"readystatechange",on:function(r,c,s){if(g=!1,4!==e.readyState)return n([[l+".readystatechange is "+e.readyState+", waiting for 4."]]),r();if(e.status>=100&&e.status<400)return n([[l+".readystatechange is "+e.readyState+", XHR is fine, not replaying "+(t&&t[1])+"."]]),a=!1,i=[],s("error"),r();var f=function(){a=!1,i=[],r(),c("error")||(g=!0,c("load"),c("loadend"),u&&0!==e.status&&(v=!1))};if(n([[l+".readystatechange is "+e.readyState+", request error "+e.status+(t?" (for "+t[0]+" "+t[1]+")":"")+", resolving..."]]),!t)return n([[l+": readystatechange was fired without using .open(): canceling"]]),f();ee({url:t[1],onProxy:function(r){var a=t.slice();a[1]=r,e.open.apply(e,a),u=!0,n([[l+": re-opening and replaying request headers:\n + "+(i.map((function(e){return e[0]+"="+e[1]})).join(",\n + ")||"no headers to replay")]]);for(var c=0,s=i;c<s.length;c++){var f=s[c],d=f[0],g=f[1];p().call(e,d,g)}n([[l+": replaying .send("+o.join(", ")+")..."]]),e.send.apply(e,o)},onNoProxy:f})}}])}}(t),t};ye.prototype=he.prototype,Object.setPrototypeOf(ye,he);var me,be;[se,ce,pe,oe,function(){n([["Patching XMLHttpRequest's constructor."]]),c(window,"XMLHttpRequest",{value:r("XMLHttpRequest",ye)})},ve,ne].map((function(e){try{e()}catch(e){n([["Patching failed: "+(e.stack||e.message||e)]])}})),null===(be=null===(me=document.currentScript)||void 0===me?void 0:me.parentNode)||void 0===be||be.removeChild(document.currentScript),n([["Sync script was executed and removed from the DOM."]])})()})();