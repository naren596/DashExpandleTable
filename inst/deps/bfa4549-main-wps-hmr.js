webpackHotUpdatedash_react_table("main",{

/***/ "./src/lib/components/DashReactTable.react.js":
/*!****************************************************!*\
  !*** ./src/lib/components/DashReactTable.react.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_scales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/scales */ "./src/lib/util/scales.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/**
 * DashReactTable is a decalaritive version of react-table, built for dash.
 *
 * At a minimum, it must have `data` and `column` properties.
 * `data` must be a uniform list of dicts with the arbitrary amount of keys representing the
 * columns and values representing that row's data. This can be done very easily
 * in pandas using df.to_json(orient='records'). As for `columns`, this is also a list
 * of dictionaries, but it has a defined set of properties. At the very least, it must contain
 * `Header` and `accessor` properties, referring to the column's title and identifying key in
 * the data property, respectively. Columns also have many other properties that are referenced
 * both in the docstring as well as in the react-table docs.
 */


var DashReactTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DashReactTable, _Component);

  function DashReactTable() {
    _classCallCheck(this, DashReactTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashReactTable).apply(this, arguments));
  }

  _createClass(DashReactTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          data = _this$props.data,
          columns = _this$props.columns,
          loading = _this$props.loading,
          showPagination = _this$props.showPagination,
          showPaginationTop = _this$props.showPaginationTop,
          showPaginationBottom = _this$props.showPaginationBottom,
          showPageSizeOptions = _this$props.showPageSizeOptions,
          pageSizeOptions = _this$props.pageSizeOptions,
          defaultPageSize = _this$props.defaultPageSize,
          minRows = _this$props.minRows,
          showPageJump = _this$props.showPageJump,
          collapseOnSortingChange = _this$props.collapseOnSortingChange,
          collapseOnPageChange = _this$props.collapseOnPageChange,
          collapseOnDataChange = _this$props.collapseOnDataChange,
          freezeWhenExpanded = _this$props.freezeWhenExpanded,
          sortable = _this$props.sortable,
          multiSort = _this$props.multiSort,
          resizable = _this$props.resizable,
          filterable = _this$props.filterable,
          defaultSortDesc = _this$props.defaultSortDesc,
          defaultSorted = _this$props.defaultSorted,
          defaultFiltered = _this$props.defaultFiltered,
          defaultResized = _this$props.defaultResized,
          defaultExpanded = _this$props.defaultExpanded,
          pivotBy = _this$props.pivotBy,
          className = _this$props.className,
          style = _this$props.style,
          conditionalFormatting = _this$props.conditionalFormatting,
          expanderDefaults = _this$props.expanderDefaults,
          pivotDefaults = _this$props.pivotDefaults,
          previousText = _this$props.previousText,
          nextText = _this$props.nextText,
          loadingText = _this$props.loadingText,
          noDataText = _this$props.noDataText,
          pageText = _this$props.pageText,
          ofText = _this$props.ofText,
          rowsText = _this$props.rowsText,
          pageJumpText = _this$props.pageJumpText,
          rowsSelectorText = _this$props.rowsSelectorText,
          pivotFunc = _this$props.pivotFunc;
      var format = Object(_util_scales__WEBPACK_IMPORTED_MODULE_6__["thresholdScaleCalc"])(conditionalFormatting.domain, conditionalFormatting.range);

      var conditionalFormat = function conditionalFormat(state, rowInfo, column) {
        var ignore = conditionalFormatting.ignore ? conditionalFormatting.ignore : {};
        var accessor = column.id;

        if (rowInfo && rowInfo.row && !Object(ramda__WEBPACK_IMPORTED_MODULE_4__["includes"])(accessor, ignore)) {
          var tdValue = rowInfo.row[accessor];
          return {
            style: format(tdValue)
          };
        } else {
          return {};
        }
      };

      var conditional_columns = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var column = _step.value;
          var c = column; // Style Formatting

          c['getProps'] = conditionalFormat; // Number Formatting

          c['Cell'] = function (props) {
            return c.format !== undefined ? numeral(props.value).format(c.format) : props.value;
          }; // Aggregate functions in pivoting


          var agg_func_name = c["aggfunc"];

          if (pivotFunc) {
            c["aggregate"] = function (values, rows) {
              return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.round(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.sum(values));
            };
          } // if(agg_func_name) {
          //     if(agg_func_name === "sum"){
          //         c["aggregate"] = (values, rows) => _.round(_.sum(values))
          //     } else if(agg_func_name === "mean") {
          //         c["aggregate"] = (values, rows) => _.round(_.mean(values))
          //     } else if(agg_func_name === "nansum") {
          //         c["aggregate"] = (values, rows) => {
          //             values = _.compact(values);
          //             return (values.length !== 0) ? _.round(_.sum(values)) : null
          //         }
          //     } else if(agg_func_name === "nanmean") {
          //         c["aggregate"] = (values, rows) => {
          //             values = _.compact(values);
          //             return (values.length !== 0) ? _.round(_.mean(values)) : null
          //         }
          //     }
          // }


          conditional_columns.push(c);
        };

        for (var _iterator = columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: data,
        columns: conditional_columns,
        loading: loading,
        showPagination: showPagination,
        showPaginationTop: showPaginationTop,
        showPaginationBottom: showPaginationBottom,
        showPageSizeOptions: showPageSizeOptions,
        pageSizeOptions: pageSizeOptions,
        defaultPageSize: defaultPageSize,
        minRows: minRows,
        showPageJump: showPageJump,
        collapseOnSortingChange: collapseOnSortingChange,
        collapseOnPageChange: collapseOnPageChange,
        collapseOnDataChange: collapseOnDataChange,
        freezeWhenExpanded: freezeWhenExpanded,
        sortable: sortable,
        multiSort: multiSort,
        resizable: resizable,
        filterable: filterable,
        defaultSortDesc: defaultSortDesc,
        defaultSorted: defaultSorted,
        defaultFiltered: defaultFiltered,
        defaultResized: defaultResized,
        defaultExpanded: defaultExpanded,
        pivotBy: pivotBy,
        className: className,
        style: style,
        expanderDefaults: expanderDefaults,
        pivotDefaults: pivotDefaults,
        previousText: previousText,
        nextText: nextText,
        loadingText: loadingText,
        noDataText: noDataText,
        pageText: pageText,
        ofText: ofText,
        rowsText: rowsText,
        pageJumpText: pageJumpText,
        rowsSelectorText: rowsSelectorText,
        defaultFilterMethod: filterAny
      }));
    }
  }]);

  return DashReactTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 * Create custom filter that ignores character case, mixed types, and order
 */


