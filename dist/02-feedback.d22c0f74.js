!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var r,i,u,a,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function v(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function x(){var e=b();if(y(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function T(e){return f=void 0,m&&r?v(e):(r=i=void 0,a)}function h(){var e=b(),n=y(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(x,t),s?v(e):a}(c);if(d)return f=setTimeout(x,t),v(c)}return void 0===f&&(f=setTimeout(x,t)),a}return t=S(t)||0,j(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},h.flush=function(){return void 0===f?a:T(b())},h}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==i}(e))return r;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};const x="feedback-msg",T="user-name",h={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form textarea"),input:document.querySelector(".js-feedback-form input")};h.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("send form"),e.currentTarget.reset(),localStorage.removeItem(x),localStorage.removeItem(T)})),h.textarea.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem(x,t)}),500)),h.input.addEventListener("input",(function(e){const t=e.target.value;localStorage.setItem(T,t),h.input.value=t})),function(){const e=localStorage.getItem(x),t=localStorage.getItem(T);e&&(h.textarea.value=e,h.input.value=t)}()}();
//# sourceMappingURL=02-feedback.d22c0f74.js.map