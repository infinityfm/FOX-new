(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{673:function(e,t){},723:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(24),c=a(94),s=a(165),o=a(164),m=(a(673),a(59)),i=[{path:"/",exact:!0,name:"Home"}],u=function(){var e=Object(c.c)(),t=Object(c.d)((function(e){return e.sidebarShow}));return r.a.createElement(o.q,{withSubheader:!0},r.a.createElement(o.P,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:a})}}),r.a.createElement(o.P,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:a})}}),r.a.createElement(o.r,{className:"mx-auto d-lg-none",to:"/"},r.a.createElement(m.a,{name:"logo",height:"48",alt:"Logo"})),r.a.createElement(o.s,{className:"d-md-down-none mr-auto"},r.a.createElement(o.t,{className:"px-3"},r.a.createElement(o.u,{to:"/dashboard"},"Dashboard")),r.a.createElement(o.t,{className:"px-3"},r.a.createElement(o.u,{to:"/users"},"Users")),r.a.createElement(o.t,{className:"px-3"},r.a.createElement(o.u,null,"Settings"))),r.a.createElement(o.s,{className:"px-3"},r.a.createElement(S,null),r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement(w,null)),r.a.createElement(o.O,{className:"px-3 justify-content-between"},r.a.createElement(o.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:i}),r.a.createElement("div",{className:"d-md-down-none mfe-2 c-subheader-nav"},r.a.createElement(o.C,{className:"c-subheader-nav-link",href:"#"},r.a.createElement(m.a,{name:"cil-speech",alt:"Settings"})),r.a.createElement(o.C,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard"},r.a.createElement(m.a,{name:"cil-graph",alt:"Dashboard"})," Dashboard"),r.a.createElement(o.C,{className:"c-subheader-nav-link",href:"#"},r.a.createElement(m.a,{name:"cil-settings",alt:"Settings"})," Settings"))))};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=g(e);if(t){var r=g(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b(this,a)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,a,n,l=v(c);function c(){var e;f(this,c);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return h(N(e=l.call.apply(l,[this].concat(a))),"handleClick",(function(t){t.preventDefault(),e.props.logoutUser()})),e}return t=c,(a=[{key:"render",value:function(){return r.a.createElement(o.k,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down"},r.a.createElement(o.n,{className:"c-header-nav-link",caret:!1},r.a.createElement(m.a,{name:"cil-user"})),r.a.createElement(o.m,{className:"pt-0",placement:"bottom-end"},r.a.createElement(o.l,{header:!0,tag:"div",color:"light",className:"text-center"},r.a.createElement("strong",null,"Account")),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-bell",className:"mfe-2"}),"Updates",r.a.createElement(o.a,{color:"info",className:"mfs-auto"},"42")),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-envelope-open",className:"mfe-2"}),"Messages",r.a.createElement(o.a,{color:"success",className:"mfs-auto"},"42")),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-task",className:"mfe-2"}),"Tasks",r.a.createElement(o.a,{color:"danger",className:"mfs-auto"},"42")),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-comment-square",className:"mfe-2"}),"Comments",r.a.createElement(o.a,{color:"warning",className:"mfs-auto"},"42")),r.a.createElement(o.l,{header:!0,tag:"div",color:"light",className:"text-center"},r.a.createElement("strong",null,"Settings")),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-user",className:"mfe-2"}),"Profile"),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-settings",className:"mfe-2"}),"Settings"),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-credit-card",className:"mfe-2"}),"Payments",r.a.createElement(o.a,{color:"secondary",className:"mfs-auto"},"42")),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-file",className:"mfe-2"}),"Projects",r.a.createElement(o.a,{color:"primary",className:"mfs-auto"},"42")),r.a.createElement(o.l,{divider:!0}),r.a.createElement(o.l,{onClick:this.handleClick},r.a.createElement(m.a,{name:"cil-account-logout",className:"mfe-2"}),"Logout")))}}])&&E(t.prototype,a),n&&E(t,n),c}(n.Component),w=Object(c.b)((function(e){return console.log("state",e),{currentUser:e.currentUser}}),(function(e){return{logoutUser:function(){return e(Object(s.c)())}}}))(y),x=function(){return r.a.createElement(o.k,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down"},r.a.createElement(o.n,{className:"c-header-nav-link",caret:!1},r.a.createElement(m.a,{name:"cil-envelope-open"}),r.a.createElement(o.a,{shape:"pill",color:"info"},4)),r.a.createElement(o.m,{className:"pt-0",placement:"bottom-end"},r.a.createElement(o.l,{header:!0,tag:"div",color:"light"},r.a.createElement("strong",null,"You have ",4," messages")),r.a.createElement(o.l,{href:"#"},r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"pt-3 mr-3 float-left"},r.a.createElement("div",{className:"c-avatar"},r.a.createElement(o.v,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),r.a.createElement("span",{className:"c-avatar-status bg-success"}))),r.a.createElement("div",null,r.a.createElement("small",{className:"text-muted"},"John Doe"),r.a.createElement("small",{className:"text-muted float-right mt-1"},"Just now")),r.a.createElement("div",{className:"text-truncate font-weight-bold"},r.a.createElement("span",{className:"fa fa-exclamation text-danger"})," Important message"),r.a.createElement("div",{className:"small text-muted text-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),r.a.createElement(o.l,{href:"#"},r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"pt-3 mr-3 float-left"},r.a.createElement("div",{className:"c-avatar"},r.a.createElement(o.v,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),r.a.createElement("span",{className:"c-avatar-status bg-warning"}))),r.a.createElement("div",null,r.a.createElement("small",{className:"text-muted"},"Jane Dovve"),r.a.createElement("small",{className:"text-muted float-right mt-1"},"5 minutes ago")),r.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),r.a.createElement("div",{className:"small text-muted text-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),r.a.createElement(o.l,{href:"#"},r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"pt-3 mr-3 float-left"},r.a.createElement("div",{className:"c-avatar"},r.a.createElement(o.v,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),r.a.createElement("span",{className:"c-avatar-status bg-danger"}))),r.a.createElement("div",null,r.a.createElement("small",{className:"text-muted"},"Janet Doe"),r.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),r.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),r.a.createElement("div",{className:"small text-muted text-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),r.a.createElement(o.l,{href:"#"},r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"pt-3 mr-3 float-left"},r.a.createElement("div",{className:"c-avatar"},r.a.createElement(o.v,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),r.a.createElement("span",{className:"c-avatar-status bg-info"}))),r.a.createElement("div",null,r.a.createElement("small",{className:"text-muted"},"Joe Doe"),r.a.createElement("small",{className:"text-muted float-right mt-1"},"4:03 AM")),r.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),r.a.createElement("div",{className:"small text-muted text-truncate"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),r.a.createElement(o.l,{href:"#",className:"text-center border-top"},r.a.createElement("strong",null,"View all messages"))))},S=function(){return r.a.createElement(o.k,{inNav:!0,className:"c-header-nav-item mx-2"},r.a.createElement(o.n,{className:"c-header-nav-link",caret:!1},r.a.createElement(m.a,{name:"cil-bell"}),r.a.createElement(o.a,{shape:"pill",color:"danger"},5)),r.a.createElement(o.m,{placement:"bottom-end",className:"pt-0"},r.a.createElement(o.l,{header:!0,tag:"div",className:"text-center",color:"light"},r.a.createElement("strong",null,"You have ",5," notifications")),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"),r.a.createElement(o.l,null,r.a.createElement(m.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"),r.a.createElement(o.l,{header:!0,tag:"div",color:"light"},r.a.createElement("strong",null,"Server")),r.a.createElement(o.l,{className:"d-block"},r.a.createElement("div",{className:"text-uppercase mb-1"},r.a.createElement("small",null,r.a.createElement("b",null,"CPU Usage"))),r.a.createElement(o.D,{size:"xs",color:"info",value:25}),r.a.createElement("small",{className:"text-muted"},"348 Processes. 1/4 Cores.")),r.a.createElement(o.l,{className:"d-block"},r.a.createElement("div",{className:"text-uppercase mb-1"},r.a.createElement("small",null,r.a.createElement("b",null,"Memory Usage"))),r.a.createElement(o.D,{size:"xs",color:"warning",value:70}),r.a.createElement("small",{className:"text-muted"},"11444GB/16384MB")),r.a.createElement(o.l,{className:"d-block"},r.a.createElement("div",{className:"text-uppercase mb-1"},r.a.createElement("small",null,r.a.createElement("b",null,"SSD 1 Usage"))),r.a.createElement(o.D,{size:"xs",color:"danger",value:90}),r.a.createElement("small",{className:"text-muted"},"243GB/256GB"))))},k=function(){return r.a.createElement(o.k,{inNav:!0,className:"c-header-nav-item mx-2"},r.a.createElement(o.n,{className:"c-header-nav-link",caret:!1},r.a.createElement(m.a,{name:"cil-list"}),r.a.createElement(o.a,{shape:"pill",color:"warning"},5)),r.a.createElement(o.m,{placement:"bottom-end",className:"pt-0"},r.a.createElement(o.l,{header:!0,tag:"div",className:"text-center",color:"light"},r.a.createElement("strong",null,"You have ",5," pending tasks")),r.a.createElement(o.l,{className:"d-block"},r.a.createElement("div",{className:"small mb-1"},"Upgrade NPM & Bower ",r.a.createElement("span",{className:"float-right"},r.a.createElement("strong",null,"0%"))),r.a.createElement(o.D,{size:"xs",color:"info",value:0})),r.a.createElement(o.l,{className:"d-block"},r.a.createElement("div",{className:"small mb-1"},"ReactJS Version ",r.a.createElement("span",{className:"float-right"},r.a.createElement("strong",null,"25%"))),r.a.createElement(o.D,{size:"xs",color:"danger",value:25})),r.a.createElement(o.l,{className:"d-block"},r.a.createElement("div",{className:"small mb-1"},"VueJS Version ",r.a.createElement("span",{className:"float-right"},r.a.createElement("strong",null,"50%"))),r.a.createElement(o.D,{size:"xs",color:"warning",value:50})),r.a.createElement(o.l,{className:"d-block"},r.a.createElement("div",{className:"small mb-1"},"Add new layouts ",r.a.createElement("span",{className:"float-right"},r.a.createElement("strong",null,"75%"))),r.a.createElement(o.D,{size:"xs",color:"info",value:75})),r.a.createElement(o.l,{className:"d-block"},r.a.createElement("div",{className:"small mb-1"},"Angular 2 Cli Version ",r.a.createElement("span",{className:"float-right"},r.a.createElement("strong",null,"100%"))),r.a.createElement(o.D,{size:"xs",color:"success",value:100})),r.a.createElement(o.l,{className:"text-center border-top"},r.a.createElement("strong",null,"View all tasks"))))},O=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer"},{_tag:"CSidebarNavTitle",_children:["APPLICATION"]},{_tag:"CSidebarNavDropdown",name:"Responsible Person",route:"/contractor/personal",icon:"cil-user",_children:[{_tag:"CSidebarNavItem",name:"1. Information",to:"/contractor/personal/info"},{_tag:"CSidebarNavItem",name:"2. Safety",to:"/contractor/personal/video"},{_tag:"CSidebarNavItem",name:"3. Quiz",to:"/contractor/personal/quiz"}]},{_tag:"CSidebarNavDropdown",name:"General",route:"/contractor/general",icon:"cil-industry",_children:[{_tag:"CSidebarNavItem",name:"1. Risk Assessment",to:"/contractor/general/risk-assesment"},{_tag:"CSidebarNavItem",name:"2. Method of Statement",to:"/contractor/general/method-of-statement"},{_tag:"CSidebarNavItem",name:"3. Permit to Work",to:"/contractor/general/permit-to-work"},{_tag:"CSidebarNavItem",name:"4. Hazardous work permits",to:"/contractor/general/hazardous-work-permits"},{_tag:"CSidebarNavItem",name:"5. Workers",to:"/contractor/general/workers"}]},{_tag:"CSidebarNavItem",name:"Application status",to:"/contractor-application-status",icon:""},{_tag:"CSidebarNavTitle",_children:["WORKS"]},{_tag:"CSidebarNavItem",name:"Workflow",to:"/contactor/work/status",icon:"cil-av-timer"}],C=function(){var e=Object(c.c)(),t=Object(c.d)((function(e){return e.sidebarShow}));return r.a.createElement(o.F,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})}},r.a.createElement(o.G,{className:"d-md-down-none",to:"/"},r.a.createElement("h2",null,"FOX")),r.a.createElement(o.I,null,r.a.createElement(o.j,{items:O,components:{CSidebarNavDivider:o.J,CSidebarNavDropdown:o.K,CSidebarNavItem:o.L,CSidebarNavTitle:o.M}})),r.a.createElement(o.H,{className:"c-d-md-down-none"}))},_=r.a.memo(C);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=z(e);if(t){var r=z(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return U(this,a)}}function U(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?L(e):t}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(s,e);var t,a,n,c=R(s);function s(){var e;P(this,s);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return A(L(e=c.call.apply(c,[this].concat(a))),"componentDidMount",(function(){e.props.getProfileFetch()})),e}return t=s,(a=[{key:"render",value:function(){return this.props.currentUser.username?r.a.createElement("div",{className:"c-app c-default-layout"},r.a.createElement(_,null),r.a.createElement("div",{className:"c-wrapper"},r.a.createElement(u,null),r.a.createElement("div",{className:"c-body"},r.a.createElement("h2",null," VERY SOON YOU WILL SEE SOME INO HERE!")))):r.a.createElement(l.a,{to:"/login"})}}])&&D(t.prototype,a),n&&D(t,n),s}(n.Component);t.default=Object(c.b)((function(e){return{currentUser:e.currentUser}}),(function(e){return{getProfileFetch:function(){return e(Object(s.b)())}}}))(J)}}]);
//# sourceMappingURL=2.main.js.map