var filterAny = function filterAny(filter, row) {
  var _filter_value = convert(filter.value);

  return row[filter.id] !== undefined ? Object(ramda__WEBPACK_IMPORTED_MODULE_4__["includes"])(_filter_value, convert(row[filter.id])) : true;
};
/**
 * Convert value to a comparable string regardless of dtype and case
 */


var convert = function convert(str) {
  return str.toLocaleString().toLowerCase();
};

DashReactTable.defaultProps = {
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  multiSort: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  className: "",
  style: {},
  expanderDefaults: {
    sortable: false,
    resizable: true,
    filterable: false,
    width: 35
  },
  pivotDefaults: {},
  previousText: "Previous",
  nextText: "Next",
  loadingText: "Loading...",
  noDataText: "No rows found",
  pageText: "Page",
  ofText: "of",
  rowsText: "rows",
  pageJumpText: "jump to page",
  rowsSelectorText: "rows per page"
};
DashReactTable.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   *
   * An array of dictionaries with each dictionary corresponding
   * to a row. The keys will refere to columns while the values refer
   * to the data that will be placed in that row's cell.
   *
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),

  /**
   * An aray of dictionaries containing properties to each column.
   * At the very least, every column must have a "Header" and "accessor"
   * property. The "Header" will be the title of the column and the "accessor"
   * will link that column to the data array of dictionaries.
   *
   */
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    Cell: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.String,

    /**
     * The column's label
     */
    Header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * The corresponding key that links
     * the column to the data array.
     */
    accessor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * The corresponding key that links
     * the column to the data array.
     */
    Footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    aggregate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    aggfunc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Pivot: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    PivotValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Expander: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * Overrides the table option
     */
    sortable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    /**
     * Overides the table option
     */
    resizable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    /**
     * Overides the table option
     */
    filterable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    /**
     * Used to hide a column
     */
    show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    /**
     * A hardcoded width for the column. This overides both min and max width options
     */
    width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * A minimum width for the column (default: 100)
     */
    minWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Class name for the cells of this column.
     */
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * Inline style for the cells of this column.
     */
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

    /**
     * Class name for the header of this column.
     */
    headerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * Inline style for the header of this column.
     */
    headerStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    footerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    footerStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    filterAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Turn on pagination. Seting this to true will improve performance
   * on larger tables.
   */
  showPagination: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Show pagination controls on top of table (default: false)
   */
  showPaginationTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Show pagination controls on bottom of table (default: true)
   */
  showPaginationBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Show options dropdown to edit results per page when pagination is enabled.
   */
  showPageSizeOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Options for show page size when pageination is enabled. (default: [5, 10, 20, 25, 50, 100])
   */
  pageSizeOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),

  /**
   * Default page size. (default: 20)
   */
  defaultPageSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * controls the minimum number of rows to display - default will be "pageSize"
   * NOTE: if you set minRows to 0 then you get rid of empty padding rows BUT your table formatting will also
   * look strange when there are ZERO rows in the table.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  showPageJump: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  collapseOnSortingChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  collapseOnPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  collapseOnDataChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  freezeWhenExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Table level sorting (default: true). This can be overided for specific columns.
   */
  sortable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  multiSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Table level resizing (default: true). This can be overided for specific columns.
   */
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Table level filtering (default: false). This can be overided for specific columns.
   */
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultSortDesc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultSorted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  defaultFiltered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  defaultResized: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  defaultExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  pivotBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),

  /**
   * Add classname "-striped" and/or "-highlight" to enable these features.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Inline table styles
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  expanderDefaults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    sortable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    resizable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    filterable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  pivotDefaults: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  previousText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nextText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  noDataText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  pageText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  ofText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rowsText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  pageJumpText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rowsSelectorText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Custom conditional color formatting. Currently only supports d3.scaleThreshold().
   *
   * For more info See: https://github.com/d3/d3-scale/blob/master/README.md#threshold-scales
   */
  conditionalFormatting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * The discrete values to create conditional buckets. For N values N+1 buckets are created.
     */
    domain: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

    /**
     * An array of styles that will map to the domain. If N domain values are given, then the
     * range must have N+1 values. Note: this must be a dictionary with camelCase css values.
     */
    range: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),

    /**
     * Columns that do not get this style must be provided in an optional array.
     */
    ignore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
  }),
  pivotFunc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (DashReactTable);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3JlYWN0X3RhYmxlLy4vc3JjL2xpYi9jb21wb25lbnRzL0Rhc2hSZWFjdFRhYmxlLnJlYWN0LmpzIl0sIm5hbWVzIjpbIm51bWVyYWwiLCJyZXF1aXJlIiwiRGFzaFJlYWN0VGFibGUiLCJwcm9wcyIsImlkIiwiZGF0YSIsImNvbHVtbnMiLCJsb2FkaW5nIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1BhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplT3B0aW9ucyIsImRlZmF1bHRQYWdlU2l6ZSIsIm1pblJvd3MiLCJzaG93UGFnZUp1bXAiLCJjb2xsYXBzZU9uU29ydGluZ0NoYW5nZSIsImNvbGxhcHNlT25QYWdlQ2hhbmdlIiwiY29sbGFwc2VPbkRhdGFDaGFuZ2UiLCJmcmVlemVXaGVuRXhwYW5kZWQiLCJzb3J0YWJsZSIsIm11bHRpU29ydCIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJkZWZhdWx0U29ydERlc2MiLCJkZWZhdWx0U29ydGVkIiwiZGVmYXVsdEZpbHRlcmVkIiwiZGVmYXVsdFJlc2l6ZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJwaXZvdEJ5IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb25kaXRpb25hbEZvcm1hdHRpbmciLCJleHBhbmRlckRlZmF1bHRzIiwicGl2b3REZWZhdWx0cyIsInByZXZpb3VzVGV4dCIsIm5leHRUZXh0IiwibG9hZGluZ1RleHQiLCJub0RhdGFUZXh0IiwicGFnZVRleHQiLCJvZlRleHQiLCJyb3dzVGV4dCIsInBhZ2VKdW1wVGV4dCIsInJvd3NTZWxlY3RvclRleHQiLCJwaXZvdEZ1bmMiLCJmb3JtYXQiLCJ0aHJlc2hvbGRTY2FsZUNhbGMiLCJkb21haW4iLCJyYW5nZSIsImNvbmRpdGlvbmFsRm9ybWF0Iiwic3RhdGUiLCJyb3dJbmZvIiwiY29sdW1uIiwiaWdub3JlIiwiYWNjZXNzb3IiLCJyb3ciLCJpbmNsdWRlcyIsInRkVmFsdWUiLCJjb25kaXRpb25hbF9jb2x1bW5zIiwiYyIsInVuZGVmaW5lZCIsInZhbHVlIiwiYWdnX2Z1bmNfbmFtZSIsInZhbHVlcyIsInJvd3MiLCJfIiwicm91bmQiLCJzdW0iLCJwdXNoIiwiZmlsdGVyQW55IiwiQ29tcG9uZW50IiwiZmlsdGVyIiwiX2ZpbHRlcl92YWx1ZSIsImNvbnZlcnQiLCJzdHIiLCJ0b0xvY2FsZVN0cmluZyIsInRvTG93ZXJDYXNlIiwiZGVmYXVsdFByb3BzIiwid2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0Iiwic2hhcGUiLCJDZWxsIiwiU3RyaW5nIiwiSGVhZGVyIiwiRm9vdGVyIiwiYWdncmVnYXRlIiwiZnVuYyIsImFnZ2Z1bmMiLCJQaXZvdCIsIlBpdm90VmFsdWUiLCJFeHBhbmRlciIsImJvb2wiLCJzaG93IiwibnVtYmVyIiwibWluV2lkdGgiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImZvb3RlckNsYXNzTmFtZSIsImZvb3RlclN0eWxlIiwiZmlsdGVyQWxsIiwiYXJyYXkiLCJzZXRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxrREFBRCxDQUFyQjtBQUVBOzs7Ozs7Ozs7Ozs7OztJQVlNQyxjOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQUEsd0JBMkNELEtBQUtDLEtBM0NKO0FBQUEsVUFFREMsRUFGQyxlQUVEQSxFQUZDO0FBQUEsVUFHREMsSUFIQyxlQUdEQSxJQUhDO0FBQUEsVUFJREMsT0FKQyxlQUlEQSxPQUpDO0FBQUEsVUFLREMsT0FMQyxlQUtEQSxPQUxDO0FBQUEsVUFNREMsY0FOQyxlQU1EQSxjQU5DO0FBQUEsVUFPREMsaUJBUEMsZUFPREEsaUJBUEM7QUFBQSxVQVFEQyxv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QkYsaURBQVMsQ0FBQ0csTUFBNUIsQ0FYNEI7O0FBYW5DOzs7QUFHQTlCLFVBQU0sRUFBRTJCLGlEQUFTLENBQUNFLE9BQVYsQ0FBa0JGLGlEQUFTLENBQUNDLE1BQTVCO0FBaEIyQixHQUFoQixDQTNPQTtBQThQdkJyQyxXQUFTLEVBQUVvQyxpREFBUyxDQUFDQyxNQTlQRTs7QUFnUXZCOzs7O0FBSUF3QixVQUFRLEVBQUV6QixpREFBUyxDQUFDVTtBQXBRRyxDQUEzQjtBQXVRZXhGLDZFQUFmLEUiLCJmaWxlIjoiYmZhNDU0OS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBSZWFjdFRhYmxlIGZyb20gJ3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IFwicmVhY3QtdGFibGUvcmVhY3QtdGFibGUuY3NzXCI7XHJcbmltcG9ydCB7IGluY2x1ZGVzIH0gZnJvbSAncmFtZGEnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IHRocmVzaG9sZFNjYWxlQ2FsYyB9IGZyb20gJy4uL3V0aWwvc2NhbGVzJztcclxuXHJcbnZhciBudW1lcmFsID0gcmVxdWlyZSgnbnVtZXJhbCcpO1xyXG5cclxuLyoqXHJcbiAqIERhc2hSZWFjdFRhYmxlIGlzIGEgZGVjYWxhcml0aXZlIHZlcnNpb24gb2YgcmVhY3QtdGFibGUsIGJ1aWx0IGZvciBkYXNoLlxyXG4gKlxyXG4gKiBBdCBhIG1pbmltdW0sIGl0IG11c3QgaGF2ZSBgZGF0YWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMuXHJcbiAqIGBkYXRhYCBtdXN0IGJlIGEgdW5pZm9ybSBsaXN0IG9mIGRpY3RzIHdpdGggdGhlIGFyYml0cmFyeSBhbW91bnQgb2Yga2V5cyByZXByZXNlbnRpbmcgdGhlXHJcbiAqIGNvbHVtbnMgYW5kIHZhbHVlcyByZXByZXNlbnRpbmcgdGhhdCByb3cncyBkYXRhLiBUaGlzIGNhbiBiZSBkb25lIHZlcnkgZWFzaWx5XHJcbiAqIGluIHBhbmRhcyB1c2luZyBkZi50b19qc29uKG9yaWVudD0ncmVjb3JkcycpLiBBcyBmb3IgYGNvbHVtbnNgLCB0aGlzIGlzIGFsc28gYSBsaXN0XHJcbiAqIG9mIGRpY3Rpb25hcmllcywgYnV0IGl0IGhhcyBhIGRlZmluZWQgc2V0IG9mIHByb3BlcnRpZXMuIEF0IHRoZSB2ZXJ5IGxlYXN0LCBpdCBtdXN0IGNvbnRhaW5cclxuICogYEhlYWRlcmAgYW5kIGBhY2Nlc3NvcmAgcHJvcGVydGllcywgcmVmZXJyaW5nIHRvIHRoZSBjb2x1bW4ncyB0aXRsZSBhbmQgaWRlbnRpZnlpbmcga2V5IGluXHJcbiAqIHRoZSBkYXRhIHByb3BlcnR5LCByZXNwZWN0aXZlbHkuIENvbHVtbnMgYWxzbyBoYXZlIG1hbnkgb3RoZXIgcHJvcGVydGllcyB0aGF0IGFyZSByZWZlcmVuY2VkXHJcbiAqIGJvdGggaW4gdGhlIGRvY3N0cmluZyBhcyB3ZWxsIGFzIGluIHRoZSByZWFjdC10YWJsZSBkb2NzLlxyXG4gKi9cclxuY2xhc3MgRGFzaFJlYWN0VGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGNvbHVtbnMsXHJcbiAgICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICAgIHNob3dQYWdpbmF0aW9uLFxyXG4gICAgICAgICAgICBzaG93UGFnaW5hdGlvblRvcCxcclxuICAgICAgICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXHJcbiAgICAgICAgICAgIHNob3dQYWdlU2l6ZU9wdGlvbnMsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9ucyxcclxuICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplLFxyXG4gICAgICAgICAgICBtaW5Sb3dzLFxyXG4gICAgICAgICAgICBzaG93UGFnZUp1bXAsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlLFxyXG4gICAgICAgICAgICBjb2xsYXBzZU9uUGFnZUNoYW5nZSxcclxuICAgICAgICAgICAgY29sbGFwc2VPbkRhdGFDaGFuZ2UsXHJcbiAgICAgICAgICAgIGZyZWV6ZVdoZW5FeHBhbmRlZCxcclxuICAgICAgICAgICAgc29ydGFibGUsXHJcbiAgICAgICAgICAgIG11bHRpU29ydCxcclxuICAgICAgICAgICAgcmVzaXphYmxlLFxyXG4gICAgICAgICAgICBmaWx0ZXJhYmxlLFxyXG4gICAgICAgICAgICBkZWZhdWx0U29ydERlc2MsXHJcbiAgICAgICAgICAgIGRlZmF1bHRTb3J0ZWQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJlZCxcclxuICAgICAgICAgICAgZGVmYXVsdFJlc2l6ZWQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRFeHBhbmRlZCxcclxuICAgICAgICAgICAgcGl2b3RCeSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgY29uZGl0aW9uYWxGb3JtYXR0aW5nLFxyXG4gICAgICAgICAgICBleHBhbmRlckRlZmF1bHRzLFxyXG4gICAgICAgICAgICBwaXZvdERlZmF1bHRzLFxyXG4gICAgICAgICAgICBwcmV2aW91c1RleHQsXHJcbiAgICAgICAgICAgIG5leHRUZXh0LFxyXG4gICAgICAgICAgICBsb2FkaW5nVGV4dCxcclxuICAgICAgICAgICAgbm9EYXRhVGV4dCxcclxuICAgICAgICAgICAgcGFnZVRleHQsXHJcbiAgICAgICAgICAgIG9mVGV4dCxcclxuICAgICAgICAgICAgcm93c1RleHQsXHJcbiAgICAgICAgICAgIHBhZ2VKdW1wVGV4dCxcclxuICAgICAgICAgICAgcm93c1NlbGVjdG9yVGV4dCxcclxuICAgICAgICAgICAgcGl2b3RGdW5jLFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgZm9ybWF0ID0gdGhyZXNob2xkU2NhbGVDYWxjKGNvbmRpdGlvbmFsRm9ybWF0dGluZy5kb21haW4sIGNvbmRpdGlvbmFsRm9ybWF0dGluZy5yYW5nZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsRm9ybWF0ID0gKHN0YXRlLCByb3dJbmZvLCBjb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgbGV0IGlnbm9yZSA9IGNvbmRpdGlvbmFsRm9ybWF0dGluZy5pZ25vcmUgPyBjb25kaXRpb25hbEZvcm1hdHRpbmcuaWdub3JlIDoge307XHJcbiAgICAgICAgICAgIGxldCBhY2Nlc3NvciA9IGNvbHVtbi5pZDtcclxuICAgICAgICAgICAgaWYgKHJvd0luZm8gJiYgcm93SW5mby5yb3cgJiYgIWluY2x1ZGVzKGFjY2Vzc29yLCBpZ25vcmUpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGRWYWx1ZSA9IHJvd0luZm8ucm93W2FjY2Vzc29yXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGZvcm1hdCh0ZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBjb25kaXRpb25hbF9jb2x1bW5zID0gW107XHJcbiAgICAgICAgZm9yKGxldCBjb2x1bW4gb2YgY29sdW1ucyl7XHJcbiAgICAgICAgICAgIGxldCBjID0gY29sdW1uO1xyXG4gICAgICAgICAgICAvLyBTdHlsZSBGb3JtYXR0aW5nXHJcbiAgICAgICAgICAgIGNbJ2dldFByb3BzJ10gPSBjb25kaXRpb25hbEZvcm1hdDtcclxuICAgICAgICAgICAgLy8gTnVtYmVyIEZvcm1hdHRpbmdcclxuICAgICAgICAgICAgY1snQ2VsbCddID0gcHJvcHMgPT4gYy5mb3JtYXQgIT09IHVuZGVmaW5lZCA/IG51bWVyYWwocHJvcHMudmFsdWUpLmZvcm1hdChjLmZvcm1hdCkgOiBwcm9wcy52YWx1ZTtcclxuICAgICAgICAgICAgLy8gQWdncmVnYXRlIGZ1bmN0aW9ucyBpbiBwaXZvdGluZ1xyXG4gICAgICAgICAgICBsZXQgYWdnX2Z1bmNfbmFtZSA9IGNbXCJhZ2dmdW5jXCJdO1xyXG4gICAgICAgICAgICBpZiAocGl2b3RGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBjW1wiYWdncmVnYXRlXCJdID0gKHZhbHVlcywgcm93cykgPT4gXy5yb3VuZChfLnN1bSh2YWx1ZXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZihhZ2dfZnVuY19uYW1lKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZihhZ2dfZnVuY19uYW1lID09PSBcInN1bVwiKXtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjW1wiYWdncmVnYXRlXCJdID0gKHZhbHVlcywgcm93cykgPT4gXy5yb3VuZChfLnN1bSh2YWx1ZXMpKVxyXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIGlmKGFnZ19mdW5jX25hbWUgPT09IFwibWVhblwiKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY1tcImFnZ3JlZ2F0ZVwiXSA9ICh2YWx1ZXMsIHJvd3MpID0+IF8ucm91bmQoXy5tZWFuKHZhbHVlcykpXHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYoYWdnX2Z1bmNfbmFtZSA9PT0gXCJuYW5zdW1cIikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNbXCJhZ2dyZWdhdGVcIl0gPSAodmFsdWVzLCByb3dzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlcyA9IF8uY29tcGFjdCh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gKHZhbHVlcy5sZW5ndGggIT09IDApID8gXy5yb3VuZChfLnN1bSh2YWx1ZXMpKSA6IG51bGxcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYoYWdnX2Z1bmNfbmFtZSA9PT0gXCJuYW5tZWFuXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjW1wiYWdncmVnYXRlXCJdID0gKHZhbHVlcywgcm93cykgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZXMgPSBfLmNvbXBhY3QodmFsdWVzKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuICh2YWx1ZXMubGVuZ3RoICE9PSAwKSA/IF8ucm91bmQoXy5tZWFuKHZhbHVlcykpIDogbnVsbFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjb25kaXRpb25hbF9jb2x1bW5zLnB1c2goYyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbmRpdGlvbmFsX2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBzaG93UGFnaW5hdGlvbj17c2hvd1BhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhZ2luYXRpb25Ub3A9e3Nob3dQYWdpbmF0aW9uVG9wfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tPXtzaG93UGFnaW5hdGlvbkJvdHRvbX1cclxuICAgICAgICAgICAgICAgICAgICBzaG93UGFnZVNpemVPcHRpb25zPXtzaG93UGFnZVNpemVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9ucz17cGFnZVNpemVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZT17ZGVmYXVsdFBhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgIG1pblJvd3M9e21pblJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhZ2VKdW1wPXtzaG93UGFnZUp1bXB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2U9e2NvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlT25QYWdlQ2hhbmdlPXtjb2xsYXBzZU9uUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZU9uRGF0YUNoYW5nZT17Y29sbGFwc2VPbkRhdGFDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJlZXplV2hlbkV4cGFuZGVkPXtmcmVlemVXaGVuRXhwYW5kZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU9e3NvcnRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpU29ydD17bXVsdGlTb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6YWJsZT17cmVzaXphYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU9e2ZpbHRlcmFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNvcnREZXNjPXtkZWZhdWx0U29ydERlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFNvcnRlZD17ZGVmYXVsdFNvcnRlZH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RmlsdGVyZWQ9e2RlZmF1bHRGaWx0ZXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UmVzaXplZD17ZGVmYXVsdFJlc2l6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEV4cGFuZGVkPXtkZWZhdWx0RXhwYW5kZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGl2b3RCeT17cGl2b3RCeX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZXJEZWZhdWx0cz17ZXhwYW5kZXJEZWZhdWx0c31cclxuICAgICAgICAgICAgICAgICAgICBwaXZvdERlZmF1bHRzPXtwaXZvdERlZmF1bHRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVGV4dD17cHJldmlvdXNUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRUZXh0PXtuZXh0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhVGV4dD17bm9EYXRhVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlVGV4dD17cGFnZVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgb2ZUZXh0PXtvZlRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93c1RleHQ9e3Jvd3NUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VKdW1wVGV4dD17cGFnZUp1bXBUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NTZWxlY3RvclRleHQ9e3Jvd3NTZWxlY3RvclRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEZpbHRlck1ldGhvZD17ZmlsdGVyQW55fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdFRhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGN1c3RvbSBmaWx0ZXIgdGhhdCBpZ25vcmVzIGNoYXJhY3RlciBjYXNlLCBtaXhlZCB0eXBlcywgYW5kIG9yZGVyXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJBbnkgPSAoZmlsdGVyLCByb3cpID0+IHtcclxuICAgIGNvbnN0IF9maWx0ZXJfdmFsdWUgPSBjb252ZXJ0KGZpbHRlci52YWx1ZSk7XHJcbiAgICByZXR1cm4gcm93W2ZpbHRlci5pZF0gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgaW5jbHVkZXMoX2ZpbHRlcl92YWx1ZSwgY29udmVydChyb3dbZmlsdGVyLmlkXSkpIDogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgdmFsdWUgdG8gYSBjb21wYXJhYmxlIHN0cmluZyByZWdhcmRsZXNzIG9mIGR0eXBlIGFuZCBjYXNlXHJcbiAqL1xyXG5jb25zdCBjb252ZXJ0ID0gKHN0cikgPT4ge1xyXG4gICAgcmV0dXJuIHN0ci50b0xvY2FsZVN0cmluZygpLnRvTG93ZXJDYXNlKClcclxufTtcclxuXHJcblxyXG5EYXNoUmVhY3RUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHNob3dQYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgc2hvd1BhZ2luYXRpb25Ub3A6IGZhbHNlLFxyXG4gICAgc2hvd1BhZ2luYXRpb25Cb3R0b206IHRydWUsXHJcbiAgICBzaG93UGFnZVNpemVPcHRpb25zOiB0cnVlLFxyXG4gICAgcGFnZVNpemVPcHRpb25zOiBbNSwgMTAsIDIwLCAyNSwgNTAsIDEwMF0sXHJcbiAgICBkZWZhdWx0UGFnZVNpemU6IDIwLFxyXG4gICAgc2hvd1BhZ2VKdW1wOiB0cnVlLFxyXG4gICAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2U6IHRydWUsXHJcbiAgICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogdHJ1ZSxcclxuICAgIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiB0cnVlLFxyXG4gICAgZnJlZXplV2hlbkV4cGFuZGVkOiBmYWxzZSxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgbXVsdGlTb3J0OiB0cnVlLFxyXG4gICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgZmlsdGVyYWJsZTogZmFsc2UsXHJcbiAgICBkZWZhdWx0U29ydERlc2M6IGZhbHNlLFxyXG4gICAgZGVmYXVsdFNvcnRlZDogW10sXHJcbiAgICBkZWZhdWx0RmlsdGVyZWQ6IFtdLFxyXG4gICAgZGVmYXVsdFJlc2l6ZWQ6IFtdLFxyXG4gICAgZGVmYXVsdEV4cGFuZGVkOiB7fSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIHN0eWxlOiB7fSxcclxuICAgIGV4cGFuZGVyRGVmYXVsdHM6IHtcclxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdpZHRoOiAzNVxyXG4gICAgfSxcclxuICAgIHBpdm90RGVmYXVsdHM6IHt9LFxyXG4gICAgcHJldmlvdXNUZXh0OiBcIlByZXZpb3VzXCIsXHJcbiAgICBuZXh0VGV4dDogXCJOZXh0XCIsXHJcbiAgICBsb2FkaW5nVGV4dDogXCJMb2FkaW5nLi4uXCIsXHJcbiAgICBub0RhdGFUZXh0OiBcIk5vIHJvd3MgZm91bmRcIixcclxuICAgIHBhZ2VUZXh0OiBcIlBhZ2VcIixcclxuICAgIG9mVGV4dDogXCJvZlwiLFxyXG4gICAgcm93c1RleHQ6IFwicm93c1wiLFxyXG4gICAgcGFnZUp1bXBUZXh0OiBcImp1bXAgdG8gcGFnZVwiLFxyXG4gICAgcm93c1NlbGVjdG9yVGV4dDogXCJyb3dzIHBlciBwYWdlXCJcclxufTtcclxuXHJcbkRhc2hSZWFjdFRhYmxlLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3NcclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQW4gYXJyYXkgb2YgZGljdGlvbmFyaWVzIHdpdGggZWFjaCBkaWN0aW9uYXJ5IGNvcnJlc3BvbmRpbmdcclxuICAgICAqIHRvIGEgcm93LiBUaGUga2V5cyB3aWxsIHJlZmVyZSB0byBjb2x1bW5zIHdoaWxlIHRoZSB2YWx1ZXMgcmVmZXJcclxuICAgICAqIHRvIHRoZSBkYXRhIHRoYXQgd2lsbCBiZSBwbGFjZWQgaW4gdGhhdCByb3cncyBjZWxsLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcmF5IG9mIGRpY3Rpb25hcmllcyBjb250YWluaW5nIHByb3BlcnRpZXMgdG8gZWFjaCBjb2x1bW4uXHJcbiAgICAgKiBBdCB0aGUgdmVyeSBsZWFzdCwgZXZlcnkgY29sdW1uIG11c3QgaGF2ZSBhIFwiSGVhZGVyXCIgYW5kIFwiYWNjZXNzb3JcIlxyXG4gICAgICogcHJvcGVydHkuIFRoZSBcIkhlYWRlclwiIHdpbGwgYmUgdGhlIHRpdGxlIG9mIHRoZSBjb2x1bW4gYW5kIHRoZSBcImFjY2Vzc29yXCJcclxuICAgICAqIHdpbGwgbGluayB0aGF0IGNvbHVtbiB0byB0aGUgZGF0YSBhcnJheSBvZiBkaWN0aW9uYXJpZXMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cclxuICAgICAgICAgICAgQ2VsbDogUHJvcFR5cGVzLlN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgY29sdW1uJ3MgbGFiZWxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgY29ycmVzcG9uZGluZyBrZXkgdGhhdCBsaW5rc1xyXG4gICAgICAgICAgICAgKiB0aGUgY29sdW1uIHRvIHRoZSBkYXRhIGFycmF5LlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgYWNjZXNzb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIGNvcnJlc3BvbmRpbmcga2V5IHRoYXQgbGlua3NcclxuICAgICAgICAgICAgICogdGhlIGNvbHVtbiB0byB0aGUgZGF0YSBhcnJheS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEZvb3RlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgICAgICAgICBhZ2dmdW5jOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgUGl2b3Q6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICBQaXZvdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgRXhwYW5kZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3ZlcnJpZGVzIHRoZSB0YWJsZSBvcHRpb25cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPdmVyaWRlcyB0aGUgdGFibGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE92ZXJpZGVzIHRoZSB0YWJsZSBvcHRpb25cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZpbHRlcmFibGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFVzZWQgdG8gaGlkZSBhIGNvbHVtblxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQSBoYXJkY29kZWQgd2lkdGggZm9yIHRoZSBjb2x1bW4uIFRoaXMgb3ZlcmlkZXMgYm90aCBtaW4gYW5kIG1heCB3aWR0aCBvcHRpb25zXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBIG1pbmltdW0gd2lkdGggZm9yIHRoZSBjb2x1bW4gKGRlZmF1bHQ6IDEwMClcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENsYXNzIG5hbWUgZm9yIHRoZSBjZWxscyBvZiB0aGlzIGNvbHVtbi5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbmxpbmUgc3R5bGUgZm9yIHRoZSBjZWxscyBvZiB0aGlzIGNvbHVtbi5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENsYXNzIG5hbWUgZm9yIHRoZSBoZWFkZXIgb2YgdGhpcyBjb2x1bW4uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSW5saW5lIHN0eWxlIGZvciB0aGUgaGVhZGVyIG9mIHRoaXMgY29sdW1uLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaGVhZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgICAgICAgICBmb290ZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICBmb290ZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAgICAgICAgIGZpbHRlckFsbDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgICAgICAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgICAgICB9KVxyXG4gICAgKSxcclxuXHJcbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFR1cm4gb24gcGFnaW5hdGlvbi4gU2V0aW5nIHRoaXMgdG8gdHJ1ZSB3aWxsIGltcHJvdmUgcGVyZm9ybWFuY2VcclxuICAgICAqIG9uIGxhcmdlciB0YWJsZXMuXHJcbiAgICAgKi9cclxuICAgIHNob3dQYWdpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgcGFnaW5hdGlvbiBjb250cm9scyBvbiB0b3Agb2YgdGFibGUgKGRlZmF1bHQ6IGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzaG93UGFnaW5hdGlvblRvcDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHBhZ2luYXRpb24gY29udHJvbHMgb24gYm90dG9tIG9mIHRhYmxlIChkZWZhdWx0OiB0cnVlKVxyXG4gICAgICovXHJcbiAgICBzaG93UGFnaW5hdGlvbkJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IG9wdGlvbnMgZHJvcGRvd24gdG8gZWRpdCByZXN1bHRzIHBlciBwYWdlIHdoZW4gcGFnaW5hdGlvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBzaG93UGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbnMgZm9yIHNob3cgcGFnZSBzaXplIHdoZW4gcGFnZWluYXRpb24gaXMgZW5hYmxlZC4gKGRlZmF1bHQ6IFs1LCAxMCwgMjAsIDI1LCA1MCwgMTAwXSlcclxuICAgICAqL1xyXG4gICAgcGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgcGFnZSBzaXplLiAoZGVmYXVsdDogMjApXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRQYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnRyb2xzIHRoZSBtaW5pbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgLSBkZWZhdWx0IHdpbGwgYmUgXCJwYWdlU2l6ZVwiXHJcbiAgICAgKiBOT1RFOiBpZiB5b3Ugc2V0IG1pblJvd3MgdG8gMCB0aGVuIHlvdSBnZXQgcmlkIG9mIGVtcHR5IHBhZGRpbmcgcm93cyBCVVQgeW91ciB0YWJsZSBmb3JtYXR0aW5nIHdpbGwgYWxzb1xyXG4gICAgICogbG9vayBzdHJhbmdlIHdoZW4gdGhlcmUgYXJlIFpFUk8gcm93cyBpbiB0aGUgdGFibGUuXHJcbiAgICAgKi9cclxuICAgIG1pblJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgc2hvd1BhZ2VKdW1wOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICBjb2xsYXBzZU9uU29ydGluZ0NoYW5nZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgY29sbGFwc2VPblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICBmcmVlemVXaGVuRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGFibGUgbGV2ZWwgc29ydGluZyAoZGVmYXVsdDogdHJ1ZSkuIFRoaXMgY2FuIGJlIG92ZXJpZGVkIGZvciBzcGVjaWZpYyBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgbXVsdGlTb3J0OiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRhYmxlIGxldmVsIHJlc2l6aW5nIChkZWZhdWx0OiB0cnVlKS4gVGhpcyBjYW4gYmUgb3ZlcmlkZWQgZm9yIHNwZWNpZmljIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIHJlc2l6YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUYWJsZSBsZXZlbCBmaWx0ZXJpbmcgKGRlZmF1bHQ6IGZhbHNlKS4gVGhpcyBjYW4gYmUgb3ZlcmlkZWQgZm9yIHNwZWNpZmljIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIGZpbHRlcmFibGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIGRlZmF1bHRTb3J0RGVzYzogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgZGVmYXVsdFNvcnRlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcblxyXG4gICAgZGVmYXVsdEZpbHRlcmVkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxuXHJcbiAgICBkZWZhdWx0UmVzaXplZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcblxyXG4gICAgZGVmYXVsdEV4cGFuZGVkOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgIHBpdm90Qnk6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNsYXNzbmFtZSBcIi1zdHJpcGVkXCIgYW5kL29yIFwiLWhpZ2hsaWdodFwiIHRvIGVuYWJsZSB0aGVzZSBmZWF0dXJlcy5cclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5saW5lIHRhYmxlIHN0eWxlc1xyXG4gICAgICovXHJcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICBleHBhbmRlckRlZmF1bHRzOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIGZpbHRlcmFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgfSksXHJcblxyXG4gICAgcGl2b3REZWZhdWx0czogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICBwcmV2aW91c1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgbmV4dFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgbG9hZGluZ1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgbm9EYXRhVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICBwYWdlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICBvZlRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgcm93c1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgcGFnZUp1bXBUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIHJvd3NTZWxlY3RvclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b20gY29uZGl0aW9uYWwgY29sb3IgZm9ybWF0dGluZy4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgZDMuc2NhbGVUaHJlc2hvbGQoKS5cclxuICAgICAqXHJcbiAgICAgKiBGb3IgbW9yZSBpbmZvIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2QzL2QzLXNjYWxlL2Jsb2IvbWFzdGVyL1JFQURNRS5tZCN0aHJlc2hvbGQtc2NhbGVzXHJcbiAgICAgKi9cclxuICAgIGNvbmRpdGlvbmFsRm9ybWF0dGluZzogUHJvcFR5cGVzLnNoYXBlKHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGRpc2NyZXRlIHZhbHVlcyB0byBjcmVhdGUgY29uZGl0aW9uYWwgYnVja2V0cy4gRm9yIE4gdmFsdWVzIE4rMSBidWNrZXRzIGFyZSBjcmVhdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRvbWFpbjogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHlsZXMgdGhhdCB3aWxsIG1hcCB0byB0aGUgZG9tYWluLiBJZiBOIGRvbWFpbiB2YWx1ZXMgYXJlIGdpdmVuLCB0aGVuIHRoZVxyXG4gICAgICAgICAqIHJhbmdlIG11c3QgaGF2ZSBOKzEgdmFsdWVzLiBOb3RlOiB0aGlzIG11c3QgYmUgYSBkaWN0aW9uYXJ5IHdpdGggY2FtZWxDYXNlIGNzcyB2YWx1ZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmFuZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb2x1bW5zIHRoYXQgZG8gbm90IGdldCB0aGlzIHN0eWxlIG11c3QgYmUgcHJvdmlkZWQgaW4gYW4gb3B0aW9uYWwgYXJyYXkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWdub3JlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxuICAgIH0pLFxyXG5cclxuICAgIHBpdm90RnVuYzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHdoZW5ldmVyIGFueSBvZiB0aGVcclxuICAgICAqIHByb3BlcnRpZXMgY2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaFJlYWN0VGFibGUiXSwic291cmNlUm9vdCI6IiJ9