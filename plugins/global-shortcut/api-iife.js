if("__TAURI__"in window){var __TAURI_PLUGIN_GLOBALSHORTCUT__=function(t){"use strict";function e(t,e,r,s){if("a"===r&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?s:"a"===r?s.call(t):s?s.value:e.get(t)}function r(t,e,r,s,i){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?i.call(t,r):i?i.value=r:e.set(t,r),r}var s,i,n;"function"==typeof SuppressedError&&SuppressedError;class o{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,s.set(this,(()=>{})),i.set(this,0),n.set(this,{}),this.id=function(t,e=!1){return window.__TAURI_INTERNALS__.transformCallback(t,e)}((({message:t,id:o})=>{if(o===e(this,i,"f")){r(this,i,o+1,"f"),e(this,s,"f").call(this,t);const a=Object.keys(e(this,n,"f"));if(a.length>0){let t=o+1;for(const r of a.sort()){if(parseInt(r)!==t)break;{const i=e(this,n,"f")[r];delete e(this,n,"f")[r],e(this,s,"f").call(this,i),t+=1}}}}else e(this,n,"f")[o.toString()]=t}))}set onmessage(t){r(this,s,t,"f")}get onmessage(){return e(this,s,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}async function a(t,e={},r){return window.__TAURI_INTERNALS__.invoke(t,e,r)}return s=new WeakMap,i=new WeakMap,n=new WeakMap,t.isRegistered=async function(t){return await a("plugin:global-shortcut|is_registered",{shortcut:t})},t.register=async function(t,e){const r=new o;return r.onmessage=e,await a("plugin:global-shortcut|register",{shortcuts:Array.isArray(t)?t:[t],handler:r})},t.unregister=async function(t){return await a("plugin:global-shortcut|unregister",{shortcuts:Array.isArray(t)?t:[t]})},t}({});Object.defineProperty(window.__TAURI__,"globalShortcut",{value:__TAURI_PLUGIN_GLOBALSHORTCUT__})}
