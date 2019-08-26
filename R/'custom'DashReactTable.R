# AUTO GENERATED FILE - DO NOT EDIT

'custom'DashReactTable <- function(id=NULL, data=NULL, columns=NULL, loading=NULL, showPagination=NULL, showPaginationTop=NULL, showPaginationBottom=NULL, showPageSizeOptions=NULL, pageSizeOptions=NULL, defaultPageSize=NULL, minRows=NULL, showPageJump=NULL, collapseOnSortingChange=NULL, collapseOnPageChange=NULL, collapseOnDataChange=NULL, freezeWhenExpanded=NULL, sortable=NULL, multiSort=NULL, resizable=NULL, filterable=NULL, defaultSortDesc=NULL, defaultSorted=NULL, defaultFiltered=NULL, defaultResized=NULL, defaultExpanded=NULL, pivotBy=NULL, className=NULL, style=NULL, expanderDefaults=NULL, pivotDefaults=NULL, previousText=NULL, nextText=NULL, loadingText=NULL, noDataText=NULL, pageText=NULL, ofText=NULL, rowsText=NULL, pageJumpText=NULL, rowsSelectorText=NULL, conditionalFormatting=NULL, pivotFunc=NULL) {
    
    props <- list(id=id, data=data, columns=columns, loading=loading, showPagination=showPagination, showPaginationTop=showPaginationTop, showPaginationBottom=showPaginationBottom, showPageSizeOptions=showPageSizeOptions, pageSizeOptions=pageSizeOptions, defaultPageSize=defaultPageSize, minRows=minRows, showPageJump=showPageJump, collapseOnSortingChange=collapseOnSortingChange, collapseOnPageChange=collapseOnPageChange, collapseOnDataChange=collapseOnDataChange, freezeWhenExpanded=freezeWhenExpanded, sortable=sortable, multiSort=multiSort, resizable=resizable, filterable=filterable, defaultSortDesc=defaultSortDesc, defaultSorted=defaultSorted, defaultFiltered=defaultFiltered, defaultResized=defaultResized, defaultExpanded=defaultExpanded, pivotBy=pivotBy, className=className, style=style, expanderDefaults=expanderDefaults, pivotDefaults=pivotDefaults, previousText=previousText, nextText=nextText, loadingText=loadingText, noDataText=noDataText, pageText=pageText, ofText=ofText, rowsText=rowsText, pageJumpText=pageJumpText, rowsSelectorText=rowsSelectorText, conditionalFormatting=conditionalFormatting, pivotFunc=pivotFunc)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactTable',
        namespace = 'dash_react_table',
        propNames = c('id', 'data', 'columns', 'loading', 'showPagination', 'showPaginationTop', 'showPaginationBottom', 'showPageSizeOptions', 'pageSizeOptions', 'defaultPageSize', 'minRows', 'showPageJump', 'collapseOnSortingChange', 'collapseOnPageChange', 'collapseOnDataChange', 'freezeWhenExpanded', 'sortable', 'multiSort', 'resizable', 'filterable', 'defaultSortDesc', 'defaultSorted', 'defaultFiltered', 'defaultResized', 'defaultExpanded', 'pivotBy', 'className', 'style', 'expanderDefaults', 'pivotDefaults', 'previousText', 'nextText', 'loadingText', 'noDataText', 'pageText', 'ofText', 'rowsText', 'pageJumpText', 'rowsSelectorText', 'conditionalFormatting', 'pivotFunc'),
        package = 'dashReactTable'
        )

    structure(component, class = c('dash_component', 'list'))
}
