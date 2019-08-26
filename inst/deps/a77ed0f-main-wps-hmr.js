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
          var c = column; // Style Formatting

          c['getProps'] = conditionalFormat; // Number Formatting

          c['Cell'] = function (props) {
            return c.format !== undefined ? numeral(props.value).format(c.format) : props.value;
          }; // Aggregate functions in pivoting


          var agg_func_name = c["aggregate_func"];

          if (agg_func_name) {
            console.log(c["Header"] + c["aggregate_func"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3JlYWN0X3RhYmxlLy4vc3JjL2xpYi9jb21wb25lbnRzL0Rhc2hSZWFjdFRhYmxlLnJlYWN0LmpzIl0sIm5hbWVzIjpbIm51bWVyYWwiLCJyZXF1aXJlIiwiRGFzaFJlYWN0VGFibGUiLCJwcm9wcyIsImlkIiwiZGF0YSIsImNvbHVtbnMiLCJsb2FkaW5nIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1BhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplT3B0aW9ucyIsImRlZmF1bHRQYWdlU2l6ZSIsIm1pblJvd3MiLCJzaG93UGFnZUp1bXAiLCJjb2xsYXBzZU9uU29ydGluZ0NoYW5nZSIsImNvbGxhcHNlT25QYWdlQ2hhbmdlIiwiY29sbGFwc2VPbkRhdGFDaGFuZ2UiLCJmcmVlemVXaGVuRXhwYW5kZWQiLCJzb3J0YWJsZSIsIm11bHRpU29ydCIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJkZWZhdWx0U29ydERlc2MiLCJkZWZhdWx0U29ydGVkIiwiZGVmYXVsdEZpbHRlcmVkIiwiZGVmYXVsdFJlc2l6ZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJwaXZvdEJ5IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb25kaXRpb25hbEZvcm1hdHRpbmciLCJleHBhbmRlckRlZmF1bHRzIiwicGl2b3REZWZhdWx0cyIsInByZXZpb3VzVGV4dCIsIm5leHRUZXh0IiwibG9hZGluZ1RleHQiLCJub0RhdGFUZXh0IiwicGFnZVRleHQiLCJvZlRleHQiLCJyb3dzVGV4dCIsInBhZ2VKdW1wVGV4dCIsInJvd3NTZWxlY3RvclRleHQiLCJmb3JtYXQiLCJ0aHJlc2hvbGRTY2FsZUNhbGMiLCJkb21haW4iLCJyYW5nZSIsImNvbmRpdGlvbmFsRm9ybWF0Iiwic3RhdGUiLCJyb3dJbmZvIiwiY29sdW1uIiwiaWdub3JlIiwiYWNjZXNzb3IiLCJyb3ciLCJpbmNsdWRlcyIsInRkVmFsdWUiLCJjb25kaXRpb25hbF9jb2x1bW5zIiwiYyIsInVuZGVmaW5lZCIsInZhbHVlIiwiYWdnX2Z1bmNfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZXMiLCJyb3dzIiwiXyIsInJvdW5kIiwic3VtIiwibWVhbiIsImNvbXBhY3QiLCJsZW5ndGgiLCJwdXNoIiwiZmlsdGVyQW55IiwiQ29tcG9uZW50IiwiZmlsdGVyIiwiX2ZpbHRlcl92YWx1ZSIsImNvbnZlcnQiLCJzdHIiLCJ0b0xvY2FsZVN0cmluZyIsInRvTG93ZXJDYXNlIiwiZGVmYXVsdFByb3BzIiwid2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0Iiwic2hhcGUiLCJDZWxsIiwiU3RyaW5nIiwiSGVhZGVyIiwiRm9vdGVyIiwiYWdncmVnYXRlX2Z1bmMiLCJQaXZvdCIsIlBpdm90VmFsdWUiLCJFeHBhbmRlciIsImJvb2wiLCJzaG93IiwibnVtYmVyIiwibWluV2lkdGgiLCJoZWFkZXJDbGFzc05hbWUiLCJoZWFkZXJTdHlsZSIsImZvb3RlckNsYXNzTmFtZSIsImZvb3RlclN0eWxlIiwiZmlsdGVyQWxsIiwiYXJyYXkiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBckI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFZTUMsYzs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUFBLHdCQTBDRCxLQUFLQyxLQTFDSjtBQUFBLFVBRURDLEVBRkMsZUFFREEsRUFGQztBQUFBLFVBR0RDLElBSEMsZUFHREEsSUFIQztBQUFBLFVBSURDLE9BSkMsZUFJREEsT0FKQztBQUFBLFVBS0RDLE9BTEMsZUFLREEsT0FMQztBQUFBLFVBTURDLGNBTkMsZUFNREEsY0FOQztBQUFBLFVBT0RDLGlCQVBD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QUN3QjtBQWhRRyxDQUEzQixDIiwiZmlsZSI6ImE3N2VkMGYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgUmVhY3RUYWJsZSBmcm9tICdyZWFjdC10YWJsZSc7XHJcbmltcG9ydCBcInJlYWN0LXRhYmxlL3JlYWN0LXRhYmxlLmNzc1wiO1xyXG5pbXBvcnQgeyBpbmNsdWRlcyB9IGZyb20gJ3JhbWRhJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyB0aHJlc2hvbGRTY2FsZUNhbGMgfSBmcm9tICcuLi91dGlsL3NjYWxlcyc7XHJcblxyXG52YXIgbnVtZXJhbCA9IHJlcXVpcmUoJ251bWVyYWwnKTtcclxuXHJcbi8qKlxyXG4gKiBEYXNoUmVhY3RUYWJsZSBpcyBhIGRlY2FsYXJpdGl2ZSB2ZXJzaW9uIG9mIHJlYWN0LXRhYmxlLCBidWlsdCBmb3IgZGFzaC5cclxuICpcclxuICogQXQgYSBtaW5pbXVtLCBpdCBtdXN0IGhhdmUgYGRhdGFgIGFuZCBgY29sdW1uYCBwcm9wZXJ0aWVzLlxyXG4gKiBgZGF0YWAgbXVzdCBiZSBhIHVuaWZvcm0gbGlzdCBvZiBkaWN0cyB3aXRoIHRoZSBhcmJpdHJhcnkgYW1vdW50IG9mIGtleXMgcmVwcmVzZW50aW5nIHRoZVxyXG4gKiBjb2x1bW5zIGFuZCB2YWx1ZXMgcmVwcmVzZW50aW5nIHRoYXQgcm93J3MgZGF0YS4gVGhpcyBjYW4gYmUgZG9uZSB2ZXJ5IGVhc2lseVxyXG4gKiBpbiBwYW5kYXMgdXNpbmcgZGYudG9fanNvbihvcmllbnQ9J3JlY29yZHMnKS4gQXMgZm9yIGBjb2x1bW5zYCwgdGhpcyBpcyBhbHNvIGEgbGlzdFxyXG4gKiBvZiBkaWN0aW9uYXJpZXMsIGJ1dCBpdCBoYXMgYSBkZWZpbmVkIHNldCBvZiBwcm9wZXJ0aWVzLiBBdCB0aGUgdmVyeSBsZWFzdCwgaXQgbXVzdCBjb250YWluXHJcbiAqIGBIZWFkZXJgIGFuZCBgYWNjZXNzb3JgIHByb3BlcnRpZXMsIHJlZmVycmluZyB0byB0aGUgY29sdW1uJ3MgdGl0bGUgYW5kIGlkZW50aWZ5aW5nIGtleSBpblxyXG4gKiB0aGUgZGF0YSBwcm9wZXJ0eSwgcmVzcGVjdGl2ZWx5LiBDb2x1bW5zIGFsc28gaGF2ZSBtYW55IG90aGVyIHByb3BlcnRpZXMgdGhhdCBhcmUgcmVmZXJlbmNlZFxyXG4gKiBib3RoIGluIHRoZSBkb2NzdHJpbmcgYXMgd2VsbCBhcyBpbiB0aGUgcmVhY3QtdGFibGUgZG9jcy5cclxuICovXHJcbmNsYXNzIERhc2hSZWFjdFRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgY29sdW1ucyxcclxuICAgICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgICAgc2hvd1BhZ2luYXRpb24sXHJcbiAgICAgICAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxyXG4gICAgICAgICAgICBzaG93UGFnaW5hdGlvbkJvdHRvbSxcclxuICAgICAgICAgICAgc2hvd1BhZ2VTaXplT3B0aW9ucyxcclxuICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zLFxyXG4gICAgICAgICAgICBkZWZhdWx0UGFnZVNpemUsXHJcbiAgICAgICAgICAgIG1pblJvd3MsXHJcbiAgICAgICAgICAgIHNob3dQYWdlSnVtcCxcclxuICAgICAgICAgICAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlT25QYWdlQ2hhbmdlLFxyXG4gICAgICAgICAgICBjb2xsYXBzZU9uRGF0YUNoYW5nZSxcclxuICAgICAgICAgICAgZnJlZXplV2hlbkV4cGFuZGVkLFxyXG4gICAgICAgICAgICBzb3J0YWJsZSxcclxuICAgICAgICAgICAgbXVsdGlTb3J0LFxyXG4gICAgICAgICAgICByZXNpemFibGUsXHJcbiAgICAgICAgICAgIGZpbHRlcmFibGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHRTb3J0RGVzYyxcclxuICAgICAgICAgICAgZGVmYXVsdFNvcnRlZCxcclxuICAgICAgICAgICAgZGVmYXVsdEZpbHRlcmVkLFxyXG4gICAgICAgICAgICBkZWZhdWx0UmVzaXplZCxcclxuICAgICAgICAgICAgZGVmYXVsdEV4cGFuZGVkLFxyXG4gICAgICAgICAgICBwaXZvdEJ5LFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICBjb25kaXRpb25hbEZvcm1hdHRpbmcsXHJcbiAgICAgICAgICAgIGV4cGFuZGVyRGVmYXVsdHMsXHJcbiAgICAgICAgICAgIHBpdm90RGVmYXVsdHMsXHJcbiAgICAgICAgICAgIHByZXZpb3VzVGV4dCxcclxuICAgICAgICAgICAgbmV4dFRleHQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdUZXh0LFxyXG4gICAgICAgICAgICBub0RhdGFUZXh0LFxyXG4gICAgICAgICAgICBwYWdlVGV4dCxcclxuICAgICAgICAgICAgb2ZUZXh0LFxyXG4gICAgICAgICAgICByb3dzVGV4dCxcclxuICAgICAgICAgICAgcGFnZUp1bXBUZXh0LFxyXG4gICAgICAgICAgICByb3dzU2VsZWN0b3JUZXh0XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBmb3JtYXQgPSB0aHJlc2hvbGRTY2FsZUNhbGMoY29uZGl0aW9uYWxGb3JtYXR0aW5nLmRvbWFpbiwgY29uZGl0aW9uYWxGb3JtYXR0aW5nLnJhbmdlKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uYWxGb3JtYXQgPSAoc3RhdGUsIHJvd0luZm8sIGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWdub3JlID0gY29uZGl0aW9uYWxGb3JtYXR0aW5nLmlnbm9yZSA/IGNvbmRpdGlvbmFsRm9ybWF0dGluZy5pZ25vcmUgOiB7fTtcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc29yID0gY29sdW1uLmlkO1xyXG4gICAgICAgICAgICBpZiAocm93SW5mbyAmJiByb3dJbmZvLnJvdyAmJiAhaW5jbHVkZXMoYWNjZXNzb3IsIGlnbm9yZSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZFZhbHVlID0gcm93SW5mby5yb3dbYWNjZXNzb3JdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogZm9ybWF0KHRkVmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGNvbmRpdGlvbmFsX2NvbHVtbnMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGNvbHVtbiBvZiBjb2x1bW5zKXtcclxuICAgICAgICAgICAgbGV0IGMgPSBjb2x1bW47XHJcbiAgICAgICAgICAgIC8vIFN0eWxlIEZvcm1hdHRpbmdcclxuICAgICAgICAgICAgY1snZ2V0UHJvcHMnXSA9IGNvbmRpdGlvbmFsRm9ybWF0O1xyXG4gICAgICAgICAgICAvLyBOdW1iZXIgRm9ybWF0dGluZ1xyXG4gICAgICAgICAgICBjWydDZWxsJ10gPSBwcm9wcyA9PiBjLmZvcm1hdCAhPT0gdW5kZWZpbmVkID8gbnVtZXJhbChwcm9wcy52YWx1ZSkuZm9ybWF0KGMuZm9ybWF0KSA6IHByb3BzLnZhbHVlO1xyXG4gICAgICAgICAgICAvLyBBZ2dyZWdhdGUgZnVuY3Rpb25zIGluIHBpdm90aW5nXHJcbiAgICAgICAgICAgIGxldCBhZ2dfZnVuY19uYW1lID0gY1tcImFnZ3JlZ2F0ZV9mdW5jXCJdO1xyXG4gICAgICAgICAgICBpZihhZ2dfZnVuY19uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjW1wiSGVhZGVyXCJdICsgY1tcImFnZ3JlZ2F0ZV9mdW5jXCJdKVxyXG4gICAgICAgICAgICAgICAgaWYoYWdnX2Z1bmNfbmFtZSA9PT0gXCJzdW1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgY1tcImFnZ3JlZ2F0ZVwiXSA9ICh2YWx1ZXMsIHJvd3MpID0+IF8ucm91bmQoXy5zdW0odmFsdWVzKSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhZ2dfZnVuY19uYW1lID09PSBcIm1lYW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNbXCJhZ2dyZWdhdGVcIl0gPSAodmFsdWVzLCByb3dzKSA9PiBfLnJvdW5kKF8ubWVhbih2YWx1ZXMpKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFnZ19mdW5jX25hbWUgPT09IFwibmFuc3VtXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjW1wiYWdncmVnYXRlXCJdID0gKHZhbHVlcywgcm93cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBfLmNvbXBhY3QodmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWx1ZXMubGVuZ3RoICE9PSAwKSA/IF8ucm91bmQoXy5zdW0odmFsdWVzKSkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFnZ19mdW5jX25hbWUgPT09IFwibmFubWVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY1tcImFnZ3JlZ2F0ZVwiXSA9ICh2YWx1ZXMsIHJvd3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gXy5jb21wYWN0KHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsdWVzLmxlbmd0aCAhPT0gMCkgPyBfLnJvdW5kKF8ubWVhbih2YWx1ZXMpKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uZGl0aW9uYWxfY29sdW1ucy5wdXNoKGMpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxSZWFjdFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb25kaXRpb25hbF9jb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhZ2luYXRpb249e3Nob3dQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQYWdpbmF0aW9uVG9wPXtzaG93UGFnaW5hdGlvblRvcH1cclxuICAgICAgICAgICAgICAgICAgICBzaG93UGFnaW5hdGlvbkJvdHRvbT17c2hvd1BhZ2luYXRpb25Cb3R0b219XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhZ2VTaXplT3B0aW9ucz17c2hvd1BhZ2VTaXplT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e3BhZ2VTaXplT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZVNpemU9e2RlZmF1bHRQYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICBtaW5Sb3dzPXttaW5Sb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQYWdlSnVtcD17c2hvd1BhZ2VKdW1wfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlT25Tb3J0aW5nQ2hhbmdlPXtjb2xsYXBzZU9uU29ydGluZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZU9uUGFnZUNoYW5nZT17Y29sbGFwc2VPblBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VPbkRhdGFDaGFuZ2U9e2NvbGxhcHNlT25EYXRhQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyZWV6ZVdoZW5FeHBhbmRlZD17ZnJlZXplV2hlbkV4cGFuZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlPXtzb3J0YWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBtdWx0aVNvcnQ9e211bHRpU29ydH1cclxuICAgICAgICAgICAgICAgICAgICByZXNpemFibGU9e3Jlc2l6YWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlPXtmaWx0ZXJhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0RGVzYz17ZGVmYXVsdFNvcnREZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0ZWQ9e2RlZmF1bHRTb3J0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEZpbHRlcmVkPXtkZWZhdWx0RmlsdGVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFJlc2l6ZWQ9e2RlZmF1bHRSZXNpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRFeHBhbmRlZD17ZGVmYXVsdEV4cGFuZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHBpdm90Qnk9e3Bpdm90Qnl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVyRGVmYXVsdHM9e2V4cGFuZGVyRGVmYXVsdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcGl2b3REZWZhdWx0cz17cGl2b3REZWZhdWx0c31cclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RleHQ9e3ByZXZpb3VzVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBuZXh0VGV4dD17bmV4dFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2xvYWRpbmdUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIG5vRGF0YVRleHQ9e25vRGF0YVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVRleHQ9e3BhZ2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9mVGV4dD17b2ZUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NUZXh0PXtyb3dzVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlSnVtcFRleHQ9e3BhZ2VKdW1wVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICByb3dzU2VsZWN0b3JUZXh0PXtyb3dzU2VsZWN0b3JUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRGaWx0ZXJNZXRob2Q9e2ZpbHRlckFueX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3RUYWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaFJlYWN0VGFibGVcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgY3VzdG9tIGZpbHRlciB0aGF0IGlnbm9yZXMgY2hhcmFjdGVyIGNhc2UsIG1peGVkIHR5cGVzLCBhbmQgb3JkZXJcclxuICovXHJcbmNvbnN0IGZpbHRlckFueSA9IChmaWx0ZXIsIHJvdykgPT4ge1xyXG4gICAgY29uc3QgX2ZpbHRlcl92YWx1ZSA9IGNvbnZlcnQoZmlsdGVyLnZhbHVlKTtcclxuICAgIHJldHVybiByb3dbZmlsdGVyLmlkXSAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICBpbmNsdWRlcyhfZmlsdGVyX3ZhbHVlLCBjb252ZXJ0KHJvd1tmaWx0ZXIuaWRdKSkgOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQ29udmVydCB2YWx1ZSB0byBhIGNvbXBhcmFibGUgc3RyaW5nIHJlZ2FyZGxlc3Mgb2YgZHR5cGUgYW5kIGNhc2VcclxuICovXHJcbmNvbnN0IGNvbnZlcnQgPSAoc3RyKSA9PiB7XHJcbiAgICByZXR1cm4gc3RyLnRvTG9jYWxlU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxyXG59O1xyXG5cclxuXHJcbkRhc2hSZWFjdFRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2hvd1BhZ2luYXRpb246IHRydWUsXHJcbiAgICBzaG93UGFnaW5hdGlvblRvcDogZmFsc2UsXHJcbiAgICBzaG93UGFnaW5hdGlvbkJvdHRvbTogdHJ1ZSxcclxuICAgIHNob3dQYWdlU2l6ZU9wdGlvbnM6IHRydWUsXHJcbiAgICBwYWdlU2l6ZU9wdGlvbnM6IFs1LCAxMCwgMjAsIDI1LCA1MCwgMTAwXSxcclxuICAgIGRlZmF1bHRQYWdlU2l6ZTogMjAsXHJcbiAgICBzaG93UGFnZUp1bXA6IHRydWUsXHJcbiAgICBjb2xsYXBzZU9uU29ydGluZ0NoYW5nZTogdHJ1ZSxcclxuICAgIGNvbGxhcHNlT25QYWdlQ2hhbmdlOiB0cnVlLFxyXG4gICAgY29sbGFwc2VPbkRhdGFDaGFuZ2U6IHRydWUsXHJcbiAgICBmcmVlemVXaGVuRXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgICBtdWx0aVNvcnQ6IHRydWUsXHJcbiAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgIGRlZmF1bHRTb3J0RGVzYzogZmFsc2UsXHJcbiAgICBkZWZhdWx0U29ydGVkOiBbXSxcclxuICAgIGRlZmF1bHRGaWx0ZXJlZDogW10sXHJcbiAgICBkZWZhdWx0UmVzaXplZDogW10sXHJcbiAgICBkZWZhdWx0RXhwYW5kZWQ6IHt9LFxyXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgc3R5bGU6IHt9LFxyXG4gICAgZXhwYW5kZXJEZWZhdWx0czoge1xyXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxyXG4gICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdpZHRoOiAzNVxyXG4gICAgfSxcclxuICAgIHBpdm90RGVmYXVsdHM6IHt9LFxyXG4gICAgcHJldmlvdXNUZXh0OiBcIlByZXZpb3VzXCIsXHJcbiAgICBuZXh0VGV4dDogXCJOZXh0XCIsXHJcbiAgICBsb2FkaW5nVGV4dDogXCJMb2FkaW5nLi4uXCIsXHJcbiAgICBub0RhdGFUZXh0OiBcIk5vIHJvd3MgZm91bmRcIixcclxuICAgIHBhZ2VUZXh0OiBcIlBhZ2VcIixcclxuICAgIG9mVGV4dDogXCJvZlwiLFxyXG4gICAgcm93c1RleHQ6IFwicm93c1wiLFxyXG4gICAgcGFnZUp1bXBUZXh0OiBcImp1bXAgdG8gcGFnZVwiLFxyXG4gICAgcm93c1NlbGVjdG9yVGV4dDogXCJyb3dzIHBlciBwYWdlXCJcclxufTtcclxuXHJcbkRhc2hSZWFjdFRhYmxlLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3NcclxuICAgICAqL1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQW4gYXJyYXkgb2YgZGljdGlvbmFyaWVzIHdpdGggZWFjaCBkaWN0aW9uYXJ5IGNvcnJlc3BvbmRpbmdcclxuICAgICAqIHRvIGEgcm93LiBUaGUga2V5cyB3aWxsIHJlZmVyZSB0byBjb2x1bW5zIHdoaWxlIHRoZSB2YWx1ZXMgcmVmZXJcclxuICAgICAqIHRvIHRoZSBkYXRhIHRoYXQgd2lsbCBiZSBwbGFjZWQgaW4gdGhhdCByb3cncyBjZWxsLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcmF5IG9mIGRpY3Rpb25hcmllcyBjb250YWluaW5nIHByb3BlcnRpZXMgdG8gZWFjaCBjb2x1bW4uXHJcbiAgICAgKiBBdCB0aGUgdmVyeSBsZWFzdCwgZXZlcnkgY29sdW1uIG11c3QgaGF2ZSBhIFwiSGVhZGVyXCIgYW5kIFwiYWNjZXNzb3JcIlxyXG4gICAgICogcHJvcGVydHkuIFRoZSBcIkhlYWRlclwiIHdpbGwgYmUgdGhlIHRpdGxlIG9mIHRoZSBjb2x1bW4gYW5kIHRoZSBcImFjY2Vzc29yXCJcclxuICAgICAqIHdpbGwgbGluayB0aGF0IGNvbHVtbiB0byB0aGUgZGF0YSBhcnJheSBvZiBkaWN0aW9uYXJpZXMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cclxuICAgICAgICAgICAgQ2VsbDogUHJvcFR5cGVzLlN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgY29sdW1uJ3MgbGFiZWxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgY29ycmVzcG9uZGluZyBrZXkgdGhhdCBsaW5rc1xyXG4gICAgICAgICAgICAgKiB0aGUgY29sdW1uIHRvIHRoZSBkYXRhIGFycmF5LlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgYWNjZXNzb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIGNvcnJlc3BvbmRpbmcga2V5IHRoYXQgbGlua3NcclxuICAgICAgICAgICAgICogdGhlIGNvbHVtbiB0byB0aGUgZGF0YSBhcnJheS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEZvb3RlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZV9mdW5jOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgUGl2b3Q6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICBQaXZvdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgICAgICAgICAgRXhwYW5kZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3ZlcnJpZGVzIHRoZSB0YWJsZSBvcHRpb25cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPdmVyaWRlcyB0aGUgdGFibGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE92ZXJpZGVzIHRoZSB0YWJsZSBvcHRpb25cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGZpbHRlcmFibGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFVzZWQgdG8gaGlkZSBhIGNvbHVtblxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQSBoYXJkY29kZWQgd2lkdGggZm9yIHRoZSBjb2x1bW4uIFRoaXMgb3ZlcmlkZXMgYm90aCBtaW4gYW5kIG1heCB3aWR0aCBvcHRpb25zXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBIG1pbmltdW0gd2lkdGggZm9yIHRoZSBjb2x1bW4gKGRlZmF1bHQ6IDEwMClcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENsYXNzIG5hbWUgZm9yIHRoZSBjZWxscyBvZiB0aGlzIGNvbHVtbi5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbmxpbmUgc3R5bGUgZm9yIHRoZSBjZWxscyBvZiB0aGlzIGNvbHVtbi5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENsYXNzIG5hbWUgZm9yIHRoZSBoZWFkZXIgb2YgdGhpcyBjb2x1bW4uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSW5saW5lIHN0eWxlIGZvciB0aGUgaGVhZGVyIG9mIHRoaXMgY29sdW1uLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaGVhZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcblxyXG4gICAgICAgICAgICBmb290ZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgICAgICAgICBmb290ZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAgICAgICAgIGZpbHRlckFsbDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgICAgICAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgICAgICB9KVxyXG4gICAgKSxcclxuXHJcbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFR1cm4gb24gcGFnaW5hdGlvbi4gU2V0aW5nIHRoaXMgdG8gdHJ1ZSB3aWxsIGltcHJvdmUgcGVyZm9ybWFuY2VcclxuICAgICAqIG9uIGxhcmdlciB0YWJsZXMuXHJcbiAgICAgKi9cclxuICAgIHNob3dQYWdpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgcGFnaW5hdGlvbiBjb250cm9scyBvbiB0b3Agb2YgdGFibGUgKGRlZmF1bHQ6IGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzaG93UGFnaW5hdGlvblRvcDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHBhZ2luYXRpb24gY29udHJvbHMgb24gYm90dG9tIG9mIHRhYmxlIChkZWZhdWx0OiB0cnVlKVxyXG4gICAgICovXHJcbiAgICBzaG93UGFnaW5hdGlvbkJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IG9wdGlvbnMgZHJvcGRvd24gdG8gZWRpdCByZXN1bHRzIHBlciBwYWdlIHdoZW4gcGFnaW5hdGlvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBzaG93UGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbnMgZm9yIHNob3cgcGFnZSBzaXplIHdoZW4gcGFnZWluYXRpb24gaXMgZW5hYmxlZC4gKGRlZmF1bHQ6IFs1LCAxMCwgMjAsIDI1LCA1MCwgMTAwXSlcclxuICAgICAqL1xyXG4gICAgcGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgcGFnZSBzaXplLiAoZGVmYXVsdDogMjApXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRQYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnRyb2xzIHRoZSBtaW5pbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgLSBkZWZhdWx0IHdpbGwgYmUgXCJwYWdlU2l6ZVwiXHJcbiAgICAgKiBOT1RFOiBpZiB5b3Ugc2V0IG1pblJvd3MgdG8gMCB0aGVuIHlvdSBnZXQgcmlkIG9mIGVtcHR5IHBhZGRpbmcgcm93cyBCVVQgeW91ciB0YWJsZSBmb3JtYXR0aW5nIHdpbGwgYWxzb1xyXG4gICAgICogbG9vayBzdHJhbmdlIHdoZW4gdGhlcmUgYXJlIFpFUk8gcm93cyBpbiB0aGUgdGFibGUuXHJcbiAgICAgKi9cclxuICAgIG1pblJvd3M6IFByb3BUeXBlcy5udW1iZXIsXHJcblxyXG4gICAgc2hvd1BhZ2VKdW1wOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICBjb2xsYXBzZU9uU29ydGluZ0NoYW5nZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgY29sbGFwc2VPblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICBmcmVlemVXaGVuRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGFibGUgbGV2ZWwgc29ydGluZyAoZGVmYXVsdDogdHJ1ZSkuIFRoaXMgY2FuIGJlIG92ZXJpZGVkIGZvciBzcGVjaWZpYyBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgbXVsdGlTb3J0OiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRhYmxlIGxldmVsIHJlc2l6aW5nIChkZWZhdWx0OiB0cnVlKS4gVGhpcyBjYW4gYmUgb3ZlcmlkZWQgZm9yIHNwZWNpZmljIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIHJlc2l6YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUYWJsZSBsZXZlbCBmaWx0ZXJpbmcgKGRlZmF1bHQ6IGZhbHNlKS4gVGhpcyBjYW4gYmUgb3ZlcmlkZWQgZm9yIHNwZWNpZmljIGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIGZpbHRlcmFibGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIGRlZmF1bHRTb3J0RGVzYzogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgZGVmYXVsdFNvcnRlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcblxyXG4gICAgZGVmYXVsdEZpbHRlcmVkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxuXHJcbiAgICBkZWZhdWx0UmVzaXplZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcblxyXG4gICAgZGVmYXVsdEV4cGFuZGVkOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cclxuICAgIHBpdm90Qnk6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNsYXNzbmFtZSBcIi1zdHJpcGVkXCIgYW5kL29yIFwiLWhpZ2hsaWdodFwiIHRvIGVuYWJsZSB0aGVzZSBmZWF0dXJlcy5cclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5saW5lIHRhYmxlIHN0eWxlc1xyXG4gICAgICovXHJcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICBleHBhbmRlckRlZmF1bHRzOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIGZpbHRlcmFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgfSksXHJcblxyXG4gICAgcGl2b3REZWZhdWx0czogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICBwcmV2aW91c1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgbmV4dFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgbG9hZGluZ1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgbm9EYXRhVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICBwYWdlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICBvZlRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgcm93c1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgcGFnZUp1bXBUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIHJvd3NTZWxlY3RvclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdXN0b20gY29uZGl0aW9uYWwgY29sb3IgZm9ybWF0dGluZy4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgZDMuc2NhbGVUaHJlc2hvbGQoKS5cclxuICAgICAqXHJcbiAgICAgKiBGb3IgbW9yZSBpbmZvIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2QzL2QzLXNjYWxlL2Jsb2IvbWFzdGVyL1JFQURNRS5tZCN0aHJlc2hvbGQtc2NhbGVzXHJcbiAgICAgKi9cclxuICAgIGNvbmRpdGlvbmFsRm9ybWF0dGluZzogUHJvcFR5cGVzLnNoYXBlKHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGRpc2NyZXRlIHZhbHVlcyB0byBjcmVhdGUgY29uZGl0aW9uYWwgYnVja2V0cy4gRm9yIE4gdmFsdWVzIE4rMSBidWNrZXRzIGFyZSBjcmVhdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRvbWFpbjogUHJvcFR5cGVzLmFycmF5LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHlsZXMgdGhhdCB3aWxsIG1hcCB0byB0aGUgZG9tYWluLiBJZiBOIGRvbWFpbiB2YWx1ZXMgYXJlIGdpdmVuLCB0aGVuIHRoZVxyXG4gICAgICAgICAqIHJhbmdlIG11c3QgaGF2ZSBOKzEgdmFsdWVzLiBOb3RlOiB0aGlzIG11c3QgYmUgYSBkaWN0aW9uYXJ5IHdpdGggY2FtZWxDYXNlIGNzcyB2YWx1ZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmFuZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb2x1bW5zIHRoYXQgZG8gbm90IGdldCB0aGlzIHN0eWxlIG11c3QgYmUgcHJvdmlkZWQgaW4gYW4gb3B0aW9uYWwgYXJyYXkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWdub3JlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgYW55IG9mIHRoZVxyXG4gICAgICogcHJvcGVydGllcyBjaGFuZ2VcclxuICAgICAqL1xyXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=