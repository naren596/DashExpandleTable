import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import "react-table/react-table.css";
import { includes } from 'ramda';
import _ from 'lodash'
import { thresholdScaleCalc } from '../util/scales';

var numeral = require('numeral');

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
class DashReactTable extends Component {
    render() {
        const {
            id,
            data,
            columns,
            loading,
            showPagination,
            showPaginationTop,
            showPaginationBottom,
            showPageSizeOptions,
            pageSizeOptions,
            defaultPageSize,
            minRows,
            showPageJump,
            collapseOnSortingChange,
            collapseOnPageChange,
            collapseOnDataChange,
            freezeWhenExpanded,
            sortable,
            multiSort,
            resizable,
            filterable,
            defaultSortDesc,
            defaultSorted,
            defaultFiltered,
            defaultResized,
            defaultExpanded,
            pivotBy,
            className,
            style,
            conditionalFormatting,
            expanderDefaults,
            pivotDefaults,
            previousText,
            nextText,
            loadingText,
            noDataText,
            pageText,
            ofText,
            rowsText,
            pageJumpText,
            rowsSelectorText,
            pivotFunc,
        } = this.props;

        let format = thresholdScaleCalc(conditionalFormatting.domain, conditionalFormatting.range);

        const conditionalFormat = (state, rowInfo, column) => {
            let ignore = conditionalFormatting.ignore ? conditionalFormatting.ignore : {};
            let accessor = column.id;
            if (rowInfo && rowInfo.row && !includes(accessor, ignore)) {
                let tdValue = rowInfo.row[accessor];
                return {
                    style: format(tdValue)
                };
            } else {
                return {};
            }
        };

        let conditional_columns = [];
        for(let column of columns){
            let c = column;
            // Style Formatting
            c['getProps'] = conditionalFormat;
            // Number Formatting
            c['Cell'] = props => c.format !== undefined ? numeral(props.value).format(c.format) : props.value;
            // Aggregate functions in pivoting
            let agg_func_name = c["aggfunc"];
            if (pivotFunc) {
                c["aggregate"] = (values, rows) => _.round(_.sum(values));
            }
            // if(agg_func_name) {
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
        }


        return (
            <div id={id}>
                <ReactTable
                    data={data}
                    columns={conditional_columns}
                    loading={loading}
                    showPagination={showPagination}
                    showPaginationTop={showPaginationTop}
                    showPaginationBottom={showPaginationBottom}
                    showPageSizeOptions={showPageSizeOptions}
                    pageSizeOptions={pageSizeOptions}
                    defaultPageSize={defaultPageSize}
                    minRows={minRows}
                    showPageJump={showPageJump}
                    collapseOnSortingChange={collapseOnSortingChange}
                    collapseOnPageChange={collapseOnPageChange}
                    collapseOnDataChange={collapseOnDataChange}
                    freezeWhenExpanded={freezeWhenExpanded}
                    sortable={sortable}
                    multiSort={multiSort}
                    resizable={resizable}
                    filterable={filterable}
                    defaultSortDesc={defaultSortDesc}
                    defaultSorted={defaultSorted}
                    defaultFiltered={defaultFiltered}
                    defaultResized={defaultResized}
                    defaultExpanded={defaultExpanded}
                    pivotBy={pivotBy}
                    className={className}
                    style={style}
                    expanderDefaults={expanderDefaults}
                    pivotDefaults={pivotDefaults}
                    previousText={previousText}
                    nextText={nextText}
                    loadingText={loadingText}
                    noDataText={noDataText}
                    pageText={pageText}
                    ofText={ofText}
                    rowsText={rowsText}
                    pageJumpText={pageJumpText}
                    rowsSelectorText={rowsSelectorText}
                    defaultFilterMethod={filterAny}
                >
                </ReactTable>
            </div>
        );
    }
}

/**
 * Create custom filter that ignores character case, mixed types, and order
 */
const filterAny = (filter, row) => {
    const _filter_value = convert(filter.value);
    return row[filter.id] !== undefined ?
        includes(_filter_value, convert(row[filter.id])) : true
};

/**
 * Convert value to a comparable string regardless of dtype and case
 */
