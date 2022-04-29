(function(){"use strict";var e={2370:function(e,t,n){var a=n(9242),r=n(3396),o=n(7718);function u(e,t,n,a,u,l){const i=(0,r.up)("HeaderComponent"),d=(0,r.up)("NavigationComponent"),c=(0,r.up)("ChartComponent"),f=(0,r.up)("MinMaxComponent");return(0,r.wg)(),(0,r.j4)(o.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{id:"header"}),(0,r.Wm)(d,{id:"nav"}),(0,r.Wm)(c,{data:a.data,today:a.today,yesterday:a.yesterday},null,8,["data","today","yesterday"]),(0,r.Wm)(f,{data:a.data,today:a.today},null,8,["data","today"])])),_:1})}var l=n(6265),i=n.n(l),d=n(4870),c=n(4075),f=n(6944),s=n(6491),p=n(7033);function m(e,t,n,a,o,u){return(0,r.wg)(),(0,r.j4)(p.V,{permanent:"",rail:"",app:"",clipped:""},{default:(0,r.w5)((()=>[(0,r.Wm)(f.i,{nav:""},{default:(0,r.w5)((()=>[(0,r.Wm)(s.l,{class:"","prepend-icon":"mdi-chart-box-outline",title:"",value:"chart"}),(0,r.Wm)(c.J),(0,r.Wm)(s.l,{class:"","prepend-icon":"mdi-currency-usd",title:"",value:"prices"})])),_:1})])),_:1})}var v={name:"NavigationComponent"},y=n(89);const h=(0,y.Z)(v,[["render",m]]);var g=h,w=n(497),_=n(652),b=n(4310);function W(e,t,n,a,o,u){return(0,r.wg)(),(0,r.j4)(w.L,{app:"","clipped-left":""},{default:(0,r.w5)((()=>[(0,r.Wm)(_.V,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b.f,{width:"100%",src:"https://res.cloudinary.com/dffkajufp/image/upload/v1649377758/photo1649377718_yr3h2m.jpg",alt:"profile-pic"})])),_:1})])),_:1})}var j={name:"HeaderComponent"};const O=(0,y.Z)(j,[["render",W]]);var C=O,M=n(7139),D=n(4624),k=n(9271);const x={class:"d-flex flex-column align-center justify-center mt-5"},P=(0,r._)("h5",null," Media: ",-1);function E(e,t,n,a,o,u){const l=(0,r.up)("LineChart");return(0,r.wg)(),(0,r.j4)(k.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D._,{width:"90%"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{chartData:a.chartData},null,8,["chartData"]),(0,r._)("div",x,[P,(0,r._)("h4",null,(0,M.zw)(a.media[0]),1)])])),_:1})])),_:1})}var H=n(6610),z=n(5140);z.kL.register(...z.zX);var T={name:"ChartComponent",components:{LineChart:H.wW},props:["data","today","yesterday"],setup(e){const t=(0,d.iH)(e.data.data.included[0].attributes.values);let n=[],a=[];const r=(0,d.iH)(e.today),o=(0,d.iH)(e.yesterday);console.log(r.value),console.log(o.value),t.value.map((e=>{let t=new Date(Date.parse(e.datetime));o.value<t&&t>r.value&&(n=[...n,e.value],a=[...a,`${t.getDate()}/${t.getMonth()+1} ${t.getHours()}:00`])}));let u=[];for(let i=0;i<n.length;i++)u=[...u,(n.reduce(((e,t)=>e+t))/n.length).toFixed(2)];const l={labels:a,datasets:[{data:n,backgroundColor:"blue",label:"price",borderColor:"blue"},{data:u,backgroundColor:"red",label:"media",borderColor:"red",pointStyle:"circle",pointRadius:0,pointHoverRadius:0}]};return{chartData:l,media:u}}};const $=(0,y.Z)(T,[["render",E]]);var N=$,L=n(7783),S=n(6572),A=n(6824),F=n(8521);const Z=(0,r.Uk)(" Precio mas bajo de ayer "),R={class:"red"},U=(0,r.Uk)(" Precio mas bajo de hoy "),q={class:"red"},V=(0,r.Uk)(" Precio mas alto de ayer "),Y={class:"green"},B=(0,r.Uk)(" Precio mas alto de hoy "),J={class:"green"};function X(e,t,n,a,o,u){return(0,r.wg)(),(0,r.j4)(k.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D._,{elevation:"0",width:"90%"},{default:(0,r.w5)((()=>[(0,r.Wm)(A.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(L.k,null,{default:(0,r.w5)((()=>[Z])),_:1}),(0,r.Wm)(S.E,null,{default:(0,r.w5)((()=>[(0,r._)("h3",R,(0,M.zw)(a.prices[a.yesterdayMin].value),1)])),_:1})])),_:1})])),_:1}),(0,r.Wm)(F.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(L.k,null,{default:(0,r.w5)((()=>[U])),_:1}),(0,r.Wm)(S.E,null,{default:(0,r.w5)((()=>[(0,r._)("h3",q,(0,M.zw)(a.prices[a.todayMin+24].value),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(A.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(L.k,null,{default:(0,r.w5)((()=>[V])),_:1}),(0,r.Wm)(S.E,null,{default:(0,r.w5)((()=>[(0,r._)("h3",Y,(0,M.zw)(a.prices[a.todayMin+24].value),1)])),_:1})])),_:1})])),_:1}),(0,r.Wm)(F.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(D._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(L.k,null,{default:(0,r.w5)((()=>[B])),_:1}),(0,r.Wm)(S.E,null,{default:(0,r.w5)((()=>[(0,r._)("h3",J,(0,M.zw)(a.prices[a.todayMax+24].value),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var G={name:"MinMaxComponent",props:["data","today"],setup(e){const t=(0,d.iH)(e.data.data.included[0].attributes.values),n=new Date(Date.parse(e.today));let a=[],r=[];t.value.map((e=>{const t=new Date(Date.parse(e.datetime));t.getDate()===n.getDate()?r=[...r,e.value]:t.getDate()<n.getDate()&&(a=[...a,e.value])}));const o=a.indexOf(Math.max.apply(null,a)),u=a.indexOf(Math.min.apply(null,a)),l=r.indexOf(Math.max.apply(null,r)),i=r.indexOf(Math.min.apply(null,r));return{prices:t,todayMax:l,todayMin:i,yesterdayMax:o,yesterdayMin:u}}};const I=(0,y.Z)(G,[["render",X]]);var K=I,Q={name:"App",components:{HeaderComponent:C,NavigationComponent:g,MinMaxComponent:K,ChartComponent:N},setup(){const e=new Date,t=new Date;t.setDate(e.getDate()-1);const n=(0,d.iH)(null);return i().get(`https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}T00:00&end_date=${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}T23:59&time_trunc=hour&cached=true`).then((e=>n.value=e)).catch((e=>console.error(e))),{today:e,yesterday:t,data:n}}};const ee=(0,y.Z)(Q,[["render",u]]);var te=ee,ne=(n(9773),n(5860)),ae=(0,ne.Rd)();async function re(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}re(),(0,a.ri)(te).use(ae).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var u=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var l=!0,i=0;i<a.length;i++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(l=!1,o<u&&(u=o));if(l){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"===typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var u={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&a;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){u[e]=function(){return a[e]}}));return u["default"]=function(){return a},n.d(o,u),o}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.404c44e1.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="precio-luz:";n.l=function(a,r,o,u){if(e[a])e[a].push(r);else{var l,i;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var f=d[c];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==t+o){l=f;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=a),e[a]=[r];var s=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=s.bind(null,l.onerror),l.onload=s.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var u=n.p+n.u(t),l=new Error,i=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",l.name="ChunkLoadError",l.type=o,l.request=u,r[1](l)}};n.l(u,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,u=a[0],l=a[1],i=a[2],d=0;if(u.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var c=i(n)}for(t&&t(a);d<u.length;d++)o=u[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkprecio_luz"]=self["webpackChunkprecio_luz"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2370)}));a=n.O(a)})();
//# sourceMappingURL=app.3a0edb0b.js.map