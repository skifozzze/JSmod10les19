function e(e){return e&&e.__esModule?e.default:e}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=l.parcelRequirebe8f;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var l=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,l.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,l){o[e]=l},l.parcelRequirebe8f=t);e(t("1Gatq")).template({compiler:[8,">= 4.3.0"],main:function(e,l,n,o,t){var a,r=null!=l?l:e.nullContext||{},c=e.hooks.helperMissing,u="function",i=e.escapeExpression,s=e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]};return'<div class="color-card">\r\n  <div class="color-swatch" data-hex="'+i(typeof(a=null!=(a=s(n,"hex")||(null!=l?s(l,"hex"):l))?a:c)===u?a.call(r,{name:"hex",hash:{},data:t,loc:{start:{line:2,column:38},end:{line:2,column:45}}}):a)+'" data-rgb="'+i(typeof(a=null!=(a=s(n,"rgb")||(null!=l?s(l,"rgb"):l))?a:c)===u?a.call(r,{name:"rgb",hash:{},data:t,loc:{start:{line:2,column:57},end:{line:2,column:64}}}):a)+'" style="background-color: '+i(typeof(a=null!=(a=s(n,"hex")||(null!=l?s(l,"hex"):l))?a:c)===u?a.call(r,{name:"hex",hash:{},data:t,loc:{start:{line:2,column:91},end:{line:2,column:98}}}):a)+'"></div>\r\n  <div class="color-meta">\r\n    <p>HEX: '+i(typeof(a=null!=(a=s(n,"hex")||(null!=l?s(l,"hex"):l))?a:c)===u?a.call(r,{name:"hex",hash:{},data:t,loc:{start:{line:4,column:12},end:{line:4,column:19}}}):a)+"</p>\r\n    <p>RGB: "+i(typeof(a=null!=(a=s(n,"rgb")||(null!=l?s(l,"rgb"):l))?a:c)===u?a.call(r,{name:"rgb",hash:{},data:t,loc:{start:{line:5,column:12},end:{line:5,column:19}}}):a)+"</p>\r\n  </div>\r\n</div>"},useData:!0});var a=e(t("1Gatq")).template({1:function(e,l,n,o,t){var a,r=null!=l?l:e.nullContext||{},c=e.hooks.helperMissing,u="function",i=e.escapeExpression,s=e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]};return'<div class="color-card">\r\n  <div class="color-swatch" data-hex="'+i(typeof(a=null!=(a=s(n,"hex")||(null!=l?s(l,"hex"):l))?a:c)===u?a.call(r,{name:"hex",hash:{},data:t,loc:{start:{line:3,column:38},end:{line:3,column:45}}}):a)+'" data-rgb="'+i(typeof(a=null!=(a=s(n,"rgb")||(null!=l?s(l,"rgb"):l))?a:c)===u?a.call(r,{name:"rgb",hash:{},data:t,loc:{start:{line:3,column:57},end:{line:3,column:64}}}):a)+'" style="background-color: '+i(typeof(a=null!=(a=s(n,"hex")||(null!=l?s(l,"hex"):l))?a:c)===u?a.call(r,{name:"hex",hash:{},data:t,loc:{start:{line:3,column:91},end:{line:3,column:98}}}):a)+'"></div>\r\n  <div class="color-meta">\r\n    <p>HEX: '+i(typeof(a=null!=(a=s(n,"hex")||(null!=l?s(l,"hex"):l))?a:c)===u?a.call(r,{name:"hex",hash:{},data:t,loc:{start:{line:5,column:12},end:{line:5,column:19}}}):a)+"</p>\r\n    <p>RGB: "+i(typeof(a=null!=(a=s(n,"rgb")||(null!=l?s(l,"rgb"):l))?a:c)===u?a.call(r,{name:"rgb",hash:{},data:t,loc:{start:{line:6,column:12},end:{line:6,column:19}}}):a)+"</p>\r\n  </div>\r\n</div>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,l,n,o,t){var a;return null!=(a=(e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]})(n,"each").call(null!=l?l:e.nullContext||{},l,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t,loc:{start:{line:1,column:0},end:{line:9,column:11}}}))?a:""},useData:!0});const r=document.querySelector(".js-palette"),c=a([{hex:"#7f11e0",rgb:"rgb(127, 17, 224)"},{hex:"#fff",rgb:"rgb(255,255,255)"},{hex:"#cdcdcd",rgb:"rgb(205,205,205)"},{hex:"#cdff",rgb:"rgb(204, 221 , 255)"},{hex:"#bbdfff",rgb:"rgb(187, 223, 255)"}]);r.insertAdjacentHTML("beforeend",c),r.addEventListener("click",(function(e){if(!e.target.classList.contains("color-swatch"))return;const l=e.target,n=l.closest(".color-card");(function(){const e=document.querySelector(".color-card.is-active");e&&e.classList.remove("is-active")})(),t=n,t.classList.add("is-active"),o=l.dataset.hex,document.body.style.backgroundColor=o;var o;var t}));
//# sourceMappingURL=03-colorpicker.ed5421cb.js.map
