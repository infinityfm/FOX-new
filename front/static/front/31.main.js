(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./src/components/views/projects/ProjectList.js":
/*!******************************************************!*\
  !*** ./src/components/views/projects/ProjectList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tables */ "./src/components/tables/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./src/actions/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var getBadge = function getBadge(status) {
  switch (status) {
    case 'Created':
      return 'secondary';

    case 'Submitted':
      return 'warning';

    case 'Approved':
      return 'success';

    case 'Rejected':
      return 'danger';

    case 'Application processing':
      return 'secondary';

    case 'Ready to start':
      return 'success';

    case 'Works started':
      return 'info';

    case 'Works finished':
      return 'warning';

    case 'Extended':
      return 'primary';

    case 'Closed':
      return 'dark';

    default:
      return 'primary';
  }
};

var ProjectList = /*#__PURE__*/function (_Component) {
  _inherits(ProjectList, _Component);

  var _super = _createSuper(ProjectList);

  function ProjectList() {
    var _this;

    _classCallCheck(this, ProjectList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.props.setProjectId(_this.props.match.params.id);

              _context.next = 3;
              return _this.props.getProfileFetch().then(function () {
                return _this.props.getProjectList(_this.props.role);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return _this.props.role == 'CliAdm' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tables__WEBPACK_IMPORTED_MODULE_2__["FoxTableWithDeleteOption"], _extends({}, _this.props, {
        tableName: "Projects",
        fields: _this.props.projectTable.fields,
        getBadge: getBadge,
        tableData: _this.props.projectTable.tableData,
        updateList: _this.props.getProjectList
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tables__WEBPACK_IMPORTED_MODULE_2__["FoxEntityListTable"], _extends({}, _this.props, {
        tableName: "Projects",
        fields: _this.props.projectTable.fields,
        getBadge: getBadge,
        tableData: _this.props.projectTable.tableData
      }));
    });

    return _this;
  }

  return ProjectList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    projectTable: state.entityListTable,
    role: state.currentUser.role
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProfileFetch: function getProfileFetch() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["getProfileFetch"])());
    },
    getProjectList: function getProjectList(role) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["getProjectList"])(role));
    },
    setProjectId: function setProjectId() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setProjectId"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectList));

/***/ })

}]);
//# sourceMappingURL=31.main.js.map