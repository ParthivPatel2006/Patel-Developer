import messages from "./messages.js";

const htmx = `
(function(e,t){if(typeof define===\"function\"&&define.amd){define([],t)}else if(typeof module===\"object\"&&module.exports){module.exports=t()}else{e.htmx=e.htmx||t()}})(typeof self!==\"undefined\"?self:this,function(){return function(){\"use strict\";var Q={onLoad:B,process:zt,on:de,off:ge,trigger:ce,ajax:Nr,find:C,findAll:f,closest:v,values:function(e,t){var r=dr(e,t||\"post\");return r.values},remove:_,addClass:z,removeClass:n,toggleClass:$,takeClass:W,defineExtension:Ur,removeExtension:Fr,logAll:V,logNone:j,logger:null,config:{historyEnabled:true,historyCacheSize:10,refreshOnHistoryMiss:false,defaultSwapStyle:\"innerHTML\",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:true,indicatorClass:\"htmx-indicator\",requestClass:\"htmx-request\",addedClass:\"htmx-added\",settlingClass:\"htmx-settling\",swappingClass:\"htmx-swapping\",allowEval:true,allowScriptTags:true,inlineScriptNonce:\"\",attributesToSettle:[\"class\",\"style\",\"width\",\"height\"],withCredentials:false,timeout:0,wsReconnectDelay:\"full-jitter\",wsBinaryType:\"blob\",disableSelector:\"[hx-disable], [data-hx-disable]\",useTemplateFragments:false,scrollBehavior:\"smooth\",defaultFocusScroll:false,getCacheBusterParam:false,globalViewTransitions:false,methodsThatUseUrlParams:[\"get\"],selfRequestsOnly:false,ignoreTitle:false,scrollIntoViewOnBoost:true,triggerSpecsCache:null},parseInterval:d,_:t,createEventSource:function(e){return new EventSource(e,{withCredentials:true})},createWebSocket:function(e){var t=new WebSocket(e,[]);t.binaryType=Q.config.wsBinaryType;return t},version:\"1.9.11\"};var r={addTriggerHandler:Lt,bodyContains:se,canAccessLocalStorage:U,findThisElement:xe,filterValues:yr,hasAttribute:o,getAttributeValue:te,getClosestAttributeValue:ne,getClosestMatch:c,getExpressionVars:Hr,getHeaders:xr,getInputValues:dr,getInternalData:ae,getSwapSpecification:wr,getTriggerSpecs:it,getTarget:ye,makeFragment:l,mergeObjects:le,makeSettleInfo:T,oobSwap:Ee,querySelectorExt:ue,selectAndSwap:je,settleImmediately:nr,shouldCancel:ut,triggerEvent:ce,triggerErrorEvent:fe,withExtensions:R};var w=[\"get\",\"post\",\"put\",\"delete\",\"patch\"];var i=w.map(function(e){return\"[hx-\"+e+\"], [data-hx-\"+e+\"]\"}).join(\", \");var S=e(\"head\"),q=e(\"title\"),H=e(\"svg\",true);function e(e,t=false){return new RegExp(\`<\${e}(\\\\s[^>]*>|>)([\\\\s\\\\S]*?)<\\\\\/\${e}>\`,t?\"gim\":\"im\")}function d(e){if(e==undefined){return undefined}let t=NaN;if(e.slice(-2)==\"ms\"){t=parseFloat(e.slice(0,-2))}else if(e.slice(-1)==\"s\"){t=parseFloat(e.slice(0,-1))*1e3}else if(e.slice(-1)==\"m\"){t=parseFloat(e.slice(0,-1))*1e3*60}else{t=parseFloat(e)}return isNaN(t)?undefined:t}function ee(e,t){return e.getAttribute&&e.getAttribute(t)}function o(e,t){return e.hasAttribute&&(e.hasAttribute(t)||e.hasAttribute(\"data-\"+t))}function te(e,t){return ee(e,t)||ee(e,\"data-\"+t)}function u(e){return e.parentElement}function re(){return document}function c(e,t){while(e&&!t(e)){e=u(e)}return e?e:null}function L(e,t,r){var n=te(t,r);var i=te(t,\"hx-disinherit\");if(e!==t&&i&&(i===\"*\"||i.split(\" \").indexOf(r)>=0)){return\"unset\"}else{return n}}function ne(t,r){var n=null;c(t,function(e){return n=L(t,e,r)});if(n!==\"unset\"){return n}}function h(e,t){var r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector;return r&&r.call(e,t)}function A(e){var t=\/<([a-z][^\\\/\\0>\\x20\\t\\r\\n\\f]*)\/i;var r=t.exec(e);if(r){return r[1].toLowerCase()}else{return\"\"}}function s(e,t){var r=new DOMParser;var n=r.parseFromString(e,\"text\/html\");var i=n.body;while(t>0){t--;i=i.firstChild}if(i==null){i=re().createDocumentFragment()}return i}function N(e){return\/<body\/.test(e)}function l(e){var t=!N(e);var r=A(e);var n=e;if(r===\"head\"){n=n.replace(S,\"\")}if(Q.config.useTemplateFragments&&t){var i=s(\"<body><template>\"+n+\"<\/template><\/body>\",0);var a=i.querySelector(\"template\").content;if(Q.config.allowScriptTags){oe(a.querySelectorAll(\"script\"),function(e){if(Q.config.inlineScriptNonce){e.nonce=Q.config.inlineScriptNonce}e.htmxExecuted=navigator.userAgent.indexOf(\"Firefox\")===-1})}else{oe(a.querySelectorAll(\"script\"),function(e){_(e)})}return a}switch(r){case\"thead\":case\"tbody\":case\"tfoot\":case\"colgroup\":case\"caption\":return s(\"<table>\"+n+\"<\/table>\",1);case\"col\":return s(\"<table><colgroup>\"+n+\"<\/colgroup><\/table>\",2);case\"tr\":return s(\"<table><tbody>\"+n+\"<\/tbody><\/table>\",2);case\"td\":case\"th\":return s(\"<table><tbody><tr>\"+n+\"<\/tr><\/tbody><\/table>\",3);case\"script\":case\"style\":return s(\"<div>\"+n+\"<\/div>\",1);default:return s(n,0)}}function ie(e){if(e){e()}}function I(e,t){return Object.prototype.toString.call(e)===\"[object \"+t+\"]\"}function k(e){return I(e,\"Function\")}function P(e){return I(e,\"Object\")}function ae(e){var t=\"htmx-internal-data\";var r=e[t];if(!r){r=e[t]={}}return r}function M(e){var t=[];if(e){for(var r=0;r<e.length;r++){t.push(e[r])}}return t}function oe(e,t){if(e){for(var r=0;r<e.length;r++){t(e[r])}}}function X(e){var t=e.getBoundingClientRect();var r=t.top;var n=t.bottom;return r<window.innerHeight&&n>=0}function se(e){if(e.getRootNode&&e.getRootNode()instanceof window.ShadowRoot){return re().body.contains(e.getRootNode().host)}else{return re().body.contains(e)}}function D(e){return e.trim().split(\/\\s+\/)}function le(e,t){for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r]}}return e}function E(e){try{return JSON.parse(e)}catch(e){b(e);return null}}function U(){var e=\"htmx:localStorageTest\";try{localStorage.setItem(e,e);localStorage.removeItem(e);return true}catch(e){return false}}function F(t){try{var e=new URL(t);if(e){t=e.pathname+e.search}if(!\/^\\\/$\/.test(t)){t=t.replace(\/\\\/+$\/,\"\")}return t}catch(e){return t}}function t(e){return Tr(re().body,function(){return eval(e)})}function B(t){var e=Q.on(\"htmx:load\",function(e){t(e.detail.elt)});return e}function V(){Q.logger=function(e,t,r){if(console){console.log(t,e,r)}}}function j(){Q.logger=null}function C(e,t){if(t){return e.querySelector(t)}else{return C(re(),e)}}function f(e,t){if(t){return e.querySelectorAll(t)}else{return f(re(),e)}}function _(e,t){e=p(e);if(t){setTimeout(function(){_(e);e=null},t)}else{e.parentElement.removeChild(e)}}function z(e,t,r){e=p(e);if(r){setTimeout(function(){z(e,t);e=null},r)}else{e.classList&&e.classList.add(t)}}function n(e,t,r){e=p(e);if(r){setTimeout(function(){n(e,t);e=null},r)}else{if(e.classList){e.classList.remove(t);if(e.classList.length===0){e.removeAttribute(\"class\")}}}}function $(e,t){e=p(e);e.classList.toggle(t)}function W(e,t){e=p(e);oe(e.parentElement.children,function(e){n(e,t)});z(e,t)}function v(e,t){e=p(e);if(e.closest){return e.closest(t)}else{do{if(e==null||h(e,t)){return e}}while(e=e&&u(e));return null}}function g(e,t){return e.substring(0,t.length)===t}function G(e,t){return e.substring(e.length-t.length)===t}function J(e){var t=e.trim();if(g(t,\"<\")&&G(t,\"\/>\")){return t.substring(1,t.length-2)}else{return t}}function Z(e,t){if(t.indexOf(\"closest \")===0){return[v(e,J(t.substr(8)))]}else if(t.indexOf(\"find \")===0){return[C(e,J(t.substr(5)))]}else if(t===\"next\"){return[e.nextElementSibling]}else if(t.indexOf(\"next \")===0){return[K(e,J(t.substr(5)))]}else if(t===\"previous\"){return[e.previousElementSibling]}else if(t.indexOf(\"previous \")===0){return[Y(e,J(t.substr(9)))]}else if(t===\"document\"){return[document]}else if(t===\"window\"){return[window]}else if(t===\"body\"){return[document.body]}else{return re().querySelectorAll(J(t))}}var K=function(e,t){var r=re().querySelectorAll(t);for(var n=0;n<r.length;n++){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING){return i}}};var Y=function(e,t){var r=re().querySelectorAll(t);for(var n=r.length-1;n>=0;n--){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_FOLLOWING){return i}}};function ue(e,t){if(t){return Z(e,t)[0]}else{return Z(re().body,e)[0]}}function p(e){if(I(e,\"String\")){return C(e)}else{return e}}function ve(e,t,r){if(k(t)){return{target:re().body,event:e,listener:t}}else{return{target:p(e),event:t,listener:r}}}function de(t,r,n){jr(function(){var e=ve(t,r,n);e.target.addEventListener(e.event,e.listener)});var e=k(r);return e?r:n}function ge(t,r,n){jr(function(){var e=ve(t,r,n);e.target.removeEventListener(e.event,e.listener)});return k(r)?r:n}var pe=re().createElement(\"output\");function me(e,t){var r=ne(e,t);if(r){if(r===\"this\"){return[xe(e,t)]}else{var n=Z(e,r);if(n.length===0){b(\"The selector \"\"+r+\"\" on \"+t+\" returned no matches!\");return[pe]}else{return n}}}}function xe(e,t){return c(e,function(e){return te(e,t)!=null})}function ye(e){var t=ne(e,\"hx-target\");if(t){if(t===\"this\"){return xe(e,\"hx-target\")}else{return ue(e,t)}}else{var r=ae(e);if(r.boosted){return re().body}else{return e}}}function be(e){var t=Q.config.attributesToSettle;for(var r=0;r<t.length;r++){if(e===t[r]){return true}}return false}function we(t,r){oe(t.attributes,function(e){if(!r.hasAttribute(e.name)&&be(e.name)){t.removeAttribute(e.name)}});oe(r.attributes,function(e){if(be(e.name)){t.setAttribute(e.name,e.value)}})}function Se(e,t){var r=Br(t);for(var n=0;n<r.length;n++){var i=r[n];try{if(i.isInlineSwap(e)){return true}}catch(e){b(e)}}return e===\"outerHTML\"}function Ee(e,i,a){var t=\"#\"+ee(i,\"id\");var o=\"outerHTML\";if(e===\"true\"){}else if(e.indexOf(\":\")>0){o=e.substr(0,e.indexOf(\":\"));t=e.substr(e.indexOf(\":\")+1,e.length)}else{o=e}var r=re().querySelectorAll(t);if(r){oe(r,function(e){var t;var r=i.cloneNode(true);t=re().createDocumentFragment();t.appendChild(r);if(!Se(o,e)){t=r}var n={shouldSwap:true,target:e,fragment:t};if(!ce(e,\"htmx:oobBeforeSwap\",n))return;e=n.target;if(n[\"shouldSwap\"]){Be(o,e,e,t,a)}oe(a.elts,function(e){ce(e,\"htmx:oobAfterSwap\",n)})});i.parentNode.removeChild(i)}else{i.parentNode.removeChild(i);fe(re().body,\"htmx:oobErrorNoTarget\",{content:i})}return e}function Ce(e,t,r){var n=ne(e,\"hx-select-oob\");if(n){var i=n.split(\",\");for(var a=0;a<i.length;a++){var o=i[a].split(\":\",2);var s=o[0].trim();if(s.indexOf(\"#\")===0){s=s.substring(1)}var l=o[1]||\"true\";var u=t.querySelector(\"#\"+s);if(u){Ee(l,u,r)}}}oe(f(t,\"[hx-swap-oob], [data-hx-swap-oob]\"),function(e){var t=te(e,\"hx-swap-oob\");if(t!=null){Ee(t,e,r)}})}function Re(e){oe(f(e,\"[hx-preserve], [data-hx-preserve]\"),function(e){var t=te(e,\"id\");var r=re().getElementById(t);if(r!=null){e.parentNode.replaceChild(r,e)}})}function Te(o,e,s){oe(e.querySelectorAll(\"[id]\"),function(e){var t=ee(e,\"id\");if(t&&t.length>0){var r=t.replace(\"\"\",\"\\\\\"\");var n=e.tagName.replace(\":\",\"\\\\:\");var i=o.querySelector(n+\"[id=\"\"+r+\"\"]\");if(i&&i!==o){var a=e.cloneNode();we(e,i);s.tasks.push(function(){we(e,a)})}}})}function Oe(e){return function(){n(e,Q.config.addedClass);zt(e);Nt(e);qe(e);ce(e,\"htmx:load\")}}function qe(e){var t=\"[autofocus]\";var r=h(e,t)?e:e.querySelector(t);if(r!=null){r.focus()}}function a(e,t,r,n){Te(e,r,n);while(r.childNodes.length>0){var i=r.firstChild;z(i,Q.config.addedClass);e.insertBefore(i,t);if(i.nodeType!==Node.TEXT_NODE&&i.nodeType!==Node.COMMENT_NODE){n.tasks.push(Oe(i))}}}function He(e,t){var r=0;while(r<e.length){t=(t<<5)-t+e.charCodeAt(r++)|0}return t}function Le(e){var t=0;if(e.attributes){for(var r=0;r<e.attributes.length;r++){var n=e.attributes[r];if(n.value){t=He(n.name,t);t=He(n.value,t)}}}return t}function Ae(e){var t=ae(e);if(t.onHandlers){for(var r=0;r<t.onHandlers.length;r++){const n=t.onHandlers[r];e.removeEventListener(n.event,n.listener)}delete t.onHandlers}}function Ne(e){var t=ae(e);if(t.timeout){clearTimeout(t.timeout)}if(t.webSocket){t.webSocket.close()}if(t.sseEventSource){t.sseEventSource.close()}if(t.listenerInfos){oe(t.listenerInfos,function(e){if(e.on){e.on.removeEventListener(e.trigger,e.listener)}})}Ae(e);oe(Object.keys(t),function(e){delete t[e]})}function m(e){ce(e,\"htmx:beforeCleanupElement\");Ne(e);if(e.children){oe(e.children,function(e){m(e)})}}function Ie(t,e,r){if(t.tagName===\"BODY\"){return Ue(t,e,r)}else{var n;var i=t.previousSibling;a(u(t),t,e,r);if(i==null){n=u(t).firstChild}else{n=i.nextSibling}r.elts=r.elts.filter(function(e){return e!=t});while(n&&n!==t){if(n.nodeType===Node.ELEMENT_NODE){r.elts.push(n)}n=n.nextElementSibling}m(t);u(t).removeChild(t)}}function ke(e,t,r){return a(e,e.firstChild,t,r)}function Pe(e,t,r){return a(u(e),e,t,r)}function Me(e,t,r){return a(e,null,t,r)}function Xe(e,t,r){return a(u(e),e.nextSibling,t,r)}function De(e,t,r){m(e);return u(e).removeChild(e)}function Ue(e,t,r){var n=e.firstChild;a(e,n,t,r);if(n){while(n.nextSibling){m(n.nextSibling);e.removeChild(n.nextSibling)}m(n);e.removeChild(n)}}function Fe(e,t,r){var n=r||ne(e,\"hx-select\");if(n){var i=re().createDocumentFragment();oe(t.querySelectorAll(n),function(e){i.appendChild(e)});t=i}return t}function Be(e,t,r,n,i){switch(e){case\"none\":return;case\"outerHTML\":Ie(r,n,i);return;case\"afterbegin\":ke(r,n,i);return;case\"beforebegin\":Pe(r,n,i);return;case\"beforeend\":Me(r,n,i);return;case\"afterend\":Xe(r,n,i);return;case\"delete\":De(r,n,i);return;default:var a=Br(t);for(var o=0;o<a.length;o++){var s=a[o];try{var l=s.handleSwap(e,r,n,i);if(l){if(typeof l.length!==\"undefined\"){for(var u=0;u<l.length;u++){var f=l[u];if(f.nodeType!==Node.TEXT_NODE&&f.nodeType!==Node.COMMENT_NODE){i.tasks.push(Oe(f))}}}return}}catch(e){b(e)}}if(e===\"innerHTML\"){Ue(r,n,i)}else{Be(Q.config.defaultSwapStyle,t,r,n,i)}}}function Ve(e){if(e.indexOf(\"<title\")>-1){var t=e.replace(H,\"\");var r=t.match(q);if(r){return r[2]}}}function je(e,t,r,n,i,a){i.title=Ve(n);var o=l(n);if(o){Ce(r,o,i);o=Fe(r,o,a);Re(o);return Be(e,r,t,o,i)}}function _e(e,t,r){var n=e.getResponseHeader(t);if(n.indexOf(\"{\")===0){var i=E(n);for(var a in i){if(i.hasOwnProperty(a)){var o=i[a];if(!P(o)){o={value:o}}ce(r,a,o)}}}else{var s=n.split(\",\");for(var l=0;l<s.length;l++){ce(r,s[l].trim(),[])}}}var ze=\/\\s\/;var x=\/[\\s,]\/;var $e=\/[_$a-zA-Z]\/;var We=\/[_$a-zA-Z0-9]\/;var Ge=[\"\"\",\"\"\",\"\/\"];var Je=\/[^\\s]\/;var Ze=\/[{(]\/;var Ke=\/[})]\/;function Ye(e){var t=[];var r=0;while(r<e.length){if($e.exec(e.charAt(r))){var n=r;while(We.exec(e.charAt(r+1))){r++}t.push(e.substr(n,r-n+1))}else if(Ge.indexOf(e.charAt(r))!==-1){var i=e.charAt(r);var n=r;r++;while(r<e.length&&e.charAt(r)!==i){if(e.charAt(r)===\"\\\\\"){r++}r++}t.push(e.substr(n,r-n+1))}else{var a=e.charAt(r);t.push(a)}r++}return t}function Qe(e,t,r){return $e.exec(e.charAt(0))&&e!==\"true\"&&e!==\"false\"&&e!==\"this\"&&e!==r&&t!==\".\"}function et(e,t,r){if(t[0]===\"[\"){t.shift();var n=1;var i=\" return (function(\"+r+\"){ return (\";var a=null;while(t.length>0){var o=t[0];if(o===\"]\"){n--;if(n===0){if(a===null){i=i+\"true\"}t.shift();i+=\")})\";try{var s=Tr(e,function(){return Function(i)()},function(){return true});s.source=i;return s}catch(e){fe(re().body,\"htmx:syntax:error\",{error:e,source:i});return null}}}else if(o===\"[\"){n++}if(Qe(o,a,r)){i+=\"((\"+r+\".\"+o+\") ? (\"+r+\".\"+o+\") : (window.\"+o+\"))\"}else{i=i+o}a=t.shift()}}}function y(e,t){var r=\"\";while(e.length>0&&!t.test(e[0])){r+=e.shift()}return r}function tt(e){var t;if(e.length>0&&Ze.test(e[0])){e.shift();t=y(e,Ke).trim();e.shift()}else{t=y(e,x)}return t}var rt=\"input, textarea, select\";function nt(e,t,r){var n=[];var i=Ye(t);do{y(i,Je);var a=i.length;var o=y(i,\/[,\\[\\s]\/);if(o!==\"\"){if(o===\"every\"){var s={trigger:\"every\"};y(i,Je);s.pollInterval=d(y(i,\/[,\\[\\s]\/));y(i,Je);var l=et(e,i,\"event\");if(l){s.eventFilter=l}n.push(s)}else if(o.indexOf(\"sse:\")===0){n.push({trigger:\"sse\",sseEvent:o.substr(4)})}else{var u={trigger:o};var l=et(e,i,\"event\");if(l){u.eventFilter=l}while(i.length>0&&i[0]!==\",\"){y(i,Je);var f=i.shift();if(f===\"changed\"){u.changed=true}else if(f===\"once\"){u.once=true}else if(f===\"consume\"){u.consume=true}else if(f===\"delay\"&&i[0]===\":\"){i.shift();u.delay=d(y(i,x))}else if(f===\"from\"&&i[0]===\":\"){i.shift();if(Ze.test(i[0])){var c=tt(i)}else{var c=y(i,x);if(c===\"closest\"||c===\"find\"||c===\"next\"||c===\"previous\"){i.shift();var h=tt(i);if(h.length>0){c+=\" \"+h}}}u.from=c}else if(f===\"target\"&&i[0]===\":\"){i.shift();u.target=tt(i)}else if(f===\"throttle\"&&i[0]===\":\"){i.shift();u.throttle=d(y(i,x))}else if(f===\"queue\"&&i[0]===\":\"){i.shift();u.queue=y(i,x)}else if(f===\"root\"&&i[0]===\":\"){i.shift();u[f]=tt(i)}else if(f===\"threshold\"&&i[0]===\":\"){i.shift();u[f]=y(i,x)}else{fe(e,\"htmx:syntax:error\",{token:i.shift()})}}n.push(u)}}if(i.length===a){fe(e,\"htmx:syntax:error\",{token:i.shift()})}y(i,Je)}while(i[0]===\",\"&&i.shift());if(r){r[t]=n}return n}function it(e){var t=te(e,\"hx-trigger\");var r=[];if(t){var n=Q.config.triggerSpecsCache;r=n&&n[t]||nt(e,t,n)}if(r.length>0){return r}else if(h(e,\"form\")){return[{trigger:\"submit\"}]}else if(h(e,\"input[type=\"button\"], input[type=\"submit\"]\")){return[{trigger:\"click\"}]}else if(h(e,rt)){return[{trigger:\"change\"}]}else{return[{trigger:\"click\"}]}}function at(e){ae(e).cancelled=true}function ot(e,t,r){var n=ae(e);n.timeout=setTimeout(function(){if(se(e)&&n.cancelled!==true){if(!ct(r,e,Wt(\"hx:poll:trigger\",{triggerSpec:r,target:e}))){t(e)}ot(e,t,r)}},r.pollInterval)}function st(e){return location.hostname===e.hostname&&ee(e,\"href\")&&ee(e,\"href\").indexOf(\"#\")!==0}function lt(t,r,e){if(t.tagName===\"A\"&&st(t)&&(t.target===\"\"||t.target===\"_self\")||t.tagName===\"FORM\"){r.boosted=true;var n,i;if(t.tagName===\"A\"){n=\"get\";i=ee(t,\"href\")}else{var a=ee(t,\"method\");n=a?a.toLowerCase():\"get\";if(n===\"get\"){}i=ee(t,\"action\")}e.forEach(function(e){ht(t,function(e,t){if(v(e,Q.config.disableSelector)){m(e);return}he(n,i,e,t)},r,e,true)})}}function ut(e,t){if(e.type===\"submit\"||e.type===\"click\"){if(t.tagName===\"FORM\"){return true}if(h(t,\"input[type=\"submit\"], button\")&&v(t,\"form\")!==null){return true}if(t.tagName===\"A\"&&t.href&&(t.getAttribute(\"href\")===\"#\"||t.getAttribute(\"href\").indexOf(\"#\")!==0)){return true}}return false}function ft(e,t){return ae(e).boosted&&e.tagName===\"A\"&&t.type===\"click\"&&(t.ctrlKey||t.metaKey)}function ct(e,t,r){var n=e.eventFilter;if(n){try{return n.call(t,r)!==true}catch(e){fe(re().body,\"htmx:eventFilter:error\",{error:e,source:n.source});return true}}return false}function ht(a,o,e,s,l){var u=ae(a);var t;if(s.from){t=Z(a,s.from)}else{t=[a]}if(s.changed){t.forEach(function(e){var t=ae(e);t.lastValue=e.value})}oe(t,function(n){var i=function(e){if(!se(a)){n.removeEventListener(s.trigger,i);return}if(ft(a,e)){return}if(l||ut(e,a)){e.preventDefault()}if(ct(s,a,e)){return}var t=ae(e);t.triggerSpec=s;if(t.handledFor==null){t.handledFor=[]}if(t.handledFor.indexOf(a)<0){t.handledFor.push(a);if(s.consume){e.stopPropagation()}if(s.target&&e.target){if(!h(e.target,s.target)){return}}if(s.once){if(u.triggeredOnce){return}else{u.triggeredOnce=true}}if(s.changed){var r=ae(n);if(r.lastValue===n.value){return}r.lastValue=n.value}if(u.delayed){clearTimeout(u.delayed)}if(u.throttle){return}if(s.throttle>0){if(!u.throttle){o(a,e);u.throttle=setTimeout(function(){u.throttle=null},s.throttle)}}else if(s.delay>0){u.delayed=setTimeout(function(){o(a,e)},s.delay)}else{ce(a,\"htmx:trigger\");o(a,e)}}};if(e.listenerInfos==null){e.listenerInfos=[]}e.listenerInfos.push({trigger:s.trigger,listener:i,on:n});n.addEventListener(s.trigger,i)})}var vt=false;var dt=null;function gt(){if(!dt){dt=function(){vt=true};window.addEventListener(\"scroll\",dt);setInterval(function(){if(vt){vt=false;oe(re().querySelectorAll(\"[hx-trigger=\"revealed\"],[data-hx-trigger=\"revealed\"]\"),function(e){pt(e)})}},200)}}function pt(t){if(!o(t,\"data-hx-revealed\")&&X(t)){t.setAttribute(\"data-hx-revealed\",\"true\");var e=ae(t);if(e.initHash){ce(t,\"revealed\")}else{t.addEventListener(\"htmx:afterProcessNode\",function(e){ce(t,\"revealed\")},{once:true})}}}function mt(e,t,r){var n=D(r);for(var i=0;i<n.length;i++){var a=n[i].split(\/:(.+)\/);if(a[0]===\"connect\"){xt(e,a[1],0)}if(a[0]===\"send\"){bt(e)}}}function xt(s,r,n){if(!se(s)){return}if(r.indexOf(\"\/\")==0){var e=location.hostname+(location.port?\":\"+location.port:\"\");if(location.protocol==\"https:\"){r=\"wss:\/\/\"+e+r}else if(location.protocol==\"http:\"){r=\"ws:\/\/\"+e+r}}var t=Q.createWebSocket(r);t.onerror=function(e){fe(s,\"htmx:wsError\",{error:e,socket:t});yt(s)};t.onclose=function(e){if([1006,1012,1013].indexOf(e.code)>=0){var t=wt(n);setTimeout(function(){xt(s,r,n+1)},t)}};t.onopen=function(e){n=0};ae(s).webSocket=t;t.addEventListener(\"message\",function(e){if(yt(s)){return}var t=e.data;R(s,function(e){t=e.transformResponse(t,null,s)});var r=T(s);var n=l(t);var i=M(n.children);for(var a=0;a<i.length;a++){var o=i[a];Ee(te(o,\"hx-swap-oob\")||\"true\",o,r)}nr(r.tasks)})}function yt(e){if(!se(e)){ae(e).webSocket.close();return true}}function bt(u){var f=c(u,function(e){return ae(e).webSocket!=null});if(f){u.addEventListener(it(u)[0].trigger,function(e){var t=ae(f).webSocket;var r=xr(u,f);var n=dr(u,\"post\");var i=n.errors;var a=n.values;var o=Hr(u);var s=le(a,o);var l=yr(s,u);l[\"HEADERS\"]=r;if(i&&i.length>0){ce(u,\"htmx:validation:halted\",i);return}t.send(JSON.stringify(l));if(ut(e,u)){e.preventDefault()}})}else{fe(u,\"htmx:noWebSocketSourceError\")}}function wt(e){var t=Q.config.wsReconnectDelay;if(typeof t===\"function\"){return t(e)}if(t===\"full-jitter\"){var r=Math.min(e,6);var n=1e3*Math.pow(2,r);return n*Math.random()}b(\"htmx.config.wsReconnectDelay must either be a function or the string \"full-jitter\"\")}function St(e,t,r){var n=D(r);for(var i=0;i<n.length;i++){var a=n[i].split(\/:(.+)\/);if(a[0]===\"connect\"){Et(e,a[1])}if(a[0]===\"swap\"){Ct(e,a[1])}}}function Et(t,e){var r=Q.createEventSource(e);r.onerror=function(e){fe(t,\"htmx:sseError\",{error:e,source:r});Tt(t)};ae(t).sseEventSource=r}function Ct(a,o){var s=c(a,Ot);if(s){var l=ae(s).sseEventSource;var u=function(e){if(Tt(s)){return}if(!se(a)){l.removeEventListener(o,u);return}var t=e.data;R(a,function(e){t=e.transformResponse(t,null,a)});var r=wr(a);var n=ye(a);var i=T(a);je(r.swapStyle,n,a,t,i);nr(i.tasks);ce(a,\"htmx:sseMessage\",e)};ae(a).sseListener=u;l.addEventListener(o,u)}else{fe(a,\"htmx:noSSESourceError\")}}function Rt(e,t,r){var n=c(e,Ot);if(n){var i=ae(n).sseEventSource;var a=function(){if(!Tt(n)){if(se(e)){t(e)}else{i.removeEventListener(r,a)}}};ae(e).sseListener=a;i.addEventListener(r,a)}else{fe(e,\"htmx:noSSESourceError\")}}function Tt(e){if(!se(e)){ae(e).sseEventSource.close();return true}}function Ot(e){return ae(e).sseEventSource!=null}function qt(e,t,r,n){var i=function(){if(!r.loaded){r.loaded=true;t(e)}};if(n>0){setTimeout(i,n)}else{i()}}function Ht(t,i,e){var a=false;oe(w,function(r){if(o(t,\"hx-\"+r)){var n=te(t,\"hx-\"+r);a=true;i.path=n;i.verb=r;e.forEach(function(e){Lt(t,e,i,function(e,t){if(v(e,Q.config.disableSelector)){m(e);return}he(r,n,e,t)})})}});return a}function Lt(n,e,t,r){if(e.sseEvent){Rt(n,r,e.sseEvent)}else if(e.trigger===\"revealed\"){gt();ht(n,r,t,e);pt(n)}else if(e.trigger===\"intersect\"){var i={};if(e.root){i.root=ue(n,e.root)}if(e.threshold){i.threshold=parseFloat(e.threshold)}var a=new IntersectionObserver(function(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.isIntersecting){ce(n,\"intersect\");break}}},i);a.observe(n);ht(n,r,t,e)}else if(e.trigger===\"load\"){if(!ct(e,n,Wt(\"load\",{elt:n}))){qt(n,r,t,e.delay)}}else if(e.pollInterval>0){t.polling=true;ot(n,r,e)}else{ht(n,r,t,e)}}function At(e){if(!e.htmxExecuted&&Q.config.allowScriptTags&&(e.type===\"text\/javascript\"||e.type===\"module\"||e.type===\"\")){var t=re().createElement(\"script\");oe(e.attributes,function(e){t.setAttribute(e.name,e.value)});t.textContent=e.textContent;t.async=false;if(Q.config.inlineScriptNonce){t.nonce=Q.config.inlineScriptNonce}var r=e.parentElement;try{r.insertBefore(t,e)}catch(e){b(e)}finally{if(e.parentElement){e.parentElement.removeChild(e)}}}}function Nt(e){if(h(e,\"script\")){At(e)}oe(f(e,\"script\"),function(e){At(e)})}function It(e){var t=e.attributes;for(var r=0;r<t.length;r++){var n=t[r].name;if(g(n,\"hx-on:\")||g(n,\"data-hx-on:\")||g(n,\"hx-on-\")||g(n,\"data-hx-on-\")){return true}}return false}function kt(e){var t=null;var r=[];if(It(e)){r.push(e)}if(document.evaluate){var n=document.evaluate(\".\/\/*[@*[ starts-with(name(), \"hx-on:\") or starts-with(name(), \"data-hx-on:\") or\"+\" starts-with(name(), \"hx-on-\") or starts-with(name(), \"data-hx-on-\") ]]\",e);while(t=n.iterateNext())r.push(t)}else{var i=e.getElementsByTagName(\"*\");for(var a=0;a<i.length;a++){if(It(i[a])){r.push(i[a])}}}return r}function Pt(e){if(e.querySelectorAll){var t=\", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]\";var r=e.querySelectorAll(i+t+\", form, [type=\"submit\"], [hx-sse], [data-hx-sse], [hx-ws],\"+\" [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]\");return r}else{return[]}}function Mt(e){var t=v(e.target,\"button, input[type=\"submit\"]\");var r=Dt(e);if(r){r.lastButtonClicked=t}}function Xt(e){var t=Dt(e);if(t){t.lastButtonClicked=null}}function Dt(e){var t=v(e.target,\"button, input[type=\"submit\"]\");if(!t){return}var r=p(\"#\"+ee(t,\"form\"))||v(t,\"form\");if(!r){return}return ae(r)}function Ut(e){e.addEventListener(\"click\",Mt);e.addEventListener(\"focusin\",Mt);e.addEventListener(\"focusout\",Xt)}function Ft(e){var t=Ye(e);var r=0;for(var n=0;n<t.length;n++){const i=t[n];if(i===\"{\"){r++}else if(i===\"}\"){r--}}return r}function Bt(t,e,r){var n=ae(t);if(!Array.isArray(n.onHandlers)){n.onHandlers=[]}var i;var a=function(e){return Tr(t,function(){if(!i){i=new Function(\"event\",r)}i.call(t,e)})};t.addEventListener(e,a);n.onHandlers.push({event:e,listener:a})}function Vt(e){var t=te(e,\"hx-on\");if(t){var r={};var n=t.split(\"\\n\");var i=null;var a=0;while(n.length>0){var o=n.shift();var s=o.match(\/^\\s*([a-zA-Z:\\-\\.]+:)(.*)\/);if(a===0&&s){o.split(\":\");i=s[1].slice(0,-1);r[i]=s[2]}else{r[i]+=o}a+=Ft(o)}for(var l in r){Bt(e,l,r[l])}}}function jt(e){Ae(e);for(var t=0;t<e.attributes.length;t++){var r=e.attributes[t].name;var n=e.attributes[t].value;if(g(r,\"hx-on\")||g(r,\"data-hx-on\")){var i=r.indexOf(\"-on\")+3;var a=r.slice(i,i+1);if(a===\"-\"||a===\":\"){var o=r.slice(i+1);if(g(o,\":\")){o=\"htmx\"+o}else if(g(o,\"-\")){o=\"htmx:\"+o.slice(1)}else if(g(o,\"htmx-\")){o=\"htmx:\"+o.slice(5)}Bt(e,o,n)}}}}function _t(t){if(v(t,Q.config.disableSelector)){m(t);return}var r=ae(t);if(r.initHash!==Le(t)){Ne(t);r.initHash=Le(t);Vt(t);ce(t,\"htmx:beforeProcessNode\");if(t.value){r.lastValue=t.value}var e=it(t);var n=Ht(t,r,e);if(!n){if(ne(t,\"hx-boost\")===\"true\"){lt(t,r,e)}else if(o(t,\"hx-trigger\")){e.forEach(function(e){Lt(t,e,r,function(){})})}}if(t.tagName===\"FORM\"||ee(t,\"type\")===\"submit\"&&o(t,\"form\")){Ut(t)}var i=te(t,\"hx-sse\");if(i){St(t,r,i)}var a=te(t,\"hx-ws\");if(a){mt(t,r,a)}ce(t,\"htmx:afterProcessNode\")}}function zt(e){e=p(e);if(v(e,Q.config.disableSelector)){m(e);return}_t(e);oe(Pt(e),function(e){_t(e)});oe(kt(e),jt)}function $t(e){return e.replace(\/([a-z0-9])([A-Z])\/g,\"$1-$2\").toLowerCase()}function Wt(e,t){var r;if(window.CustomEvent&&typeof window.CustomEvent===\"function\"){r=new CustomEvent(e,{bubbles:true,cancelable:true,detail:t})}else{r=re().createEvent(\"CustomEvent\");r.initCustomEvent(e,true,true,t)}return r}function fe(e,t,r){ce(e,t,le({error:t},r))}function Gt(e){return e===\"htmx:afterProcessNode\"}function R(e,t){oe(Br(e),function(e){try{t(e)}catch(e){b(e)}})}function b(e){if(console.error){console.error(e)}else if(console.log){console.log(\"ERROR: \",e)}}function ce(e,t,r){e=p(e);if(r==null){r={}}r[\"elt\"]=e;var n=Wt(t,r);if(Q.logger&&!Gt(t)){Q.logger(e,t,r)}if(r.error){b(r.error);ce(e,\"htmx:error\",{errorInfo:r})}var i=e.dispatchEvent(n);var a=$t(t);if(i&&a!==t){var o=Wt(a,n.detail);i=i&&e.dispatchEvent(o)}R(e,function(e){i=i&&(e.onEvent(t,n)!==false&&!n.defaultPrevented)});return i}var Jt=location.pathname+location.search;function Zt(){var e=re().querySelector(\"[hx-history-elt],[data-hx-history-elt]\");return e||re().body}function Kt(e,t,r,n){if(!U()){return}if(Q.config.historyCacheSize<=0){localStorage.removeItem(\"htmx-history-cache\");return}e=F(e);var i=E(localStorage.getItem(\"htmx-history-cache\"))||[];for(var a=0;a<i.length;a++){if(i[a].url===e){i.splice(a,1);break}}var o={url:e,content:t,title:r,scroll:n};ce(re().body,\"htmx:historyItemCreated\",{item:o,cache:i});i.push(o);while(i.length>Q.config.historyCacheSize){i.shift()}while(i.length>0){try{localStorage.setItem(\"htmx-history-cache\",JSON.stringify(i));break}catch(e){fe(re().body,\"htmx:historyCacheError\",{cause:e,cache:i});i.shift()}}}function Yt(e){if(!U()){return null}e=F(e);var t=E(localStorage.getItem(\"htmx-history-cache\"))||[];for(var r=0;r<t.length;r++){if(t[r].url===e){return t[r]}}return null}function Qt(e){var t=Q.config.requestClass;var r=e.cloneNode(true);oe(f(r,\".\"+t),function(e){n(e,t)});return r.innerHTML}function er(){var e=Zt();var t=Jt||location.pathname+location.search;var r;try{r=re().querySelector(\"[hx-history=\"false\" i],[data-hx-history=\"false\" i]\")}catch(e){r=re().querySelector(\"[hx-history=\"false\"],[data-hx-history=\"false\"]\")}if(!r){ce(re().body,\"htmx:beforeHistorySave\",{path:t,historyElt:e});Kt(t,Qt(e),re().title,window.scrollY)}if(Q.config.historyEnabled)history.replaceState({htmx:true},re().title,window.location.href)}function tr(e){if(Q.config.getCacheBusterParam){e=e.replace(\/org\\.htmx\\.cache-buster=[^&]*&?\/,\"\");if(G(e,\"&\")||G(e,\"?\")){e=e.slice(0,-1)}}if(Q.config.historyEnabled){history.pushState({htmx:true},\"\",e)}Jt=e}function rr(e){if(Q.config.historyEnabled)history.replaceState({htmx:true},\"\",e);Jt=e}function nr(e){oe(e,function(e){e.call()})}function ir(a){var e=new XMLHttpRequest;var o={path:a,xhr:e};ce(re().body,\"htmx:historyCacheMiss\",o);e.open(\"GET\",a,true);e.setRequestHeader(\"HX-Request\",\"true\");e.setRequestHeader(\"HX-History-Restore-Request\",\"true\");e.setRequestHeader(\"HX-Current-URL\",re().location.href);e.onload=function(){if(this.status>=200&&this.status<400){ce(re().body,\"htmx:historyCacheMissLoad\",o);var e=l(this.response);e=e.querySelector(\"[hx-history-elt],[data-hx-history-elt]\")||e;var t=Zt();var r=T(t);var n=Ve(this.response);if(n){var i=C(\"title\");if(i){i.innerHTML=n}else{window.document.title=n}}Ue(t,e,r);nr(r.tasks);Jt=a;ce(re().body,\"htmx:historyRestore\",{path:a,cacheMiss:true,serverResponse:this.response})}else{fe(re().body,\"htmx:historyCacheMissLoadError\",o)}};e.send()}function ar(e){er();e=e||location.pathname+location.search;var t=Yt(e);if(t){var r=l(t.content);var n=Zt();var i=T(n);Ue(n,r,i);nr(i.tasks);document.title=t.title;setTimeout(function(){window.scrollTo(0,t.scroll)},0);Jt=e;ce(re().body,\"htmx:historyRestore\",{path:e,item:t})}else{if(Q.config.refreshOnHistoryMiss){window.location.reload(true)}else{ir(e)}}}function or(e){var t=me(e,\"hx-indicator\");if(t==null){t=[e]}oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)+1;e.classList[\"add\"].call(e.classList,Q.config.requestClass)});return t}function sr(e){var t=me(e,\"hx-disabled-elt\");if(t==null){t=[]}oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)+1;e.setAttribute(\"disabled\",\"\")});return t}function lr(e,t){oe(e,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.classList[\"remove\"].call(e.classList,Q.config.requestClass)}});oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.removeAttribute(\"disabled\")}})}function ur(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.isSameNode(t)){return true}}return false}function fr(e){if(e.name===\"\"||e.name==null||e.disabled||v(e,\"fieldset[disabled]\")){return false}if(e.type===\"button\"||e.type===\"submit\"||e.tagName===\"image\"||e.tagName===\"reset\"||e.tagName===\"file\"){return false}if(e.type===\"checkbox\"||e.type===\"radio\"){return e.checked}return true}function cr(e,t,r){if(e!=null&&t!=null){var n=r[e];if(n===undefined){r[e]=t}else if(Array.isArray(n)){if(Array.isArray(t)){r[e]=n.concat(t)}else{n.push(t)}}else{if(Array.isArray(t)){r[e]=[n].concat(t)}else{r[e]=[n,t]}}}}function hr(t,r,n,e,i){if(e==null||ur(t,e)){return}else{t.push(e)}if(fr(e)){var a=ee(e,\"name\");var o=e.value;if(e.multiple&&e.tagName===\"SELECT\"){o=M(e.querySelectorAll(\"option:checked\")).map(function(e){return e.value})}if(e.files){o=M(e.files)}cr(a,o,r);if(i){vr(e,n)}}if(h(e,\"form\")){var s=e.elements;oe(s,function(e){hr(t,r,n,e,i)})}}function vr(e,t){if(e.willValidate){ce(e,\"htmx:validation:validate\");if(!e.checkValidity()){t.push({elt:e,message:e.validationMessage,validity:e.validity});ce(e,\"htmx:validation:failed\",{message:e.validationMessage,validity:e.validity})}}}function dr(e,t){var r=[];var n={};var i={};var a=[];var o=ae(e);if(o.lastButtonClicked&&!se(o.lastButtonClicked)){o.lastButtonClicked=null}var s=h(e,\"form\")&&e.noValidate!==true||te(e,\"hx-validate\")===\"true\";if(o.lastButtonClicked){s=s&&o.lastButtonClicked.formNoValidate!==true}if(t!==\"get\"){hr(r,i,a,v(e,\"form\"),s)}hr(r,n,a,e,s);if(o.lastButtonClicked||e.tagName===\"BUTTON\"||e.tagName===\"INPUT\"&&ee(e,\"type\")===\"submit\"){var l=o.lastButtonClicked||e;var u=ee(l,\"name\");cr(u,l.value,i)}var f=me(e,\"hx-include\");oe(f,function(e){hr(r,n,a,e,s);if(!h(e,\"form\")){oe(e.querySelectorAll(rt),function(e){hr(r,n,a,e,s)})}});n=le(n,i);return{errors:a,values:n}}function gr(e,t,r){if(e!==\"\"){e+=\"&\"}if(String(r)===\"[object Object]\"){r=JSON.stringify(r)}var n=encodeURIComponent(r);e+=encodeURIComponent(t)+\"=\"+n;return e}function pr(e){var t=\"\";for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){oe(n,function(e){t=gr(t,r,e)})}else{t=gr(t,r,n)}}}return t}function mr(e){var t=new FormData;for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){oe(n,function(e){t.append(r,e)})}else{t.append(r,n)}}}return t}function xr(e,t,r){var n={\"HX-Request\":\"true\",\"HX-Trigger\":ee(e,\"id\"),\"HX-Trigger-Name\":ee(e,\"name\"),\"HX-Target\":te(t,\"id\"),\"HX-Current-URL\":re().location.href};Rr(e,\"hx-headers\",false,n);if(r!==undefined){n[\"HX-Prompt\"]=r}if(ae(e).boosted){n[\"HX-Boosted\"]=\"true\"}return n}function yr(t,e){var r=ne(e,\"hx-params\");if(r){if(r===\"none\"){return{}}else if(r===\"*\"){return t}else if(r.indexOf(\"not \")===0){oe(r.substr(4).split(\",\"),function(e){e=e.trim();delete t[e]});return t}else{var n={};oe(r.split(\",\"),function(e){e=e.trim();n[e]=t[e]});return n}}else{return t}}function br(e){return ee(e,\"href\")&&ee(e,\"href\").indexOf(\"#\")>=0}function wr(e,t){var r=t?t:ne(e,\"hx-swap\");var n={swapStyle:ae(e).boosted?\"innerHTML\":Q.config.defaultSwapStyle,swapDelay:Q.config.defaultSwapDelay,settleDelay:Q.config.defaultSettleDelay};if(Q.config.scrollIntoViewOnBoost&&ae(e).boosted&&!br(e)){n[\"show\"]=\"top\"}if(r){var i=D(r);if(i.length>0){for(var a=0;a<i.length;a++){var o=i[a];if(o.indexOf(\"swap:\")===0){n[\"swapDelay\"]=d(o.substr(5))}else if(o.indexOf(\"settle:\")===0){n[\"settleDelay\"]=d(o.substr(7))}else if(o.indexOf(\"transition:\")===0){n[\"transition\"]=o.substr(11)===\"true\"}else if(o.indexOf(\"ignoreTitle:\")===0){n[\"ignoreTitle\"]=o.substr(12)===\"true\"}else if(o.indexOf(\"scroll:\")===0){var s=o.substr(7);var l=s.split(\":\");var u=l.pop();var f=l.length>0?l.join(\":\"):null;n[\"scroll\"]=u;n[\"scrollTarget\"]=f}else if(o.indexOf(\"show:\")===0){var c=o.substr(5);var l=c.split(\":\");var h=l.pop();var f=l.length>0?l.join(\":\"):null;n[\"show\"]=h;n[\"showTarget\"]=f}else if(o.indexOf(\"focus-scroll:\")===0){var v=o.substr(\"focus-scroll:\".length);n[\"focusScroll\"]=v==\"true\"}else if(a==0){n[\"swapStyle\"]=o}else{b(\"Unknown modifier in hx-swap: \"+o)}}}}return n}function Sr(e){return ne(e,\"hx-encoding\")===\"multipart\/form-data\"||h(e,\"form\")&&ee(e,\"enctype\")===\"multipart\/form-data\"}function Er(t,r,n){var i=null;R(r,function(e){if(i==null){i=e.encodeParameters(t,n,r)}});if(i!=null){return i}else{if(Sr(r)){return mr(n)}else{return pr(n)}}}function T(e){return{tasks:[],elts:[e]}}function Cr(e,t){var r=e[0];var n=e[e.length-1];if(t.scroll){var i=null;if(t.scrollTarget){i=ue(r,t.scrollTarget)}if(t.scroll===\"top\"&&(r||i)){i=i||r;i.scrollTop=0}if(t.scroll===\"bottom\"&&(n||i)){i=i||n;i.scrollTop=i.scrollHeight}}if(t.show){var i=null;if(t.showTarget){var a=t.showTarget;if(t.showTarget===\"window\"){a=\"body\"}i=ue(r,a)}if(t.show===\"top\"&&(r||i)){i=i||r;i.scrollIntoView({block:\"start\",behavior:Q.config.scrollBehavior})}if(t.show===\"bottom\"&&(n||i)){i=i||n;i.scrollIntoView({block:\"end\",behavior:Q.config.scrollBehavior})}}}function Rr(e,t,r,n){if(n==null){n={}}if(e==null){return n}var i=te(e,t);if(i){var a=i.trim();var o=r;if(a===\"unset\"){return null}if(a.indexOf(\"javascript:\")===0){a=a.substr(11);o=true}else if(a.indexOf(\"js:\")===0){a=a.substr(3);o=true}if(a.indexOf(\"{\")!==0){a=\"{\"+a+\"}\"}var s;if(o){s=Tr(e,function(){return Function(\"return (\"+a+\")\")()},{})}else{s=E(a)}for(var l in s){if(s.hasOwnProperty(l)){if(n[l]==null){n[l]=s[l]}}}}return Rr(u(e),t,r,n)}function Tr(e,t,r){if(Q.config.allowEval){return t()}else{fe(e,\"htmx:evalDisallowedError\");return r}}function Or(e,t){return Rr(e,\"hx-vars\",true,t)}function qr(e,t){return Rr(e,\"hx-vals\",false,t)}function Hr(e){return le(Or(e),qr(e))}function Lr(t,r,n){if(n!==null){try{t.setRequestHeader(r,n)}catch(e){t.setRequestHeader(r,encodeURIComponent(n));t.setRequestHeader(r+\"-URI-AutoEncoded\",\"true\")}}}function Ar(t){if(t.responseURL&&typeof URL!==\"undefined\"){try{var e=new URL(t.responseURL);return e.pathname+e.search}catch(e){fe(re().body,\"htmx:badResponseUrl\",{url:t.responseURL})}}}function O(e,t){return t.test(e.getAllResponseHeaders())}function Nr(e,t,r){e=e.toLowerCase();if(r){if(r instanceof Element||I(r,\"String\")){return he(e,t,null,null,{targetOverride:p(r),returnPromise:true})}else{return he(e,t,p(r.source),r.event,{handler:r.handler,headers:r.headers,values:r.values,targetOverride:p(r.target),swapOverride:r.swap,select:r.select,returnPromise:true})}}else{return he(e,t,null,null,{returnPromise:true})}}function Ir(e){var t=[];while(e){t.push(e);e=e.parentElement}return t}function kr(e,t,r){var n;var i;if(typeof URL===\"function\"){i=new URL(t,document.location.href);var a=document.location.origin;n=a===i.origin}else{i=t;n=g(t,document.location.origin)}if(Q.config.selfRequestsOnly){if(!n){return false}}return ce(e,\"htmx:validateUrl\",le({url:i,sameHost:n},r))}function he(t,r,n,i,a,e){var o=null;var s=null;a=a!=null?a:{};if(a.returnPromise&&typeof Promise!==\"undefined\"){var l=new Promise(function(e,t){o=e;s=t})}if(n==null){n=re().body}var M=a.handler||Mr;var X=a.select||null;if(!se(n)){ie(o);return l}var u=a.targetOverride||ye(n);if(u==null||u==pe){fe(n,\"htmx:targetError\",{target:te(n,\"hx-target\")});ie(s);return l}var f=ae(n);var c=f.lastButtonClicked;if(c){var h=ee(c,\"formaction\");if(h!=null){r=h}var v=ee(c,\"formmethod\");if(v!=null){if(v.toLowerCase()!==\"dialog\"){t=v}}}var d=ne(n,\"hx-confirm\");if(e===undefined){var D=function(e){return he(t,r,n,i,a,!!e)};var U={target:u,elt:n,path:r,verb:t,triggeringEvent:i,etc:a,issueRequest:D,question:d};if(ce(n,\"htmx:confirm\",U)===false){ie(o);return l}}var g=n;var p=ne(n,\"hx-sync\");var m=null;var x=false;if(p){var F=p.split(\":\");var B=F[0].trim();if(B===\"this\"){g=xe(n,\"hx-sync\")}else{g=ue(n,B)}p=(F[1]||\"drop\").trim();f=ae(g);if(p===\"drop\"&&f.xhr&&f.abortable!==true){ie(o);return l}else if(p===\"abort\"){if(f.xhr){ie(o);return l}else{x=true}}else if(p===\"replace\"){ce(g,\"htmx:abort\")}else if(p.indexOf(\"queue\")===0){var V=p.split(\" \");m=(V[1]||\"last\").trim()}}if(f.xhr){if(f.abortable){ce(g,\"htmx:abort\")}else{if(m==null){if(i){var y=ae(i);if(y&&y.triggerSpec&&y.triggerSpec.queue){m=y.triggerSpec.queue}}if(m==null){m=\"last\"}}if(f.queuedRequests==null){f.queuedRequests=[]}if(m===\"first\"&&f.queuedRequests.length===0){f.queuedRequests.push(function(){he(t,r,n,i,a)})}else if(m===\"all\"){f.queuedRequests.push(function(){he(t,r,n,i,a)})}else if(m===\"last\"){f.queuedRequests=[];f.queuedRequests.push(function(){he(t,r,n,i,a)})}ie(o);return l}}var b=new XMLHttpRequest;f.xhr=b;f.abortable=x;var w=function(){f.xhr=null;f.abortable=false;if(f.queuedRequests!=null&&f.queuedRequests.length>0){var e=f.queuedRequests.shift();e()}};var j=ne(n,\"hx-prompt\");if(j){var S=prompt(j);if(S===null||!ce(n,\"htmx:prompt\",{prompt:S,target:u})){ie(o);w();return l}}if(d&&!e){if(!confirm(d)){ie(o);w();return l}}var E=xr(n,u,S);if(t!==\"get\"&&!Sr(n)){E[\"Content-Type\"]=\"application\/x-www-form-urlencoded\"}if(a.headers){E=le(E,a.headers)}var _=dr(n,t);var C=_.errors;var R=_.values;if(a.values){R=le(R,a.values)}var z=Hr(n);var $=le(R,z);var T=yr($,n);if(Q.config.getCacheBusterParam&&t===\"get\"){T[\"org.htmx.cache-buster\"]=ee(u,\"id\")||\"true\"}if(r==null||r===\"\"){r=re().location.href}var O=Rr(n,\"hx-request\");var W=ae(n).boosted;var q=Q.config.methodsThatUseUrlParams.indexOf(t)>=0;var H={boosted:W,useUrlParams:q,parameters:T,unfilteredParameters:$,headers:E,target:u,verb:t,errors:C,withCredentials:a.credentials||O.credentials||Q.config.withCredentials,timeout:a.timeout||O.timeout||Q.config.timeout,path:r,triggeringEvent:i};if(!ce(n,\"htmx:configRequest\",H)){ie(o);w();return l}r=H.path;t=H.verb;E=H.headers;T=H.parameters;C=H.errors;q=H.useUrlParams;if(C&&C.length>0){ce(n,\"htmx:validation:halted\",H);ie(o);w();return l}var G=r.split(\"#\");var J=G[0];var L=G[1];var A=r;if(q){A=J;var Z=Object.keys(T).length!==0;if(Z){if(A.indexOf(\"?\")<0){A+=\"?\"}else{A+=\"&\"}A+=pr(T);if(L){A+=\"#\"+L}}}if(!kr(n,A,H)){fe(n,\"htmx:invalidPath\",H);ie(s);return l}b.open(t.toUpperCase(),A,true);b.overrideMimeType(\"text\/html\");b.withCredentials=H.withCredentials;b.timeout=H.timeout;if(O.noHeaders){}else{for(var N in E){if(E.hasOwnProperty(N)){var K=E[N];Lr(b,N,K)}}}var I={xhr:b,target:u,requestConfig:H,etc:a,boosted:W,select:X,pathInfo:{requestPath:r,finalRequestPath:A,anchor:L}};b.onload=function(){try{var e=Ir(n);I.pathInfo.responsePath=Ar(b);M(n,I);lr(k,P);ce(n,\"htmx:afterRequest\",I);ce(n,\"htmx:afterOnLoad\",I);if(!se(n)){var t=null;while(e.length>0&&t==null){var r=e.shift();if(se(r)){t=r}}if(t){ce(t,\"htmx:afterRequest\",I);ce(t,\"htmx:afterOnLoad\",I)}}ie(o);w()}catch(e){fe(n,\"htmx:onLoadError\",le({error:e},I));throw e}};b.onerror=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:sendError\",I);ie(s);w()};b.onabort=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:sendAbort\",I);ie(s);w()};b.ontimeout=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:timeout\",I);ie(s);w()};if(!ce(n,\"htmx:beforeRequest\",I)){ie(o);w();return l}var k=or(n);var P=sr(n);oe([\"loadstart\",\"loadend\",\"progress\",\"abort\"],function(t){oe([b,b.upload],function(e){e.addEventListener(t,function(e){ce(n,\"htmx:xhr:\"+t,{lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total})})})});ce(n,\"htmx:beforeSend\",I);var Y=q?null:Er(b,n,T);b.send(Y);return l}function Pr(e,t){var r=t.xhr;var n=null;var i=null;if(O(r,\/HX-Push:\/i)){n=r.getResponseHeader(\"HX-Push\");i=\"push\"}else if(O(r,\/HX-Push-Url:\/i)){n=r.getResponseHeader(\"HX-Push-Url\");i=\"push\"}else if(O(r,\/HX-Replace-Url:\/i)){n=r.getResponseHeader(\"HX-Replace-Url\");i=\"replace\"}if(n){if(n===\"false\"){return{}}else{return{type:i,path:n}}}var a=t.pathInfo.finalRequestPath;var o=t.pathInfo.responsePath;var s=ne(e,\"hx-push-url\");var l=ne(e,\"hx-replace-url\");var u=ae(e).boosted;var f=null;var c=null;if(s){f=\"push\";c=s}else if(l){f=\"replace\";c=l}else if(u){f=\"push\";c=o||a}if(c){if(c===\"false\"){return{}}if(c===\"true\"){c=o||a}if(t.pathInfo.anchor&&c.indexOf(\"#\")===-1){c=c+\"#\"+t.pathInfo.anchor}return{type:f,path:c}}else{return{}}}function Mr(l,u){var f=u.xhr;var c=u.target;var e=u.etc;var t=u.requestConfig;var h=u.select;if(!ce(l,\"htmx:beforeOnLoad\",u))return;if(O(f,\/HX-Trigger:\/i)){_e(f,\"HX-Trigger\",l)}if(O(f,\/HX-Location:\/i)){er();var r=f.getResponseHeader(\"HX-Location\");var v;if(r.indexOf(\"{\")===0){v=E(r);r=v[\"path\"];delete v[\"path\"]}Nr(\"GET\",r,v).then(function(){tr(r)});return}var n=O(f,\/HX-Refresh:\/i)&&\"true\"===f.getResponseHeader(\"HX-Refresh\");if(O(f,\/HX-Redirect:\/i)){location.href=f.getResponseHeader(\"HX-Redirect\");n&&location.reload();return}if(n){location.reload();return}if(O(f,\/HX-Retarget:\/i)){if(f.getResponseHeader(\"HX-Retarget\")===\"this\"){u.target=l}else{u.target=ue(l,f.getResponseHeader(\"HX-Retarget\"))}}var d=Pr(l,u);var i=f.status>=200&&f.status<400&&f.status!==204;var g=f.response;var a=f.status>=400;var p=Q.config.ignoreTitle;var o=le({shouldSwap:i,serverResponse:g,isError:a,ignoreTitle:p},u);if(!ce(c,\"htmx:beforeSwap\",o))return;c=o.target;g=o.serverResponse;a=o.isError;p=o.ignoreTitle;u.target=c;u.failed=a;u.successful=!a;if(o.shouldSwap){if(f.status===286){at(l)}R(l,function(e){g=e.transformResponse(g,f,l)});if(d.type){er()}var s=e.swapOverride;if(O(f,\/HX-Reswap:\/i)){s=f.getResponseHeader(\"HX-Reswap\")}var v=wr(l,s);if(v.hasOwnProperty(\"ignoreTitle\")){p=v.ignoreTitle}c.classList.add(Q.config.swappingClass);var m=null;var x=null;var y=function(){try{var e=document.activeElement;var t={};try{t={elt:e,start:e?e.selectionStart:null,end:e?e.selectionEnd:null}}catch(e){}var r;if(h){r=h}if(O(f,\/HX-Reselect:\/i)){r=f.getResponseHeader(\"HX-Reselect\")}if(d.type){ce(re().body,\"htmx:beforeHistoryUpdate\",le({history:d},u));if(d.type===\"push\"){tr(d.path);ce(re().body,\"htmx:pushedIntoHistory\",{path:d.path})}else{rr(d.path);ce(re().body,\"htmx:replacedInHistory\",{path:d.path})}}var n=T(c);je(v.swapStyle,c,l,g,n,r);if(t.elt&&!se(t.elt)&&ee(t.elt,\"id\")){var i=document.getElementById(ee(t.elt,\"id\"));var a={preventScroll:v.focusScroll!==undefined?!v.focusScroll:!Q.config.defaultFocusScroll};if(i){if(t.start&&i.setSelectionRange){try{i.setSelectionRange(t.start,t.end)}catch(e){}}i.focus(a)}}c.classList.remove(Q.config.swappingClass);oe(n.elts,function(e){if(e.classList){e.classList.add(Q.config.settlingClass)}ce(e,\"htmx:afterSwap\",u)});if(O(f,\/HX-Trigger-After-Swap:\/i)){var o=l;if(!se(l)){o=re().body}_e(f,\"HX-Trigger-After-Swap\",o)}var s=function(){oe(n.tasks,function(e){e.call()});oe(n.elts,function(e){if(e.classList){e.classList.remove(Q.config.settlingClass)}ce(e,\"htmx:afterSettle\",u)});if(u.pathInfo.anchor){var e=re().getElementById(u.pathInfo.anchor);if(e){e.scrollIntoView({block:\"start\",behavior:\"auto\"})}}if(n.title&&!p){var t=C(\"title\");if(t){t.innerHTML=n.title}else{window.document.title=n.title}}Cr(n.elts,v);if(O(f,\/HX-Trigger-After-Settle:\/i)){var r=l;if(!se(l)){r=re().body}_e(f,\"HX-Trigger-After-Settle\",r)}ie(m)};if(v.settleDelay>0){setTimeout(s,v.settleDelay)}else{s()}}catch(e){fe(l,\"htmx:swapError\",u);ie(x);throw e}};var b=Q.config.globalViewTransitions;if(v.hasOwnProperty(\"transition\")){b=v.transition}if(b&&ce(l,\"htmx:beforeTransition\",u)&&typeof Promise!==\"undefined\"&&document.startViewTransition){var w=new Promise(function(e,t){m=e;x=t});var S=y;y=function(){document.startViewTransition(function(){S();return w})}}if(v.swapDelay>0){setTimeout(y,v.swapDelay)}else{y()}}if(a){fe(l,\"htmx:responseError\",le({error:\"Response Status Error Code \"+f.status+\" from \"+u.pathInfo.requestPath},u))}}var Xr={};function Dr(){return{init:function(e){return null},onEvent:function(e,t){return true},transformResponse:function(e,t,r){return e},isInlineSwap:function(e){return false},handleSwap:function(e,t,r,n){return false},encodeParameters:function(e,t,r){return null}}}function Ur(e,t){if(t.init){t.init(r)}Xr[e]=le(Dr(),t)}function Fr(e){delete Xr[e]}function Br(e,r,n){if(e==undefined){return r}if(r==undefined){r=[]}if(n==undefined){n=[]}var t=te(e,\"hx-ext\");if(t){oe(t.split(\",\"),function(e){e=e.replace(\/ \/g,\"\");if(e.slice(0,7)==\"ignore:\"){n.push(e.slice(7));return}if(n.indexOf(e)<0){var t=Xr[e];if(t&&r.indexOf(t)<0){r.push(t)}}})}return Br(u(e),r,n)}var Vr=false;re().addEventListener(\"DOMContentLoaded\",function(){Vr=true});function jr(e){if(Vr||re().readyState===\"complete\"){e()}else{re().addEventListener(\"DOMContentLoaded\",e)}}function _r(){if(Q.config.includeIndicatorStyles!==false){re().head.insertAdjacentHTML(\"beforeend\",\"<style>                      .\"+Q.config.indicatorClass+\"{opacity:0}                      .\"+Q.config.requestClass+\" .\"+Q.config.indicatorClass+\"{opacity:1; transition: opacity 200ms ease-in;}                      .\"+Q.config.requestClass+\".\"+Q.config.indicatorClass+\"{opacity:1; transition: opacity 200ms ease-in;}                    <\/style>\")}}function zr(){var e=re().querySelector(\"meta[name=\"htmx-config\"]\");if(e){return E(e.content)}else{return null}}function $r(){var e=zr();if(e){Q.config=le(Q.config,e)}}jr(function(){$r();_r();var e=re().body;zt(e);var t=re().querySelectorAll(\"[hx-trigger=\"restored\"],[data-hx-trigger=\"restored\"]\");e.addEventListener(\"htmx:abort\",function(e){var t=e.target;var r=ae(t);if(r&&r.xhr){r.xhr.abort()}});const r=window.onpopstate?window.onpopstate.bind(window):null;window.onpopstate=function(e){if(e.state&&e.state.htmx){ar();oe(t,function(e){ce(e,\"htmx:restored\",{document:re(),triggerEvent:ce})})}else{if(r){r(e)}}};setTimeout(function(){ce(e,\"htmx:load\",{});e=null},0)});return Q}()});
`;

