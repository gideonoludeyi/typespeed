/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var C=function(n,t){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])},C(n,t)};function M(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");C(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}function nn(n,t,r,e){function o(i){return i instanceof r?i:new r(function(u){u(i)})}return new(r||(r=Promise))(function(i,u){function a(l){try{c(e.next(l))}catch(h){u(h)}}function f(l){try{c(e.throw(l))}catch(h){u(h)}}function c(l){l.done?i(l.value):o(l.value).then(a,f)}c((e=e.apply(n,t||[])).next())})}function W(n,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,o,i,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(c){return function(l){return f([c,l])}}function f(c){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(c[0]===6&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(n,r)}catch(l){c=[6,l],o=0}finally{e=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function w(n){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function E(n,t){var r=typeof Symbol=="function"&&n[Symbol.iterator];if(!r)return n;var e=r.call(n),o,i=[],u;try{for(;(t===void 0||t-- >0)&&!(o=e.next()).done;)i.push(o.value)}catch(a){u={error:a}}finally{try{o&&!o.done&&(r=e.return)&&r.call(e)}finally{if(u)throw u.error}}return i}function O(n,t,r){if(r||arguments.length===2)for(var e=0,o=t.length,i;e<o;e++)(i||!(e in t))&&(i||(i=Array.prototype.slice.call(t,0,e)),i[e]=t[e]);return n.concat(i||Array.prototype.slice.call(t))}function g(n){return this instanceof g?(this.v=n,this):new g(n)}function rn(n,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=r.apply(n,t||[]),o,i=[];return o={},u("next"),u("throw"),u("return"),o[Symbol.asyncIterator]=function(){return this},o;function u(s){e[s]&&(o[s]=function(v){return new Promise(function(p,d){i.push([s,v,p,d])>1||a(s,v)})})}function a(s,v){try{f(e[s](v))}catch(p){h(i[0][3],p)}}function f(s){s.value instanceof g?Promise.resolve(s.value.v).then(c,l):h(i[0][2],s)}function c(s){a("next",s)}function l(s){a("throw",s)}function h(s,v){s(v),i.shift(),i.length&&a(i[0][0],i[0][1])}}function tn(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],r;return t?t.call(n):(n=typeof w=="function"?w(n):n[Symbol.iterator](),r={},e("next"),e("throw"),e("return"),r[Symbol.asyncIterator]=function(){return this},r);function e(i){r[i]=n[i]&&function(u){return new Promise(function(a,f){u=n[i](u),o(a,f,u.done,u.value)})}}function o(i,u,a,f){Promise.resolve(f).then(function(c){i({value:c,done:a})},u)}}function y(n){return typeof n=="function"}function en(n){var t=function(e){Error.call(e),e.stack=new Error().stack},r=n(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var L=en(function(n){return function(r){n(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(e,o){return o+1+") "+e.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function R(n,t){if(n){var r=n.indexOf(t);0<=r&&n.splice(r,1)}}var K=function(){function n(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return n.prototype.unsubscribe=function(){var t,r,e,o,i;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var a=w(u),f=a.next();!f.done;f=a.next()){var c=f.value;c.remove(this)}}catch(d){t={error:d}}finally{try{f&&!f.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}else u.remove(this);var l=this.initialTeardown;if(y(l))try{l()}catch(d){i=d instanceof L?d.errors:[d]}var h=this._teardowns;if(h){this._teardowns=null;try{for(var s=w(h),v=s.next();!v.done;v=s.next()){var p=v.value;try{q(p)}catch(d){i=i!=null?i:[],d instanceof L?i=O(O([],E(i)),E(d.errors)):i.push(d)}}}catch(d){e={error:d}}finally{try{v&&!v.done&&(o=s.return)&&o.call(s)}finally{if(e)throw e.error}}}if(i)throw new L(i)}},n.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)q(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=(r=this._teardowns)!==null&&r!==void 0?r:[]).push(t)}},n.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},n.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},n.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&R(r,t)},n.prototype.remove=function(t){var r=this._teardowns;r&&R(r,t),t instanceof n&&t._removeParent(this)},n.EMPTY=function(){var t=new n;return t.closed=!0,t}(),n}();function X(n){return n instanceof K||n&&"closed"in n&&y(n.remove)&&y(n.add)&&y(n.unsubscribe)}function q(n){y(n)?n():n.unsubscribe()}var j={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},P={setTimeout:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=P.delegate;return((r==null?void 0:r.setTimeout)||setTimeout).apply(void 0,O([],E(n)))},clearTimeout:function(n){var t=P.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(n)},delegate:void 0};function Z(n){P.setTimeout(function(){throw n})}function z(){}var on=function(){return G("C",void 0,void 0)}();function un(n){return G("E",void 0,n)}function cn(n){return G("N",n,void 0)}function G(n,t,r){return{kind:n,value:t,error:r}}function an(n){n()}var Y=function(n){M(t,n);function t(r){var e=n.call(this)||this;return e.isStopped=!1,r?(e.destination=r,X(r)&&r.add(e)):e.destination=hn,e}return t.create=function(r,e,o){return new F(r,e,o)},t.prototype.next=function(r){this.isStopped?U(cn(r),this):this._next(r)},t.prototype.error=function(r){this.isStopped?U(un(r),this):(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped?U(on,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(K),fn=Function.prototype.bind;function k(n,t){return fn.call(n,t)}var ln=function(){function n(t){this.partialObserver=t}return n.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(e){T(e)}},n.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(e){T(e)}else T(t)},n.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(r){T(r)}},n}(),F=function(n){M(t,n);function t(r,e,o){var i=n.call(this)||this,u;if(y(r)||!r)u={next:r!=null?r:void 0,error:e!=null?e:void 0,complete:o!=null?o:void 0};else{var a;i&&j.useDeprecatedNextContext?(a=Object.create(r),a.unsubscribe=function(){return i.unsubscribe()},u={next:r.next&&k(r.next,a),error:r.error&&k(r.error,a),complete:r.complete&&k(r.complete,a)}):u=r}return i.destination=new ln(u),i}return t}(Y);function T(n){Z(n)}function sn(n){throw n}function U(n,t){var r=j.onStoppedNotification;r&&P.setTimeout(function(){return r(n,t)})}var hn={closed:!0,next:z,error:sn,complete:z},D=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function dn(n){return n}function yn(n){return n.length===0?dn:n.length===1?n[0]:function(r){return n.reduce(function(e,o){return o(e)},r)}}var x=function(){function n(t){t&&(this._subscribe=t)}return n.prototype.lift=function(t){var r=new n;return r.source=this,r.operator=t,r},n.prototype.subscribe=function(t,r,e){var o=this,i=pn(t)?t:new F(t,r,e);return an(function(){var u=o,a=u.operator,f=u.source;i.add(a?a.call(i,f):f?o._subscribe(i):o._trySubscribe(i))}),i},n.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},n.prototype.forEach=function(t,r){var e=this;return r=J(r),new r(function(o,i){var u=new F({next:function(a){try{t(a)}catch(f){i(f),u.unsubscribe()}},error:i,complete:o});e.subscribe(u)})},n.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},n.prototype[D]=function(){return this},n.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return yn(t)(this)},n.prototype.toPromise=function(t){var r=this;return t=J(t),new t(function(e,o){var i;r.subscribe(function(u){return i=u},function(u){return o(u)},function(){return e(i)})})},n.create=function(t){return new n(t)},n}();function J(n){var t;return(t=n!=null?n:j.Promise)!==null&&t!==void 0?t:Promise}function vn(n){return n&&y(n.next)&&y(n.error)&&y(n.complete)}function pn(n){return n&&n instanceof Y||vn(n)&&X(n)}function mn(n){return y(n==null?void 0:n.lift)}function I(n){return function(t){if(mn(t))return t.lift(function(r){try{return n(r,this)}catch(e){this.error(e)}});throw new TypeError("Unable to lift unknown Observable type")}}function S(n,t,r,e,o){return new bn(n,t,r,e,o)}var bn=function(n){M(t,n);function t(r,e,o,i,u,a){var f=n.call(this,r)||this;return f.onFinalize=u,f.shouldUnsubscribe=a,f._next=e?function(c){try{e(c)}catch(l){r.error(l)}}:n.prototype._next,f._error=i?function(c){try{i(c)}catch(l){r.error(l)}finally{this.unsubscribe()}}:n.prototype._error,f._complete=o?function(){try{o()}catch(c){r.error(c)}finally{this.unsubscribe()}}:n.prototype._complete,f}return t.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var e=this.closed;n.prototype.unsubscribe.call(this),!e&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},t}(Y),_=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function wn(n){return y(n==null?void 0:n.then)}function Sn(n){return y(n[D])}function xn(n){return Symbol.asyncIterator&&y(n==null?void 0:n[Symbol.asyncIterator])}function gn(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function In(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var En=In();function An(n){return y(n==null?void 0:n[En])}function Tn(n){return rn(this,arguments,function(){var r,e,o,i;return W(this,function(u){switch(u.label){case 0:r=n.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,g(r.read())];case 3:return e=u.sent(),o=e.value,i=e.done,i?[4,g(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,g(o)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function On(n){return y(n==null?void 0:n.getReader)}function H(n){if(n instanceof x)return n;if(n!=null){if(Sn(n))return Pn(n);if(_(n))return Ln(n);if(wn(n))return kn(n);if(xn(n))return $(n);if(An(n))return Un(n);if(On(n))return Cn(n)}throw gn(n)}function Pn(n){return new x(function(t){var r=n[D]();if(y(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ln(n){return new x(function(t){for(var r=0;r<n.length&&!t.closed;r++)t.next(n[r]);t.complete()})}function kn(n){return new x(function(t){n.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,Z)})}function Un(n){return new x(function(t){var r,e;try{for(var o=w(n),i=o.next();!i.done;i=o.next()){var u=i.value;if(t.next(u),t.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(e=o.return)&&e.call(o)}finally{if(r)throw r.error}}t.complete()})}function $(n){return new x(function(t){Rn(n,t).catch(function(r){return t.error(r)})})}function Cn(n){return $(Tn(n))}function Rn(n,t){var r,e,o,i;return nn(this,void 0,void 0,function(){var u,a;return W(this,function(f){switch(f.label){case 0:f.trys.push([0,5,6,11]),r=tn(n),f.label=1;case 1:return[4,r.next()];case 2:if(e=f.sent(),!!e.done)return[3,4];if(u=e.value,t.next(u),t.closed)return[2];f.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=f.sent(),o={error:a},[3,11];case 6:return f.trys.push([6,,9,10]),e&&!e.done&&(i=r.return)?[4,i.call(r)]:[3,8];case 7:f.sent(),f.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function Fn(n,t,r,e,o){e===void 0&&(e=0),o===void 0&&(o=!1);var i=t.schedule(function(){r(),o?n.add(this.schedule(null,e)):this.unsubscribe()},e);if(n.add(i),!o)return i}function B(n,t){return I(function(r,e){var o=0;r.subscribe(S(e,function(i){e.next(n.call(t,i,o++))}))})}var Mn=Array.isArray;function jn(n,t){return Mn(t)?n.apply(void 0,O([],E(t))):n(t)}function Gn(n){return B(function(t){return jn(n,t)})}function Yn(n,t,r,e,o,i,u,a){var f=[],c=0,l=0,h=!1,s=function(){h&&!f.length&&!c&&t.complete()},v=function(d){return c<e?p(d):f.push(d)},p=function(d){i&&t.next(d),c++;var b=!1;H(r(d,l++)).subscribe(S(t,function(m){o==null||o(m),i?v(m):t.next(m)},function(){b=!0},void 0,function(){if(b)try{c--;for(var m=function(){var A=f.shift();u?Fn(t,u,function(){return p(A)}):p(A)};f.length&&c<e;)m();s()}catch(A){t.error(A)}}))};return n.subscribe(S(t,v,function(){h=!0,s()})),function(){a==null||a()}}function N(n,t,r){return r===void 0&&(r=1/0),y(t)?N(function(e,o){return B(function(i,u){return t(e,i,o,u)})(H(n(e,o)))},r):(typeof t=="number"&&(r=t),I(function(e,o){return Yn(e,o,n,r)}))}var Dn=["addListener","removeListener"],Hn=["addEventListener","removeEventListener"],qn=["on","off"];function Q(n,t,r,e){if(y(r)&&(e=r,r=void 0),e)return Q(n,t,r).pipe(Gn(e));var o=E(Qn(n)?Hn.map(function(a){return function(f){return n[a](t,f,r)}}):zn(n)?Dn.map(V(n,t)):Jn(n)?qn.map(V(n,t)):[],2),i=o[0],u=o[1];if(!i&&_(n))return N(function(a){return Q(a,t,r)})(H(n));if(!i)throw new TypeError("Invalid event target");return new x(function(a){var f=function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return a.next(1<c.length?c:c[0])};return i(f),function(){return u(f)}})}function V(n,t){return function(r){return function(e){return n[r](t,e)}}}function zn(n){return y(n.addListener)&&y(n.removeListener)}function Jn(n){return y(n.on)&&y(n.off)}function Qn(n){return y(n.addEventListener)&&y(n.removeEventListener)}function Wn(n,t){return I(function(r,e){var o=0;r.subscribe(S(e,function(i){return n.call(t,i,o++)&&e.next(i)}))})}function Kn(n,t){return t===void 0&&(t=null),t=t!=null?t:n,I(function(r,e){var o=[],i=0;r.subscribe(S(e,function(u){var a,f,c,l,h=null;i++%t===0&&o.push([]);try{for(var s=w(o),v=s.next();!v.done;v=s.next()){var p=v.value;p.push(u),n<=p.length&&(h=h!=null?h:[],h.push(p))}}catch(m){a={error:m}}finally{try{v&&!v.done&&(f=s.return)&&f.call(s)}finally{if(a)throw a.error}}if(h)try{for(var d=w(h),b=d.next();!b.done;b=d.next()){var p=b.value;R(o,p),e.next(p)}}catch(m){c={error:m}}finally{try{b&&!b.done&&(l=d.return)&&l.call(d)}finally{if(c)throw c.error}}},function(){var u,a;try{for(var f=w(o),c=f.next();!c.done;c=f.next()){var l=c.value;e.next(l)}}catch(h){u={error:h}}finally{try{c&&!c.done&&(a=f.return)&&a.call(f)}finally{if(u)throw u.error}}e.complete()},void 0,function(){o=null}))})}function Vn(n,t,r,e,o){return function(i,u){var a=r,f=t,c=0;i.subscribe(S(u,function(l){var h=c++;f=a?n(f,l,h):(a=!0,l),e&&u.next(f)},o&&function(){a&&u.next(f),u.complete()}))}}function Xn(n,t){return I(Vn(n,t,arguments.length>=2,!0))}function Zn(n,t){return t===void 0&&(t=!1),I(function(r,e){var o=0;r.subscribe(S(e,function(i){var u=n(i,o++);(u||t)&&e.next(i),!u&&e.complete()}))})}export{Wn as a,Kn as b,Q as f,B as m,Xn as s,Zn as t};
