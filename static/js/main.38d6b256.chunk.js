(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(9),a(1));a(11);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode"))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"myBox",className:"form-label"},"Example textarea"),l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8",placeholder:"Enter Text here"})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to UpperCase","success")}},"Convert to UpperCase"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to LowerCase","success")}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=document.createElement("a"),a=new Blob([r],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download="myFile.txt",document.body.appendChild(t),t.click(),e.showAlert("File Downloaded","success")}},"Download")),l.a.createElement("div",{className:"container my-3"},l.a.createElement("h1",null,"Your text summary"),l.a.createElement("p",null,l.a.createElement("b",null,r.split(" ").length)," Words and  ",l.a.createElement("b",null,r.length)," Characters"),l.a.createElement("p",null,"Readable in ",l.a.createElement("b",null,Math.trunc(.008*(r.split(" ").length-1)))," Minutes ",l.a.createElement("b",null,.008*(r.split(" ").length-1)*60)," seconds"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r)))}s.defaultProps={title:"Set title here",aboutText:"About"};var i=function(e){var t;return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(t=e.alert.type).toLowerCase().charAt(0).toUpperCase()+t.slice(1)),": ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(o.a)(c,2),d=u[0],b=u[1],p=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:a,togglemode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="yellow",p("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="green",p("Light mode has been enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:p,heading:"Enter the Text to analyze"})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,14)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(13)},9:function(e,t,a){}},[[4,3,2]]]);
//# sourceMappingURL=main.38d6b256.chunk.js.map