(this.webpackJsonpmachine=this.webpackJsonpmachine||[]).push([[40],{160:function(t,n,o){"use strict";o.d(n,"a",(function(){return r})),o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return e})),o.d(n,"d",(function(){return s}));var i=o(1),e=function(t,n){return null!==n.closest(t)},r=function(t){var n;return"string"===typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},a=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},c=/^[a-z][a-z0-9+\-.]*:/,s=function(t,n,o){return Object(i.a)(void 0,void 0,void 0,(function(){var e;return Object(i.c)(this,(function(i){return null!=t&&"#"!==t[0]&&!c.test(t)&&(e=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,e.push(t,o)]):[2,!1]}))}))}},86:function(t,n,o){"use strict";o.r(n),o.d(n,"ion_back_button",(function(){return c}));var i=o(1),e=o(28),r=o(6),a=o(160),c=function(){function t(t){var n=this;Object(e.k)(this,t),this.mode=Object(e.d)(this),this.disabled=!1,this.type="button",this.onClick=function(t){return Object(i.a)(n,void 0,void 0,(function(){var n,o;return Object(i.c)(this,(function(i){switch(i.label){case 0:return n=this.el.closest("ion-nav"),t.preventDefault(),(o=n)?[4,n.canGoBack()]:[3,2];case 1:o=i.sent(),i.label=2;case 2:return o?[2,n.pop({skipIfBusy:!0})]:[2,Object(a.d)(this.defaultHref,t,"back")]}}))}))}}return Object.defineProperty(t.prototype,"backButtonIcon",{get:function(){var t=this.icon;return null!=t?t:"ios"===this.mode?r.b.get("backButtonIcon","chevron-back"):r.b.get("backButtonIcon","arrow-back-sharp")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"backButtonText",{get:function(){var t="ios"===this.mode?"Back":null;return null!=this.text?this.text:r.b.get("backButtonText",t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasIconOnly",{get:function(){return this.backButtonIcon&&!this.backButtonText},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rippleType",{get:function(){return this.hasIconOnly?"unbounded":"bounded"},enumerable:!0,configurable:!0}),t.prototype.render=function(){var t,n=this,o=n.color,i=n.defaultHref,r=n.disabled,c=n.type,s=n.mode,d=n.hasIconOnly,u=n.backButtonIcon,l=n.backButtonText,b=void 0!==i;return Object(e.i)(e.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(a.a)(o)),(t={},t[s]=!0,t.button=!0,t["back-button-disabled"]=r,t["back-button-has-icon-only"]=d,t["in-toolbar"]=Object(a.c)("ion-toolbar",this.el),t["in-toolbar-color"]=Object(a.c)("ion-toolbar[color]",this.el),t["ion-activatable"]=!0,t["ion-focusable"]=!0,t["show-back-button"]=b,t))},Object(e.i)("button",{type:c,disabled:r,class:"button-native",part:"button"},Object(e.i)("span",{class:"button-inner"},u&&Object(e.i)("ion-icon",{icon:u,lazy:!1,part:"icon"}),l&&Object(e.i)("span",{class:"button-text",part:"text"},l)),"md"===s&&Object(e.i)("ion-ripple-effect",{type:this.rippleType})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover:hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:.4}@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native:after{background:var(--ion-color-base)}'},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=40.d979f706.chunk.js.map