(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{670:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=["work_at_height","lifting_work","confined_space","hot_work","chemical_handling","work_alone","work_at_sensitive_area","cold_work"]},754:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(166),c=n(95),i=n(165),l=n(635),u=n.n(l),s=n(26),p=n(648),f=n(642),d=n(670);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){m(o,r,a,c,i,"next",e)}function i(e){m(o,r,a,c,i,"throw",e)}c(void 0)}))}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var a=k(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=new s.a,S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(n,e);var t=w(n);function n(){var e;y(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return E(v(e=t.call.apply(t,[this].concat(o))),"state",{name:"",location:"",description:"",start_date:"",end_date:"",company:e.props.company,contractor:"-1",work_at_height:!1,lifting_work:!1,confined_space:!1,hot_work:!1,chemical_handling:!1,work_alone:!1,work_at_sensitive_area:!1,cold_work:!1,error:!1}),E(v(e),"handleChange",(function(t){e.setState(E({},t.target.name,t.target.value))})),E(v(e),"handleCheck",(function(t){e.setState(E({},t.target.name,t.target.checked))})),E(v(e),"handleReactSelect",(function(t,n){e.setState(E({},n.name,t.value))})),E(v(e),"silenceSubmit",(function(e){e.preventDefault()})),E(v(e),"handleCreateProject",b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleSubmit().then((function(){e.props.history.goBack()})).catch((function(t){console.error(t),e.setState({error:"Project creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 2:case"end":return t.stop()}}),t)})))),E(v(e),"handleDocumentCreationRedirect",b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleSubmit().then((function(t){e.props.history.push("/projects/".concat(t.id,"/documents/new"))})).catch((function(t){console.error(t),e.setState({error:"Project creation failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 2:case"end":return t.stop()}}),t)})))),E(v(e),"handleSubmit",b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(parseInt(e.state.contractor)<0)){t.next=4;break}e.setState({error:"Contractor was not selected! Please, choose contractor form the list"}),t.next=9;break;case 4:return e.formData=e.state,delete e.formData.error,t.next=8,C.createEntityOf("projects",e.formData);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})))),E(v(e),"componentDidMount",b(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return e.props.getContractorList()}));case 2:case"end":return t.stop()}}),t)})))),E(v(e),"render",(function(){var t=e.props.options?e.props.options.map((function(e){return{value:e.id,label:e.username}})):null;return a.a.createElement(i.ab,null,a.a.createElement(i.q,null,a.a.createElement(i.f,null,a.a.createElement(i.i,null,a.a.createElement(i.k,null,"Add New Project"),a.a.createElement(i.j,null,"Fill up the form below to add a new Project")),a.a.createElement(i.g,null,a.a.createElement(i.B,{onSubmit:e.silenceSubmit},a.a.createElement(u.a,null),a.a.createElement(i.C,null,a.a.createElement(i.J,{id:"name",name:"name",placeholder:"Project Name",value:e.state.name,onChange:e.handleChange,required:!0})),a.a.createElement(i.C,null,a.a.createElement(i.J,{id:"location ",name:"location",placeholder:"Project Works Location",value:e.state.location,onChange:e.handleChange,required:!0})),a.a.createElement(i.C,null,a.a.createElement(i.nb,{id:"description",name:"description",placeholder:"Short Project Description",value:e.state.description,onChange:e.handleChange,required:!0})),a.a.createElement(i.C,null,a.a.createElement(i.ab,null,a.a.createElement(i.q,{lg:"6"},a.a.createElement(i.Q,{htmlFor:"start_date"},"Start Date"),a.a.createElement(i.J,{type:"datetime-local",id:"start_date",placeholder:"Start date",name:"start_date",value:e.state.start_date,onChange:e.handleChange,required:!0})),a.a.createElement(i.q,{lg:"6"},a.a.createElement(i.Q,{htmlFor:"end_date"},"End Date"),a.a.createElement(i.J,{type:"datetime-local",id:"end_date",name:"end_date",placeholder:"date",value:e.state.end_date,onChange:e.handleChange,required:!0})))),a.a.createElement(f.e,{options:t,inputInfo:"contractor",inputValue:e.state.contractor,handleChange:e.handleReactSelect}),a.a.createElement(p.b,{groupLabel:"Choose the related hazardous work from the list below:",options:d.a,handleCheck:e.handleCheck,parentState:e.state}),a.a.createElement(i.e,{shape:"pill",onClick:e.handleDocumentCreationRedirect,color:"dark",variant:"outline",block:!0},"Create Project and go to document creation"),e.state.error?a.a.createElement("p",null,e.state.error):null)))))})),e}return n}(r.Component);t.default=Object(c.b)((function(e){return{company:e.currentUser.company,options:e.entityListTable.tableData}}),(function(e){return{getProfileFetch:function(){return e(Object(o.h)())},getContractorList:function(){return e(Object(o.d)())}}}))(S)}}]);
//# sourceMappingURL=21.main.js.map