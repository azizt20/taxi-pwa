if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const f=e=>r(e,o),l={module:{uri:o},exports:t,require:f};s[o]=Promise.all(i.map((e=>l[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/index.html",revision:"e6c0b4649ec4fa6ef942463f36b3fc9f"},{url:"/js/app.b3708978.js",revision:null},{url:"/js/chunk-vendors.1fb3e6ef.js",revision:null},{url:"/manifest.json",revision:"b0d6ded906db037aaed0ff85b3eba813"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