const convert = (str) => {
    return str.toLocaleString().toLowerCase()
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
    id: PropTypes.string,

    /**
     *
     * An array of dictionaries with each dictionary corresponding
     * to a row. The keys will refere to columns while the values refer
     * to the data that will be placed in that row's cell.
     *
     */
    data: PropTypes.arrayOf(PropTypes.object),

    /**
     * An aray of dictionaries containing properties to each column.
     * At the very least, every column must have a "Header" and "accessor"
     * property. The "Header" will be the title of the column and the "accessor"
     * will link that column to the data array of dictionaries.
     *
     */
    columns: PropTypes.arrayOf(
        PropTypes.shape({

            Cell: PropTypes.String,

            /**
             * The column's label
             */
            Header: PropTypes.string,

            /**
             * The corresponding key that links
             * the column to the data array.
             */
            accessor: PropTypes.string,

            /**
             * The corresponding key that links
             * the column to the data array.
             */
            Footer: PropTypes.string,

            aggregate: PropTypes.func,

            aggfunc: PropTypes.string,

            Pivot: PropTypes.string,

            PivotValue: PropTypes.string,

            Expander: PropTypes.string,

            /**
             * Overrides the table option
             */
            sortable: PropTypes.bool,

            /**
             * Overides the table option
             */
            resizable: PropTypes.bool,

            /**
             * Overides the table option
             */
            filterable: PropTypes.bool,

            /**
             * Used to hide a column
             */
            show: PropTypes.bool,

            /**
             * A hardcoded width for the column. This overides both min and max width options
             */
            width: PropTypes.number,

            /**
             * A minimum width for the column (default: 100)
             */
            minWidth: PropTypes.number,

            /**
             * Class name for the cells of this column.
             */
            className: PropTypes.string,

            /**
             * Inline style for the cells of this column.
             */
            style: PropTypes.object,

            /**
             * Class name for the header of this column.
             */
            headerClassName: PropTypes.string,

            /**
             * Inline style for the header of this column.
             */
            headerStyle: PropTypes.object,

            footerClassName: PropTypes.string,

            footerStyle: PropTypes.object,

            filterAll: PropTypes.bool,

            format: PropTypes.string
        })
    ),

    loading: PropTypes.bool,

    /**
     * Turn on pagination. Seting this to true will improve performance
     * on larger tables.
     */
    showPagination: PropTypes.bool,

    /**
     * Show pagination controls on top of table (default: false)
     */
    showPaginationTop: PropTypes.bool,

    /**
     * Show pagination controls on bottom of table (default: true)
     */
    showPaginationBottom: PropTypes.bool,

    /**
     * Show options dropdown to edit results per page when pagination is enabled.
     */
    showPageSizeOptions: PropTypes.bool,

    /**
     * Options for show page size when pageination is enabled. (default: [5, 10, 20, 25, 50, 100])
     */
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

    /**
     * Default page size. (default: 20)
     */
    defaultPageSize: PropTypes.number,

    /**
     * controls the minimum number of rows to display - default will be "pageSize"
     * NOTE: if you set minRows to 0 then you get rid of empty padding rows BUT your table formatting will also
     * look strange when there are ZERO rows in the table.
     */
    minRows: PropTypes.number,

    showPageJump: PropTypes.bool,

    collapseOnSortingChange: PropTypes.bool,

    collapseOnPageChange: PropTypes.bool,

    collapseOnDataChange: PropTypes.bool,

    freezeWhenExpanded: PropTypes.bool,

    /**
     * Table level sorting (default: true). This can be overided for specific columns.
     */
    sortable: PropTypes.bool,

    multiSort: PropTypes.bool,

    /**
     * Table level resizing (default: true). This can be overided for specific columns.
     */
    resizable: PropTypes.bool,

    /**
     * Table level filtering (default: false). This can be overided for specific columns.
     */
    filterable: PropTypes.bool,

    defaultSortDesc: PropTypes.bool,

    defaultSorted: PropTypes.arrayOf(PropTypes.string),

    defaultFiltered: PropTypes.arrayOf(PropTypes.string),

    defaultResized: PropTypes.arrayOf(PropTypes.string),

    defaultExpanded: PropTypes.object,

    pivotBy: PropTypes.arrayOf(PropTypes.string),

    /**
     * Add classname "-striped" and/or "-highlight" to enable these features.
     */
    className: PropTypes.string,

    /**
     * Inline table styles
     */
    style: PropTypes.object,

    expanderDefaults: PropTypes.shape({
        sortable: PropTypes.bool,
        resizable: PropTypes.bool,
        filterable: PropTypes.bool,
        width: PropTypes.number,
    }),

    pivotDefaults: PropTypes.object,

    previousText: PropTypes.string,

    nextText: PropTypes.string,

    loadingText: PropTypes.string,

    noDataText: PropTypes.string,

    pageText: PropTypes.string,

    ofText: PropTypes.string,

    rowsText: PropTypes.string,

    pageJumpText: PropTypes.string,

    rowsSelectorText: PropTypes.string,

    /**
     * Custom conditional color formatting. Currently only supports d3.scaleThreshold().
     *
     * For more info See: https://github.com/d3/d3-scale/blob/master/README.md#threshold-scales
     */
    conditionalFormatting: PropTypes.shape({

        /**
         * The discrete values to create conditional buckets. For N values N+1 buckets are created.
         */
        domain: PropTypes.array,

        /**
         * An array of styles that will map to the domain. If N domain values are given, then the
         * range must have N+1 values. Note: this must be a dictionary with camelCase css values.
         */
        range: PropTypes.arrayOf(PropTypes.object),

        /**
         * Columns that do not get this style must be provided in an optional array.
         */
        ignore: PropTypes.arrayOf(PropTypes.string),
    }),

    pivotFunc: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};

export default DashReactTable