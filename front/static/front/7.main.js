(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{632:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(95),c=n(26),i=n(166),u=n(165),l=n(60),s=n(634);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){b(a,r,o,c,i,"next",t)}function i(t){b(a,r,o,c,i,"throw",t)}c(void 0)}))}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=new c.a,P=[{Works_started:"Works started"},{Works_finished:"Works finished"},{Extended:"Extended"},{Closed:"Closed"}],S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(n,t);var e=g(n);function n(){var t;h(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return j(O(t=e.call.apply(e,[this].concat(a))),"state",{modal:!1}),j(O(t),"handleClick",function(){var e=d(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Extended"!==n){e.next=4;break}t.setModalVisibility(),e.next=6;break;case 4:return e.next=6,_.patchEntityOf("projects",t.props.item.id,{status:n}).then((function(){t.props.getProjectList()}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),j(O(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),j(O(t),"render",(function(){var e=t.state.modal;return"CliAdm"===t.props.role&&"Application processing"!==t.props.item.work_status?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.v,null,o.a.createElement(u.y,{className:"project-table-toggle"},o.a.createElement(l.a,{style:{margin:"0"},className:"table-dropdown-icon",name:"cilSettings"})),o.a.createElement(u.x,{className:"p-0 foxtable-dropdown-menu",placement:"bottom-end"},P.map((function(e,n){var r=m(Object.entries(e)[0],2),a=r[0],c=r[1];return o.a.createElement(u.w,{key:n,value:a,onClick:function(e){return t.handleClick(a,e)}},c)})))),o.a.createElement(s.b,p({show:e,setModalVisibility:t.setModalVisibility,projectId:t.props.item.id},t.props))):null})),t}return n}(r.Component);e.a=Object(a.b)((function(t){return{role:t.currentUser.role}}),(function(t){return{getProjectList:function(){return t(Object(i.i)())}}}))(S)},633:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(95),c=n(165),i=n(632);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(n,t);var e=p(n);function n(){var t;s(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return d(y(t=e.call.apply(e,[this].concat(a))),"state",{error:"",modal:!1}),d(y(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),d(y(t),"alertOnClick",(function(e,n){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),d(y(t),"render",(function(){var e,n=t.props.fields?t.props.fields[0]:"username";return o.a.createElement(c.ab,null,o.a.createElement(c.q,null,o.a.createElement(c.f,null,o.a.createElement(c.i,{className:"d-flex justify-content-between"},o.a.createElement(c.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:o.a.createElement(c.R,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),o.a.createElement(c.g,null,o.a.createElement(c.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields?t.props.fields:[],clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},d(e,n,(function(e){return o.a.createElement("td",null,o.a.createElement(c.R,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[n]))})),d(e,"application_status",(function(e){return o.a.createElement("td",null,o.a.createElement(c.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),d(e,"work_status",(function(e){return o.a.createElement("td",{className:"d-flex align-items-center"},o.a.createElement(c.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),o.a.createElement(i.a,l({key:e.id,item:e},t.props)))})),e)})))))})),t}return n}(r.Component);e.a=Object(a.b)((function(t){return{role:t.currentUser.role}}),null)(h)},636:function(t,e,n){"use strict";n.d(e,"a",(function(){return r.a})),n.d(e,"b",(function(){return P}));var r=n(633),o=n(1),a=n.n(o),c=n(95),i=n(165),u=n(60),l=n(632),s=n(26),f=n(634);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){y(a,r,o,c,i,"next",t)}function i(t){y(a,r,o,c,i,"throw",t)}c(void 0)}))}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=new s.a,_=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(n,t);var e=v(n);function n(){var t;d(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return E(w(t=e.call.apply(e,[this].concat(o))),"state",{delete_id:"",error:"",modal:!1}),E(w(t),"getEntityFromTableName",(function(){t.props.tableName.toLowercase()})),E(w(t),"callDeleteModal",(function(e){t.setState({delete_id:e},t.setModalVisibility)})),E(w(t),"setModalVisibility",(function(){t.setState({modal:!t.state.modal})})),E(w(t),"confirmDelete",function(){var e=b(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props.tableName.toLowerCase().replace(" ","_"),e.next=3,j.deleteEntityOf(r,n).then((function(){t.props.updateList(t.props.role),t.setModalVisibility()})).catch((function(e){console.error(e),t.setState({error:"Could not delete entity! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E(w(t),"alertOnClick",(function(e,n){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),E(w(t),"render",(function(){var e,n=t.props.fields?t.props.fields[0]:"username",r=t.state,o=r.delete_id,c=r.modal;return a.a.createElement(i.ab,null,a.a.createElement(i.q,null,a.a.createElement(i.f,null,a.a.createElement(i.i,{className:"d-flex justify-content-between"},a.a.createElement(i.k,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:a.a.createElement(i.R,{className:"btn btn-pill btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),a.a.createElement(i.g,null,a.a.createElement(i.u,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields,clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(e={},E(e,n,(function(e){return a.a.createElement("td",null,a.a.createElement(i.R,{to:"".concat(t.props.match.url,"/").concat(e.id)},e[n]))})),E(e,"application_status",(function(e){return a.a.createElement("td",null,a.a.createElement(i.a,{shape:"pill",color:t.props.getBadge(e.application_status)},e.application_status))})),E(e,"work_status",(function(e){return a.a.createElement("td",{className:"d-flex align-items-center"},a.a.createElement(i.a,{shape:"pill",color:t.props.getBadge(e.work_status)},e.work_status),a.a.createElement(l.a,m({key:e.id,item:e},t.props)))})),E(e,"delete_item",(function(e,n){return a.a.createElement("td",null,a.a.createElement(i.e,{color:"danger",variant:"ghost",size:"sm",onClick:function(){return t.callDeleteModal(e.id)},block:!0},a.a.createElement(u.a,{name:"cilTrash"})))})),e)}))),a.a.createElement(f.a,{setModalVisibility:t.setModalVisibility,danger:c,entity:"entity",confirmDelete:function(){return t.confirmDelete(o)}})))})),t}return n}(o.Component),P=Object(c.b)((function(t){return{role:t.currentUser.role}}),null)(_)},762:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(636),c=n(166),i=n(95);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){s(a,r,o,c,i,"next",t)}function i(t){s(a,r,o,c,i,"throw",t)}c(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function(t){switch(t){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(n,t);var e=y(n);function n(){var t;p(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return v(d(t=e.call.apply(e,[this].concat(c))),"componentDidMount",f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.getProfileFetch().then((function(){t.props.getDocumentList({project_id:t.props.match.params.id},!1,t.props.role)}));case 2:case"end":return e.stop()}}),e)})))),v(d(t),"render",(function(){return"CliAdm"==t.props.role?o.a.createElement(a.b,l({},t.props,{tableName:"Documents",fields:t.props.documentListTable.fields,getBadge:g,tableData:t.props.documentListTable.tableData,updateList:t.props.getDocumentList})):o.a.createElement(a.a,l({},t.props,{tableName:"Documents",fields:t.props.documentListTable.fields,getBadge:g,tableData:t.props.documentListTable.tableData}))})),t}return n}(r.Component);e.default=Object(i.b)((function(t){return{documentListTable:t.entityListTable,role:t.currentUser.role}}),(function(t){return{getProfileFetch:function(){return t(Object(c.h)())},getDocumentList:function(e,n,r){return t(Object(c.f)(e,n,r))}}}))(w)}}]);
//# sourceMappingURL=7.main.js.map