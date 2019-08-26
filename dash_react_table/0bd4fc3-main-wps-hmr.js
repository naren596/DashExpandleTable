webpackHotUpdatedash_react_table("main",{

/***/ "./src/demo/Delta.js":
/*!***************************!*\
  !*** ./src/demo/Delta.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_components_DashReactTable_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/components/DashReactTable.react */ "./src/lib/components/DashReactTable.react.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var data = __webpack_require__(/*! ./delta.json */ "./src/demo/delta.json");

var Delta =
/*#__PURE__*/
function (_Component) {
  _inherits(Delta, _Component);

  function Delta() {
    var _this;

    _classCallCheck(this, Delta);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Delta).call(this));
    _this.state = {
      value: ''
    };
    _this.setProps = _this.setProps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Delta, [{
    key: "setProps",
    value: function setProps(newProps) {
      this.setState(newProps);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_DashReactTable_react__WEBPACK_IMPORTED_MODULE_1__["default"], _defineProperty({
        data: data,
        columns: [{
          'Header': 'desk',
          'accessor': 'desk',
          'format': '(0,0.)'
        }, {
          'Header': 'cmdty',
          'accessor': 'cmdty',
          'format': '(0,0.)'
        }, {
          'Header': '2019-08-01',
          'accessor': '2019-08-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2019-09-01',
          'accessor': '2019-09-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2019-10-01',
          'accessor': '2019-10-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2019-11-01',
          'accessor': '2019-11-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2019-12-01',
          'accessor': '2019-12-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-01-01',
          'accessor': '2020-01-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-02-01',
          'accessor': '2020-02-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-03-01',
          'accessor': '2020-03-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-04-01',
          'accessor': '2020-04-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-05-01',
          'accessor': '2020-05-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-06-01',
          'accessor': '2020-06-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-07-01',
          'accessor': '2020-07-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-08-01',
          'accessor': '2020-08-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-09-01',
          'accessor': '2020-09-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-10-01',
          'accessor': '2020-10-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-11-01',
          'accessor': '2020-11-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2020-12-01',
          'accessor': '2020-12-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2021-01-01',
          'accessor': '2021-01-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2021-02-01',
          'accessor': '2021-02-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2021-03-01',
          'accessor': '2021-03-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2021-04-01',
          'accessor': '2021-04-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2021-05-01',
          'accessor': '2021-05-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2021-06-01',
          'accessor': '2021-06-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2021-07-01',
          'accessor': '2021-07-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }, {
          'Header': '2021-08-01',
          'accessor': '2021-08-01',
          'format': '(0,0.)',
          'aggfunc': 'nansum'
        }],
        pivotBy: ['desk', 'cmdty'],
        style: {
          maxHeight: 300,
          overflowY: 'auto',
          maxWidth: 6360,
          border: 'thin lightgrey solid'
        },
        conditionalFormatting: {
          domain: [-1, 0],
          range: [{
            'color': 'red'
          }, {
            'color': 'red'
          }, {
            'color': 'black'
          }],
          'ignore': ['desk', 'cmdty']
        }
      }, "style", {
        margin: '10px 5%',
        width: '90%'
      })));
    }
  }]);

  return Delta;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Delta);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3JlYWN0X3RhYmxlLy4vc3JjL2RlbW8vRGVsdGEuanMiXSwibmFtZXMiOlsiZGF0YSIsInJlcXVpcmUiLCJEZWx0YSIsInN0YXRlIiwidmFsdWUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJib3JkZXIiLCJkb21haW4iLCJyYW5nZSIsIm1hcmdpbiIsIndpZHRoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMkNBQUQsQ0FBcEI7O0lBSU1DLEs7Ozs7O0FBRUUsbUJBQWM7QUFBQTs7QUFBQTs7QUFDTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNMQyxXQUFLLEVBQUU7QUFERixLQUFiO0FBR0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBTE07QUFPYjs7Ozs2QkFFUUMsUSxFQUFVO0FBQ1gsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ1A7Ozs2QkFHUTtBQUNELGFBQ0ksd0VBQ0EsMkRBQUMsNEVBQUQ7QUFDSSxZQUFJLEVBQUVQLElBRFY7QUFFSSxlQUFPLEVBQUUsQ0FDRDtBQUFDLG9CQUFVLE1BQVg7QUFBbUIsc0JBQVksTUFBL0I7QUFBdUMsb0JBQVU7QUFBakQsU0FEQyxFQUVEO0FBQUMsb0JBQVUsT0FBWDtBQUFvQixzQkFBWSxPQUFoQztBQUF5QyxvQkFBVTtBQUFuRCxTQUZDLEVBR0Q7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLHFCQUFXO0FBQWxGLFNBSEMsRUFJRDtBQUFDLG9CQUFVLFlBQVg7QUFBeUIsc0JBQVksWUFBckM7QUFBbUQsb0JBQVUsUUFBN0Q7QUFBdUUscUJBQVc7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QUFDLG9CQUFVLFlBQVg7QUFBeUIsc0JBQVksWUFBckM7QUFBbUQsb0JBQVUsUUFBN0Q7QUFBdUUscUJBQVc7QUFBbEYsU0EzQkMsQ0FGYjtBQStCSSxlQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQS9CYjtBQWdDSSxhQUFLLEVBQUU7QUFBQ1MsbUJBQVMsRUFBRSxHQUFaO0FBQWlCQyxtQkFBUyxFQUFFLE1BQTVCO0FBQW9DQyxrQkFBUSxFQUFFLElBQTlDO0FBQW9EQyxnQkFBTSxFQUFFO0FBQTVELFNBaENYO0FBaUNJLDZCQUFxQixFQUFFO0FBQUNDLGdCQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLENBQVQ7QUFBa0JDLGVBQUssRUFBRSxDQUFDO0FBQUMscUJBQVM7QUFBVixXQUFELEVBQW1CO0FBQUMscUJBQVM7QUFBVixXQUFuQixFQUFxQztBQUFDLHFCQUFTO0FBQVYsV0FBckMsQ0FBekI7QUFBbUYsb0JBQVUsQ0FBQyxNQUFELEVBQVMsT0FBVDtBQUE3RjtBQWpDM0Isa0JBa0NXO0FBQUNDLGNBQU0sRUFBRSxTQUFUO0FBQW9CQyxhQUFLLEVBQUU7QUFBM0IsT0FsQ1gsRUFEQSxDQURKO0FBdUNQOzs7O0VBeERXQywrQzs7QUEyRExmLG9FQUFmLEUiLCJmaWxlIjoiMGJkNGZjMy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAgRGFzaFJlYWN0VGFibGUgZnJvbSAnLi4vbGliL2NvbXBvbmVudHMvRGFzaFJlYWN0VGFibGUucmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RlbHRhLmpzb24nKTtcclxuXHJcblxyXG5cclxuY2xhc3MgRGVsdGEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BzID0gdGhpcy5zZXRQcm9wcy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1Byb3BzKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhc2hSZWFjdFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICdkZXNrJywgJ2FjY2Vzc29yJzogJ2Rlc2snLCAnZm9ybWF0JzogJygwLDAuKSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJ2NtZHR5JywgJ2FjY2Vzc29yJzogJ2NtZHR5JywgJ2Zvcm1hdCc6ICcoMCwwLiknfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDE5LTA4LTAxJywgJ2FjY2Vzc29yJzogJzIwMTktMDgtMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJzIwMTktMDktMDEnLCAnYWNjZXNzb3InOiAnMjAxOS0wOS0wMScsICdmb3JtYXQnOiAnKDAsMC4pJywgJ2FnZ2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAxOS0xMC0wMScsICdhY2Nlc3Nvcic6ICcyMDE5LTEwLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdnZnVuYyc6ICduYW5zdW0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDE5LTExLTAxJywgJ2FjY2Vzc29yJzogJzIwMTktMTEtMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJzIwMTktMTItMDEnLCAnYWNjZXNzb3InOiAnMjAxOS0xMi0wMScsICdmb3JtYXQnOiAnKDAsMC4pJywgJ2FnZ2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wMS0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTAxLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdnZnVuYyc6ICduYW5zdW0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDIwLTAyLTAxJywgJ2FjY2Vzc29yJzogJzIwMjAtMDItMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJzIwMjAtMDMtMDEnLCAnYWNjZXNzb3InOiAnMjAyMC0wMy0wMScsICdmb3JtYXQnOiAnKDAsMC4pJywgJ2FnZ2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wNC0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTA0LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdnZnVuYyc6ICduYW5zdW0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDIwLTA1LTAxJywgJ2FjY2Vzc29yJzogJzIwMjAtMDUtMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJzIwMjAtMDYtMDEnLCAnYWNjZXNzb3InOiAnMjAyMC0wNi0wMScsICdmb3JtYXQnOiAnKDAsMC4pJywgJ2FnZ2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wNy0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTA3LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdnZnVuYyc6ICduYW5zdW0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDIwLTA4LTAxJywgJ2FjY2Vzc29yJzogJzIwMjAtMDgtMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJzIwMjAtMDktMDEnLCAnYWNjZXNzb3InOiAnMjAyMC0wOS0wMScsICdmb3JtYXQnOiAnKDAsMC4pJywgJ2FnZ2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0xMC0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTEwLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdnZnVuYyc6ICduYW5zdW0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDIwLTExLTAxJywgJ2FjY2Vzc29yJzogJzIwMjAtMTEtMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJzIwMjAtMTItMDEnLCAnYWNjZXNzb3InOiAnMjAyMC0xMi0wMScsICdmb3JtYXQnOiAnKDAsMC4pJywgJ2FnZ2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wMS0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTAxLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdnZnVuYyc6ICduYW5zdW0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDIxLTAyLTAxJywgJ2FjY2Vzc29yJzogJzIwMjEtMDItMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJzIwMjEtMDMtMDEnLCAnYWNjZXNzb3InOiAnMjAyMS0wMy0wMScsICdmb3JtYXQnOiAnKDAsMC4pJywgJ2FnZ2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wNC0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTA0LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdnZnVuYyc6ICduYW5zdW0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDIxLTA1LTAxJywgJ2FjY2Vzc29yJzogJzIwMjEtMDUtMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnSGVhZGVyJzogJzIwMjEtMDYtMDEnLCAnYWNjZXNzb3InOiAnMjAyMS0wNi0wMScsICdmb3JtYXQnOiAnKDAsMC4pJywgJ2FnZ2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wNy0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTA3LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdnZnVuYyc6ICduYW5zdW0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICcyMDIxLTA4LTAxJywgJ2FjY2Vzc29yJzogJzIwMjEtMDgtMDEnLCAnZm9ybWF0JzogJygwLDAuKScsICdhZ2dmdW5jJzogJ25hbnN1bSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90Qnk9e1snZGVzaycsICdjbWR0eSddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogMzAwLCBvdmVyZmxvd1k6ICdhdXRvJywgbWF4V2lkdGg6IDYzNjAsIGJvcmRlcjogJ3RoaW4gbGlnaHRncmV5IHNvbGlkJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbmFsRm9ybWF0dGluZz17e2RvbWFpbjogWy0xLCAwXSwgcmFuZ2U6IFt7J2NvbG9yJzogJ3JlZCd9LCB7J2NvbG9yJzogJ3JlZCd9LCB7J2NvbG9yJzogJ2JsYWNrJ31dLCAnaWdub3JlJzogWydkZXNrJywgJ2NtZHR5J119fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogJzEwcHggNSUnLCB3aWR0aDogJzkwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWx0YTsiXSwic291cmNlUm9vdCI6IiJ9