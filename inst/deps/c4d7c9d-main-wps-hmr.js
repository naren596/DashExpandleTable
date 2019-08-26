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
          rowsSelectorText = _this$props.rowsSelectorText;
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
          var c = column;
          console.log(c); // Style Formatting

          c['getProps'] = conditionalFormat; // Number Formatting

          c['Cell'] = function (props) {
            return c.format !== undefined ? numeral(props.value).format(c.format) : props.value;
          }; // Aggregate functions in pivoting


          var agg_func_name = c["aggregate_func"];

          if (agg_func_name) {
            if (agg_func_name === "sum") {
              c["aggregate"] = function (values, rows) {
                return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.round(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.sum(values));
              };
            } else if (agg_func_name === "mean") {
              c["aggregate"] = function (values, rows) {
                return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.round(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.mean(values));
              };
            } else if (agg_func_name === "nansum") {
              c["aggregate"] = function (values, rows) {
                values = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.compact(values);
                return values.length !== 0 ? lodash__WEBPACK_IMPORTED_MODULE_5___default.a.round(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.sum(values)) : null;
              };
            } else if (agg_func_name === "nanmean") {
              c["aggregate"] = function (values, rows) {
                values = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.compact(values);
                return values.length !== 0 ? lodash__WEBPACK_IMPORTED_MODULE_5___default.a.round(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.mean(values)) : null;
              };
            }
          }

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

