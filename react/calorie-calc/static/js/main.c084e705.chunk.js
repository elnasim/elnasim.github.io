(this["webpackJsonpcalorie-calc"]=this["webpackJsonpcalorie-calc"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),o=(a(24),a(7)),l=a(1),s=a(17),u=a(3);function m(e){var t=e.title,a=e.proteins,n=e.fats,c=e.carbohydrates,i=e.calories,o=e.weight,l=e.id,s=e.remove;return r.a.createElement("div",{className:"product-main"},r.a.createElement("div",{className:"product-main__title"},t," (",o," \u0433)"),r.a.createElement("div",{className:"product-main__info"},r.a.createElement("div",{className:"product-main__i"},a*o/100,r.a.createElement("br",null),"\u0411"),r.a.createElement("div",{className:"product-main__i"},n*o/100,r.a.createElement("br",null),"\u0416"),r.a.createElement("div",{className:"product-main__i"},c*o/100,r.a.createElement("br",null),"\u0423"),r.a.createElement("div",{className:"product-main__i"},i*o/100,r.a.createElement("br",null),"\u041a\u043a\u0430\u043b"),r.a.createElement("div",{className:"remove",onClick:function(){return s(l)}},r.a.createElement("span",{className:"material-icons"},"delete"))))}function d(e,t){localStorage.setItem(e,JSON.stringify(t))}function p(e){return JSON.parse(localStorage.getItem(e))}function f(e){var t=e.title,a=e.proteins,n=e.fats,c=e.carbohydrates,i=e.calories,o=(e.weight,e.id),l=e.remove;return r.a.createElement("div",{className:"product-main"},r.a.createElement("div",{className:"product-main__title"},t),r.a.createElement("div",{className:"product-main__info"},r.a.createElement("div",{className:"product-main__i"},a,r.a.createElement("br",null),"\u0411"),r.a.createElement("div",{className:"product-main__i"},n,r.a.createElement("br",null),"\u0416"),r.a.createElement("div",{className:"product-main__i"},c,r.a.createElement("br",null),"\u0423"),r.a.createElement("div",{className:"product-main__i"},i,r.a.createElement("br",null),"\u041a\u043a\u0430\u043b"),r.a.createElement("div",{className:"remove",onClick:function(){return l(o)}},r.a.createElement("span",{className:"material-icons"},"delete"))))}var v=[{path:"/",component:function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({proteins:0,calories:0,carbohydrates:0,fats:0}),l=Object(u.a)(i,2),f=l[0],v=l[1],E=Object(n.useState)(!0),b=Object(u.a)(E,2),h=b[0],N=b[1];function g(e){if(window.confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?")){var t=a.filter((function(t){return t.id!==e}));c(t)}}Object(n.useEffect)((function(){var e=p("ration");c(e),N(!1)}),[]),Object(n.useEffect)((function(){a&&(!function(){var e,t=0,n=0,r=0,c=0,i=Object(s.a)(a);try{for(i.s();!(e=i.n()).done;){var o=e.value;t+=o.proteins*o.weight/100,r+=o.calories*o.weight/100,n+=o.carbohydrates*o.weight/100,c+=o.fats*o.weight/100}}catch(l){i.e(l)}finally{i.f()}v({proteins:t,calories:r,carbohydrates:n,fats:c})}(),d("ration",a))}),[a]);var _=a.map((function(e){return r.a.createElement(m,{title:e.title,proteins:e.proteins,fats:e.fats,carbohydrates:e.carbohydrates,calories:e.calories,id:e.id,weight:e.weight,remove:g,key:e.id})}));return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},!h&&_,!h&&r.a.createElement("div",{className:"product-main"},r.a.createElement("div",{className:"product-main__title"},"\u0412\u0441\u0435\u0433\u043e"),r.a.createElement("div",{className:"product-main__info"},r.a.createElement("div",{className:"product-main__i"},f.proteins,r.a.createElement("br",null),"\u0411"),r.a.createElement("div",{className:"product-main__i"},f.fats,r.a.createElement("br",null),"\u0416"),r.a.createElement("div",{className:"product-main__i"},f.carbohydrates,r.a.createElement("br",null),"\u0423"),r.a.createElement("div",{className:"product-main__i"},f.calories,r.a.createElement("br",null),"\u041a\u043a\u0430\u043b"))),!h&&r.a.createElement(o.b,{to:"/add-ration",className:"button button_mobile"},r.a.createElement("span",{className:"material-icons"},"add_circle"))))}},{path:"/new-product",component:function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),s=o[0],m=o[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),E=v[0],b=v[1],h=Object(n.useState)(""),N=Object(u.a)(h,2),g=N[0],_=N[1],w=Object(n.useState)(""),O=Object(u.a)(w,2),j=O[0],y=O[1],S=Object(l.f)();return r.a.createElement("div",{className:"new-product"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},"\u041d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),r.a.createElement("form",{className:"form-new-product"},r.a.createElement("input",{type:"text",className:"input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",onChange:function(e){return c(e.target.value)},value:a}),r.a.createElement("input",{type:"text",className:"input",placeholder:"\u0411\u0435\u043b\u043a\u0438",onChange:function(e){return m(e.target.value)},value:s}),r.a.createElement("input",{type:"text",className:"input",placeholder:"\u0416\u0438\u0440\u044b",onChange:function(e){return b(e.target.value)},value:E}),r.a.createElement("input",{type:"text",className:"input",placeholder:"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b",onChange:function(e){return _(e.target.value)},value:g}),r.a.createElement("input",{type:"text",className:"input",placeholder:"\u041a\u043a\u0430\u043b",onChange:function(e){return y(e.target.value)},value:j}),r.a.createElement("button",{type:"submit",className:"button",onClick:function(e){if(e.preventDefault(),a&&s&&E&&g&&j){var t,n=Date.now();(t=p("products")?p("products"):[]).push({id:n,title:a,proteins:s,fats:E,carbohydrates:g,calories:j}),d("products",t),S.push("/products")}}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}},{path:"/add-ration",component:function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),s=o[0],m=o[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),E=v[0],b=v[1],h=Object(n.useState)(""),N=Object(u.a)(h,2),g=N[0],_=N[1];Object(n.useEffect)((function(){var e=p("products"),t=p("ration");c(e),m(t)}),[]);var w=Object(l.f)(),O=a&&a.map((function(e){return r.a.createElement("option",{value:e.title,key:e.id},e.title)}));return r.a.createElement("div",{className:"add-ration"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0446\u0438\u043e\u043d"),a&&r.a.createElement("form",{className:"add-ration-form",onSubmit:function(e){if(e.preventDefault(),E&&"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"!==E&&g){var t=a.find((function(e){return e.title===E})),n=s.find((function(e){return e.title===E}));n?(n.weight+=+g,d("ration",s),w.push("/")):(t.weight=+g,s.push(t),d("ration",s),w.push("/"))}}},r.a.createElement("select",{className:"input",onChange:function(e){return b(e.target.value)}},r.a.createElement("option",{value:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",defaultValue:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"},"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"),O),r.a.createElement("input",{type:"text",className:"input",placeholder:"\u0412\u0435\u0441 (\u0433)",onChange:function(e){return _(e.target.value)},value:g}),r.a.createElement("button",{className:"button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),!a&&r.a.createElement("div",{className:"title"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u043f\u0440\u043e\u0434\u0443\u043a\u0442")))}},{path:"/products",component:function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),l=Object(u.a)(i,2),s=l[0],m=l[1];function v(e){if(window.confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?")){var t=a.filter((function(t){return t.id!==e}));c(t)}}Object(n.useEffect)((function(){var e=p("products");c(e),m(!1)}),[]),Object(n.useEffect)((function(){d("products",a)}),[a]);var E=a.map((function(e){return r.a.createElement(f,{title:e.title,proteins:e.proteins,fats:e.fats,carbohydrates:e.carbohydrates,calories:e.calories,id:e.id,remove:v,key:e.id})}));return r.a.createElement("div",{className:"products"},r.a.createElement("div",{className:"container"},!s&&E,!s&&r.a.createElement(o.b,{to:"/new-product",className:"button button_mobile"},r.a.createElement("span",{className:"material-icons"},"add_circle"))))}},{path:"*",component:function(){return r.a.createElement("div",null,"404")}}];function E(){return r.a.createElement("nav",{className:"header"},r.a.createElement(o.b,{to:"/",className:"header__link"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(o.b,{to:"/products",className:"header__link"},"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"))}function b(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(l.c,null,v.map((function(e,t){return r.a.createElement(l.a,{key:t,exact:"/"===e.path,path:e.path,render:function(t){return r.a.createElement(e.component,t)}})})))))}var h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.c084e705.chunk.js.map