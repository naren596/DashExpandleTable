% Auto-generated: do not edit by hand
\name{'custom'DashReactTable}

\alias{'custom'DashReactTable}

\title{DashReactTable component}

\description{
DashReactTable is a decalaritive version of react-table, built for dash.  At a minimum, it must have `data` and `column` properties. `data` must be a uniform list of dicts with the arbitrary amount of keys representing the columns and values representing that row's data. This can be done very easily in pandas using df.to_json(orient='records'). As for `columns`, this is also a list of dictionaries, but it has a defined set of properties. At the very least, it must contain `Header` and `accessor` properties, referring to the column's title and identifying key in the data property, respectively. Columns also have many other properties that are referenced both in the docstring as well as in the react-table docs.
}

\usage{
'custom'DashReactTable(id=NULL, data=NULL, columns=NULL, loading=NULL, showPagination=NULL,
showPaginationTop=NULL, showPaginationBottom=NULL, showPageSizeOptions=NULL,
pageSizeOptions=NULL, defaultPageSize=NULL, minRows=NULL, showPageJump=NULL,
collapseOnSortingChange=NULL, collapseOnPageChange=NULL,
collapseOnDataChange=NULL, freezeWhenExpanded=NULL, sortable=NULL,
multiSort=NULL, resizable=NULL, filterable=NULL, defaultSortDesc=NULL,
defaultSorted=NULL, defaultFiltered=NULL, defaultResized=NULL,
defaultExpanded=NULL, pivotBy=NULL, className=NULL, style=NULL,
expanderDefaults=NULL, pivotDefaults=NULL, previousText=NULL, nextText=NULL,
loadingText=NULL, noDataText=NULL, pageText=NULL, ofText=NULL, rowsText=NULL,
pageJumpText=NULL, rowsSelectorText=NULL, conditionalFormatting=NULL,
pivotFunc=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks}

\item{data}{List of named lists. An array of dictionaries with each dictionary corresponding
to a row. The keys will refere to columns while the values refer
to the data that will be placed in that row's cell.}

\item{columns}{List of lists containing elements 'cell', 'header', 'accessor', 'footer', 'aggregate', 'aggfunc', 'pivot', 'pivotvalue', 'expander', 'sortable', 'resizable', 'filterable', 'show', 'width', 'minwidth', 'classname', 'style', 'headerclassname', 'headerstyle', 'footerclassname', 'footerstyle', 'filterall', 'format'.
those elements have the following types:
  - cell (optional)
  - header (character; optional): the column's label
  - accessor (character; optional): the corresponding key that links
the column to the data array.
  - footer (character; optional): the corresponding key that links
the column to the data array.
  - aggregate (optional)
  - aggfunc (character; optional)
  - pivot (character; optional)
  - pivotvalue (character; optional)
  - expander (character; optional)
  - sortable (logical; optional): overrides the table option
  - resizable (logical; optional): overides the table option
  - filterable (logical; optional): overides the table option
  - show (logical; optional): used to hide a column
  - width (numeric; optional): a hardcoded width for the column. this overides both min and max width options
  - minwidth (numeric; optional): a minimum width for the column (default: 100)
  - classname (character; optional): class name for the cells of this column.
  - style (named list; optional): inline style for the cells of this column.
  - headerclassname (character; optional): class name for the header of this column.
  - headerstyle (named list; optional): inline style for the header of this column.
  - footerclassname (character; optional)
  - footerstyle (named list; optional)
  - filterall (logical; optional)
  - format (character; optional)s. An aray of dictionaries containing properties to each column.
At the very least, every column must have a "Header" and "accessor"
property. The "Header" will be the title of the column and the "accessor"
will link that column to the data array of dictionaries.}

\item{loading}{Logical. }

\item{showPagination}{Logical. Turn on pagination. Seting this to true will improve performance
on larger tables.}

\item{showPaginationTop}{Logical. Show pagination controls on top of table (default: false)}

\item{showPaginationBottom}{Logical. Show pagination controls on bottom of table (default: true)}

\item{showPageSizeOptions}{Logical. Show options dropdown to edit results per page when pagination is enabled.}

\item{pageSizeOptions}{List of numerics. Options for show page size when pageination is enabled. (default: [5, 10, 20, 25, 50, 100])}

\item{defaultPageSize}{Numeric. Default page size. (default: 20)}

\item{minRows}{Numeric. controls the minimum number of rows to display - default will be "pageSize"
NOTE: if you set minRows to 0 then you get rid of empty padding rows BUT your table formatting will also
look strange when there are ZERO rows in the table.}

\item{showPageJump}{Logical. }

\item{collapseOnSortingChange}{Logical. }

\item{collapseOnPageChange}{Logical. }

\item{collapseOnDataChange}{Logical. }

\item{freezeWhenExpanded}{Logical. }

\item{sortable}{Logical. Table level sorting (default: true). This can be overided for specific columns.}

\item{multiSort}{Logical. }

\item{resizable}{Logical. Table level resizing (default: true). This can be overided for specific columns.}

\item{filterable}{Logical. Table level filtering (default: false). This can be overided for specific columns.}

\item{defaultSortDesc}{Logical. }

\item{defaultSorted}{List of characters. }

\item{defaultFiltered}{List of characters. }

\item{defaultResized}{List of characters. }

\item{defaultExpanded}{Named list. }

\item{pivotBy}{List of characters. }

\item{className}{Character. Add classname "-striped" and/or "-highlight" to enable these features.}

\item{style}{Named list. Inline table styles}

\item{expanderDefaults}{Lists containing elements 'sortable', 'resizable', 'filterable', 'width'.
those elements have the following types:
  - sortable (logical; optional)
  - resizable (logical; optional)
  - filterable (logical; optional)
  - width (numeric; optional). }

\item{pivotDefaults}{Named list. }

\item{previousText}{Character. }

\item{nextText}{Character. }

\item{loadingText}{Character. }

\item{noDataText}{Character. }

\item{pageText}{Character. }

\item{ofText}{Character. }

\item{rowsText}{Character. }

\item{pageJumpText}{Character. }

\item{rowsSelectorText}{Character. }

\item{conditionalFormatting}{Lists containing elements 'domain', 'range', 'ignore'.
those elements have the following types:
  - domain (unnamed list; optional): the discrete values to create conditional buckets. for n values n+1 buckets are created.
  - range (list of named lists; optional): an array of styles that will map to the domain. if n domain values are given, then the
range must have n+1 values. note: this must be a dictionary with camelcase css values.
  - ignore (list of characters; optional): columns that do not get this style must be provided in an optional array.. Custom conditional color formatting. Currently only supports d3.scaleThreshold().

For more info See: https://github.com/d3/d3-scale/blob/master/README.md#threshold-scales}

\item{pivotFunc}{Character. }
}
