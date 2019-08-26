# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashReactTable(Component):
    """A DashReactTable component.
DashReactTable is a decalaritive version of react-table, built for dash.

At a minimum, it must have `data` and `column` properties.
`data` must be a uniform list of dicts with the arbitrary amount of keys representing the
columns and values representing that row's data. This can be done very easily
in pandas using df.to_json(orient='records'). As for `columns`, this is also a list
of dictionaries, but it has a defined set of properties. At the very least, it must contain
`Header` and `accessor` properties, referring to the column's title and identifying key in
the data property, respectively. Columns also have many other properties that are referenced
both in the docstring as well as in the react-table docs.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- data (list of dicts; optional): An array of dictionaries with each dictionary corresponding
to a row. The keys will refere to columns while the values refer
to the data that will be placed in that row's cell.
- columns (dict; optional): An aray of dictionaries containing properties to each column.
At the very least, every column must have a "Header" and "accessor"
property. The "Header" will be the title of the column and the "accessor"
will link that column to the data array of dictionaries. columns has the following type: list of dicts containing keys 'Cell', 'Header', 'accessor', 'Footer', 'aggregate', 'aggfunc', 'Pivot', 'PivotValue', 'Expander', 'sortable', 'resizable', 'filterable', 'show', 'width', 'minWidth', 'className', 'style', 'headerClassName', 'headerStyle', 'footerClassName', 'footerStyle', 'filterAll', 'format'.
Those keys have the following types:
  - Cell (optional)
  - Header (string; optional): The column's label
  - accessor (string; optional): The corresponding key that links
the column to the data array.
  - Footer (string; optional): The corresponding key that links
the column to the data array.
  - aggregate (optional)
  - aggfunc (string; optional)
  - Pivot (string; optional)
  - PivotValue (string; optional)
  - Expander (string; optional)
  - sortable (boolean; optional): Overrides the table option
  - resizable (boolean; optional): Overides the table option
  - filterable (boolean; optional): Overides the table option
  - show (boolean; optional): Used to hide a column
  - width (number; optional): A hardcoded width for the column. This overides both min and max width options
  - minWidth (number; optional): A minimum width for the column (default: 100)
  - className (string; optional): Class name for the cells of this column.
  - style (dict; optional): Inline style for the cells of this column.
  - headerClassName (string; optional): Class name for the header of this column.
  - headerStyle (dict; optional): Inline style for the header of this column.
  - footerClassName (string; optional)
  - footerStyle (dict; optional)
  - filterAll (boolean; optional)
  - format (string; optional)
- loading (boolean; default False)
- showPagination (boolean; default True): Turn on pagination. Seting this to true will improve performance
on larger tables.
- showPaginationTop (boolean; default False): Show pagination controls on top of table (default: false)
- showPaginationBottom (boolean; default True): Show pagination controls on bottom of table (default: true)
- showPageSizeOptions (boolean; default True): Show options dropdown to edit results per page when pagination is enabled.
- pageSizeOptions (list of numbers; default [5, 10, 20, 25, 50, 100]): Options for show page size when pageination is enabled. (default: [5, 10, 20, 25, 50, 100])
- defaultPageSize (number; default 20): Default page size. (default: 20)
- minRows (number; optional): controls the minimum number of rows to display - default will be "pageSize"
NOTE: if you set minRows to 0 then you get rid of empty padding rows BUT your table formatting will also
look strange when there are ZERO rows in the table.
- showPageJump (boolean; default True)
- collapseOnSortingChange (boolean; default True)
- collapseOnPageChange (boolean; default True)
- collapseOnDataChange (boolean; default True)
- freezeWhenExpanded (boolean; default False)
- sortable (boolean; default True): Table level sorting (default: true). This can be overided for specific columns.
- multiSort (boolean; default True)
- resizable (boolean; default True): Table level resizing (default: true). This can be overided for specific columns.
- filterable (boolean; default False): Table level filtering (default: false). This can be overided for specific columns.
- defaultSortDesc (boolean; default False)
- defaultSorted (list of strings; optional)
- defaultFiltered (list of strings; optional)
- defaultResized (list of strings; optional)
- defaultExpanded (dict; optional)
- pivotBy (list of strings; optional)
- className (string; default ""): Add classname "-striped" and/or "-highlight" to enable these features.
- style (dict; optional): Inline table styles
- expanderDefaults (dict; default {
    sortable: false,
    resizable: true,
    filterable: false,
    width: 35
}): expanderDefaults has the following type: dict containing keys 'sortable', 'resizable', 'filterable', 'width'.
Those keys have the following types:
  - sortable (boolean; optional)
  - resizable (boolean; optional)
  - filterable (boolean; optional)
  - width (number; optional)
- pivotDefaults (dict; optional)
- previousText (string; default "Previous")
- nextText (string; default "Next")
- loadingText (string; default "Loading...")
- noDataText (string; default "No rows found")
- pageText (string; default "Page")
- ofText (string; default "of")
- rowsText (string; default "rows")
- pageJumpText (string; default "jump to page")
- rowsSelectorText (string; default "rows per page")
- conditionalFormatting (dict; optional): Custom conditional color formatting. Currently only supports d3.scaleThreshold().

For more info See: https://github.com/d3/d3-scale/blob/master/README.md#threshold-scales. conditionalFormatting has the following type: dict containing keys 'domain', 'range', 'ignore'.
Those keys have the following types:
  - domain (list; optional): The discrete values to create conditional buckets. For N values N+1 buckets are created.
  - range (list of dicts; optional): An array of styles that will map to the domain. If N domain values are given, then the
range must have N+1 values. Note: this must be a dictionary with camelCase css values.
  - ignore (list of strings; optional): Columns that do not get this style must be provided in an optional array.
- pivotFunc (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, columns=Component.UNDEFINED, loading=Component.UNDEFINED, showPagination=Component.UNDEFINED, showPaginationTop=Component.UNDEFINED, showPaginationBottom=Component.UNDEFINED, showPageSizeOptions=Component.UNDEFINED, pageSizeOptions=Component.UNDEFINED, defaultPageSize=Component.UNDEFINED, minRows=Component.UNDEFINED, showPageJump=Component.UNDEFINED, collapseOnSortingChange=Component.UNDEFINED, collapseOnPageChange=Component.UNDEFINED, collapseOnDataChange=Component.UNDEFINED, freezeWhenExpanded=Component.UNDEFINED, sortable=Component.UNDEFINED, multiSort=Component.UNDEFINED, resizable=Component.UNDEFINED, filterable=Component.UNDEFINED, defaultSortDesc=Component.UNDEFINED, defaultSorted=Component.UNDEFINED, defaultFiltered=Component.UNDEFINED, defaultResized=Component.UNDEFINED, defaultExpanded=Component.UNDEFINED, pivotBy=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, expanderDefaults=Component.UNDEFINED, pivotDefaults=Component.UNDEFINED, previousText=Component.UNDEFINED, nextText=Component.UNDEFINED, loadingText=Component.UNDEFINED, noDataText=Component.UNDEFINED, pageText=Component.UNDEFINED, ofText=Component.UNDEFINED, rowsText=Component.UNDEFINED, pageJumpText=Component.UNDEFINED, rowsSelectorText=Component.UNDEFINED, conditionalFormatting=Component.UNDEFINED, pivotFunc=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'columns', 'loading', 'showPagination', 'showPaginationTop', 'showPaginationBottom', 'showPageSizeOptions', 'pageSizeOptions', 'defaultPageSize', 'minRows', 'showPageJump', 'collapseOnSortingChange', 'collapseOnPageChange', 'collapseOnDataChange', 'freezeWhenExpanded', 'sortable', 'multiSort', 'resizable', 'filterable', 'defaultSortDesc', 'defaultSorted', 'defaultFiltered', 'defaultResized', 'defaultExpanded', 'pivotBy', 'className', 'style', 'expanderDefaults', 'pivotDefaults', 'previousText', 'nextText', 'loadingText', 'noDataText', 'pageText', 'ofText', 'rowsText', 'pageJumpText', 'rowsSelectorText', 'conditionalFormatting', 'pivotFunc']
        self._type = 'DashReactTable'
        self._namespace = 'dash_react_table'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'columns', 'loading', 'showPagination', 'showPaginationTop', 'showPaginationBottom', 'showPageSizeOptions', 'pageSizeOptions', 'defaultPageSize', 'minRows', 'showPageJump', 'collapseOnSortingChange', 'collapseOnPageChange', 'collapseOnDataChange', 'freezeWhenExpanded', 'sortable', 'multiSort', 'resizable', 'filterable', 'defaultSortDesc', 'defaultSorted', 'defaultFiltered', 'defaultResized', 'defaultExpanded', 'pivotBy', 'className', 'style', 'expanderDefaults', 'pivotDefaults', 'previousText', 'nextText', 'loadingText', 'noDataText', 'pageText', 'ofText', 'rowsText', 'pageJumpText', 'rowsSelectorText', 'conditionalFormatting', 'pivotFunc']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashReactTable, self).__init__(**args)