/* harmony default export */ __webpack_exports__["default"] = (DashReactTable);
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
    resizable: false,
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
    aggregate_func: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
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

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3JlYWN0X3RhYmxlLy4vc3JjL2xpYi9jb21wb25lbnRzL0Rhc2hSZWFjdFRhYmxlLnJlYWN0LmpzIl0sIm5hbWVzIjpbIm51bWVyYWwiLCJyZXF1aXJlIiwiRGFzaFJlYWN0VGFibGUiLCJwcm9wcyIsImlkIiwiZGF0YSIsImNvbHVtbnMiLCJsb2FkaW5nIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1BhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplT3B0aW9ucyIsImRlZmF1bHRQYWdlU2l6ZSIsIm1pblJvd3MiLCJzaG93UGFnZUp1bXAiLCJjb2xsYXBzZU9uU29ydGluZ0NoYW5nZSIsImNvbGxhcHNlT25QYWdlQ2hhbmdlIiwiY29sbGFwc2VPbkRhdGFDaGFuZ2UiLCJmcmVlemVXaGVuRXhwYW5kZWQiLCJzb3J0YWJsZSIsIm11bHRpU29ydCIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJkZWZhdWx0U29ydERlc2MiLCJkZWZhdWx0U29ydGVkIiwiZGVmYXVsdEZpbHRlcmVkIiwiZGVmYXVsdFJlc2l6ZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJwaXZvdEJ5IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb25kaXRpb25hbEZvcm1hdHRpbmciLCJleHBhbmRlckRlZmF1bHRzIiwicGl2b3REZWZhdWx0cyIsInByZXZpb3VzVGV4dCIsIm5leHRUZXh0IiwibG9hZGluZ1RleHQiLCJub0RhdGFUZXh0IiwicGFnZVRleHQiLCJvZlRleHQiLCJyb3dzVGV4dCIsInBhZ2VKdW1wVGV4dCIsInJvd3NTZWxlY3RvclRleHQiLCJmb3JtYXQiLCJ0aHJlc2hvbGRTY2FsZUNhbGMiLCJkb21haW4iLCJyYW5nZSIsImNvbmRpdGlvbmFsRm9ybWF0Iiwic3RhdGUiLCJyb3dJbmZvIiwiY29sdW1uIiwiaWdub3JlIiwiYWNjZXNzb3IiLCJyb3ciLCJpbmNsdWRlcyIsInRkVmFsdWUiLCJjb25kaXRpb25hbF9jb2x1bW5zIiwiYyIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImFnZ19mdW5jX25hbWUiLCJ2YWx1ZXMiLCJyb3dzIiwiXyIsInJvdW5kIiwic3VtIiwibWVhbiIsImNvbXBhY3QiLCJsZW5ndGgiLCJwdXNoIiwiZmlsdGVyQW55IiwiQ29tcG9uZW50IiwiZmlsdGVyIiwiX2ZpbHRlcl92YWx1ZSIsImNvbnZlcnQiLCJzdHIiLCJ0b0xvY2FsZVN0cmluZyIsInRvTG93ZXJDYXNlIiwiZGVmYXVsdFByb3BzIiwid2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0Iiwic2hhcGUiLCJDZWxsIiwiU3RyaW5nIiwiSGVhZGVyIiwiRm9vdGVyIiwiYWdncmVnYXRlX2Z1bmMiLCJQaXZvdCIsIlBpdm90VmFsdWUiLCJFeHBhbmRlciIsImJvb2wiLCJzaG93IiwibnVtYmVyIiwibWluV2lkdGgiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImZvb3RlckNsYXNzTmFtZSIsImZvb3RlclN0eWxlIiwiZmlsdGVyQWxsIiwiYXJyYXkiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBckI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFZTUMsYzs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUFBLHdCQTBDRCxLQUFLQyxLQTFDSjtBQUFBLFVBRURDLEVBRkMsZUFFREEsRUFGQztBQUFBLFVBR0RDLElBSEMsZUFHREEsSUFIQztBQUFBLFVBSURDLE9BSkMsZUFJREEsT0FKQztBQUFBLFVBS0RDLE9BTEMsZUFLREEsT0FMQztBQUFBLFVBTURDLGNBTkMsZUFNREEsY0FOQztBQUFBLFVBT0RDLGlCQVBD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cy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBSZWFjdFRhYmxlIGZyb20gJ3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IFwicmVhY3QtdGFibGUvcmVhY3QtdGFibGUuY3NzXCI7XHJcbmltcG9ydCB7IGluY2x1ZGVzIH0gZnJvbSAncmFtZGEnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IHRocmVzaG9sZFNjYWxlQ2FsYyB9IGZyb20gJy4uL3V0aWwvc2NhbGVzJztcclxuXHJcbnZhciBudW1lcmFsID0gcmVxdWlyZSgnbnVtZXJhbCcpO1xyXG5cclxuLyoqXHJcbiAqIERhc2hSZWFjdFRhYmxlIGlzIGEgZGVjYWxhcml0aXZlIHZlcnNpb24gb2YgcmVhY3QtdGFibGUsIGJ1aWx0IGZvciBkYXNoLlxyXG4gKlxyXG4gKiBBdCBhIG1pbmltdW0sIGl0IG11c3QgaGF2ZSBgZGF0YWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMuXHJcbiAqIGBkYXRhYCBtdXN0IGJlIGEgdW5pZm9ybSBsaXN0IG9mIGRpY3RzIHdpdGggdGhlIGFyYml0cmFyeSBhbW91bnQgb2Yga2V5cyByZXByZXNlbnRpbmcgdGhlXHJcbiAqIGNvbHVtbnMgYW5kIHZhbHVlcyByZXByZXNlbnRpbmcgdGhhdCByb3cncyBkYXRhLiBUaGlzIGNhbiBiZSBkb25lIHZlcnkgZWFzaWx5XHJcbiAqIGluIHBhbmRhcyB1c2luZyBkZi50b19qc29uKG9yaWVudD0ncmVjb3JkcycpLiBBcyBmb3IgYGNvbHVtbnNgLCB0aGlzIGlzIGFsc28gYSBsaXN0XHJcbiAqIG9mIGRpY3Rpb25hcmllcywgYnV0IGl0IGhhcyBhIGRlZmluZWQgc2V0IG9mIHByb3BlcnRpZXMuIEF0IHRoZSB2ZXJ5IGxlYXN0LCBpdCBtdXN0IGNvbnRhaW5cclxuICogYEhlYWRlcmAgYW5kIGBhY2Nlc3NvcmAgcHJvcGVydGllcywgcmVmZXJyaW5nIHRvIHRoZSBjb2x1bW4ncyB0aXRsZSBhbmQgaWRlbnRpZnlpbmcga2V5IGluXHJcbiAqIHRoZSBkYXRhIHByb3BlcnR5LCByZXNwZWN0aXZlbHkuIENvbHVtbnMgYWxzbyBoYXZlIG1hbnkgb3RoZXIgcHJvcGVydGllcyB0aGF0IGFyZSByZWZlcmVuY2VkXHJcbiAqIGJvdGggaW4gdGhlIGRvY3N0cmluZyBhcyB3ZWxsIGFzIGluIHRoZSByZWFjdC10YWJsZSBkb2NzLlxyXG4gKi9cclxuY2xhc3MgRGFzaFJlYWN0VGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBjb2x1bW5zLFxyXG4gICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICBzaG93UGFnaW5hdGlvbixcclxuICAgICAgICAgICAgc2hvd1BhZ2luYXRpb25Ub3AsXHJcbiAgICAgICAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxyXG4gICAgICAgICAgICBzaG93UGFnZVNpemVPcHRpb25zLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnMsXHJcbiAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZSxcclxuICAgICAgICAgICAgbWluUm93cyxcclxuICAgICAgICAgICAgc2hvd1BhZ2VKdW1wLFxyXG4gICAgICAgICAgICBjb2xsYXBzZU9uU29ydGluZ0NoYW5nZSxcclxuICAgICAgICAgICAgY29sbGFwc2VPblBhZ2VDaGFuZ2UsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlT25EYXRhQ2hhbmdlLFxyXG4gICAgICAgICAgICBmcmVlemVXaGVuRXhwYW5kZWQsXHJcbiAgICAgICAgICAgIHNvcnRhYmxlLFxyXG4gICAgICAgICAgICBtdWx0aVNvcnQsXHJcbiAgICAgICAgICAgIHJlc2l6YWJsZSxcclxuICAgICAgICAgICAgZmlsdGVyYWJsZSxcclxuICAgICAgICAgICAgZGVmYXVsdFNvcnREZXNjLFxyXG4gICAgICAgICAgICBkZWZhdWx0U29ydGVkLFxyXG4gICAgICAgICAgICBkZWZhdWx0RmlsdGVyZWQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRSZXNpemVkLFxyXG4gICAgICAgICAgICBkZWZhdWx0RXhwYW5kZWQsXHJcbiAgICAgICAgICAgIHBpdm90QnksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsRm9ybWF0dGluZyxcclxuICAgICAgICAgICAgZXhwYW5kZXJEZWZhdWx0cyxcclxuICAgICAgICAgICAgcGl2b3REZWZhdWx0cyxcclxuICAgICAgICAgICAgcHJldmlvdXNUZXh0LFxyXG4gICAgICAgICAgICBuZXh0VGV4dCxcclxuICAgICAgICAgICAgbG9hZGluZ1RleHQsXHJcbiAgICAgICAgICAgIG5vRGF0YVRleHQsXHJcbiAgICAgICAgICAgIHBhZ2VUZXh0LFxyXG4gICAgICAgICAgICBvZlRleHQsXHJcbiAgICAgICAgICAgIHJvd3NUZXh0LFxyXG4gICAgICAgICAgICBwYWdlSnVtcFRleHQsXHJcbiAgICAgICAgICAgIHJvd3NTZWxlY3RvclRleHRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGZvcm1hdCA9IHRocmVzaG9sZFNjYWxlQ2FsYyhjb25kaXRpb25hbEZvcm1hdHRpbmcuZG9tYWluLCBjb25kaXRpb25hbEZvcm1hdHRpbmcucmFuZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCBjb25kaXRpb25hbEZvcm1hdCA9IChzdGF0ZSwgcm93SW5mbywgY29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZ25vcmUgPSBjb25kaXRpb25hbEZvcm1hdHRpbmcuaWdub3JlID8gY29uZGl0aW9uYWxGb3JtYXR0aW5nLmlnbm9yZSA6IHt9O1xyXG4gICAgICAgICAgICBsZXQgYWNjZXNzb3IgPSBjb2x1bW4uaWQ7XHJcbiAgICAgICAgICAgIGlmIChyb3dJbmZvICYmIHJvd0luZm8ucm93ICYmICFpbmNsdWRlcyhhY2Nlc3NvciwgaWdub3JlKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRkVmFsdWUgPSByb3dJbmZvLnJvd1thY2Nlc3Nvcl07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBmb3JtYXQodGRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgY29uZGl0aW9uYWxfY29sdW1ucyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgY29sdW1uIG9mIGNvbHVtbnMpe1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNvbHVtbjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYylcclxuICAgICAgICAgICAgLy8gU3R5bGUgRm9ybWF0dGluZ1xyXG4gICAgICAgICAgICBjWydnZXRQcm9wcyddID0gY29uZGl0aW9uYWxGb3JtYXQ7XHJcbiAgICAgICAgICAgIC8vIE51bWJlciBGb3JtYXR0aW5nXHJcbiAgICAgICAgICAgIGNbJ0NlbGwnXSA9IHByb3BzID0+IGMuZm9ybWF0ICE9PSB1bmRlZmluZWQgPyBudW1lcmFsKHByb3BzLnZhbHVlKS5mb3JtYXQoYy5mb3JtYXQpIDogcHJvcHMudmFsdWU7XHJcbiAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSBmdW5jdGlvbnMgaW4gcGl2b3RpbmdcclxuICAgICAgICAgICAgbGV0IGFnZ19mdW5jX25hbWUgPSBjW1wiYWdncmVnYXRlX2Z1bmNcIl07XHJcbiAgICAgICAgICAgIGlmKGFnZ19mdW5jX25hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGFnZ19mdW5jX25hbWUgPT09IFwic3VtXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNbXCJhZ2dyZWdhdGVcIl0gPSAodmFsdWVzLCByb3dzKSA9PiBfLnJvdW5kKF8uc3VtKHZhbHVlcykpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYWdnX2Z1bmNfbmFtZSA9PT0gXCJtZWFuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjW1wiYWdncmVnYXRlXCJdID0gKHZhbHVlcywgcm93cykgPT4gXy5yb3VuZChfLm1lYW4odmFsdWVzKSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhZ2dfZnVuY19uYW1lID09PSBcIm5hbnN1bVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY1tcImFnZ3JlZ2F0ZVwiXSA9ICh2YWx1ZXMsIHJvd3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gXy5jb21wYWN0KHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsdWVzLmxlbmd0aCAhPT0gMCkgPyBfLnJvdW5kKF8uc3VtKHZhbHVlcykpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhZ2dfZnVuY19uYW1lID09PSBcIm5hbm1lYW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNbXCJhZ2dyZWdhdGVcIl0gPSAodmFsdWVzLCByb3dzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IF8uY29tcGFjdCh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbHVlcy5sZW5ndGggIT09IDApID8gXy5yb3VuZChfLm1lYW4odmFsdWVzKSkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsX2NvbHVtbnMucHVzaChjKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29uZGl0aW9uYWxfY29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQYWdpbmF0aW9uPXtzaG93UGFnaW5hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBzaG93UGFnaW5hdGlvblRvcD17c2hvd1BhZ2luYXRpb25Ub3B9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b209e3Nob3dQYWdpbmF0aW9uQm90dG9tfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQYWdlU2l6ZU9wdGlvbnM9e3Nob3dQYWdlU2l6ZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtwYWdlU2l6ZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplPXtkZWZhdWx0UGFnZVNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgbWluUm93cz17bWluUm93c31cclxuICAgICAgICAgICAgICAgICAgICBzaG93UGFnZUp1bXA9e3Nob3dQYWdlSnVtcH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZU9uU29ydGluZ0NoYW5nZT17Y29sbGFwc2VPblNvcnRpbmdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VPblBhZ2VDaGFuZ2U9e2NvbGxhcHNlT25QYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlT25EYXRhQ2hhbmdlPXtjb2xsYXBzZU9uRGF0YUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBmcmVlemVXaGVuRXhwYW5kZWQ9e2ZyZWV6ZVdoZW5FeHBhbmRlZH1cclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZT17c29ydGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlTb3J0PXttdWx0aVNvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXphYmxlPXtyZXNpemFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZT17ZmlsdGVyYWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U29ydERlc2M9e2RlZmF1bHRTb3J0RGVzY31cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U29ydGVkPXtkZWZhdWx0U29ydGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJlZD17ZGVmYXVsdEZpbHRlcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRSZXNpemVkPXtkZWZhdWx0UmVzaXplZH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RXhwYW5kZWQ9e2RlZmF1bHRFeHBhbmRlZH1cclxuICAgICAgICAgICAgICAgICAgICBwaXZvdEJ5PXtwaXZvdEJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlckRlZmF1bHRzPXtleHBhbmRlckRlZmF1bHRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHBpdm90RGVmYXVsdHM9e3Bpdm90RGVmYXVsdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNUZXh0PXtwcmV2aW91c1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFRleHQ9e25leHRUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtsb2FkaW5nVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBub0RhdGFUZXh0PXtub0RhdGFUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VUZXh0PXtwYWdlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBvZlRleHQ9e29mVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICByb3dzVGV4dD17cm93c1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUp1bXBUZXh0PXtwYWdlSnVtcFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93c1NlbGVjdG9yVGV4dD17cm93c1NlbGVjdG9yVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RmlsdGVyTWV0aG9kPXtmaWx0ZXJBbnl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0VGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hSZWFjdFRhYmxlXHJcblxyXG4vKipcclxuICogQ3JlYXRlIGN1c3RvbSBmaWx0ZXIgdGhhdCBpZ25vcmVzIGNoYXJhY3RlciBjYXNlLCBtaXhlZCB0eXBlcywgYW5kIG9yZGVyXHJcbiAqL1xyXG5jb25zdCBmaWx0ZXJBbnkgPSAoZmlsdGVyLCByb3cpID0+IHtcclxuICAgIGNvbnN0IF9maWx0ZXJfdmFsdWUgPSBjb252ZXJ0KGZpbHRlci52YWx1ZSk7XHJcbiAgICByZXR1cm4gcm93W2ZpbHRlci5pZF0gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgaW5jbHVkZXMoX2ZpbHRlcl92YWx1ZSwgY29udmVydChyb3dbZmlsdGVyLmlkXSkpIDogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgdmFsdWUgdG8gYSBjb21wYXJhYmxlIHN0cmluZyByZWdhcmRsZXNzIG9mIGR0eXBlIGFuZCBjYXNlXHJcbiAqL1xyXG5jb25zdCBjb252ZXJ0ID0gKHN0cikgPT4ge1xyXG4gICAgcmV0dXJuIHN0ci50b0xvY2FsZVN0cmluZygpLnRvTG93ZXJDYXNlKClcclxufTtcclxuXHJcblxyXG5EYXNoUmVhY3RUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHNob3dQYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgc2hvd1BhZ2luYXRpb25Ub3A6IGZhbHNlLFxyXG4gICAgc2hvd1BhZ2luYXRpb25Cb3R0b206IHRydWUsXHJcbiAgICBzaG93UGFnZVNpemVPcHRpb25zOiB0cnVlLFxyXG4gICAgcGFnZVNpemVPcHRpb25zOiBbNSwgMTAsIDIwLCAyNSwgNTAsIDEwMF0sXHJcbiAgICBkZWZhdWx0UGFnZVNpemU6IDIwLFxyXG4gICAgc2hvd1BhZ2VKdW1wOiB0cnVlLFxyXG4gICAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2U6IHRydWUsXHJcbiAgICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogdHJ1ZSxcclxuICAgIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiB0cnVlLFxyXG4gICAgZnJlZXplV2hlbkV4cGFuZGVkOiBmYWxzZSxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgbXVsdGlTb3J0OiB0cnVlLFxyXG4gICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgZmlsdGVyYWJsZTogZmFsc2UsXHJcbiAgICBkZWZhdWx0U29ydERlc2M6IGZhbHNlLFxyXG4gICAgZGVmYXVsdFNvcnRlZDogW10sXHJcbiAgICBkZWZhdWx0RmlsdGVyZWQ6IFtdLFxyXG4gICAgZGVmYXVsdFJlc2l6ZWQ6IFtdLFxyXG4gICAgZGVmYXVsdEV4cGFuZGVkOiB7fSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIHN0eWxlOiB7fSxcclxuICAgIGV4cGFuZGVyRGVmYXVsdHM6IHtcclxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICB3aWR0aDogMzVcclxuICAgIH0sXHJcbiAgICBwaXZvdERlZmF1bHRzOiB7fSxcclxuICAgIHByZXZpb3VzVGV4dDogXCJQcmV2aW91c1wiLFxyXG4gICAgbmV4dFRleHQ6IFwiTmV4dFwiLFxyXG4gICAgbG9hZGluZ1RleHQ6IFwiTG9hZGluZy4uLlwiLFxyXG4gICAgbm9EYXRhVGV4dDogXCJObyByb3dzIGZvdW5kXCIsXHJcbiAgICBwYWdlVGV4dDogXCJQYWdlXCIsXHJcbiAgICBvZlRleHQ6IFwib2ZcIixcclxuICAgIHJvd3NUZXh0OiBcInJvd3NcIixcclxuICAgIHBhZ2VKdW1wVGV4dDogXCJqdW1wIHRvIHBhZ2VcIixcclxuICAgIHJvd3NTZWxlY3RvclRleHQ6IFwicm93cyBwZXIgcGFnZVwiXHJcbn07XHJcblxyXG5EYXNoUmVhY3RUYWJsZS5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzXHJcbiAgICAgKi9cclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEFuIGFycmF5IG9mIGRpY3Rpb25hcmllcyB3aXRoIGVhY2ggZGljdGlvbmFyeSBjb3JyZXNwb25kaW5nXHJcbiAgICAgKiB0byBhIHJvdy4gVGhlIGtleXMgd2lsbCByZWZlcmUgdG8gY29sdW1ucyB3aGlsZSB0aGUgdmFsdWVzIHJlZmVyXHJcbiAgICAgKiB0byB0aGUgZGF0YSB0aGF0IHdpbGwgYmUgcGxhY2VkIGluIHRoYXQgcm93J3MgY2VsbC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJheSBvZiBkaWN0aW9uYXJpZXMgY29udGFpbmluZyBwcm9wZXJ0aWVzIHRvIGVhY2ggY29sdW1uLlxyXG4gICAgICogQXQgdGhlIHZlcnkgbGVhc3QsIGV2ZXJ5IGNvbHVtbiBtdXN0IGhhdmUgYSBcIkhlYWRlclwiIGFuZCBcImFjY2Vzc29yXCJcclxuICAgICAqIHByb3BlcnR5LiBUaGUgXCJIZWFkZXJcIiB3aWxsIGJlIHRoZSB0aXRsZSBvZiB0aGUgY29sdW1uIGFuZCB0aGUgXCJhY2Nlc3NvclwiXHJcbiAgICAgKiB3aWxsIGxpbmsgdGhhdCBjb2x1bW4gdG8gdGhlIGRhdGEgYXJyYXkgb2YgZGljdGlvbmFyaWVzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuXHJcbiAgICAgICAgICAgIENlbGw6IFByb3BUeXBlcy5TdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIGNvbHVtbidzIGxhYmVsXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBIZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIGNvcnJlc3BvbmRpbmcga2V5IHRoYXQgbGlua3NcclxuICAgICAgICAgICAgICogdGhlIGNvbHVtbiB0byB0aGUgZGF0YSBhcnJheS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRoZSBjb3JyZXNwb25kaW5nIGtleSB0aGF0IGxpbmtzXHJcbiAgICAgICAgICAgICAqIHRoZSBjb2x1bW4gdG8gdGhlIGRhdGEgYXJyYXkuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBGb290ZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICBhZ2dyZWdhdGVfZnVuYzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIFBpdm90OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgUGl2b3RWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIEV4cGFuZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE92ZXJyaWRlcyB0aGUgdGFibGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3ZlcmlkZXMgdGhlIHRhYmxlIG9wdGlvblxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPdmVyaWRlcyB0aGUgdGFibGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGhpZGUgYSBjb2x1bW5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNob3c6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEEgaGFyZGNvZGVkIHdpZHRoIGZvciB0aGUgY29sdW1uLiBUaGlzIG92ZXJpZGVzIGJvdGggbWluIGFuZCBtYXggd2lkdGggb3B0aW9uc1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQSBtaW5pbXVtIHdpZHRoIGZvciB0aGUgY29sdW1uIChkZWZhdWx0OiAxMDApXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDbGFzcyBuYW1lIGZvciB0aGUgY2VsbHMgb2YgdGhpcyBjb2x1bW4uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSW5saW5lIHN0eWxlIGZvciB0aGUgY2VsbHMgb2YgdGhpcyBjb2x1bW4uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDbGFzcyBuYW1lIGZvciB0aGUgaGVhZGVyIG9mIHRoaXMgY29sdW1uLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIElubGluZSBzdHlsZSBmb3IgdGhlIGhlYWRlciBvZiB0aGlzIGNvbHVtbi5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgICAgICAgICAgZm9vdGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgZm9vdGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgICAgICAgICBmaWx0ZXJBbGw6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgICAgICAgICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcblxyXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUdXJuIG9uIHBhZ2luYXRpb24uIFNldGluZyB0aGlzIHRvIHRydWUgd2lsbCBpbXByb3ZlIHBlcmZvcm1hbmNlXHJcbiAgICAgKiBvbiBsYXJnZXIgdGFibGVzLlxyXG4gICAgICovXHJcbiAgICBzaG93UGFnaW5hdGlvbjogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHBhZ2luYXRpb24gY29udHJvbHMgb24gdG9wIG9mIHRhYmxlIChkZWZhdWx0OiBmYWxzZSlcclxuICAgICAqL1xyXG4gICAgc2hvd1BhZ2luYXRpb25Ub3A6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBwYWdpbmF0aW9uIGNvbnRyb2xzIG9uIGJvdHRvbSBvZiB0YWJsZSAoZGVmYXVsdDogdHJ1ZSlcclxuICAgICAqL1xyXG4gICAgc2hvd1BhZ2luYXRpb25Cb3R0b206IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBvcHRpb25zIGRyb3Bkb3duIHRvIGVkaXQgcmVzdWx0cyBwZXIgcGFnZSB3aGVuIHBhZ2luYXRpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgc2hvd1BhZ2VTaXplT3B0aW9uczogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25zIGZvciBzaG93IHBhZ2Ugc2l6ZSB3aGVuIHBhZ2VpbmF0aW9uIGlzIGVuYWJsZWQuIChkZWZhdWx0OiBbNSwgMTAsIDIwLCAyNSwgNTAsIDEwMF0pXHJcbiAgICAgKi9cclxuICAgIHBhZ2VTaXplT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IHBhZ2Ugc2l6ZS4gKGRlZmF1bHQ6IDIwKVxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0UGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb250cm9scyB0aGUgbWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IC0gZGVmYXVsdCB3aWxsIGJlIFwicGFnZVNpemVcIlxyXG4gICAgICogTk9URTogaWYgeW91IHNldCBtaW5Sb3dzIHRvIDAgdGhlbiB5b3UgZ2V0IHJpZCBvZiBlbXB0eSBwYWRkaW5nIHJvd3MgQlVUIHlvdXIgdGFibGUgZm9ybWF0dGluZyB3aWxsIGFsc29cclxuICAgICAqIGxvb2sgc3RyYW5nZSB3aGVuIHRoZXJlIGFyZSBaRVJPIHJvd3MgaW4gdGhlIHRhYmxlLlxyXG4gICAgICovXHJcbiAgICBtaW5Sb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIHNob3dQYWdlSnVtcDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2U6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIGNvbGxhcHNlT25QYWdlQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICBjb2xsYXBzZU9uRGF0YUNoYW5nZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgZnJlZXplV2hlbkV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRhYmxlIGxldmVsIHNvcnRpbmcgKGRlZmF1bHQ6IHRydWUpLiBUaGlzIGNhbiBiZSBvdmVyaWRlZCBmb3Igc3BlY2lmaWMgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIG11bHRpU29ydDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUYWJsZSBsZXZlbCByZXNpemluZyAoZGVmYXVsdDogdHJ1ZSkuIFRoaXMgY2FuIGJlIG92ZXJpZGVkIGZvciBzcGVjaWZpYyBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGFibGUgbGV2ZWwgZmlsdGVyaW5nIChkZWZhdWx0OiBmYWxzZSkuIFRoaXMgY2FuIGJlIG92ZXJpZGVkIGZvciBzcGVjaWZpYyBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBmaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICBkZWZhdWx0U29ydERlc2M6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIGRlZmF1bHRTb3J0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG5cclxuICAgIGRlZmF1bHRGaWx0ZXJlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcblxyXG4gICAgZGVmYXVsdFJlc2l6ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG5cclxuICAgIGRlZmF1bHRFeHBhbmRlZDogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICBwaXZvdEJ5OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBjbGFzc25hbWUgXCItc3RyaXBlZFwiIGFuZC9vciBcIi1oaWdobGlnaHRcIiB0byBlbmFibGUgdGhlc2UgZmVhdHVyZXMuXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIElubGluZSB0YWJsZSBzdHlsZXNcclxuICAgICAqL1xyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgZXhwYW5kZXJEZWZhdWx0czogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgcmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBmaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG5cclxuICAgIHBpdm90RGVmYXVsdHM6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgcHJldmlvdXNUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIG5leHRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIGxvYWRpbmdUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIG5vRGF0YVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgcGFnZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgb2ZUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIHJvd3NUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIHBhZ2VKdW1wVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICByb3dzU2VsZWN0b3JUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9tIGNvbmRpdGlvbmFsIGNvbG9yIGZvcm1hdHRpbmcuIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGQzLnNjYWxlVGhyZXNob2xkKCkuXHJcbiAgICAgKlxyXG4gICAgICogRm9yIG1vcmUgaW5mbyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kMy9kMy1zY2FsZS9ibG9iL21hc3Rlci9SRUFETUUubWQjdGhyZXNob2xkLXNjYWxlc1xyXG4gICAgICovXHJcbiAgICBjb25kaXRpb25hbEZvcm1hdHRpbmc6IFByb3BUeXBlcy5zaGFwZSh7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkaXNjcmV0ZSB2YWx1ZXMgdG8gY3JlYXRlIGNvbmRpdGlvbmFsIGJ1Y2tldHMuIEZvciBOIHZhbHVlcyBOKzEgYnVja2V0cyBhcmUgY3JlYXRlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkb21haW46IFByb3BUeXBlcy5hcnJheSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gYXJyYXkgb2Ygc3R5bGVzIHRoYXQgd2lsbCBtYXAgdG8gdGhlIGRvbWFpbi4gSWYgTiBkb21haW4gdmFsdWVzIGFyZSBnaXZlbiwgdGhlbiB0aGVcclxuICAgICAgICAgKiByYW5nZSBtdXN0IGhhdmUgTisxIHZhbHVlcy4gTm90ZTogdGhpcyBtdXN0IGJlIGEgZGljdGlvbmFyeSB3aXRoIGNhbWVsQ2FzZSBjc3MgdmFsdWVzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJhbmdlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sdW1ucyB0aGF0IGRvIG5vdCBnZXQgdGhpcyBzdHlsZSBtdXN0IGJlIHByb3ZpZGVkIGluIGFuIG9wdGlvbmFsIGFycmF5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlnbm9yZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcbiAgICB9KSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHdoZW5ldmVyIGFueSBvZiB0aGVcclxuICAgICAqIHByb3BlcnRpZXMgY2hhbmdlXHJcbiAgICAgKi9cclxuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9