
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function () {
	'use strict';

	var n,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),null!=n.vnode&&n.vnode(r),r}function y(){return {current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!g.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(g);}function g(){for(var n;g.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=$(f,o,i,l.__n,void 0!==f.ownerSVGElement,null!=o.__h?[r]:null,u,null==r?_(o):r,o.__h),j(u,o),t!=r&&w(o)));});}function m(n,l,u,i,t,o,r,c,s,h){var y,d,w,k,g,m,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null;}g=$(n,k,w=w||f,t,o,r,c,s,h),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||g,k)),null!=g?(null==m&&(m=g),s=x(n,k,w,A,r,g,s),h||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w));}if(u.__e=m,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&L(A[y],A[y]);if(b)for(y=0;y<b.length;y++)I(b[y],b[++y],b[++y]);}function b(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){b(n,l);}):l.push(n)),l}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else {for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r;}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px";}function C(n,l,u,i,t){var o,r,f;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l+o]=u,f=o?N:z,u?i||n.addEventListener(l,f,o):n.removeEventListener(l,f,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type+!1](n.event?n.event(l):l);}function N(l){this.l[l.type+!0](n.event?n.event(l):l);}function T(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&T(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)));}function $(l,u,i,t,o,r,f,e,c){var a,h,v,y,_,w,k,g,b,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(g,x):(u.__c=h=new d(g,x),h.constructor=P,h.render=M),b&&b.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,h.__h.length&&f.push(h),T(u,e,l);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,w);});}h.context=x,h.props=g,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),k&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=H(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),n.__e(l,u,i);}return u.__e}function j(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function H(n,l,u,i,t,o,r,c){var s,a,h,v,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1;}if(null===l.type)p===d||c&&n.data===d||(n.data=d);else {if(null!=o&&(o=e.slice.call(n.childNodes)),h=(p=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===n.innerHTML)||(n.innerHTML=v&&v.__html||""));}A(n,d,p,t,c),v?l.__k=[]:(s=l.props.children,m(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&(s!==n.value||"progress"===l.type&&!s)&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&a(o);}function M(n,l,u){return this.constructor(n,u)}function O(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=h(p,null,[l]),c=[],$(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),j(c,l);}function S(n,l){O(n,l,o);}function q(n,l,u){var i,t,o,r=arguments,f=s({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,i){return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t,o=l.__h;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return l.__h=o,u.__E=u}catch(l){n=l;}throw n}},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,o=f,r=0;

	var t$1,u$1,r$1,o$1=0,i$1=[],c$1=n.__r,f$1=n.diffed,e$1=n.__c,a$1=n.unmount;function v$1(t,r){n.__h&&n.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function m$1(n){return o$1=1,p$1(k$1,n)}function p$1(n,r,o){var i=v$1(t$1++,2);return i.t=n,i.__c||(i.__c=u$1,i.__=[o?o(r):k$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}]),i.__}function y$1(r,o){var i=v$1(t$1++,3);!n.__s&&j$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__H.__h.push(i));}function l(r,o){var i=v$1(t$1++,4);!n.__s&&j$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__h.push(i));}function h$1(n){return o$1=5,_$1(function(){return {current:n}},[])}function s$1(n,t,u){o$1=6,l(function(){"function"==typeof n?n(t()):n&&(n.current=t());},null==u?u:u.concat(n));}function _$1(n,u){var r=v$1(t$1++,7);return j$1(r.__H,u)?(r.__H=u,r.__h=n,r.__=n()):r.__}function A$1(n,t){return o$1=8,_$1(function(){return n},t)}function F(n){var r=u$1.context[n.__c],o=v$1(t$1++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u$1)),r.props.value):n.__}function T$1(t,u){n.useDebugValue&&n.useDebugValue(u?u(t):t);}function q$1(){i$1.some(function(t){if(t.__P)try{t.__H.__h.forEach(b$1),t.__H.__h.forEach(g$1),t.__H.__h=[];}catch(u){return t.__H.__h=[],n.__e(u,t.__v),!0}}),i$1=[];}n.__r=function(n){c$1&&c$1(n),t$1=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(b$1),r.__h.forEach(g$1),r.__h=[]);},n.diffed=function(t){f$1&&f$1(t);var u=t.__c;u&&u.__H&&u.__H.__h.length&&(1!==i$1.push(u)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),x$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);x$1&&(t=requestAnimationFrame(u));})(q$1));},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(b$1),t.__h=t.__h.filter(function(n){return !n.__||g$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),e$1&&e$1(t,u);},n.unmount=function(t){a$1&&a$1(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(b$1);}catch(t){n.__e(t,u.__v);}};var x$1="function"==typeof requestAnimationFrame;function b$1(n){"function"==typeof n.u&&n.u();}function g$1(n){n.u=n.__();}function j$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function k$1(n,t){return "function"==typeof t?t(n):t}

	function S$1(n,t){for(var e in t)n[e]=t[e];return n}function w$1(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function C$1(n){this.props=n;}function g$2(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:w$1(this.props,n)}function r(t){return this.shouldComponentUpdate=e,h(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(C$1.prototype=new d).isPureReactComponent=!0,C$1.prototype.shouldComponentUpdate=function(n,t){return w$1(this.props,n)||w$1(this.state,t)};var R=n.__b;n.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var x$2="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function N$1(n){function t(t,e){var r=S$1({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=x$2,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var k$2=function(n,t){return null==n?null:b(b(n).map(t))},O$1={map:k$2,forEach:k$2,count:function(n){return n?b(n).length:0},only:function(n){var t=b(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:b},A$2=n.__e;function L$1(n){return n&&((n=S$1({},n)).__c=null,n.__k=n.__k&&n.__k.map(L$1)),n}function U(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(U)),n}function F$1(){this.__u=0,this.t=null,this.__b=null;}function M$1(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function j$2(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return h(e,u)}return u.displayName="Lazy",u.__f=!0,u}function D(){this.u=null,this.o=null;}n.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t.__c);A$2(n,t,e);},(F$1.prototype=new d).__c=function(n,t){var e=this;null==e.t&&(e.t=[]),e.t.push(t);var r=M$1(e.__v),u=!1,o=function(){u||(u=!0,t.componentWillUnmount=t.__c,r?r(i):i());};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){o(),t.__c&&t.__c();};var i=function(){var n;if(!--e.__u)for(e.__v.__k[0]=U(e.state.__e),e.setState({__e:e.__b=null});n=e.t.pop();)n.forceUpdate();},c=e.__v;c&&!0===c.__h||e.__u++||e.setState({__e:e.__b=e.__v.__k[0]}),n.then(o,o);},F$1.prototype.componentWillUnmount=function(){this.t=[];},F$1.prototype.render=function(n,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=L$1(this.__b)),this.__b=null);var e=t.__e&&h(p,null,n.fallback);return e&&(e.__h=null),[h(p,null,t.__e?null:n.children),e]};var I$1=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function T$2(n){return this.getChildContext=function(){return n.context},n.children}function W(n){var t=this,e=n.i,r=h(T$2,{context:t.context},n.__v);t.componentWillUnmount=function(){var n=t.l.parentNode;n&&n.removeChild(t.l),L(t.s);},t.i&&t.i!==e&&(t.componentWillUnmount(),t.h=!1),n.__v?t.h?(e.__k=t.__k,O(r,e),t.__k=e.__k):(t.l=document.createTextNode(""),t.__k=e.__k,S("",e),e.appendChild(t.l),t.h=!0,t.i=e,O(r,e,t.l),e.__k=t.__k,t.__k=t.l.__k):t.h&&t.componentWillUnmount(),t.s=r;}function P$1(n,t){return h(W,{__v:n,i:t})}(D.prototype=new d).__e=function(n){var t=this,e=M$1(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),I$1(t,n,r)):u();};e?e(o):o();}},D.prototype.render=function(n){this.u=null,this.o=new Map;var t=b(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){I$1(n,e,t);});};var z$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B$1="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;function H$1(n,t,e){return null==t.__k&&(t.textContent=""),O(n,t),"function"==typeof e&&e(),n?n.__c:null}function Z(n,t,e){return S(n,t),"function"==typeof e&&e(),n?n.__c:null}d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(d.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var Y=n.event;function $$1(){}function q$2(){return this.cancelBubble}function G(){return this.defaultPrevented}n.event=function(n){return Y&&(n=Y(n)),n.persist=$$1,n.isPropagationStopped=q$2,n.isDefaultPrevented=G,n.nativeEvent=n};var J,K={configurable:!0,get:function(){return this.class}},Q=n.vnode;n.vnode=function(n){n.$$typeof=z$1;var t=n.type,e=n.props;if("function"==typeof t)(K.enumerable="className"in e)&&(e.class=e.className),Object.defineProperty(e,"className",K);else if(t){var r={};for(var u in e){var o=e[u];"className"===u&&(r.class=o,K.enumerable=!0),"defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!B$1.test(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():V.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o;}Object.defineProperty(r,"className",K),"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=b(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),n.props=r;}Q&&Q(n);};var X=n.__r;n.__r=function(n){X&&X(n),J=n.__c;};var nn={ReactCurrentDispatcher:{current:{readContext:function(n){return J.__n[n.__c].props.value}}}};function en(n){return h.bind(null,n)}function rn(n){return !!n&&n.$$typeof===z$1}function un(n){return rn(n)?q.apply(null,arguments):n}function on(n){return !!n.__k&&(O(null,n),!0)}function cn(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)};var React = {useState:m$1,useReducer:p$1,useEffect:y$1,useLayoutEffect:l,useRef:h$1,useImperativeHandle:s$1,useMemo:_$1,useCallback:A$1,useContext:F,useDebugValue:T$1,version:"16.8.0",Children:O$1,render:H$1,hydrate:Z,unmountComponentAtNode:on,createPortal:P$1,createElement:h,createContext:B,createFactory:en,cloneElement:un,createRef:y,Fragment:p,isValidElement:rn,findDOMNode:cn,Component:d,PureComponent:C$1,memo:g$2,forwardRef:N$1,unstable_batchedUpdates:ln,StrictMode:p,Suspense:F$1,SuspenseList:D,lazy:j$2,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:nn};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var reactIs_development = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}
	});

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development;
	}
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	{
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  {
	    loggedTypeFailures = {};
	  }
	};

	var checkPropTypes_1 = checkPropTypes;

	var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning$1 = function() {};

	{
	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if ( typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$1(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!reactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      {
	        if (arguments.length > 1) {
	          printWarning$1(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has$1(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$1(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  var ReactIs = reactIs;

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
	}
	});

	var ReactReduxContext =
	/*#__PURE__*/
	React.createContext(null);

	{
	  ReactReduxContext.displayName = 'ReactRedux';
	}

	// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback) {
	  callback();
	}

	var batch = defaultNoopBatch; // Allow injecting another batching function later

	var setBatch = function setBatch(newBatch) {
	  return batch = newBatch;
	}; // Supply a getter just to skip dealing with ESM bindings

	var getBatch = function getBatch() {
	  return batch;
	};

	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  var batch = getBatch();
	  var first = null;
	  var last = null;
	  return {
	    clear: function clear() {
	      first = null;
	      last = null;
	    },
	    notify: function notify() {
	      batch(function () {
	        var listener = first;

	        while (listener) {
	          listener.callback();
	          listener = listener.next;
	        }
	      });
	    },
	    get: function get() {
	      var listeners = [];
	      var listener = first;

	      while (listener) {
	        listeners.push(listener);
	        listener = listener.next;
	      }

	      return listeners;
	    },
	    subscribe: function subscribe(callback) {
	      var isSubscribed = true;
	      var listener = last = {
	        callback: callback,
	        next: null,
	        prev: last
	      };

	      if (listener.prev) {
	        listener.prev.next = listener;
	      } else {
	        first = listener;
	      }

	      return function unsubscribe() {
	        if (!isSubscribed || first === null) return;
	        isSubscribed = false;

	        if (listener.next) {
	          listener.next.prev = listener.prev;
	        } else {
	          last = listener.prev;
	        }

	        if (listener.prev) {
	          listener.prev.next = listener.next;
	        } else {
	          first = listener.next;
	        }
	      };
	    }
	  };
	}

	var Subscription =
	/*#__PURE__*/
	function () {
	  function Subscription(store, parentSub) {
	    this.store = store;
	    this.parentSub = parentSub;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
	  }

	  var _proto = Subscription.prototype;

	  _proto.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  _proto.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  _proto.handleChangeWrapper = function handleChangeWrapper() {
	    if (this.onStateChange) {
	      this.onStateChange();
	    }
	  };

	  _proto.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  _proto.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
	      this.listeners = createListenerCollection();
	    }
	  };

	  _proto.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	function Provider(_ref) {
	  var store = _ref.store,
	      context = _ref.context,
	      children = _ref.children;
	  var contextValue = _$1(function () {
	    var subscription = new Subscription(store);
	    subscription.onStateChange = subscription.notifyNestedSubs;
	    return {
	      store: store,
	      subscription: subscription
	    };
	  }, [store]);
	  var previousState = _$1(function () {
	    return store.getState();
	  }, [store]);
	  y$1(function () {
	    var subscription = contextValue.subscription;
	    subscription.trySubscribe();

	    if (previousState !== store.getState()) {
	      subscription.notifyNestedSubs();
	    }

	    return function () {
	      subscription.tryUnsubscribe();
	      subscription.onStateChange = null;
	    };
	  }, [contextValue, previousState]);
	  var Context = context || ReactReduxContext;
	  return React.createElement(Context.Provider, {
	    value: contextValue
	  }, children);
	}

	{
	  Provider.propTypes = {
	    store: propTypes.shape({
	      subscribe: propTypes.func.isRequired,
	      dispatch: propTypes.func.isRequired,
	      getState: propTypes.func.isRequired
	    }),
	    context: propTypes.object,
	    children: propTypes.any
	  };
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols$1) {
	      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	// To get around it, we can conditionally useEffect on the server (no-op) and
	// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
	// subscription callback always has the selector from the latest render commit
	// available, otherwise a store update may happen between render and the effect,
	// which may cause missed updates; we also must ensure the store subscription
	// is created synchronously, otherwise a store update may occur before the
	// subscription is created and an inconsistent state may be observed

	var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? l : y$1;

	var EMPTY_ARRAY = [];
	var NO_SUBSCRIPTION_ARRAY = [null, null];

	var stringifyComponent = function stringifyComponent(Comp) {
	  try {
	    return JSON.stringify(Comp);
	  } catch (err) {
	    return String(Comp);
	  }
	};

	function storeStateUpdatesReducer(state, action) {
	  var updateCount = state[1];
	  return [action.payload, updateCount + 1];
	}

	function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
	  useIsomorphicLayoutEffect(function () {
	    return effectFunc.apply(void 0, effectArgs);
	  }, dependencies);
	}

	function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
	  // We want to capture the wrapper props and child props we used for later comparisons
	  lastWrapperProps.current = wrapperProps;
	  lastChildProps.current = actualChildProps;
	  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

	  if (childPropsFromStoreUpdate.current) {
	    childPropsFromStoreUpdate.current = null;
	    notifyNestedSubs();
	  }
	}

	function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
	  // If we're not subscribed to the store, nothing to do here
	  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

	  var didUnsubscribe = false;
	  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

	  var checkForUpdates = function checkForUpdates() {
	    if (didUnsubscribe) {
	      // Don't run stale listeners.
	      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
	      return;
	    }

	    var latestStoreState = store.getState();
	    var newChildProps, error;

	    try {
	      // Actually run the selector with the most recent store state and wrapper props
	      // to determine what the child props should be
	      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
	    } catch (e) {
	      error = e;
	      lastThrownError = e;
	    }

	    if (!error) {
	      lastThrownError = null;
	    } // If the child props haven't changed, nothing to do here - cascade the subscription update


	    if (newChildProps === lastChildProps.current) {
	      if (!renderIsScheduled.current) {
	        notifyNestedSubs();
	      }
	    } else {
	      // Save references to the new child props.  Note that we track the "child props from store update"
	      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
	      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
	      // forcing another re-render, which we don't want.
	      lastChildProps.current = newChildProps;
	      childPropsFromStoreUpdate.current = newChildProps;
	      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

	      forceComponentUpdateDispatch({
	        type: 'STORE_UPDATED',
	        payload: {
	          error: error
	        }
	      });
	    }
	  }; // Actually subscribe to the nearest connected ancestor (or store)


	  subscription.onStateChange = checkForUpdates;
	  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
	  // changed since we began.

	  checkForUpdates();

	  var unsubscribeWrapper = function unsubscribeWrapper() {
	    didUnsubscribe = true;
	    subscription.tryUnsubscribe();
	    subscription.onStateChange = null;

	    if (lastThrownError) {
	      // It's possible that we caught an error due to a bad mapState function, but the
	      // parent re-rendered without this component and we're about to unmount.
	      // This shouldn't happen as long as we do top-down subscriptions correctly, but
	      // if we ever do those wrong, this throw will surface the error in our tests.
	      // In that case, throw the error from here so it doesn't get lost.
	      throw lastThrownError;
	    }
	  };

	  return unsubscribeWrapper;
	}

	var initStateUpdates = function initStateUpdates() {
	  return [null, 0];
	};

	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	      export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory, // options object:
	_ref) {
	  if (_ref === void 0) {
	    _ref = {};
	  }

	  var _ref2 = _ref,
	      _ref2$getDisplayName = _ref2.getDisplayName,
	      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
	    return "ConnectAdvanced(" + name + ")";
	  } : _ref2$getDisplayName,
	      _ref2$methodName = _ref2.methodName,
	      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
	      _ref2$renderCountProp = _ref2.renderCountProp,
	      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
	      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
	      _ref2$storeKey = _ref2.storeKey,
	      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
	      _ref2$withRef = _ref2.withRef,
	      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
	      _ref2$forwardRef = _ref2.forwardRef,
	      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
	      _ref2$context = _ref2.context,
	      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
	      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

	  {
	    if (renderCountProp !== undefined) {
	      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
	    }

	    if (withRef) {
	      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
	    }

	    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

	    if (storeKey !== 'store') {
	      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
	    }
	  }

	  var Context = context;
	  return function wrapWithConnect(WrappedComponent) {
	    if ( !reactIs.isValidElementType(WrappedComponent)) {
	      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
	    }

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var pure = connectOptions.pure;

	    function createChildSelector(store) {
	      return selectorFactory(store.dispatch, selectorFactoryOptions);
	    } // If we aren't running in "pure" mode, we don't want to memoize values.
	    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
	    // that just executes the given callback immediately.


	    var usePureOnlyMemo = pure ? _$1 : function (callback) {
	      return callback();
	    };

	    function ConnectFunction(props) {
	      var _useMemo = _$1(function () {
	        // Distinguish between actual "data" props that were passed to the wrapper component,
	        // and values needed to control behavior (forwarded refs, alternate context instances).
	        // To maintain the wrapperProps object reference, memoize this destructuring.
	        var reactReduxForwardedRef = props.reactReduxForwardedRef,
	            wrapperProps = _objectWithoutPropertiesLoose(props, ["reactReduxForwardedRef"]);

	        return [props.context, reactReduxForwardedRef, wrapperProps];
	      }, [props]),
	          propsContext = _useMemo[0],
	          reactReduxForwardedRef = _useMemo[1],
	          wrapperProps = _useMemo[2];

	      var ContextToUse = _$1(function () {
	        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
	        // Memoize the check that determines which context instance we should use.
	        return propsContext && propsContext.Consumer && reactIs.isContextConsumer(React.createElement(propsContext.Consumer, null)) ? propsContext : Context;
	      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

	      var contextValue = F(ContextToUse); // The store _must_ exist as either a prop or in context.
	      // We'll check to see if it _looks_ like a Redux store first.
	      // This allows us to pass through a `store` prop that is just a plain value.

	      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
	      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

	      if ( !didStoreComeFromProps && !didStoreComeFromContext) {
	        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
	      } // Based on the previous check, one of these must be true


	      var store = didStoreComeFromProps ? props.store : contextValue.store;
	      var childPropsSelector = _$1(function () {
	        // The child props selector needs the store reference as an input.
	        // Re-create this selector whenever the store changes.
	        return createChildSelector(store);
	      }, [store]);

	      var _useMemo2 = _$1(function () {
	        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.

	        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	        // the middle of the notification loop, where `subscription` will then be null. This can
	        // probably be avoided if Subscription's listeners logic is changed to not call listeners
	        // that have been unsubscribed in the  middle of the notification loop.

	        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
	        return [subscription, notifyNestedSubs];
	      }, [store, didStoreComeFromProps, contextValue]),
	          subscription = _useMemo2[0],
	          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
	      // and memoize that value to avoid unnecessary context updates.


	      var overriddenContextValue = _$1(function () {
	        if (didStoreComeFromProps) {
	          // This component is directly subscribed to a store from props.
	          // We don't want descendants reading from this store - pass down whatever
	          // the existing context value is from the nearest connected ancestor.
	          return contextValue;
	        } // Otherwise, put this component's subscription instance into context, so that
	        // connected descendants won't update until after this component is done


	        return _extends({}, contextValue, {
	          subscription: subscription
	        });
	      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
	      // causes a change to the calculated child component props (or we caught an error in mapState)

	      var _useReducer = p$1(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
	          _useReducer$ = _useReducer[0],
	          previousStateUpdateResult = _useReducer$[0],
	          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


	      if (previousStateUpdateResult && previousStateUpdateResult.error) {
	        throw previousStateUpdateResult.error;
	      } // Set up refs to coordinate values between the subscription effect and the render logic


	      var lastChildProps = h$1();
	      var lastWrapperProps = h$1(wrapperProps);
	      var childPropsFromStoreUpdate = h$1();
	      var renderIsScheduled = h$1(false);
	      var actualChildProps = usePureOnlyMemo(function () {
	        // Tricky logic here:
	        // - This render may have been triggered by a Redux store update that produced new child props
	        // - However, we may have gotten new wrapper props after that
	        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
	        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
	        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
	        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
	          return childPropsFromStoreUpdate.current;
	        } // TODO We're reading the store directly in render() here. Bad idea?
	        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
	        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
	        // to determine what the child props should be.


	        return childPropsSelector(store.getState(), wrapperProps);
	      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
	      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
	      // just useEffect instead to avoid the warning, since neither will run anyway.

	      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

	      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
	      // We memoize the elements for the rendered child component as an optimization.

	      var renderedWrappedComponent = _$1(function () {
	        return React.createElement(WrappedComponent, _extends({}, actualChildProps, {
	          ref: reactReduxForwardedRef
	        }));
	      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
	      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

	      var renderedChild = _$1(function () {
	        if (shouldHandleStateChanges) {
	          // If this component is subscribed to store updates, we need to pass its own
	          // subscription instance down to our descendants. That means rendering the same
	          // Context instance, and putting a different value into the context.
	          return React.createElement(ContextToUse.Provider, {
	            value: overriddenContextValue
	          }, renderedWrappedComponent);
	        }

	        return renderedWrappedComponent;
	      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
	      return renderedChild;
	    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


	    var Connect = pure ? React.memo(ConnectFunction) : ConnectFunction;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;

	    if (forwardRef) {
	      var forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
	        return React.createElement(Connect, _extends({}, props, {
	          reactReduxForwardedRef: ref
	        }));
	      });
	      forwarded.displayName = displayName;
	      forwarded.WrappedComponent = WrappedComponent;
	      return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
	    }

	    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
	  };
	}

	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	}

	/* global window */

	var root;

	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (typeof module !== 'undefined') {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = symbolObservablePonyfill(root);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};

	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;

	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }

	  return Object.getPrototypeOf(obj) === proto;
	}

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
	    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
	  }

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	  /**
	   * This makes a shallow copy of currentListeners so we can use
	   * nextListeners as a temporary list while dispatching.
	   *
	   * This prevents any bugs around consumers calling
	   * subscribe/unsubscribe in the middle of a dispatch.
	   */

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */


	  function getState() {
	    if (isDispatching) {
	      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
	    }

	    return currentState;
	  }
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */


	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected the listener to be a function.');
	    }

	    if (isDispatching) {
	      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
	    }

	    var isSubscribed = true;
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      if (isDispatching) {
	        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
	      }

	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	      currentListeners = null;
	    };
	  }
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */


	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;

	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */


	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
	    // Any reducers that existed in both the new and old rootReducer
	    // will receive the previous state. This effectively populates
	    // the new state tree with any relevant data from the old one.

	    dispatch({
	      type: ActionTypes.REPLACE
	    });
	  }
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */


	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object' || observer === null) {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe: unsubscribe
	        };
	      }
	    }, _ref[result] = function () {
	      return this;
	    }, _ref;
	  } // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.


	  dispatch({
	    type: ActionTypes.INIT
	  });
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[result] = observable, _ref2;
	}

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */


	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	  } catch (e) {} // eslint-disable-line no-empty

	}

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(this, arguments));
	  };
	}
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass an action creator as the first argument,
	 * and get a dispatch wrapped function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */


	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
	  }

	  var boundActionCreators = {};

	  for (var key in actionCreators) {
	    var actionCreator = actionCreators[key];

	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }

	  return boundActionCreators;
	}

	/*
	 * This is a dummy function to check if the function name has been altered by minification.
	 * If the function has been minified and NODE_ENV !== 'production', warn the user.
	 */

	function isCrushed() {}

	if ( typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
	}

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject$1(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = Object.getPrototypeOf(obj);
	  if (proto === null) return true;
	  var baseProto = proto;

	  while (Object.getPrototypeOf(baseProto) !== null) {
	    baseProto = Object.getPrototypeOf(baseProto);
	  }

	  return proto === baseProto;
	}

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning$1(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */


	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	}

	function verifyPlainObject(value, displayName, methodName) {
	  if (!isPlainObject$1(value)) {
	    warning$1(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
	  }
	}

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }

	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	//
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..

	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	//
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//

	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    }; // allow detectFactoryAndVerify to get ownProps


	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      verifyPlainObject(props, displayName, methodName);
	      return props;
	    };

	    return proxy;
	  };
	}

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
	    return {
	      dispatch: dispatch
	    };
	  }) : undefined;
	}
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
	    return bindActionCreators(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
	}
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? wrapMapToPropsConstant(function () {
	    return {};
	  }) : undefined;
	}
	var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
	}
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	    var hasRunOnce = false;
	    var mergedProps;
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	        verifyPlainObject(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
	      warning$1("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	  var hasRunAtLeastOnce = false;
	  var state;
	  var ownProps;
	  var stateProps;
	  var dispatchProps;
	  var mergedProps;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	} // TODO: Add more comments
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  {
	    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps

	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	} // createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios


	function createConnect(_temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
	    if (_ref2 === void 0) {
	      _ref2 = {};
	    }

	    var _ref3 = _ref2,
	        _ref3$pure = _ref3.pure,
	        pure = _ref3$pure === void 0 ? true : _ref3$pure,
	        _ref3$areStatesEqual = _ref3.areStatesEqual,
	        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
	        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
	        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
	        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
	        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
	        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
	        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
	        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return "Connect(" + name + ")";
	      },
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	    }, extraOptions));
	  };
	}
	var connect = /*#__PURE__*/
	createConnect();

	setBatch(ln);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	class BookstoreService {
	  constructor() {
	    _defineProperty(this, "data", [{
	      id: 1,
	      title: 'Production-ready Microservices',
	      author: 'Susan J. Fowler',
	      price: 129,
	      imgName: 'prm'
	    }, {
	      id: 2,
	      title: 'Realese It!',
	      author: 'Michael T. Nygard',
	      price: 71,
	      imgName: 'rli'
	    }]);
	  }

	  getBooks() {
	    return new Promise((resolve, reject) => {
	      setTimeout(() => {
	        // reject(new Error('Something went badly wrong'))
	        resolve(this.data);
	      }, 700);
	    });
	  }

	}

	const Context = B();
	const boosto = new BookstoreService();

	const ContextProvider = ({
	  children
	}) => {
	  return h(Context.Provider, {
	    value: {
	      boosto
	    }
	  }, children);
	};

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	}

	// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }

	  list.pop();
	}

	// This implementation is based heavily on node's url.parse
	function resolvePathname(to, from) {
	  if (from === undefined) from = '';

	  var toParts = (to && to.split('/')) || [];
	  var fromParts = (from && from.split('/')) || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

	  if (
	    mustEndAbs &&
	    fromParts[0] !== '' &&
	    (!fromParts[0] || !isAbsolute(fromParts[0]))
	  )
	    fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	}

	function valueOf(obj) {
	  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
	}

	function valueEqual(a, b) {
	  // Test for strict equality first.
	  if (a === b) return true;

	  // Otherwise, if either of them == null they are not equal.
	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return (
	      Array.isArray(b) &&
	      a.length === b.length &&
	      a.every(function(item, index) {
	        return valueEqual(item, b[index]);
	      })
	    );
	  }

	  if (typeof a === 'object' || typeof b === 'object') {
	    var aValue = valueOf(a);
	    var bValue = valueOf(b);

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    return Object.keys(Object.assign({}, a, b)).every(function(key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	}

	function warning$2(condition, message) {
	  {
	    if (condition) {
	      return;
	    }

	    var text = "Warning: " + message;

	    if (typeof console !== 'undefined') {
	      console.warn(text);
	    }

	    try {
	      throw Error(text);
	    } catch (x) {}
	  }
	}

	var prefix = 'Invariant failed';
	function invariant(condition, message) {
	    if (condition) {
	        return;
	    }
	    throw new Error(prefix + ": " + (message || ''));
	}

	function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	}
	function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	}
	function hasBasename(path, prefix) {
	  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
	}
	function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	}
	function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	}
	function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';
	  var hashIndex = pathname.indexOf('#');

	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');

	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	}
	function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;
	  var path = pathname || '/';
	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
	  return path;
	}

	function createLocation(path, state, key, currentLocation) {
	  var location;

	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = parsePath(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);
	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	}
	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
	}

	function createTransitionManager() {
	  var prompt = null;

	  function setPrompt(nextPrompt) {
	     warning$2(prompt == null, 'A history supports only one prompt at a time') ;
	    prompt = nextPrompt;
	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  }

	  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	           warning$2(false, 'A history needs a getUserConfirmation function in order to use a prompt message') ;
	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  }

	  var listeners = [];

	  function appendListener(fn) {
	    var isActive = true;

	    function listener() {
	      if (isActive) fn.apply(void 0, arguments);
	    }

	    listeners.push(listener);
	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function notifyListeners() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(void 0, args);
	    });
	  }

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	}

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	function getConfirmation(message, callback) {
	  callback(window.confirm(message)); // eslint-disable-line no-alert
	}
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = window.navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
	  return window.history && 'pushState' in window.history;
	}
	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */

	function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	}
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	}
	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */

	function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	}

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	}
	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */


	function createBrowserHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  !canUseDOM ?  invariant(false, 'Browser history needs a DOM')  : void 0;
	  var globalHistory = window.history;
	  var canUseHistory = supportsHistory();
	  var needsHashChangeListener = !supportsPopStateOnHashChange();
	  var _props = props,
	      _props$forceRefresh = _props.forceRefresh,
	      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
	      _props$getUserConfirm = _props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
	      _props$keyLength = _props.keyLength,
	      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
	  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

	  function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;
	    var path = pathname + search + hash;
	     warning$2(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') ;
	    if (basename) path = stripBasename(path, basename);
	    return createLocation(path, state, key);
	  }

	  function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  }

	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if (isExtraneousPopstateEvent(event)) return;
	    handlePop(getDOMLocation(event.state));
	  }

	  function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  }

	  var forceNextPop = false;

	  function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({
	            action: action,
	            location: location
	          });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  }

	  function revertPop(fromLocation) {
	    var toLocation = history.location; // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);
	    if (toIndex === -1) toIndex = 0;
	    var fromIndex = allKeys.indexOf(fromLocation.key);
	    if (fromIndex === -1) fromIndex = 0;
	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  }

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key]; // Public interface

	  function createHref(location) {
	    return basename + createPath(location);
	  }

	  function push(path, state) {
	     warning$2(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') ;
	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;

	      if (canUseHistory) {
	        globalHistory.pushState({
	          key: key,
	          state: state
	        }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex + 1);
	          nextKeys.push(location.key);
	          allKeys = nextKeys;
	          setState({
	            action: action,
	            location: location
	          });
	        }
	      } else {
	         warning$2(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') ;
	        window.location.href = href;
	      }
	    });
	  }

	  function replace(path, state) {
	     warning$2(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') ;
	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;

	      if (canUseHistory) {
	        globalHistory.replaceState({
	          key: key,
	          state: state
	        }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
	          setState({
	            action: action,
	            location: location
	          });
	        }
	      } else {
	         warning$2(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') ;
	        window.location.replace(href);
	      }
	    });
	  }

	  function go(n) {
	    globalHistory.go(n);
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  var listenerCount = 0;

	  function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1 && delta === 1) {
	      window.addEventListener(PopStateEvent, handlePopState);
	      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      window.removeEventListener(PopStateEvent, handlePopState);
	      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
	    }
	  }

	  var isBlocked = false;

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  }

	  function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  }

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	var HashChangeEvent$1 = 'hashchange';
	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: stripLeadingSlash,
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};

	function stripHash(url) {
	  var hashIndex = url.indexOf('#');
	  return hashIndex === -1 ? url : url.slice(0, hashIndex);
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	}

	function pushHashPath(path) {
	  window.location.hash = path;
	}

	function replaceHashPath(path) {
	  window.location.replace(stripHash(window.location.href) + '#' + path);
	}

	function createHashHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  !canUseDOM ?  invariant(false, 'Hash history needs a DOM')  : void 0;
	  var globalHistory = window.history;
	  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
	  var _props = props,
	      _props$getUserConfirm = _props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
	      _props$hashType = _props.hashType,
	      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
	  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;

	  function getDOMLocation() {
	    var path = decodePath(getHashPath());
	     warning$2(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') ;
	    if (basename) path = stripBasename(path, basename);
	    return createLocation(path);
	  }

	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  var forceNextPop = false;
	  var ignorePath = null;

	  function locationsAreEqual$$1(a, b) {
	    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
	  }

	  function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;
	      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;
	      handlePop(location);
	    }
	  }

	  function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({
	            action: action,
	            location: location
	          });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  }

	  function revertPop(fromLocation) {
	    var toLocation = history.location; // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
	    if (toIndex === -1) toIndex = 0;
	    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
	    if (fromIndex === -1) fromIndex = 0;
	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  } // Ensure the hash is encoded properly before doing anything else.


	  var path = getHashPath();
	  var encodedPath = encodePath(path);
	  if (path !== encodedPath) replaceHashPath(encodedPath);
	  var initialLocation = getDOMLocation();
	  var allPaths = [createPath(initialLocation)]; // Public interface

	  function createHref(location) {
	    var baseTag = document.querySelector('base');
	    var href = '';

	    if (baseTag && baseTag.getAttribute('href')) {
	      href = stripHash(window.location.href);
	    }

	    return href + '#' + encodePath(basename + createPath(location));
	  }

	  function push(path, state) {
	     warning$2(state === undefined, 'Hash history cannot push state; it is ignored') ;
	    var action = 'PUSH';
	    var location = createLocation(path, undefined, undefined, history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var path = createPath(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);
	        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex + 1);
	        nextPaths.push(path);
	        allPaths = nextPaths;
	        setState({
	          action: action,
	          location: location
	        });
	      } else {
	         warning$2(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') ;
	        setState();
	      }
	    });
	  }

	  function replace(path, state) {
	     warning$2(state === undefined, 'Hash history cannot replace state; it is ignored') ;
	    var action = 'REPLACE';
	    var location = createLocation(path, undefined, undefined, history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var path = createPath(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf(createPath(history.location));
	      if (prevIndex !== -1) allPaths[prevIndex] = path;
	      setState({
	        action: action,
	        location: location
	      });
	    });
	  }

	  function go(n) {
	     warning$2(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') ;
	    globalHistory.go(n);
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  var listenerCount = 0;

	  function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1 && delta === 1) {
	      window.addEventListener(HashChangeEvent$1, handleHashChange);
	    } else if (listenerCount === 0) {
	      window.removeEventListener(HashChangeEvent$1, handleHashChange);
	    }
	  }

	  var isBlocked = false;

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  }

	  function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  }

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	}
	/**
	 * Creates a history object that stores locations in memory.
	 */


	function createMemoryHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  var _props = props,
	      getUserConfirmation = _props.getUserConfirmation,
	      _props$initialEntries = _props.initialEntries,
	      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
	      _props$initialIndex = _props.initialIndex,
	      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
	      _props$keyLength = _props.keyLength,
	      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = history.entries.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  }

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
	  }); // Public interface

	  var createHref = createPath;

	  function push(path, state) {
	     warning$2(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') ;
	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;
	      var nextEntries = history.entries.slice(0);

	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  }

	  function replace(path, state) {
	     warning$2(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') ;
	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      history.entries[history.index] = location;
	      setState({
	        action: action,
	        location: location
	      });
	    });
	  }

	  function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
	    var action = 'POP';
	    var location = history.entries[nextIndex];
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  }

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    return transitionManager.setPrompt(prompt);
	  }

	  function listen(listener) {
	    return transitionManager.appendListener(listener);
	  }

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	var MAX_SIGNED_31_BIT_INT = 1073741823;
	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

	function getUniqueId() {
	  var key = '__global_unique_id__';
	  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
	}

	function objectIs(x, y) {
	  if (x === y) {
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function createEventEmitter(value) {
	  var handlers = [];
	  return {
	    on: function on(handler) {
	      handlers.push(handler);
	    },
	    off: function off(handler) {
	      handlers = handlers.filter(function (h) {
	        return h !== handler;
	      });
	    },
	    get: function get() {
	      return value;
	    },
	    set: function set(newValue, changedBits) {
	      value = newValue;
	      handlers.forEach(function (handler) {
	        return handler(value, changedBits);
	      });
	    }
	  };
	}

	function onlyChild(children) {
	  return Array.isArray(children) ? children[0] : children;
	}

	function createReactContext(defaultValue, calculateChangedBits) {
	  var _Provider$childContex, _Consumer$contextType;

	  var contextProp = '__create-react-context-' + getUniqueId() + '__';

	  var Provider = /*#__PURE__*/function (_Component) {
	    _inheritsLoose(Provider, _Component);

	    function Provider() {
	      var _this;

	      _this = _Component.apply(this, arguments) || this;
	      _this.emitter = createEventEmitter(_this.props.value);
	      return _this;
	    }

	    var _proto = Provider.prototype;

	    _proto.getChildContext = function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
	    };

	    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (this.props.value !== nextProps.value) {
	        var oldValue = this.props.value;
	        var newValue = nextProps.value;
	        var changedBits;

	        if (objectIs(oldValue, newValue)) {
	          changedBits = 0;
	        } else {
	          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

	          {
	            warning$2((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
	          }

	          changedBits |= 0;

	          if (changedBits !== 0) {
	            this.emitter.set(nextProps.value, changedBits);
	          }
	        }
	      }
	    };

	    _proto.render = function render() {
	      return this.props.children;
	    };

	    return Provider;
	  }(d);

	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = propTypes.object.isRequired, _Provider$childContex);

	  var Consumer = /*#__PURE__*/function (_Component2) {
	    _inheritsLoose(Consumer, _Component2);

	    function Consumer() {
	      var _this2;

	      _this2 = _Component2.apply(this, arguments) || this;
	      _this2.state = {
	        value: _this2.getValue()
	      };

	      _this2.onUpdate = function (newValue, changedBits) {
	        var observedBits = _this2.observedBits | 0;

	        if ((observedBits & changedBits) !== 0) {
	          _this2.setState({
	            value: _this2.getValue()
	          });
	        }
	      };

	      return _this2;
	    }

	    var _proto2 = Consumer.prototype;

	    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var observedBits = nextProps.observedBits;
	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
	    };

	    _proto2.componentDidMount = function componentDidMount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].on(this.onUpdate);
	      }

	      var observedBits = this.props.observedBits;
	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
	    };

	    _proto2.componentWillUnmount = function componentWillUnmount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].off(this.onUpdate);
	      }
	    };

	    _proto2.getValue = function getValue() {
	      if (this.context[contextProp]) {
	        return this.context[contextProp].get();
	      } else {
	        return defaultValue;
	      }
	    };

	    _proto2.render = function render() {
	      return onlyChild(this.props.children)(this.state.value);
	    };

	    return Consumer;
	  }(d);

	  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = propTypes.object, _Consumer$contextType);
	  return {
	    Provider: Provider,
	    Consumer: Consumer
	  };
	}

	var index = React.createContext || createReactContext;

	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1 = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options), options)
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens, options) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options && options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	pathToRegexp_1.parse = parse_1;
	pathToRegexp_1.compile = compile_1;
	pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

	// TODO: Replace with React.createContext once we can assume React 16+

	var createNamedContext = function createNamedContext(name) {
	  var context = index();
	  context.displayName = name;
	  return context;
	};

	var historyContext =
	/*#__PURE__*/
	createNamedContext("Router-History");

	// TODO: Replace with React.createContext once we can assume React 16+

	var createNamedContext$1 = function createNamedContext(name) {
	  var context = index();
	  context.displayName = name;
	  return context;
	};

	var context =
	/*#__PURE__*/
	createNamedContext$1("Router");

	/**
	 * The public API for putting history on context.
	 */

	var Router =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Router, _React$Component);

	  Router.computeRootMatch = function computeRootMatch(pathname) {
	    return {
	      path: "/",
	      url: "/",
	      params: {},
	      isExact: pathname === "/"
	    };
	  };

	  function Router(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.state = {
	      location: props.history.location
	    }; // This is a bit of a hack. We have to start listening for location
	    // changes here in the constructor in case there are any <Redirect>s
	    // on the initial render. If there are, they will replace/push when
	    // they mount and since cDM fires in children before parents, we may
	    // get a new location before the <Router> is mounted.

	    _this._isMounted = false;
	    _this._pendingLocation = null;

	    if (!props.staticContext) {
	      _this.unlisten = props.history.listen(function (location) {
	        if (_this._isMounted) {
	          _this.setState({
	            location: location
	          });
	        } else {
	          _this._pendingLocation = location;
	        }
	      });
	    }

	    return _this;
	  }

	  var _proto = Router.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this._isMounted = true;

	    if (this._pendingLocation) {
	      this.setState({
	        location: this._pendingLocation
	      });
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.unlisten) this.unlisten();
	  };

	  _proto.render = function render() {
	    return React.createElement(context.Provider, {
	      value: {
	        history: this.props.history,
	        location: this.state.location,
	        match: Router.computeRootMatch(this.state.location.pathname),
	        staticContext: this.props.staticContext
	      }
	    }, React.createElement(historyContext.Provider, {
	      children: this.props.children || null,
	      value: this.props.history
	    }));
	  };

	  return Router;
	}(React.Component);

	{
	  Router.propTypes = {
	    children: propTypes.node,
	    history: propTypes.object.isRequired,
	    staticContext: propTypes.object
	  };

	  Router.prototype.componentDidUpdate = function (prevProps) {
	     warning$2(prevProps.history === this.props.history, "You cannot change <Router history>") ;
	  };
	}

	/**
	 * The public API for a <Router> that stores location in memory.
	 */

	var MemoryRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(MemoryRouter, _React$Component);

	  function MemoryRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = createMemoryHistory(_this.props);
	    return _this;
	  }

	  var _proto = MemoryRouter.prototype;

	  _proto.render = function render() {
	    return React.createElement(Router, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return MemoryRouter;
	}(React.Component);

	{
	  MemoryRouter.propTypes = {
	    initialEntries: propTypes.array,
	    initialIndex: propTypes.number,
	    getUserConfirmation: propTypes.func,
	    keyLength: propTypes.number,
	    children: propTypes.node
	  };

	  MemoryRouter.prototype.componentDidMount = function () {
	     warning$2(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") ;
	  };
	}

	var Lifecycle =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Lifecycle, _React$Component);

	  function Lifecycle() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Lifecycle.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    if (this.props.onMount) this.props.onMount.call(this, this);
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
	  };

	  _proto.render = function render() {
	    return null;
	  };

	  return Lifecycle;
	}(React.Component);

	/**
	 * The public API for prompting the user before navigating away from a screen.
	 */

	function Prompt(_ref) {
	  var message = _ref.message,
	      _ref$when = _ref.when,
	      when = _ref$when === void 0 ? true : _ref$when;
	  return React.createElement(context.Consumer, null, function (context) {
	    !context ?  invariant(false, "You should not use <Prompt> outside a <Router>")  : void 0;
	    if (!when || context.staticContext) return null;
	    var method = context.history.block;
	    return React.createElement(Lifecycle, {
	      onMount: function onMount(self) {
	        self.release = method(message);
	      },
	      onUpdate: function onUpdate(self, prevProps) {
	        if (prevProps.message !== message) {
	          self.release();
	          self.release = method(message);
	        }
	      },
	      onUnmount: function onUnmount(self) {
	        self.release();
	      },
	      message: message
	    });
	  });
	}

	{
	  var messageType = propTypes.oneOfType([propTypes.func, propTypes.string]);
	  Prompt.propTypes = {
	    when: propTypes.bool,
	    message: messageType.isRequired
	  };
	}

	var cache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;

	function compilePath(path) {
	  if (cache[path]) return cache[path];
	  var generator = pathToRegexp_1.compile(path);

	  if (cacheCount < cacheLimit) {
	    cache[path] = generator;
	    cacheCount++;
	  }

	  return generator;
	}
	/**
	 * Public API for generating a URL pathname from a path and parameters.
	 */


	function generatePath(path, params) {
	  if (path === void 0) {
	    path = "/";
	  }

	  if (params === void 0) {
	    params = {};
	  }

	  return path === "/" ? path : compilePath(path)(params, {
	    pretty: true
	  });
	}

	/**
	 * The public API for navigating programmatically with a component.
	 */

	function Redirect(_ref) {
	  var computedMatch = _ref.computedMatch,
	      to = _ref.to,
	      _ref$push = _ref.push,
	      push = _ref$push === void 0 ? false : _ref$push;
	  return React.createElement(context.Consumer, null, function (context) {
	    !context ?  invariant(false, "You should not use <Redirect> outside a <Router>")  : void 0;
	    var history = context.history,
	        staticContext = context.staticContext;
	    var method = push ? history.push : history.replace;
	    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
	      pathname: generatePath(to.pathname, computedMatch.params)
	    }) : to); // When rendering in a static context,
	    // set the new location immediately.

	    if (staticContext) {
	      method(location);
	      return null;
	    }

	    return React.createElement(Lifecycle, {
	      onMount: function onMount() {
	        method(location);
	      },
	      onUpdate: function onUpdate(self, prevProps) {
	        var prevLocation = createLocation(prevProps.to);

	        if (!locationsAreEqual(prevLocation, _extends({}, location, {
	          key: prevLocation.key
	        }))) {
	          method(location);
	        }
	      },
	      to: to
	    });
	  });
	}

	{
	  Redirect.propTypes = {
	    push: propTypes.bool,
	    from: propTypes.string,
	    to: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired
	  };
	}

	var cache$1 = {};
	var cacheLimit$1 = 10000;
	var cacheCount$1 = 0;

	function compilePath$1(path, options) {
	  var cacheKey = "" + options.end + options.strict + options.sensitive;
	  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
	  if (pathCache[path]) return pathCache[path];
	  var keys = [];
	  var regexp = pathToRegexp_1(path, keys, options);
	  var result = {
	    regexp: regexp,
	    keys: keys
	  };

	  if (cacheCount$1 < cacheLimit$1) {
	    pathCache[path] = result;
	    cacheCount$1++;
	  }

	  return result;
	}
	/**
	 * Public API for matching a URL pathname to a path.
	 */


	function matchPath(pathname, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  if (typeof options === "string" || Array.isArray(options)) {
	    options = {
	      path: options
	    };
	  }

	  var _options = options,
	      path = _options.path,
	      _options$exact = _options.exact,
	      exact = _options$exact === void 0 ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === void 0 ? false : _options$strict,
	      _options$sensitive = _options.sensitive,
	      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
	  var paths = [].concat(path);
	  return paths.reduce(function (matched, path) {
	    if (!path && path !== "") return null;
	    if (matched) return matched;

	    var _compilePath = compilePath$1(path, {
	      end: exact,
	      strict: strict,
	      sensitive: sensitive
	    }),
	        regexp = _compilePath.regexp,
	        keys = _compilePath.keys;

	    var match = regexp.exec(pathname);
	    if (!match) return null;
	    var url = match[0],
	        values = match.slice(1);
	    var isExact = pathname === url;
	    if (exact && !isExact) return null;
	    return {
	      path: path,
	      // the path used to match
	      url: path === "/" && url === "" ? "/" : url,
	      // the matched portion of the URL
	      isExact: isExact,
	      // whether or not we matched exactly
	      params: keys.reduce(function (memo, key, index) {
	        memo[key.name] = values[index];
	        return memo;
	      }, {})
	    };
	  }, null);
	}

	function isEmptyChildren(children) {
	  return React.Children.count(children) === 0;
	}

	function evalChildrenDev(children, props, path) {
	  var value = children(props);
	   warning$2(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") ;
	  return value || null;
	}
	/**
	 * The public API for matching a single path and rendering.
	 */


	var Route =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Route, _React$Component);

	  function Route() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Route.prototype;

	  _proto.render = function render() {
	    var _this = this;

	    return React.createElement(context.Consumer, null, function (context$1) {
	      !context$1 ?  invariant(false, "You should not use <Route> outside a <Router>")  : void 0;
	      var location = _this.props.location || context$1.location;
	      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
	      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

	      var props = _extends({}, context$1, {
	        location: location,
	        match: match
	      });

	      var _this$props = _this.props,
	          children = _this$props.children,
	          component = _this$props.component,
	          render = _this$props.render; // Preact uses an empty array as children by
	      // default, so use null if that's the case.

	      if (Array.isArray(children) && children.length === 0) {
	        children = null;
	      }

	      return React.createElement(context.Provider, {
	        value: props
	      }, props.match ? children ? typeof children === "function" ?  evalChildrenDev(children, props, _this.props.path)  : children : component ? React.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  evalChildrenDev(children, props, _this.props.path)  : null);
	    });
	  };

	  return Route;
	}(React.Component);

	{
	  Route.propTypes = {
	    children: propTypes.oneOfType([propTypes.func, propTypes.node]),
	    component: function component(props, propName) {
	      if (props[propName] && !reactIs.isValidElementType(props[propName])) {
	        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
	      }
	    },
	    exact: propTypes.bool,
	    location: propTypes.object,
	    path: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
	    render: propTypes.func,
	    sensitive: propTypes.bool,
	    strict: propTypes.bool
	  };

	  Route.prototype.componentDidMount = function () {
	     warning$2(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") ;
	     warning$2(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") ;
	     warning$2(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") ;
	  };

	  Route.prototype.componentDidUpdate = function (prevProps) {
	     warning$2(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') ;
	     warning$2(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') ;
	  };
	}

	function addLeadingSlash$1(path) {
	  return path.charAt(0) === "/" ? path : "/" + path;
	}

	function addBasename(basename, location) {
	  if (!basename) return location;
	  return _extends({}, location, {
	    pathname: addLeadingSlash$1(basename) + location.pathname
	  });
	}

	function stripBasename$1(basename, location) {
	  if (!basename) return location;
	  var base = addLeadingSlash$1(basename);
	  if (location.pathname.indexOf(base) !== 0) return location;
	  return _extends({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	}

	function createURL(location) {
	  return typeof location === "string" ? location : createPath(location);
	}

	function staticHandler(methodName) {
	  return function () {
	      invariant(false, "You cannot %s with <StaticRouter>")  ;
	  };
	}

	function noop() {}
	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */


	var StaticRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(StaticRouter, _React$Component);

	  function StaticRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	    _this.handlePush = function (location) {
	      return _this.navigateTo(location, "PUSH");
	    };

	    _this.handleReplace = function (location) {
	      return _this.navigateTo(location, "REPLACE");
	    };

	    _this.handleListen = function () {
	      return noop;
	    };

	    _this.handleBlock = function () {
	      return noop;
	    };

	    return _this;
	  }

	  var _proto = StaticRouter.prototype;

	  _proto.navigateTo = function navigateTo(location, action) {
	    var _this$props = this.props,
	        _this$props$basename = _this$props.basename,
	        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
	        _this$props$context = _this$props.context,
	        context = _this$props$context === void 0 ? {} : _this$props$context;
	    context.action = action;
	    context.location = addBasename(basename, createLocation(location));
	    context.url = createURL(context.location);
	  };

	  _proto.render = function render() {
	    var _this$props2 = this.props,
	        _this$props2$basename = _this$props2.basename,
	        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
	        _this$props2$context = _this$props2.context,
	        context = _this$props2$context === void 0 ? {} : _this$props2$context,
	        _this$props2$location = _this$props2.location,
	        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
	        rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

	    var history = {
	      createHref: function createHref(path) {
	        return addLeadingSlash$1(basename + createURL(path));
	      },
	      action: "POP",
	      location: stripBasename$1(basename, createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler(),
	      goBack: staticHandler(),
	      goForward: staticHandler(),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };
	    return React.createElement(Router, _extends({}, rest, {
	      history: history,
	      staticContext: context
	    }));
	  };

	  return StaticRouter;
	}(React.Component);

	{
	  StaticRouter.propTypes = {
	    basename: propTypes.string,
	    context: propTypes.object,
	    location: propTypes.oneOfType([propTypes.string, propTypes.object])
	  };

	  StaticRouter.prototype.componentDidMount = function () {
	     warning$2(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") ;
	  };
	}

	/**
	 * The public API for rendering the first <Route> that matches.
	 */

	var Switch =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Switch, _React$Component);

	  function Switch() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Switch.prototype;

	  _proto.render = function render() {
	    var _this = this;

	    return React.createElement(context.Consumer, null, function (context) {
	      !context ?  invariant(false, "You should not use <Switch> outside a <Router>")  : void 0;
	      var location = _this.props.location || context.location;
	      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
	      // here because toArray adds keys to all child elements and we do not want
	      // to trigger an unmount/remount for two <Route>s that render the same
	      // component at different URLs.

	      React.Children.forEach(_this.props.children, function (child) {
	        if (match == null && React.isValidElement(child)) {
	          element = child;
	          var path = child.props.path || child.props.from;
	          match = path ? matchPath(location.pathname, _extends({}, child.props, {
	            path: path
	          })) : context.match;
	        }
	      });
	      return match ? React.cloneElement(element, {
	        location: location,
	        computedMatch: match
	      }) : null;
	    });
	  };

	  return Switch;
	}(React.Component);

	{
	  Switch.propTypes = {
	    children: propTypes.node,
	    location: propTypes.object
	  };

	  Switch.prototype.componentDidUpdate = function (prevProps) {
	     warning$2(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') ;
	     warning$2(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') ;
	  };
	}

	{
	  if (typeof window !== "undefined") {
	    var global$1 = window;
	    var key = "__react_router_build__";
	    var buildNames = {
	      cjs: "CommonJS",
	      esm: "ES modules",
	      umd: "UMD"
	    };

	    if (global$1[key] && global$1[key] !== "esm") {
	      var initialBuildName = buildNames[global$1[key]];
	      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
	      // loading 2 different builds.

	      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
	    }

	    global$1[key] = "esm";
	  }
	}

	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */

	var BrowserRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(BrowserRouter, _React$Component);

	  function BrowserRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = createBrowserHistory(_this.props);
	    return _this;
	  }

	  var _proto = BrowserRouter.prototype;

	  _proto.render = function render() {
	    return React.createElement(Router, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return BrowserRouter;
	}(React.Component);

	{
	  BrowserRouter.propTypes = {
	    basename: propTypes.string,
	    children: propTypes.node,
	    forceRefresh: propTypes.bool,
	    getUserConfirmation: propTypes.func,
	    keyLength: propTypes.number
	  };

	  BrowserRouter.prototype.componentDidMount = function () {
	     warning$2(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") ;
	  };
	}

	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */

	var HashRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(HashRouter, _React$Component);

	  function HashRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = createHashHistory(_this.props);
	    return _this;
	  }

	  var _proto = HashRouter.prototype;

	  _proto.render = function render() {
	    return React.createElement(Router, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return HashRouter;
	}(React.Component);

	{
	  HashRouter.propTypes = {
	    basename: propTypes.string,
	    children: propTypes.node,
	    getUserConfirmation: propTypes.func,
	    hashType: propTypes.oneOf(["hashbang", "noslash", "slash"])
	  };

	  HashRouter.prototype.componentDidMount = function () {
	     warning$2(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") ;
	  };
	}

	var resolveToLocation = function resolveToLocation(to, currentLocation) {
	  return typeof to === "function" ? to(currentLocation) : to;
	};
	var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
	  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
	};

	var forwardRefShim = function forwardRefShim(C) {
	  return C;
	};

	var forwardRef = React.forwardRef;

	if (typeof forwardRef === "undefined") {
	  forwardRef = forwardRefShim;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
	  var innerRef = _ref.innerRef,
	      navigate = _ref.navigate,
	      _onClick = _ref.onClick,
	      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

	  var target = rest.target;

	  var props = _extends({}, rest, {
	    onClick: function onClick(event) {
	      try {
	        if (_onClick) _onClick(event);
	      } catch (ex) {
	        event.preventDefault();
	        throw ex;
	      }

	      if (!event.defaultPrevented && // onClick prevented default
	      event.button === 0 && ( // ignore everything but left clicks
	      !target || target === "_self") && // let browser handle "target=_blank" etc.
	      !isModifiedEvent(event) // ignore clicks with modifier keys
	      ) {
	          event.preventDefault();
	          navigate();
	        }
	    }
	  }); // React 15 compat


	  if (forwardRefShim !== forwardRef) {
	    props.ref = forwardedRef || innerRef;
	  } else {
	    props.ref = innerRef;
	  }
	  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


	  return React.createElement("a", props);
	});

	{
	  LinkAnchor.displayName = "LinkAnchor";
	}
	/**
	 * The public API for rendering a history-aware <a>.
	 */


	var Link = forwardRef(function (_ref2, forwardedRef) {
	  var _ref2$component = _ref2.component,
	      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
	      replace = _ref2.replace,
	      to = _ref2.to,
	      innerRef = _ref2.innerRef,
	      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

	  return React.createElement(context.Consumer, null, function (context) {
	    !context ?  invariant(false, "You should not use <Link> outside a <Router>")  : void 0;
	    var history = context.history;
	    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
	    var href = location ? history.createHref(location) : "";

	    var props = _extends({}, rest, {
	      href: href,
	      navigate: function navigate() {
	        var location = resolveToLocation(to, context.location);
	        var method = replace ? history.replace : history.push;
	        method(location);
	      }
	    }); // React 15 compat


	    if (forwardRefShim !== forwardRef) {
	      props.ref = forwardedRef || innerRef;
	    } else {
	      props.innerRef = innerRef;
	    }

	    return React.createElement(component, props);
	  });
	});

	{
	  var toType = propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.func]);
	  var refType = propTypes.oneOfType([propTypes.string, propTypes.func, propTypes.shape({
	    current: propTypes.any
	  })]);
	  Link.displayName = "Link";
	  Link.propTypes = {
	    innerRef: refType,
	    onClick: propTypes.func,
	    replace: propTypes.bool,
	    target: propTypes.string,
	    to: toType.isRequired
	  };
	}

	var forwardRefShim$1 = function forwardRefShim(C) {
	  return C;
	};

	var forwardRef$1 = React.forwardRef;

	if (typeof forwardRef$1 === "undefined") {
	  forwardRef$1 = forwardRefShim$1;
	}

	function joinClassnames() {
	  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
	    classnames[_key] = arguments[_key];
	  }

	  return classnames.filter(function (i) {
	    return i;
	  }).join(" ");
	}
	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */


	var NavLink = forwardRef$1(function (_ref, forwardedRef) {
	  var _ref$ariaCurrent = _ref["aria-current"],
	      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
	      _ref$activeClassName = _ref.activeClassName,
	      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
	      activeStyle = _ref.activeStyle,
	      classNameProp = _ref.className,
	      exact = _ref.exact,
	      isActiveProp = _ref.isActive,
	      locationProp = _ref.location,
	      sensitive = _ref.sensitive,
	      strict = _ref.strict,
	      styleProp = _ref.style,
	      to = _ref.to,
	      innerRef = _ref.innerRef,
	      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

	  return React.createElement(context.Consumer, null, function (context) {
	    !context ?  invariant(false, "You should not use <NavLink> outside a <Router>")  : void 0;
	    var currentLocation = locationProp || context.location;
	    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
	    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

	    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	    var match = escapedPath ? matchPath(currentLocation.pathname, {
	      path: escapedPath,
	      exact: exact,
	      sensitive: sensitive,
	      strict: strict
	    }) : null;
	    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
	    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
	    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

	    var props = _extends({
	      "aria-current": isActive && ariaCurrent || null,
	      className: className,
	      style: style,
	      to: toLocation
	    }, rest); // React 15 compat


	    if (forwardRefShim$1 !== forwardRef$1) {
	      props.ref = forwardedRef || innerRef;
	    } else {
	      props.innerRef = innerRef;
	    }

	    return React.createElement(Link, props);
	  });
	});

	{
	  NavLink.displayName = "NavLink";
	  var ariaCurrentType = propTypes.oneOf(["page", "step", "location", "date", "time", "true"]);
	  NavLink.propTypes = _extends({}, Link.propTypes, {
	    "aria-current": ariaCurrentType,
	    activeClassName: propTypes.string,
	    activeStyle: propTypes.object,
	    className: propTypes.string,
	    exact: propTypes.bool,
	    isActive: propTypes.func,
	    location: propTypes.object,
	    sensitive: propTypes.bool,
	    strict: propTypes.bool,
	    style: propTypes.object
	  });
	}

	const initialState = {
	  loading: true,
	  books: [],
	  error: null,
	  cart: {
	    books: [{
	      id: 1,
	      title: 'Production-ready Microservices',
	      count: 1,
	      price: 129,
	      imgName: 'prm'
	    }, {
	      id: 2,
	      title: 'Realese It!',
	      count: 1,
	      price: 71,
	      imgName: 'rli'
	    }],
	    num: 2,
	    sum: 200
	  }
	};

	const prepareCartChange = (state, id) => {
	  const newCartBooks = state.cart.books;
	  const idx = newCartBooks.findIndex(book => book.id === id);
	  return {
	    newCartBooks,
	    idx
	  };
	};

	const reducer = (state = initialState, action) => {
	  switch (action.type) {
	    case 'CLEAR_BOOKS':
	      return { ...state,
	        loading: true,
	        books: [],
	        error: null
	      };

	    case 'FETCH_BOOKS_SUCCES':
	      return { ...state,
	        loading: false,
	        books: action.payload,
	        error: null
	      };

	    case 'FETCH_BOOKS_FAILURE':
	      return { ...state,
	        loading: false,
	        books: [],
	        error: action.payload
	      };

	    case 'ADD_CART_BOOK':
	      {
	        const {
	          newCartBooks,
	          idx
	        } = prepareCartChange(state, action.payload);
	        let newBook;

	        if (idx >= 0) {
	          newBook = newCartBooks[idx];
	          newBook.count++;
	          newCartBooks.splice(idx, 1, newBook);
	        } else {
	          newBook = state.books.filter(book => book.id === action.payload)[0];
	          newCartBooks.push({ ...newBook,
	            count: 1
	          });
	        }

	        return { ...state,
	          cart: {
	            books: newCartBooks,
	            num: state.cart.num + 1,
	            sum: state.cart.sum + newBook.price
	          }
	        };
	      }

	    case 'INC_CART_BOOK':
	      {
	        const {
	          newCartBooks,
	          idx
	        } = prepareCartChange(state, action.payload);
	        const newBook = newCartBooks[idx];
	        newBook.count++;
	        newCartBooks.splice(idx, 1, newBook);
	        return { ...state,
	          cart: {
	            books: newCartBooks,
	            num: state.cart.num + 1,
	            sum: state.cart.sum + newBook.price
	          }
	        };
	      }

	    case 'DEC_CART_BOOK':
	      {
	        const {
	          newCartBooks,
	          idx
	        } = prepareCartChange(state, action.payload);
	        const newBook = newCartBooks[idx];

	        if (newBook.count === 1) {
	          newCartBooks.splice(idx, 1);
	        } else {
	          newBook.count--;
	          newCartBooks.splice(idx, 1, newBook);
	        }

	        return { ...state,
	          cart: {
	            books: newCartBooks,
	            num: state.cart.num - 1,
	            sum: state.cart.sum - newBook.price
	          }
	        };
	      }

	    case 'DEL_CART_BOOK':
	      {
	        const {
	          newCartBooks,
	          idx
	        } = prepareCartChange(state, action.payload);
	        const [price, count] = [newCartBooks[idx].price, newCartBooks[idx].count];
	        newCartBooks.splice(idx, 1);
	        return { ...state,
	          cart: {
	            books: newCartBooks,
	            num: state.cart.num - count,
	            sum: state.cart.sum - price * count
	          }
	        };
	      }

	    default:
	      return state;
	  }
	};

	const store = createStore(reducer);

	const Loader = () => {
	  const [str, setStr] = m$1('loading');
	  y$1(() => {
	    const spinning = setInterval(() => {
	      setStr(prevStr => prevStr.concat('.'));
	    }, 666);
	    return () => clearInterval(spinning);
	  }, []);
	  return h("div", {
	    class: "loader"
	  }, str);
	};

	const Header = ({
	  num,
	  sum
	}) => {
	  const cartInfo = num ? h(p, null, h("b", null, num), h("i", null, "\u2014", sum, "\xA3")) : h("i", null, "empty");
	  return h("nav", {
	    class: "navigation"
	  }, h(Link, {
	    to: "/"
	  }, "boo\xA7+o"), h("div", {
	    class: "cart-info"
	  }, h(Link, {
	    to: "/cart"
	  }, h("div", {
	    class: "cart-ellipse"
	  })), h("div", null, "Cart\u2014", cartInfo)));
	};

	const mapStateToProps = state => state.cart;

	var Header$1 = connect(mapStateToProps)(Header);

	const ErrorIdicator = () => {
	  return h("div", null, "Something went badly wrong");
	};

	const booksLoaded = newBooks => {
	  return {
	    type: 'FETCH_BOOKS_SUCCES',
	    payload: newBooks
	  };
	};
	const booksError = error => {
	  return {
	    type: 'FETCH_BOOKS_FAILURE',
	    payload: error
	  };
	};
	const clearBooks = () => {
	  return {
	    type: 'CLEAR_BOOKS'
	  };
	};
	const addCartBook = id => {
	  return {
	    type: 'ADD_CART_BOOK',
	    payload: id
	  };
	};
	const incCartBook = id => {
	  return {
	    type: 'INC_CART_BOOK',
	    payload: id
	  };
	};
	const decCartBook = id => {
	  return {
	    type: 'DEC_CART_BOOK',
	    payload: id
	  };
	};
	const delCartBook = id => {
	  return {
	    type: 'DEL_CART_BOOK',
	    payload: id
	  };
	};

	var prm = "assets/prm.png";

	var rli = "assets/rli.png";

	var images = /*#__PURE__*/Object.freeze({
		__proto__: null,
		prm: prm,
		rli: rli
	});

	const BookItem = ({
	  book,
	  addCartBook
	}) => {
	  const {
	    title,
	    author,
	    imgName
	  } = book;
	  const angel = Math.floor(Math.random() * 17 - 8);
	  const style = {
	    transform: `rotate(${angel}deg)`
	  };
	  return h("li", {
	    class: "book-item"
	  }, h("div", {
	    style: style,
	    class: "book-ellipse"
	  }), h("img", {
	    class: "book-img",
	    src: images[imgName]
	  }), h("div", {
	    class: "book-info"
	  }, h("p", {
	    class: "book-title"
	  }, title), h("p", {
	    class: "book-author"
	  }, author), h("button", {
	    class: "book-add-item",
	    onClick: addCartBook
	  }, "add")));
	};

	const BookList = ({
	  books,
	  addCartBook
	}) => {
	  const list = books.map(book => {
	    return h(BookItem, {
	      key: book.id,
	      book: book,
	      addCartBook: () => addCartBook(book.id)
	    });
	  });
	  return h("ul", null, list);
	};

	const mapDispatchToProps = dispatch => {
	  return {
	    addCartBook: id => dispatch(addCartBook(id))
	  };
	};

	var BookList$1 = connect(null, mapDispatchToProps)(BookList);

	const boosto$1 = new BookstoreService();
	const fetchBooks = dispatch => {
	  boosto$1.getBooks().then(books => dispatch(booksLoaded(books))).catch(err => dispatch(booksError(err)));
	};

	const BookListContainer = ({
	  books,
	  loading,
	  error,
	  fetchBooks,
	  clearBooks
	}) => {
	  y$1(() => {
	    fetchBooks();
	    return () => clearBooks();
	  }, []);
	  if (error) return h(ErrorIdicator, null);else if (loading) return h(Loader, null);else return h(BookList$1, {
	    books: books
	  });
	};

	const mapStateToProps$1 = ({
	  books,
	  loading,
	  error
	}) => ({
	  books,
	  loading,
	  error
	});

	const mapDispatchToProps$1 = dispatch => {
	  return {
	    fetchBooks: () => fetchBooks(dispatch),
	    clearBooks: () => dispatch(clearBooks())
	  };
	};

	var BookListContainer$1 = connect(mapStateToProps$1, mapDispatchToProps$1)(BookListContainer);

	const Home = () => {
	  return h(BookListContainer$1, null);
	};

	const CartItem = ({
	  book,
	  incCartBook,
	  decCartBook,
	  delCartBook
	}) => {
	  const {
	    title,
	    count,
	    price
	  } = book;
	  return h("li", {
	    class: "cart-item"
	  }, h("span", {
	    class: "cart-item-title"
	  }, title), h("div", {
	    class: "cart-item-count-container"
	  }, h("button", {
	    onClick: decCartBook
	  }, "-"), h("span", {
	    class: "cart-item-count"
	  }, count), h("button", {
	    onClick: incCartBook
	  }, "+")), h("span", {
	    class: "cart-item-price"
	  }, price, "\xA3"), h("button", {
	    onClick: delCartBook
	  }, "x"));
	};

	const CartList = ({
	  books,
	  sum,
	  incCartBook,
	  decCartBook,
	  delCartBook
	}) => {
	  if (!books.length) {
	    return h("main", {
	      class: "cart-container"
	    }, h("div", {
	      class: "cart-container-head"
	    }, "Not yet"));
	  }

	  const cartList = books.map(book => {
	    return h(CartItem, {
	      key: book.id,
	      book: book,
	      incCartBook: () => incCartBook(book.id),
	      decCartBook: () => decCartBook(book.id),
	      delCartBook: () => delCartBook(book.id)
	    });
	  });
	  return h("main", {
	    class: "cart-container"
	  }, h("div", {
	    class: "cart-container-head"
	  }, "Your order"), h("div", {
	    class: "cart-list-head"
	  }, h("span", {
	    class: "cart-list-head-title"
	  }, "TITLE"), h("span", {
	    class: "cart-list-head-count"
	  }, "COUNT"), h("span", {
	    class: "cart-list-head-price"
	  }, "PRICE")), h("ul", {
	    class: "cart-list"
	  }, cartList), h("div", {
	    class: "cart-container-footer"
	  }, "Total price: ", sum, "\xA3"));
	};

	const mapStateToProps$2 = state => state.cart;

	const mapDispatchToProps$2 = dispatch => {
	  return {
	    incCartBook: id => dispatch(incCartBook(id)),
	    decCartBook: id => dispatch(decCartBook(id)),
	    delCartBook: id => dispatch(delCartBook(id))
	  };
	};

	var CartList$1 = connect(mapStateToProps$2, mapDispatchToProps$2)(CartList);

	const Cart = () => {
	  return h(CartList$1, null);
	};

	const App = () => {
	  return h(p, null, h(Header$1, null), h(Route, {
	    path: "/",
	    exact: true,
	    component: Home
	  }), h(Route, {
	    path: "/cart",
	    component: Cart
	  }));
	};

	O(h(Provider, {
	  store: store
	}, h(ContextProvider, null, h(HashRouter, null, h(App, null)))), window.root);

}());
