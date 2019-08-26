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
          'aggregate_func': 'nansum'
        }, {
          'Header': '2019-09-01',
          'accessor': '2019-09-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2019-10-01',
          'accessor': '2019-10-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2019-11-01',
          'accessor': '2019-11-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2019-12-01',
          'accessor': '2019-12-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-01-01',
          'accessor': '2020-01-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-02-01',
          'accessor': '2020-02-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-03-01',
          'accessor': '2020-03-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-04-01',
          'accessor': '2020-04-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-05-01',
          'accessor': '2020-05-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-06-01',
          'accessor': '2020-06-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-07-01',
          'accessor': '2020-07-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-08-01',
          'accessor': '2020-08-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-09-01',
          'accessor': '2020-09-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-10-01',
          'accessor': '2020-10-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-11-01',
          'accessor': '2020-11-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2020-12-01',
          'accessor': '2020-12-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2021-01-01',
          'accessor': '2021-01-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2021-02-01',
          'accessor': '2021-02-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2021-03-01',
          'accessor': '2021-03-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2021-04-01',
          'accessor': '2021-04-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2021-05-01',
          'accessor': '2021-05-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2021-06-01',
          'accessor': '2021-06-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2021-07-01',
          'accessor': '2021-07-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
        }, {
          'Header': '2021-08-01',
          'accessor': '2021-08-01',
          'format': '(0,0.)',
          'aggregate_func': 'nansum'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3JlYWN0X3RhYmxlLy4vc3JjL2RlbW8vRGVsdGEuanMiXSwibmFtZXMiOlsiZGF0YSIsInJlcXVpcmUiLCJEZWx0YSIsInN0YXRlIiwidmFsdWUiLCJzZXRQcm9wcyIsImJpbmQiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJib3JkZXIiLCJkb21haW4iLCJyYW5nZSIsIm1hcmdpbiIsIndpZHRoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMkNBQUQsQ0FBcEI7O0lBSU1DLEs7Ozs7O0FBRUUsbUJBQWM7QUFBQTs7QUFBQTs7QUFDTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNMQyxXQUFLLEVBQUU7QUFERixLQUFiO0FBR0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsK0JBQWhCO0FBTE07QUFPYjs7Ozs2QkFFUUMsUSxFQUFVO0FBQ1gsV0FBS0MsUUFBTCxDQUFjRCxRQUFkO0FBQ1A7Ozs2QkFHUTtBQUNELGFBQ0ksd0VBQ0EsMkRBQUMsNEVBQUQ7QUFDSSxZQUFJLEVBQUVQLElBRFY7QUFFSSxlQUFPLEVBQUUsQ0FDRDtBQUFDLG9CQUFVLE1BQVg7QUFBbUIsc0JBQVksTUFBL0I7QUFBdUMsb0JBQVU7QUFBakQsU0FEQyxFQUVEO0FBQUMsb0JBQVUsT0FBWDtBQUFvQixzQkFBWSxPQUFoQztBQUF5QyxvQkFBVTtBQUFuRCxTQUZDLEVBR0Q7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQUhDLEVBSUQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQUpDLEVBS0Q7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQUxDLEVBTUQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQU5DLEVBT0Q7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQVBDLEVBUUQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQVJDLEVBU0Q7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQVRDLEVBVUQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQVZDLEVBV0Q7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQVhDLEVBWUQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQVpDLEVBYUQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQWJDLEVBY0Q7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQWRDLEVBZUQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQWZDLEVBZ0JEO0FBQUMsb0JBQVUsWUFBWDtBQUF5QixzQkFBWSxZQUFyQztBQUFtRCxvQkFBVSxRQUE3RDtBQUF1RSw0QkFBa0I7QUFBekYsU0FoQkMsRUFpQkQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQWpCQyxFQWtCRDtBQUFDLG9CQUFVLFlBQVg7QUFBeUIsc0JBQVksWUFBckM7QUFBbUQsb0JBQVUsUUFBN0Q7QUFBdUUsNEJBQWtCO0FBQXpGLFNBbEJDLEVBbUJEO0FBQUMsb0JBQVUsWUFBWDtBQUF5QixzQkFBWSxZQUFyQztBQUFtRCxvQkFBVSxRQUE3RDtBQUF1RSw0QkFBa0I7QUFBekYsU0FuQkMsRUFvQkQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQXBCQyxFQXFCRDtBQUFDLG9CQUFVLFlBQVg7QUFBeUIsc0JBQVksWUFBckM7QUFBbUQsb0JBQVUsUUFBN0Q7QUFBdUUsNEJBQWtCO0FBQXpGLFNBckJDLEVBc0JEO0FBQUMsb0JBQVUsWUFBWDtBQUF5QixzQkFBWSxZQUFyQztBQUFtRCxvQkFBVSxRQUE3RDtBQUF1RSw0QkFBa0I7QUFBekYsU0F0QkMsRUF1QkQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQXZCQyxFQXdCRDtBQUFDLG9CQUFVLFlBQVg7QUFBeUIsc0JBQVksWUFBckM7QUFBbUQsb0JBQVUsUUFBN0Q7QUFBdUUsNEJBQWtCO0FBQXpGLFNBeEJDLEVBeUJEO0FBQUMsb0JBQVUsWUFBWDtBQUF5QixzQkFBWSxZQUFyQztBQUFtRCxvQkFBVSxRQUE3RDtBQUF1RSw0QkFBa0I7QUFBekYsU0F6QkMsRUEwQkQ7QUFBQyxvQkFBVSxZQUFYO0FBQXlCLHNCQUFZLFlBQXJDO0FBQW1ELG9CQUFVLFFBQTdEO0FBQXVFLDRCQUFrQjtBQUF6RixTQTFCQyxFQTJCRDtBQUFDLG9CQUFVLFlBQVg7QUFBeUIsc0JBQVksWUFBckM7QUFBbUQsb0JBQVUsUUFBN0Q7QUFBdUUsNEJBQWtCO0FBQXpGLFNBM0JDLENBRmI7QUErQkksZUFBTyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0EvQmI7QUFnQ0ksYUFBSyxFQUFFO0FBQUNTLG1CQUFTLEVBQUUsR0FBWjtBQUFpQkMsbUJBQVMsRUFBRSxNQUE1QjtBQUFvQ0Msa0JBQVEsRUFBRSxJQUE5QztBQUFvREMsZ0JBQU0sRUFBRTtBQUE1RCxTQWhDWDtBQWlDSSw2QkFBcUIsRUFBRTtBQUFDQyxnQkFBTSxFQUFFLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUFUO0FBQWtCQyxlQUFLLEVBQUUsQ0FBQztBQUFDLHFCQUFTO0FBQVYsV0FBRCxFQUFtQjtBQUFDLHFCQUFTO0FBQVYsV0FBbkIsRUFBcUM7QUFBQyxxQkFBUztBQUFWLFdBQXJDLENBQXpCO0FBQW1GLG9CQUFVLENBQUMsTUFBRCxFQUFTLE9BQVQ7QUFBN0Y7QUFqQzNCLGtCQWtDVztBQUFDQyxjQUFNLEVBQUUsU0FBVDtBQUFvQkMsYUFBSyxFQUFFO0FBQTNCLE9BbENYLEVBREEsQ0FESjtBQXVDUDs7OztFQXhEV0MsK0M7O0FBMkRMZixvRUFBZixFIiwiZmlsZSI6ImY1OTVjOWItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgIERhc2hSZWFjdFRhYmxlIGZyb20gJy4uL2xpYi9jb21wb25lbnRzL0Rhc2hSZWFjdFRhYmxlLnJlYWN0JztcclxuXHJcblxyXG5jb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kZWx0YS5qc29uJyk7XHJcblxyXG5cclxuXHJcbmNsYXNzIERlbHRhIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wcyA9IHRoaXMuc2V0UHJvcHMuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdQcm9wcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXNoUmVhY3RUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnZGVzaycsICdhY2Nlc3Nvcic6ICdkZXNrJywgJ2Zvcm1hdCc6ICcoMCwwLiknfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J0hlYWRlcic6ICdjbWR0eScsICdhY2Nlc3Nvcic6ICdjbWR0eScsICdmb3JtYXQnOiAnKDAsMC4pJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAxOS0wOC0wMScsICdhY2Nlc3Nvcic6ICcyMDE5LTA4LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAxOS0wOS0wMScsICdhY2Nlc3Nvcic6ICcyMDE5LTA5LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAxOS0xMC0wMScsICdhY2Nlc3Nvcic6ICcyMDE5LTEwLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAxOS0xMS0wMScsICdhY2Nlc3Nvcic6ICcyMDE5LTExLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAxOS0xMi0wMScsICdhY2Nlc3Nvcic6ICcyMDE5LTEyLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wMS0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTAxLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wMi0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTAyLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wMy0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTAzLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wNC0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTA0LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wNS0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTA1LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wNi0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTA2LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wNy0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTA3LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wOC0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTA4LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0wOS0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTA5LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0xMC0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTEwLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0xMS0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTExLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMC0xMi0wMScsICdhY2Nlc3Nvcic6ICcyMDIwLTEyLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wMS0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTAxLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wMi0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTAyLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wMy0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTAzLTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wNC0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTA0LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wNS0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTA1LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wNi0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTA2LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wNy0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTA3LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydIZWFkZXInOiAnMjAyMS0wOC0wMScsICdhY2Nlc3Nvcic6ICcyMDIxLTA4LTAxJywgJ2Zvcm1hdCc6ICcoMCwwLiknLCAnYWdncmVnYXRlX2Z1bmMnOiAnbmFuc3VtJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3RCeT17WydkZXNrJywgJ2NtZHR5J119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4SGVpZ2h0OiAzMDAsIG92ZXJmbG93WTogJ2F1dG8nLCBtYXhXaWR0aDogNjM2MCwgYm9yZGVyOiAndGhpbiBsaWdodGdyZXkgc29saWQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWxGb3JtYXR0aW5nPXt7ZG9tYWluOiBbLTEsIDBdLCByYW5nZTogW3snY29sb3InOiAncmVkJ30sIHsnY29sb3InOiAncmVkJ30sIHsnY29sb3InOiAnYmxhY2snfV0sICdpZ25vcmUnOiBbJ2Rlc2snLCAnY21kdHknXX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnMTBweCA1JScsIHdpZHRoOiAnOTAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbHRhOyJdLCJzb3VyY2VSb290IjoiIn0=