/* eslint-disable */
/**
 *
 * @param {FetchEvent} event
 */
function main(event) {  
  if (event.request.url.endsWith("/messages")) {
    const message = messages[Math.floor(Math.random() * messages.length)];
    return new Response(message, {
      headers: {
        "Content-Type": "plain/text"
      }
    });
  }
   
  return new Response(`
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Personal Portfolio - Parthiv Patel</title>

    <!-- bootstrap css cdn link  -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />

    <!-- custom css file -->
    <!-- <link rel="stylesheet" href="css/style.css" /> -->
     <style>
/* appling google font over the website  */
body{
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
}
/* styling menu icon */
.nav-menu{
    border: none;
    background-color: #fff;
    font-size: 1.5rem;
    color: #fca61f;
}
/* styling navbar links  */
.navbar-nav a{
    color: black;
    position: relative;
}
.navbar-nav a:hover{
    color: #fca61f;
}
.navbar-nav a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    top: 35px;
    position: absolute;
    background: #fca61f;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
.navbar-nav a:hover:after { 
    width: 100%; 
    left: 0; 
  }
  /* styling contact btn  */
.c-btn{
    border: none;
    background: #fca61f;
    color: #fff;
    font-size: 1.2rem;
}
/* styling home section starts */
.home{
    background: linear-gradient(33deg, rgba(242,242,255,1) 0%, rgba(235,249,255,1) 100%);
    padding: 30px 0px 10px 0px;
}
.home h2{
    font-size: 3rem;
    line-height: 4rem;
}
.c-orange{
    color: #6f34fe;
    font-weight: 700;
    font-size: 4rem;
}
.home p{
    width: fit-content;
    margin-top: 1rem;
    font-size: 1.2rem;
}
.h-btn:hover{
    background: #6f34fe;
    color: #fff;
    transform: translateY(-20px);
    transition-duration: 1s;
}
.link{
    text-decoration: none;
    font-size: 1.2rem;
    color: #fca61f;
    position: relative;
}
.link::after{
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    top: 20px;
    background-color: #6f34fe;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}
.link:hover{
    color: #6f34fe;
}
.link:hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
}
/* adding animation to home section image  */
.home img{
    animation: floatimg 4s ease-in-out infinite;
}

@keyframes floatimg {
    0%{
        transform: translateX(0);
    }
    50%{
        transform: translateX(-24px);
    }
    100%{
        transform: translateX(0);
    }
}

/* expertise section starts */
.heading small{
    color: #6f34fe;
    font-size: 1.5rem;
    font-weight: 600;
}
.heading h3{
    margin-top: 0.5rem;
    color: #3f396d;
    font-size: 2.5rem;
    font-weight: 700;
}
.expertise h4{
    color: #3f396d;
    font-weight: 700;
}
.expertise a{
    text-decoration: none;
    color: #fca61f;
}
.expertise a:hover{
    color: #6f34fe;
}
.expertise .service-card{
    text-align: center;
    padding: 15px 15px;
    border-radius: 0.7rem;
}

/* skill section starts */
.skill{
    background-color: rgb(234, 234, 249);
}
.progress-card{
    padding: 12% 10% 10% 15%;
    background-color: #fff;
    text-align: center;
    border-radius: 10%;
}
.progress-card:hover{
    transform: scale(1.1,1.1);
    transition-duration: 0.6s;
}
.circular-progress{
    position: relative;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background: conic-gradient(#7d2ae8 3.6deg, #ededed 0deg);
    display: flex;
    align-items: center;
    justify-content: center;
}
.circular-progress::before{
    content: "";
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: #fff;
}
.progress-value{
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
}
.html-progress{
    color: #fca61f;
}
.javascript-progress{
    color: #6f34fe;
}
.php-progress{
    color: #20c997;
}
.reactjs-progress{
    color: #3f396d;
}
.text{
    font-size: 1.2rem;
    font-weight: 500;
}
.heading p{
    font-size: 1.3rem;
}

/* portfolio section starts */
#myBtnContainer{
    margin-bottom: 45px;
}
#myBtnContainer button{
  border: none;
  color: black;
  background: transparent;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;   
  display: inline-block;
  margin: 0 25px;
}
#myBtnContainer button:hover{
    color: #fca61f;
}

#myBtnContainer button:focus{
    outline: none;
}
.post .content h4{
    font-size: 1rem;
    font-weight: 700;
}
.post .card{
    border: none;
}

/* testimonial section starts */
.testimonial img:hover{
    transform: scale(1.2,1.2);
    transition-duration: 1s;
}
.testimonial h4{
    color: #3f396d;
}
.testimonial i{
    font-size: 2.9rem;
    color: #fca61f;
    
}
.testimonial .nextprev-btn{
    border: none;
    background-color: #fff;
}
.prev:hover,.prev-btn:hover{
    color:#6f34fe;
    transform: translateX(-10px);
    transition-duration: 1s;
}
.next:hover,.next-btn:hover{
    color:#6f34fe;
    transform: translateX(10px);
    transition-duration: 1s;
}

/* blog section starts */
.blog{
    background-color: #f2f2ff;
}
.blog .blogpost .card{
    border: none;
    border-radius: 5%;
}
.nav-bg{
    background-color: #fff;
}

.blog .blogpost small{
    color: #6f34fe;
    font-size: 1.1rem;
}
.blog .blogpost h4,.blogpost a{
    color: #3f396d;
    font-weight: 700;
    margin-top: 1rem;
    text-decoration: none;
}
.blogpost a:hover{
    color: #fca61f;
}
.blog .blogpost .read-more-btn{
    text-decoration: none;
    color: #fca61f;
    font-size: 1.1rem;
}
.blog .blogpost .read-more-btn:hover{
    color: #6f34fe;
}
/* styling modal group  */
.btn-c{
    margin-left: 94%;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2rem;
    margin-top: -3%;
}
.btn-c i{
    color: #fca61f;
}
.modal-body .content span{
    font-size: 1rem;
}
.modal-body .content small{
    font-size: 1rem;
    color: #6f34fe;
}
/* contact section starts */
.contact{
    background-color: #f3f3f3;
}
.contact-details i{
    font-size: 1.5rem;
    color: #fca61f;
}
.contact-details p{
    font-size: 1.2rem;
    margin-left: 1rem;
}
.contact-form .form-control:focus{
    box-shadow: none;
    border: 1px solid #fca61f;
}
.contact-form .form-control{
    padding: 10px 10px;
    width: 80%;
}

/* footer section starts */
footer{
    background-color: #211e39;
}

footer .link-group a{
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
    color: #6c757d;
    font-size: 1.1rem;
    margin-top: 1rem;
}
footer .link-group a:hover{
    color: #fca61f;
}
.social-links button{
    border: none;
    margin-right: 1rem;
    font-size: 1.2rem;
    background-color: #fff;
    padding: 14px 15px 10px 15px;
}
.social-links .dribble{
    color: #f33a7e;
}
.social-links button:hover{
    color: #fff;
    transform: translateY(-20px);
    transition-duration: 1s;
}
.social-links .dribble:hover{
    background-color: #f33a7e;
}
.social-links .whatsapp{
    color: #25D366;
}
.social-links .whatsapp:hover{
    background-color: #25D366;
}
.social-links .behance{
    color: #255afc;
}
.social-links .behance:hover{
    background-color: #255afc;
}

/* styling back to top button */
#btn-back-to-top {
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: none;
    font-size: 1.4rem;
    background-color: #fca61f;
    color: #fff;
    animation: pulse 3s infinite;
}
     </style>

    <!-- google font link -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- bootstrap icon cdn link  -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
    />

    <!-- for adding animation to website we have use AOS library 
    AOS Library css file cdn link -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <!-- jquery cdn link  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  </head>
  <body>
    <!-- navbar starts -->
    <nav
      id="navbar-top"
      class="navbar navbar-expand-lg navbar-light bg-white sticky-top"
    >
      <div class="container-fluid px-5">
        <a class="navbar-brand fw-bold fs-2" href="#" style="color: #3f396d"
          >Portfolio</a
        >
        <button
          class="nav-menu d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i class="bi bi-menu-button-fill"></i>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav gap-4" style="font-size: 1.1rem">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#service">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonial">Testimonials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <button class="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Contact</button>
      </div>
    </nav>
    <!-- navbar ends here -->

    <!-- home section starts  -->
    <section class="home pt-5 pb-5" id="home">
      <div class="row justify-content-evenly align-middle">
        <!-- here data-aos is used for adding aos animation  -->
        <div class="col-10 col-md-6 text-center text-md-start" data-aos="slide-right">
          <h2 style="color: #3f396d">
            Hello! I Am <br /><span class="c-orange">Parthiv Patel</span>
          </h2>
          <p class="text-muted">
            I"m A Web Developer having 5 years of experience in expertise of
            creating website with fully responsive Also with backend part too.
          </p>
          <button class="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
            Hire Me
          </button>
          <a href="" class="link ms-4 d-none">See My Work</a>
        </div>
        <div class="col-10 col-md-4 d-none d-md-block">
          <img src="https://ik.imagekit.io/fb8a8hbvn/166621392.jpg?updatedAt=1732953541708" class="img-fluid" alt="" />
        </div>
      </div>
    </section>
    <!-- home section ends here -->

    <!-- expertise section starts -->
    <section class="expertise mt-5" id="service">
      <div class="heading text-center">
        <small>My Expertise</small>
        <h3>
          Provide Wide Range of <br />
          Digital Services
        </h3>
      </div>
      <div class="row justify-content-evenly mt-5">
        <div class="col-10 col-md-4" data-aos="fade-up">
          <div class="service-card">
            <div class="img">
              <img
                src="https://ik.imagekit.io/fb8a8hbvn/Black/images/service-icon1.png?updatedAt=1732954010504"
                class="w-25 img-fluid img"
                alt=""
              />
            </div>
            <div class="content mt-3">
              <h4>Web Design</h4>
              <p class="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum neces aibus minima veniam.
              </p>
              <a href="" class="link">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-10" data-aos="fade-up">
          <div class="service-card">
            <div class="img">
              <img
                src="https://ik.imagekit.io/fb8a8hbvn/Black/images/service-icon2.png?updatedAt=1732954010410"
                class="w-25 img-fluid img"
                alt=""
              />
            </div>
            <div class="content mt-3">
              <h4>Web Development</h4>
              <p class="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum neces aibus minima veniam.
              </p>
              <a href="" class="link">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-10" data-aos="fade-up">
          <div class="service-card">
            <div class="img">
              <img
                src="https://ik.imagekit.io/fb8a8hbvn/Black/images/service-icon3.png?updatedAt=1732954010466"
                class="w-25 img-fluid img"
                alt=""
              />
            </div>
            <div class="content mt-3">
              <h4>Debugging</h4>
              <p class="text-muted">
                Dolor repellendus temporibus autem quibusdam officiis debitis
                rerum neces aibus minima veniam.
              </p>
              <a href="" class="link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- expertise section ends here -->

    <!-- skill section starts -->
    <section class="skill mt-5 py-5" id="about">
      <div class="row justify-content-evenly">
        <div class="col-10 col-md-5 skill-with-progress" data-aos="slide-right">
          <div class="row justify-content-evenly">
            <div class="col-10 col-md-6">
              <div class="progress-card ms-3 ms-md-0">
                <div class="circular-progress html-css">
                  <span class="progress-value html-progress">0%</span>
                </div>
                <br />
                <span class="text">HTML & CSS</span>
              </div>
            </div>
            <div class="col-10 col-md-6 mt-4 mt-md-0">
              <div class="progress-card ms-3 ms-md-0">
                <div class="circular-progress javascript">
                  <span class="progress-value javascript-progress">0%</span>
                </div>
                <br />
                <span class="text">JavaScript</span>
              </div>
            </div>
          </div>
          <div class="row justify-content-evenly mt-4">
            <div class="col-10 col-md-6">
              <div class="progress-card ms-3 ms-md-0">
                <div class="circular-progress php">
                  <span class="progress-value php-progress">0%</span>
                </div>
                <br />
                <span class="text">PHP</span>
              </div>
            </div>
            <div class="col-10 col-md-6 mt-4 mt-md-0">
              <div class="progress-card ms-3  ms-md-0">
                <div class="circular-progress reactjs">
                  <span class="progress-value reactjs-progress">0%</span>
                </div>
                <br>
                <span class="text">ReactJS</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-5 skill-detail" data-aos="slide-left">
          <div class="heading mt-5 mt-md-3">
            <small>My Skills</small>
            <h3>Beautiful & Unique Digital Experiences</h3>
            <p class="text-muted">
              Nostrum exercitationem ullam corporis suscipit laborioa nisi ut
              aliquid exrea commodi consequatur magni dolores aos qui ratione
              voluptatem nesciunt.
            </p>
            <p class="text-muted">
              Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
              consequntar magni dolores.
            </p>
            <button class="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
              <!-- here download attribute is used for adding download functionality to button  -->
              <a
                href="Entry Level Web Developer Resume.pdf"
                download="SampleCV"
                style="text-decoration: none;color: #fff;"
                >Download CV</a
              >
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- skill section end here -->

    <!-- portfolio section starts here -->
    <section class="portfolio" id="portfolio">
      <div class="heading text-center pt-5">
        <small>Creative Work</small>
        <h3>Check My Portfolio</h3>
      </div>


      <div class="portfolio-body">
        <div class="row justify-content-evenly px-4">
        <div class="row justify-content-evenly mt-4 px-4">
          <div class="post col-md-4 game all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div class="card">
              <img src="https://ik.imagekit.io/fb8a8hbvn/photo-1661956602116-aa6865609028_auto=format&fit=crop&q=80&w=800&h=500?updatedAt=1732951006637" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h4 class="card-title">E-Commerce Platform (industrial website)</h4>
                <span class="badge bg-secondary badge-pill">HTML&CSS</span>
                <span class="badge bg-secondary badge-pill">JavaScript</span>
                <span class="badge bg-secondary badge-pill mb-2">App</span
                ><br />
                <a href="https://parthivpatel2006.github.io/Bhagwati-Industries/" class="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div class="post col-md-4 website all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div class="card">
              <img src="https://ik.imagekit.io/fb8a8hbvn/photo-1454165804606-c3d57bc86b40.avif?updatedAt=1732951092197" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h4 class="card-title">Linkedin landing page
                </h4>
                <span class="badge bg-secondary badge-pill">HTML&CSS</span>
                <span class="badge bg-secondary badge-pill">JavaScript</span>
                <span class="badge bg-secondary badge-pill mb-2">Game</span
                ><br />
                <a href="https://parthivpatel2006.github.io/page-1-Homies/2.html" class="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
          <div class="post col-md-4 all col-10 mt-3 mt-md-0" data-aos="fade-up">
            <div class="card">
              <img
                src="https://ik.imagekit.io/fb8a8hbvn/download.jpg?updatedAt=1732811730863"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h4 class="card-title">Netflix-clone</h4>
                <span class="badge bg-secondary badge-pill">HTML&CSS</span>
                <span class="badge bg-secondary badge-pill">JavaScript</span>
                <span class="badge bg-secondary badge-pill mb-2">Web App</span
                ><br />
                <a href="#" class="read-more-btn link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- portfolio section ends here -->

    <!-- testimonial section starts  -->
    <section class="testimonial mt-5 pt-5" id="testimonial">
      <div class="row justify-content-evenly">
        <div class="col-md-4 col-10" data-aos="slide-right">
          <img src="https://ik.imagekit.io/fb8a8hbvn/Black/images/tastimonials-img.png?updatedAt=1732954011016" class="img-fluid" alt="" />
        </div>
        <div class="col-md-6 col-10 mt-5" data-aos="slide-left">
          <div class="heading">
            <small>Testimonials</small>
            <h3>Happy Clients Feedback</h3>
            <!-- here we will use carousel element from bootstrap -->
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row justify-content-evenly">
                    <div class="col-2 text-center">
                      <i class="bi bi-quote"></i>
                    </div>
                    <div class="col-10">
                      <p class="text-muted">
                        
                      </p>
                      <h4>Kevin Andrew</h4>
                      <small class="fs-6 text-muted">CEO of Company</small>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row justify-content-evenly">
                    <div class="col-2 text-center">
                      <i class="bi bi-quote"></i>
                    </div>
                    <div class="col-10">
                      <p class="text-muted">
                        
                      </p>
                      <h4>Kevin Andrew</h4>
                      <small class="fs-6 text-muted">CEO of Company</small>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row justify-content-evenly">
                    <div class="col-2 text-center">
                      <i class="bi bi-quote"></i>
                    </div>
                    <div class="col-10">
                      <p class="text-muted">
                        
                      </p>
                      <h4>Kevin Andrew</h4>
                      <small class="fs-6 text-muted">CEO of Company</small>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="nextprev-btn rounded-pill prev-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <i class="bi bi-arrow-left-circle-fill prev"></i>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="nextprev-btn rounded-pill next-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <i class="bi bi-arrow-right-circle-fill next"></i>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- testimonial ends here -->

    <!-- blog section starts -->
   
    <!-- blog section ends here -->

    <!-- contact section starts -->
    <section class="contact py-5" id="contact">
      <div class="heading text-center">
        <small>Get in Touch</small>
        <h3>Any Questions? Feel Free to Contact</h3>
      </div>
      <div class="row justify-content-evenly mt-5">
        <div class="col-md-5 col-10 contact-details" data-aos="slide-right">
          <div class="row justify-content-evenly">
            <div class="col-1">
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <div class="col-11">
              <p>Ahmedabad , Gujarat</p>
            </div>
          </div>
          <div class="row justify-content-evenly">
            <div class="col-1">
              <i class="bi bi-telephone-fill"></i>
            </div>
            <div class="col-11">
              <p>+91 9810087930</p>
            </div>
          </div>
          <div class="row justify-content-evenly">
            <div class="col-1">
              <i class="bi bi-send-fill"></i>
            </div>
            <div class="col-11">
              <p>parthivpatel9343@gmail.com</p>
            </div>
          </div>
          <div class="row justify-content-evenly">
            <div class="col-1">
             
            </div>
            
          </div>
        </div>
        <div class="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
          <div class="contact-form">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="E-mail"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Mobile No."
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button class="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- contact section ends here -->

      <!-- now we will make back to top button when user click on it it will be redirected to top page  -->
    <button
      type="button"
      class="btn btn-floating btn-lg rounded-pill"
      id="btn-back-to-top"
    >
      <i class="bi bi-arrow-up"></i>
    </button>

    <!-- footer section starts  -->
    <footer class="text-center text-muted py-4">
      <h3 class="text-white pt-4" data-aos="fade-up">Portfolio</h3>
      <div class="link-group mt-5" data-aos="fade-up">
        <a href="#home">Home</a>
        <div class="vr"></div>
        <a href="#about">About</a>
        <div class="vr"></div>
        <a href="#service">Service</a>
        <div class="vr"></div>
        <a href="#portfolio">Portfolio</a>
        <div class="vr"></div>
        <a href="#blog">Blog</a>
        <div class="vr"></div>
        <a href="#contact">Contact</a>
      </div>
      <div class="social-links mt-5" data-aos="fade-up">
        <button href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFmIiT3KtWOTwAAAZN8EUWY_bB-nxlW8coNgaLZuZeDL2LQx8s31ipVd0suvJQqd1ooqxfvfdcAFBqMmCfDEqAyXl-36u2_drvbRRP3zBiUXkkUp3mDWJt8VLThsHIN7Q4T07g=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fparthiv-patel-3499812a5%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" class="rounded-pill Linkedin">
          <i class="bi bi-linkedin"></i>
        </button>
        <button href="https://github.com/ParthivPatel2006" class="rounded-pill github">
          <i class="bi bi-github"></i>
        </button>
       
      </div>
      <hr class="text-muted my-4" />

      <p>Copyright 2024 Portfolio | All Rights Reserved.</p>
    </footer>
    <!-- footer section ends here -->

    <!-- AOS library javascript link  -->
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init({
        duration: 1000,
        offset: 50,
      });
    </script>
    <!-- custom js file linking -->
    <script>
// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = "${htmlStartValue}%";
  htmlProgress.style.background = "conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)";

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = "${javascriptStartValue}%";
  javascriptProgress.style.background = "conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)";

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = "${phpStartValue}%";
  phpProgress.style.background = "conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)";

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = "${reactStartValue}%";
  reactProgress.style.background = "conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)";

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        document.getElementById("navbar-top").classList.add("fixed-top");
        // add padding top to show content behind navbar
        navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = navbar_height + "px";
      } else {
        document.getElementById("navbar-top").classList.remove("fixed-top");
         // remove padding top from body
        document.body.style.paddingTop = "0";
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



document.addEventListener("copy",function(e){
    e.preventDefault();
    const customeMessage = "Ab copy karna madarchod";
    e.clipboardData.setData("text/plain",customeMessage);
});

    </script>
    <link rel="stylesheet" href="js/script.js">
  </body>
</html>
  ", {
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}

export default main;
