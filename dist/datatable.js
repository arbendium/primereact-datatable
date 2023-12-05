import * as React from 'react';
import React__default from 'react';
import PrimeReact, { FilterMatchMode, ariaLabel, localeOption, PrimeReactContext, FilterOperator, FilterService } from 'primereact/api/api.esm.js';
import { ComponentBase, useHandleStyle } from 'primereact/componentbase/componentbase.esm.js';
import { useMergeProps, useEventListener, useUpdateEffect, useUnmountEffect, useOverlayListener, useMountEffect, usePrevious } from 'primereact/hooks/hooks.esm.js';
import { ArrowDownIcon } from 'primereact/icons/arrowdown/index.esm.js';
import { ArrowUpIcon } from 'primereact/icons/arrowup/index.esm.js';
import { SpinnerIcon } from 'primereact/icons/spinner/index.esm.js';
import { Paginator } from 'primereact/paginator/paginator.esm.js';
import { ObjectUtils, classNames, IconUtils, DomHandler, UniqueComponentId, ZIndexUtils } from 'primereact/utils/utils.esm.js';
import { VirtualScroller } from 'primereact/virtualscroller/virtualscroller.esm.js';
import { BarsIcon } from 'primereact/icons/bars/index.esm.js';
import { CheckIcon } from 'primereact/icons/check/index.esm.js';
import { ChevronDownIcon } from 'primereact/icons/chevrondown/index.esm.js';
import { ChevronRightIcon } from 'primereact/icons/chevronright/index.esm.js';
import { PencilIcon } from 'primereact/icons/pencil/index.esm.js';
import { TimesIcon } from 'primereact/icons/times/index.esm.js';
import { OverlayService } from 'primereact/overlayservice/overlayservice.esm.js';
import { Ripple } from 'primereact/ripple/ripple.esm.js';
import { Checkbox } from 'primereact/checkbox/checkbox.esm.js';
import { RadioButton } from 'primereact/radiobutton/radiobutton.esm.js';
import { Button } from 'primereact/button/button.esm.js';
import { CSSTransition } from 'primereact/csstransition/csstransition.esm.js';
import { Dropdown } from 'primereact/dropdown/dropdown.esm.js';
import { FocusTrap } from 'primereact/focustrap/focustrap.esm.js';
import { FilterIcon } from 'primereact/icons/filter/index.esm.js';
import { FilterSlashIcon } from 'primereact/icons/filterslash/index.esm.js';
import { PlusIcon } from 'primereact/icons/plus/index.esm.js';
import { TrashIcon } from 'primereact/icons/trash/index.esm.js';
import { InputText } from 'primereact/inputtext/inputtext.esm.js';
import { Portal } from 'primereact/portal/portal.esm.js';
import { SortAltIcon } from 'primereact/icons/sortalt/index.esm.js';
import { SortAmountDownIcon } from 'primereact/icons/sortamountdown/index.esm.js';
import { SortAmountUpAltIcon } from 'primereact/icons/sortamountupalt/index.esm.js';
import { Tooltip } from 'primereact/tooltip/tooltip.esm.js';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

const ColumnBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Column',
    align: null,
    alignFrozen: 'left',
    alignHeader: null,
    body: null,
    bodyClassName: null,
    bodyStyle: null,
    cellEditValidator: null,
    cellEditValidatorEvent: 'click',
    className: null,
    colSpan: null,
    columnKey: null,
    dataType: 'text',
    editor: null,
    excludeGlobalFilter: false,
    expander: false,
    exportField: null,
    exportable: true,
    field: null,
    filter: false,
    filterApply: null,
    filterClear: null,
    filterElement: null,
    filterField: null,
    filterFooter: null,
    filterFunction: null,
    filterHeader: null,
    filterHeaderClassName: null,
    filterHeaderStyle: null,
    filterMatchMode: null,
    filterMatchModeOptions: null,
    filterMaxLength: null,
    filterMenuClassName: null,
    filterMenuStyle: null,
    filterPlaceholder: null,
    filterType: 'text',
    footer: null,
    footerClassName: null,
    footerStyle: null,
    frozen: false,
    header: null,
    headerClassName: null,
    headerStyle: null,
    headerTooltip: null,
    headerTooltipOptions: null,
    hidden: false,
    maxConstraints: 2,
    onBeforeCellEditHide: null,
    onBeforeCellEditShow: null,
    onCellEditCancel: null,
    onCellEditComplete: null,
    onCellEditInit: null,
    onFilterApplyClick: null,
    onFilterClear: null,
    onFilterConstraintAdd: null,
    onFilterConstraintRemove: null,
    onFilterMatchModeChange: null,
    onFilterOperatorChange: null,
    reorderable: true,
    resizeable: true,
    rowEditor: false,
    rowReorder: false,
    rowReorderIcon: null,
    rowSpan: null,
    selectionMode: null,
    showAddButton: true,
    showApplyButton: true,
    showClearButton: true,
    showFilterMatchModes: true,
    showFilterMenu: true,
    showFilterMenuOptions: true,
    showFilterOperator: true,
    sortField: null,
    sortFunction: null,
    sortable: false,
    sortableDisabled: false,
    style: null,
    children: undefined
  },
  getCProp: (column, name) => ObjectUtils.getComponentProp(column, name, ColumnBase.defaultProps),
  getCProps: column => ObjectUtils.getComponentProps(column, ColumnBase.defaultProps),
  getCOtherProps: column => ObjectUtils.getComponentDiffProps(column, ColumnBase.defaultProps)
});

const styles = `
@layer primereact {
	.p-datatable {
		position: relative;
	}

	.p-datatable > .p-datatable-wrapper {
		overflow: auto;
	}

	.p-datatable-table {
		border-spacing: 0px;
		width: 100%;
	}

	.p-datatable .p-sortable-disabled {
		cursor: auto;
	}

	.p-datatable .p-sortable-column {
		cursor: pointer;
		user-select: none;
	}

	.p-datatable .p-sortable-column .p-column-title,
	.p-datatable .p-sortable-column .p-sortable-column-icon,
	.p-datatable .p-sortable-column .p-sortable-column-badge {
		vertical-align: middle;
	}

	.p-datatable .p-sortable-column .p-sortable-column-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.p-datatable-selectable .p-selectable-row,
	.p-datatable-selectable-cell .p-selectable-cell {
		cursor: pointer;
	}

	.p-datatable-drag-selection-helper {
		position: absolute;
		z-index: 99999999;
	}

	/* Scrollable */
	.p-datatable-scrollable > .p-datatable-wrapper {
		position: relative;
	}

	.p-datatable-scrollable-table > .p-datatable-thead {
		position: sticky;
		top: 0;
		z-index: 1;
	}

	.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
		position: sticky;
		z-index: 1;
	}

	.p-datatable-scrollable-table > .p-datatable-tfoot {
		position: sticky;
		bottom: 0;
		z-index: 1;
	}

	.p-datatable-scrollable .p-frozen-column {
		position: sticky;
		background: inherit;
	}

	.p-datatable-scrollable th.p-frozen-column {
		z-index: 1;
	}

	.p-datatable-flex-scrollable {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.p-datatable-flex-scrollable > .p-datatable-wrapper {
		display: flex;
		flex-direction: column;
		flex: 1;
		height: 100%;
	}

	.p-datatable-scrollable-table > .p-datatable-tbody > .p-rowgroup-header {
		position: sticky;
		z-index: 1;
	}

	/* Resizable */
	.p-datatable-resizable-table > .p-datatable-thead > tr > th,
	.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
	.p-datatable-resizable-table > .p-datatable-tbody > tr > td {
		overflow: hidden;
		white-space: nowrap;
	}

	.p-datatable-resizable-table > .p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
		background-clip: padding-box;
		position: relative;
	}

	.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-resizable-column:last-child .p-column-resizer {
		display: none;
	}

	.p-datatable .p-column-resizer {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		margin: 0;
		width: 0.5rem;
		height: 100%;
		padding: 0px;
		cursor: col-resize;
		border: 1px solid transparent;
	}

	.p-datatable .p-column-header-content {
		display: flex;
		align-items: center;
	}

	.p-datatable .p-column-resizer-helper {
		width: 1px;
		position: absolute;
		z-index: 10;
		display: none;
	}

	.p-datatable .p-row-editor-init,
	.p-datatable .p-row-editor-save,
	.p-datatable .p-row-editor-cancel {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		position: relative;
	}

	/* Expand */
	.p-datatable .p-row-toggler {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		position: relative;
	}

	/* Reorder */
	.p-datatable-reorder-indicator-up,
	.p-datatable-reorder-indicator-down {
		position: absolute;
		display: none;
	}

	.p-reorderable-column,
	.p-datatable-reorderablerow-handle {
		cursor: move;
	}

	/* Loader */
	.p-datatable .p-datatable-loading-overlay {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	/* Filter */
	.p-column-filter-row {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.p-column-filter-menu {
		display: inline-flex;
		margin-left: auto;
	}

	.p-column-filter-row .p-column-filter-element {
		flex: 1 1 auto;
		width: 1%;
	}

	.p-column-filter-menu-button,
	.p-column-filter-clear-button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		text-decoration: none;
		overflow: hidden;
		position: relative;
	}

	.p-column-filter-overlay {
		position: absolute;
		top: 0;
		left: 0;
	}

	.p-column-filter-row-items {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.p-column-filter-row-item {
		cursor: pointer;
	}

	.p-column-filter-add-button,
	.p-column-filter-remove-button {
		justify-content: center;
	}

	.p-column-filter-add-button .p-button-label,
	.p-column-filter-remove-button .p-button-label {
		flex-grow: 0;
	}

	.p-column-filter-buttonbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
		width: auto;
	}

	/* Responsive */
	.p-datatable .p-datatable-tbody > tr > td > .p-column-title {
		display: none;
	}

	/* VirtualScroller */
	.p-datatable-virtualscroller-spacer {
		display: flex;
	}

	.p-datatable .p-virtualscroller .p-virtualscroller-loading {
		transform: none;
		min-height: 0;
		position: sticky;
		top: 0;
		left: 0;
	}

	/* Alignment */
	.p-datatable .p-datatable-thead > tr > th.p-align-left > .p-column-header-content,
	.p-datatable .p-datatable-tbody > tr > td.p-align-left,
	.p-datatable .p-datatable-tfoot > tr > td.p-align-left {
		text-align: left;
		justify-content: flex-start;
	}

	.p-datatable .p-datatable-thead > tr > th.p-align-right > .p-column-header-content,
	.p-datatable .p-datatable-tbody > tr > td.p-align-right,
	.p-datatable .p-datatable-tfoot > tr > td.p-align-right {
		text-align: right;
		justify-content: flex-end;
	}

	.p-datatable .p-datatable-thead > tr > th.p-align-center > .p-column-header-content,
	.p-datatable .p-datatable-tbody > tr > td.p-align-center,
	.p-datatable .p-datatable-tfoot > tr > td.p-align-center {
		text-align: center;
		justify-content: center;
	}
}
`;
const classes = {
  root: ({
    props,
    selectable
  }) => classNames('p-datatable p-component', {
    'p-datatable-hoverable-rows': props.rowHover,
    'p-datatable-selectable': selectable && !props.cellSelection,
    'p-datatable-selectable-cell': selectable && props.cellSelection,
    'p-datatable-resizable': props.resizableColumns,
    'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
    'p-datatable-scrollable': props.scrollable,
    'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
    'p-datatable-responsive-stack': props.responsiveLayout === 'stack',
    'p-datatable-responsive-scroll': props.responsiveLayout === 'scroll',
    'p-datatable-striped': props.stripedRows,
    'p-datatable-gridlines': props.showGridlines,
    'p-datatable-grouped-header': props.headerColumnGroup != null,
    'p-datatable-grouped-footer': props.footerColumnGroup != null,
    'p-datatable-sm': props.size === 'small',
    'p-datatable-lg': props.size === 'large'
  }),
  loadingIcon: 'p-datatable-loading-icon',
  loadingOverlay: 'p-datatable-loading-overlay p-component-overlay',
  header: 'p-datatable-header',
  wrapper: 'p-datatable-wrapper',
  table: ({
    props
  }) => classNames('p-datatable-table', {
    'p-datatable-scrollable-table': props.scrollable,
    'p-datatable-resizable-table': props.resizableColumns,
    'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
  }),
  thead: 'p-datatable-thead',
  tfoot: 'p-datatable-tfoot',
  footer: 'p-datatable-footer',
  checkIcon: 'p-checkbox-icon',
  resizeHelper: 'p-column-resizer-helper',
  reorderIndicatorUp: 'p-datatable-reorder-indicator-up',
  reorderIndicatorDown: 'p-datatable-reorder-indicator-down',
  paginator: ({
    position
  }) => classNames(`p-paginator-${position}`),
  bodyCell: ({
    selectionMode,
    editor,
    editingState,
    frozen,
    cellSelected,
    align,
    bodyProps: props,
    getCellParams
  }) => classNames({
    'p-selection-column': selectionMode !== null,
    'p-editable-column': editor,
    'p-cell-editing': editor && editingState,
    'p-frozen-column': frozen,
    'p-selectable-cell': props.allowCellSelection && props.isSelectable({
      data: getCellParams(),
      index: props.rowIndex
    }),
    'p-highlight': cellSelected,
    [`p-align-${align}`]: !!align
  }),
  columnTitle: 'p-column-title',
  bodyRow: ({
    rowProps: props
  }) => classNames({
    'p-highlight': !props.allowCellSelection && props.selected || props.contextMenuSelected,
    'p-highlight-contextmenu': props.contextMenuSelected,
    'p-selectable-row': props.allowRowSelection && props.isSelectable({
      data: props.rowData,
      index: props.rowIndex
    }),
    'p-row-odd': props.rowIndex % 2 !== 0
  }),
  rowGroupTogglerIcon: 'p-row-toggler-icon',
  rowGroupToggler: 'p-row-toggler p-link',
  rowGroupHeader: 'p-rowgroup-header',
  rowGroupHeaderName: 'p-rowgroup-header-name',
  rowGroupFooter: 'p-rowgroup-footer',
  rowReorderIcon: 'p-datatable-reorderablerow-handle',
  rowTogglerIcon: 'p-row-toggler-icon',
  rowToggler: 'p-row-toggler p-link',
  rowEditorSaveIcon: 'p-row-editor-save-icon',
  rowEditorSaveButton: 'p-row-editor-save p-link',
  rowEditorCancelIcon: 'p-row-editor-cancel-icon',
  rowEditorCancelButton: 'p-row-editor-cancel p-link',
  rowEditorInitIcon: 'p-row-editor-init-icon',
  rowEditorInitButton: 'p-row-editor-init p-link',
  rowExpansion: 'p-datatable-row-expansion',
  virtualScrollerSpacer: ({
    className
  }) => className,
  tbody: ({
    className
  }) => className,
  filterInput: 'p-fluid p-column-filter-element',
  filterMenuButton: ({
    overlayVisibleState,
    hasFilter
  }) => classNames('p-column-filter-menu-button p-link', {
    'p-column-filter-menu-button-open': overlayVisibleState,
    'p-column-filter-menu-button-active': hasFilter()
  }),
  headerFilterClearButton: ({
    hasRowFilter
  }) => classNames('p-column-filter-clear-button p-link', {
    'p-hidden-space': !hasRowFilter()
  }),
  filterSeparator: 'p-column-filter-separator',
  filterRowItem: ({
    isRowMatchModeSelected,
    isShowMatchModes,
    value
  }) => isShowMatchModes() ? classNames('p-column-filter-row-item', {
    'p-highlight': value && isRowMatchModeSelected(value)
  }) : undefined,
  filterRowItems: 'p-column-filter-row-items',
  filterOperator: 'p-column-filter-operator',
  filterConstraints: 'p-column-filter-constraints',
  filterConstraint: 'p-column-filter-constraint',
  filterAddRule: 'p-column-filter-add-rule',
  filterButtonBar: 'p-column-filter-buttonbar',
  filterOverlay: ({
    columnFilterProps: props,
    context,
    getColumnProp
  }) => classNames('p-column-filter-overlay p-component p-fluid', getColumnProp('filterMenuClassName'), {
    'p-column-filter-overlay-menu': props.display === 'menu',
    'p-input-filled': context && context.inputStyle === 'filled' || PrimeReact.inputStyle === 'filled',
    'p-ripple-disabled': context && context.ripple === false || PrimeReact.ripple === false
  }),
  columnFilter: ({
    columnFilterProps: props
  }) => classNames('p-column-filter p-fluid', {
    'p-column-filter-row': props.display === 'row',
    'p-column-filter-menu': props.display === 'menu'
  }),
  columnResizer: 'p-column-resizer',
  emptyMessage: 'p-datatable-emptymessage',
  sortBadge: 'p-sortable-column-badge',
  sortIcon: 'p-sortable-column-icon',
  headerTitle: 'p-column-title',
  headerContent: 'p-column-header-content',
  headerCell: ({
    headerProps: props,
    frozen,
    sortMeta,
    align,
    _isSortableDisabled,
    getColumnProp
  }) => ObjectUtils.isEmpty(props) ? classNames('p-filter-column', {
    'p-frozen-column': frozen
  }) : classNames({
    'p-filter-column': !props.headerColumnGroup && props.filterDisplay === 'row',
    'p-sortable-column': getColumnProp('sortable'),
    'p-resizable-column': props.resizableColumns && getColumnProp('resizeable'),
    'p-highlight': sortMeta.sorted,
    'p-frozen-column': frozen,
    'p-selection-column': getColumnProp('selectionMode'),
    'p-sortable-disabled': getColumnProp('sortable') && _isSortableDisabled,
    'p-reorderable-column': props.reorderableColumns && getColumnProp('reorderable') && !frozen,
    [`p-align-${align}`]: !!align
  }),
  footerCell: ({
    getColumnProp,
    align
  }) => classNames({
    'p-frozen-column': getColumnProp('frozen'),
    [`p-align-${align}`]: !!align
  }),
  transition: 'p-connected-overlay'
};
const inlineStyles = {
  wrapper: {
    overflow: 'auto'
  },
  resizeHelper: {
    display: 'none'
  },
  reorderIndicatorUp: ({
    style
  }) => ({
    ...style
  }),
  reorderIndicatorDown: ({
    style
  }) => ({
    ...style
  })
};
const DataTableBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: 'DataTable',
    alwaysShowPaginator: true,
    breakpoint: '960px',
    cellClassName: null,
    cellSelection: false,
    checkIcon: null,
    className: null,
    collapsedRowIcon: null,
    columnResizeMode: 'fit',
    compareSelectionBy: 'deepEquals',
    contextMenuSelection: null,
    csvSeparator: ',',
    currentPageReportTemplate: '({currentPage} of {totalPages})',
    customRestoreState: null,
    customSaveState: null,
    dataKey: null,
    defaultSortOrder: 1,
    dragSelection: false,
    editMode: null,
    editingRows: null,
    emptyMessage: null,
    expandableRowGroups: false,
    expandedRowIcon: null,
    expandedRows: null,
    exportFilename: 'download',
    exportFunction: null,
    filterClearIcon: null,
    filterDelay: 300,
    filterDisplay: 'menu',
    filterIcon: null,
    filterLocale: undefined,
    filters: null,
    first: 0,
    footer: null,
    footerColumnGroup: null,
    frozenRow: false,
    frozenValue: null,
    frozenWidth: null,
    globalFilter: null,
    globalFilterFields: null,
    globalFilterMatchMode: FilterMatchMode.CONTAINS,
    groupRowsBy: null,
    header: null,
    headerColumnGroup: null,
    id: null,
    isDataSelectable: null,
    lazy: false,
    loading: false,
    loadingIcon: null,
    metaKeySelection: false,
    multiSortMeta: null,
    onAllRowsSelect: null,
    onAllRowsUnselect: null,
    onCellClick: null,
    onCellSelect: null,
    onCellUnselect: null,
    onColReorder: null,
    onColumnResizeEnd: null,
    onColumnResizerClick: null,
    onColumnResizerDoubleClick: null,
    onContextMenu: null,
    onContextMenuSelectionChange: null,
    onFilter: null,
    onPage: null,
    onRowClick: null,
    onRowCollapse: null,
    onRowDoubleClick: null,
    onRowEditCancel: null,
    onRowEditChange: null,
    onRowEditComplete: null,
    onRowEditInit: null,
    onRowEditSave: null,
    onRowExpand: null,
    onRowMouseEnter: null,
    onRowMouseLeave: null,
    onRowPointerDown: null,
    onRowPointerUp: null,
    onRowReorder: null,
    onRowSelect: null,
    onRowToggle: null,
    onRowUnselect: null,
    onSelectAllChange: null,
    onSelectionChange: null,
    onSort: null,
    onStateRestore: null,
    onStateSave: null,
    onValueChange: null,
    pageLinkSize: 5,
    paginator: false,
    paginatorClassName: null,
    paginatorDropdownAppendTo: null,
    paginatorLeft: null,
    paginatorPosition: 'bottom',
    paginatorRight: null,
    paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
    removableSort: false,
    reorderIndicatorDownIcon: null,
    reorderIndicatorUpIcon: null,
    reorderableColumns: false,
    reorderableRows: false,
    resizableColumns: false,
    responsiveLayout: 'scroll',
    rowClassName: null,
    rowEditValidator: null,
    rowEditorCancelIcon: null,
    rowEditorInitIcon: null,
    rowEditorSaveIcon: null,
    rowExpansionTemplate: null,
    rowGroupFooterTemplate: null,
    rowGroupHeaderTemplate: null,
    rowGroupMode: null,
    rowHover: false,
    rows: null,
    rowsPerPageOptions: null,
    scrollHeight: null,
    scrollable: false,
    selectAll: false,
    selectOnEdit: true,
    selection: null,
    selectionAriaLabel: null,
    selectionAutoFocus: true,
    selectionMode: null,
    selectionPageOnly: false,
    showGridlines: false,
    showHeaders: true,
    showRowReorderElement: null,
    showSelectAll: true,
    showSelectionElement: null,
    size: 'normal',
    sortField: null,
    sortIcon: null,
    sortMode: 'single',
    sortOrder: null,
    stateKey: null,
    stateStorage: 'session',
    stripedRows: false,
    style: null,
    tabIndex: 0,
    tableClassName: null,
    tableStyle: null,
    totalRecords: null,
    value: null,
    virtualScrollerOptions: null,
    children: undefined
  },
  css: {
    styles,
    classes,
    inlineStyles
  }
});

const RowCheckbox = /*#__PURE__*/React.memo(props => {
  const mergeProps = useMergeProps();
  const getColumnProps = () => ColumnBase.getCProps(props.column);
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const getColumnPTOptions = key => {
    const columnMetaData = {
      props: getColumnProps(),
      parent: props.metaData,
      hostName: props.hostName,
      state: {},
      context: {
        index: props.tabIndex,
        checked: props.checked,
        disabled: props.disabled
      }
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(getColumnProps(), key, columnMetaData));
  };
  const onChange = event => {
    if (!props.disabled) {
      props.onChange(event);
    }
  };
  const checkboxIconProps = mergeProps({
    className: cx('checkIcon')
  }, getColumnPTOptions('rowCheckbox.icon'));
  const icon = props.checked ? props.checkIcon || /*#__PURE__*/React.createElement(CheckIcon, checkboxIconProps) : null;
  const checkIcon = IconUtils.getJSXIcon(icon, {
    ...checkboxIconProps
  }, {
    props
  });
  const tabIndex = props.disabled ? null : '0';
  const checkboxProps = mergeProps({
    role: 'checkbox',
    'aria-checked': props.checked,
    tabIndex,
    onChange,
    'aria-label': props.ariaLabel,
    checked: props.checked,
    icon: checkIcon,
    disabled: props.disabled
  }, getColumnPTOptions('rowCheckbox'));
  return /*#__PURE__*/React.createElement(Checkbox, checkboxProps);
});
RowCheckbox.displayName = 'RowCheckbox';

const RowRadioButton = /*#__PURE__*/React.memo(props => {
  const mergeProps = useMergeProps();
  const getColumnProps = () => ColumnBase.getCProps(props.column);
  const {
    ptm,
    ptmo
  } = props.ptCallbacks;
  const getColumnPTOptions = key => {
    const columnMetaData = {
      props: getColumnProps(),
      parent: props.metaData,
      hostName: props.hostName,
      state: {},
      context: {
        index: props.tabIndex,
        checked: props.checked,
        disabled: props.disabled
      }
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(getColumnProps(), key, columnMetaData));
  };
  const onChange = event => {
    if (!props.disabled) {
      props.onChange(event);
    }
  };
  const radioButtonProps = mergeProps({
    role: 'radio',
    'aria-checked': props.checked,
    checked: props.checked,
    disabled: props.disabled,
    name: `${props.tableSelector}_dt_radio`,
    onChange
  }, getColumnPTOptions('radiobutton'));
  return /*#__PURE__*/React.createElement(RadioButton, radioButtonProps);
});
RowRadioButton.displayName = 'RowRadioButton';

const BodyCell = /*#__PURE__*/React.memo(props => {
  const mergeProps = useMergeProps();
  const [editingState, setEditingState] = React.useState(props.editing);
  const [editingRowDataState, setEditingRowDataState] = React.useState(props.rowData);
  const [styleObjectState, setStyleObjectState] = React.useState({});
  const elementRef = React.useRef(null);
  const keyHelperRef = React.useRef(null);
  const overlayEventListener = React.useRef(null);
  const selfClick = React.useRef(false);
  const tabindexTimeout = React.useRef(null);
  const initFocusTimeout = React.useRef(null);
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const getColumnProp = name => ColumnBase.getCProp(props.column, name);
  const getColumnProps = () => ColumnBase.getCProps(props.column);
  const getColumnPTOptions = key => {
    const cProps = getColumnProps();
    const columnMetaData = {
      props: cProps,
      parent: props.metaData,
      hostName: props.hostName,
      state: {
        styleObject: styleObjectState,
        editing: editingState,
        editingRowData: editingRowDataState
      },
      context: {
        index: props.index,
        size: props.metaData.props.size,
        showGridlines: props.metaData.props.showGridlines
      }
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
  };
  const field = getColumnProp('field') || `field_${props.index}`;
  const editingKey = props.dataKey ? props.rowData && props.rowData[props.dataKey] || props.rowIndex : props.rowIndex;
  const isEditable = () => getColumnProp('editor');
  const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
    type: 'click',
    listener: e => {
      if (!selfClick.current && isOutsideClicked(e.target)) {
        // #2666 for overlay components and outside is clicked
        setTimeout(() => {
          switchCellToViewMode(e, true);
        }, 0);
      }
      selfClick.current = false;
    },
    options: true,
    when: isEditable()
  });
  const isSelected = () => props.selection ? props.selection instanceof Array ? findIndex(props.selection) > -1 : equals(props.selection) : false;
  const equalsData = data => props.compareSelectionBy === 'equals' ? data === props.rowData : ObjectUtils.equals(data, props.rowData, props.dataKey);
  const equals = selectedCell => selectedCell && (selectedCell.rowIndex === props.rowIndex || equalsData(selectedCell.rowData)) && (selectedCell.field === field || selectedCell.cellIndex === props.index);
  const isOutsideClicked = target => elementRef.current && !(elementRef.current.isSameNode(target) || elementRef.current.contains(target));
  const getVirtualScrollerOption = option => props.virtualScrollerOptions ? props.virtualScrollerOptions[option] : null;
  const getStyle = () => {
    const bodyStyle = getColumnProp('bodyStyle');
    const columnStyle = getColumnProp('style');
    return getColumnProp('frozen') ? {
      ...columnStyle,
      ...bodyStyle,
      ...styleObjectState
    } : {
      ...columnStyle,
      ...bodyStyle
    };
  };
  const getCellParams = () => ({
    value: resolveFieldData(),
    field,
    rowData: props.rowData,
    rowIndex: props.rowIndex,
    cellIndex: props.index,
    selected: isSelected(),
    column: props.column,
    props
  });
  const getCellCallbackParams = event => {
    const params = getCellParams();
    return {
      originalEvent: event,
      ...params
    };
  };
  const resolveFieldData = data => ObjectUtils.resolveFieldData(data || props.rowData, field);
  const getEditingRowData = () => props.editingMeta && props.editingMeta[editingKey] ? props.editingMeta[editingKey].data : props.rowData;
  const getTabIndex = cellSelected => props.allowCellSelection ? cellSelected ? 0 : props.rowIndex === 0 && props.index === 0 ? props.tabIndex : -1 : null;
  const findIndex = collection => (collection || []).findIndex(data => equals(data));
  const closeCell = event => {
    const params = getCellCallbackParams(event);
    const onBeforeCellEditHide = getColumnProp('onBeforeCellEditHide');
    if (onBeforeCellEditHide) {
      onBeforeCellEditHide(params);
    }

    /* When using the 'tab' key, the focus event of the next cell is not called in IE. */
    setTimeout(() => {
      setEditingState(false);
      unbindDocumentClickListener();
      OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
      selfClick.current = false;
    }, 1);
  };
  const switchCellToViewMode = (event, submit) => {
    const callbackParams = getCellCallbackParams(event);
    setEditingRowDataState(prev => {
      const newRowData = prev;
      const newValue = resolveFieldData(newRowData);
      const params = {
        ...callbackParams,
        newRowData,
        newValue
      };
      const onCellEditCancel = getColumnProp('onCellEditCancel');
      const cellEditValidator = getColumnProp('cellEditValidator');
      const onCellEditComplete = getColumnProp('onCellEditComplete');
      if (!submit && onCellEditCancel) {
        onCellEditCancel(params);
      }
      let valid = true;
      if (!submit && cellEditValidator) {
        valid = cellEditValidator(params);
      }
      if (valid) {
        if (submit && onCellEditComplete) {
          setTimeout(() => onCellEditComplete(params));
        }
        closeCell(event);
      } else {
        event.preventDefault();
      }
      return newRowData;
    });
  };
  const findNextSelectableCell = cell => {
    const nextCell = cell.nextElementSibling;
    return nextCell ? DomHandler.getAttribute(nextCell, 'data-p-selectable-cell') ? nextCell : findNextSelectableCell(nextCell) : null;
  };
  const findPrevSelectableCell = cell => {
    const prevCell = cell.previousElementSibling;
    return prevCell ? DomHandler.getAttribute(prevCell, 'data-p-selectable-cell') ? prevCell : findPrevSelectableCell(prevCell) : null;
  };
  const findDownSelectableCell = cell => {
    const downRow = cell.parentElement.nextElementSibling;
    const downCell = downRow ? downRow.children[props.index] : null;
    return downRow && downCell ? DomHandler.getAttribute(downRow, 'data-p-selectable-row') && DomHandler.getAttribute(downCell, 'data-p-selectable-cell') ? downCell : findDownSelectableCell(downCell) : null;
  };
  const findUpSelectableCell = cell => {
    const upRow = cell.parentElement.previousElementSibling;
    const upCell = upRow ? upRow.children[props.index] : null;
    return upRow && upCell ? DomHandler.getAttribute(upRow, 'data-p-selectable-row') && DomHandler.getAttribute(upCell, 'data-p-selectable-cell') ? upCell : findUpSelectableCell(upCell) : null;
  };
  const changeTabIndex = (currentCell, nextCell) => {
    if (currentCell && nextCell) {
      currentCell.tabIndex = -1;
      nextCell.tabIndex = props.tabIndex;
    }
  };
  const focusOnElement = () => {
    clearTimeout(tabindexTimeout.current);
    tabindexTimeout.current = setTimeout(() => {
      if (editingState) {
        const focusableEl = props.editMode === 'cell' ? DomHandler.getFirstFocusableElement(elementRef.current, ':not([data-pc-section="editorkeyhelperlabel"])') : DomHandler.findSingle(elementRef.current, '[data-p-row-editor-save="true"]');
        focusableEl && focusableEl.focus();
      }
      keyHelperRef.current && (keyHelperRef.current.tabIndex = editingState ? -1 : 0);
    }, 1);
  };
  const focusOnInit = () => {
    clearTimeout(initFocusTimeout.current);
    initFocusTimeout.current = setTimeout(() => {
      const focusableEl = props.editMode === 'row' ? DomHandler.findSingle(elementRef.current, '[data-p-row-editor-init="true"]') : null;
      focusableEl && focusableEl.focus();
    }, 1);
  };
  const updateStickyPosition = () => {
    if (getColumnProp('frozen')) {
      const styleObject = {
        ...styleObjectState
      };
      const align = getColumnProp('alignFrozen');
      if (align === 'right') {
        let right = 0;
        const next = elementRef.current && elementRef.current.nextElementSibling;
        if (next) {
          right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
        }
        styleObject.right = `${right}px`;
      } else {
        let left = 0;
        const prev = elementRef.current && elementRef.current.previousElementSibling;
        if (prev) {
          left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
        }
        styleObject.left = `${left}px`;
      }
      const isSameStyle = styleObjectState.left === styleObject.left && styleObjectState.right === styleObject.right;
      !isSameStyle && setStyleObjectState(styleObject);
    }
  };
  const editorCallback = val => {
    const editingRowData = {
      ...editingRowDataState
    };
    ObjectUtils.mutateFieldData(editingRowData, field, val);
    setEditingRowDataState(editingRowData);

    // update editing meta for complete methods on row mode
    const currentData = getEditingRowData();
    if (currentData) {
      ObjectUtils.mutateFieldData(currentData, field, val);
    }
  };
  const onClick = event => {
    const params = getCellCallbackParams(event);
    if (props.editMode !== 'row' && isEditable() && !editingState && (props.selectOnEdit || !props.selectOnEdit && props.selected)) {
      selfClick.current = true;
      const onBeforeCellEditShow = getColumnProp('onBeforeCellEditShow');
      const onCellEditInit = getColumnProp('onCellEditInit');
      const cellEditValidatorEvent = getColumnProp('cellEditValidatorEvent');
      if (onBeforeCellEditShow) {
        // if user returns false do not show the editor
        if (onBeforeCellEditShow(params) === false) {
          return;
        }

        // if user prevents default stop the editor
        if (event && event.defaultPrevented) {
          return;
        }
      }

      // If the data is sorted using sort icon, it has been added to wait for the sort operation when any cell is wanted to be opened.
      setTimeout(() => {
        setEditingState(true);
        if (onCellEditInit) {
          if (onCellEditInit(params) === false) {
            return;
          }

          // if user prevents default stop the editor
          if (event && event.defaultPrevented) {
            return;
          }
        }
        if (cellEditValidatorEvent === 'click') {
          bindDocumentClickListener();
          overlayEventListener.current = e => {
            if (!isOutsideClicked(e.target)) {
              selfClick.current = true;
            }
          };
          OverlayService.on('overlay-click', overlayEventListener.current);
        }
      }, 1);
    }
    if (props.allowCellSelection && props.onClick) {
      props.onClick(params);
    }
  };
  const onMouseDown = event => {
    const params = getCellCallbackParams(event);
    props.onMouseDown && props.onMouseDown(params);
  };
  const onMouseUp = event => {
    const params = getCellCallbackParams(event);
    props.onMouseUp && props.onMouseUp(params);
  };
  const onKeyDown = event => {
    if (props.editMode !== 'row') {
      if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Tab') {
        switchCellToViewMode(event, true);
      }
      if (event.code === 'Escape') {
        switchCellToViewMode(event, false);
      }
    }
    if (props.allowCellSelection) {
      const {
        target,
        currentTarget: cell
      } = event;
      switch (event.code) {
        case 'ArrowLeft':
          {
            const prevCell = findPrevSelectableCell(cell);
            if (prevCell) {
              changeTabIndex(cell, prevCell);
              prevCell.focus();
            }
            event.preventDefault();
            break;
          }
        case 'ArrowRight':
          {
            const nextCell = findNextSelectableCell(cell);
            if (nextCell) {
              changeTabIndex(cell, nextCell);
              nextCell.focus();
            }
            event.preventDefault();
            break;
          }
        case 'ArrowUp':
          {
            const upCell = findUpSelectableCell(cell);
            if (upCell) {
              changeTabIndex(cell, upCell);
              upCell.focus();
            }
            event.preventDefault();
            break;
          }
        case 'ArrowDown':
          {
            const downCell = findDownSelectableCell(cell);
            if (downCell) {
              changeTabIndex(cell, downCell);
              downCell.focus();
            }
            event.preventDefault();
            break;
          }
        case 'Enter':
        case 'NumpadEnter':
          if (event.shiftKey || event.ctrlKey) ; else if (!DomHandler.isClickable(target)) {
            onClick(event);
            event.preventDefault();
          }
          break;
        case 'Space':
          if (!DomHandler.isClickable(target) && !target.readOnly) {
            onClick(event);
            event.preventDefault();
          }
          break;
      }
    }
  };
  const onBlur = event => {
    selfClick.current = false;
    if (props.editMode !== 'row' && editingState && getColumnProp('cellEditValidatorEvent') === 'blur') {
      switchCellToViewMode(event, true);
    }
  };
  const onEditorFocus = event => {
    onClick(event);
  };
  const onRadioChange = event => {
    props.onRadioChange({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onCheckboxChange = event => {
    props.onCheckboxChange({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onRowToggle = event => {
    props.onRowToggle({
      originalEvent: event,
      data: props.rowData
    });
    event.preventDefault();
    event.stopPropagation();
  };
  const onRowEditInit = event => {
    props.onRowEditInit({
      originalEvent: event,
      data: props.rowData,
      newData: getEditingRowData(),
      field,
      index: props.rowIndex
    });
  };
  const onRowEditSave = event => {
    props.onRowEditSave({
      originalEvent: event,
      data: props.rowData,
      newData: getEditingRowData(),
      field,
      index: props.rowIndex
    });
    focusOnInit();
  };
  const onRowEditCancel = event => {
    props.onRowEditCancel({
      originalEvent: event,
      data: props.rowData,
      newData: getEditingRowData(),
      field,
      index: props.rowIndex
    });
    focusOnInit();
  };
  React.useEffect(() => {
    if (getColumnProp('frozen')) {
      updateStickyPosition();
    }
    if (props.editMode === 'cell' || props.editMode === 'row') {
      focusOnElement();
    }
  });
  React.useEffect(() => {
    if (props.editMode === 'row' && props.editing !== editingState) {
      setEditingState(props.editing);
    }
  }, [props.editMode, props.editing, editingState]);
  useUpdateEffect(() => {
    if (props.editMode === 'cell' || props.editMode === 'row') {
      setEditingRowDataState(getEditingRowData());
    }
  }, [props.editingMeta]);
  React.useEffect(() => {
    if (props.editMode === 'cell' || props.editMode === 'row') {
      const callbackParams = getCellCallbackParams();
      const params = {
        ...callbackParams,
        editing: editingState,
        editingKey
      };
      props.onEditingMetaChange(params);
    }
  }, [editingState]);
  useUnmountEffect(() => {
    if (overlayEventListener.current) {
      OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
    }
  });
  const createLoading = () => {
    const options = getVirtualScrollerOption('getLoaderOptions')(props.rowIndex, {
      cellIndex: props.index,
      cellFirst: props.index === 0,
      cellLast: props.index === getVirtualScrollerOption('columns').length - 1,
      cellEven: props.index % 2 === 0,
      cellOdd: props.index % 2 !== 0,
      column: props.column,
      field
    });
    const content = ObjectUtils.getJSXElement(getVirtualScrollerOption('loadingTemplate'), options);
    const bodyCellProps = mergeProps(getColumnPTOptions('bodyCell'), {
      role: 'cell'
    });
    return /*#__PURE__*/React.createElement("td", bodyCellProps, content);
  };
  const createElement = () => {
    let content;
    let editorKeyHelper;
    const cellSelected = props.allowCellSelection && isSelected();
    const isRowEditor = props.editMode === 'row';
    const tabIndex = getTabIndex(cellSelected);
    const selectionMode = getColumnProp('selectionMode');
    const rowReorder = getColumnProp('rowReorder');
    const header = getColumnProp('header');
    const body = getColumnProp('body');
    const editor = getColumnProp('editor');
    const frozen = getColumnProp('frozen');
    const align = getColumnProp('align');
    const value = resolveFieldData();
    const columnBodyOptions = {
      column: props.column,
      field,
      rowIndex: props.rowIndex,
      frozenRow: props.frozenRow,
      props: props.tableProps
    };
    const rowEditor = ObjectUtils.getPropValue(getColumnProp('rowEditor'), props.rowData, columnBodyOptions);
    const expander = ObjectUtils.getPropValue(getColumnProp('expander'), props.rowData, columnBodyOptions);
    const cellClassName = ObjectUtils.getPropValue(props.cellClassName, value, columnBodyOptions);
    const bodyClassName = ObjectUtils.getPropValue(getColumnProp('bodyClassName'), props.rowData, columnBodyOptions);
    const style = getStyle();
    const columnTitleProps = mergeProps({
      className: cx('columnTitle')
    }, getColumnPTOptions('columnTitle'));
    const title = props.responsiveLayout === 'stack' && /*#__PURE__*/React.createElement("span", columnTitleProps, ObjectUtils.getJSXElement(header, {
      props: props.tableProps
    }));
    if (selectionMode) {
      const showSelection = props.showSelectionElement ? props.showSelectionElement(props.rowData, {
        rowIndex: props.rowIndex,
        props: props.tableProps
      }) : true;
      let label;
      if (showSelection) {
        const ariaLabelField = props.selectionAriaLabel || props.tableProps.dataKey;
        const ariaLabelText = ObjectUtils.resolveFieldData(props.rowData, ariaLabelField);
        label = `${props.selected ? ariaLabel('unselectLabel') : ariaLabel('selectLabel')} ${ariaLabelText}`;
      }
      content = showSelection && /*#__PURE__*/React.createElement(React.Fragment, null, selectionMode === 'single' && /*#__PURE__*/React.createElement(RowRadioButton, {
        hostName: props.hostName,
        column: props.column,
        checked: props.selected,
        disabled: !props.isSelectable({
          data: props.rowData,
          index: props.rowIndex
        }),
        onChange: onRadioChange,
        tabIndex: props.tabIndex,
        tableSelector: props.tableSelector,
        ariaLabel: label,
        ptCallbacks: props.ptCallbacks,
        metaData: props.metaData
      }), selectionMode === 'multiple' && /*#__PURE__*/React.createElement(RowCheckbox, {
        hostName: props.hostName,
        column: props.column,
        checked: props.selected,
        disabled: !props.isSelectable({
          data: props.rowData,
          index: props.rowIndex
        }),
        onChange: onCheckboxChange,
        tabIndex: props.tabIndex,
        ariaLabel: label,
        checkIcon: props.checkIcon,
        ptCallbacks: props.ptCallbacks,
        metaData: props.metaData
      }));
    } else if (rowReorder) {
      const showReorder = props.showRowReorderElement ? props.showRowReorderElement(props.rowData, {
        rowIndex: props.rowIndex,
        props: props.tableProps
      }) : true;
      const rowReorderIconProps = mergeProps({
        className: cx('rowReorderIcon')
      }, getColumnPTOptions('rowReorderIcon'));
      const rowReorderIcon = getColumnProp('rowReorderIcon') || /*#__PURE__*/React.createElement(BarsIcon, rowReorderIconProps);
      content = showReorder ? IconUtils.getJSXIcon(rowReorderIcon, {
        ...rowReorderIconProps
      }, {
        props
      }) : null;
    } else if (expander) {
      const rowTogglerIconProps = mergeProps({
        className: cx('rowTogglerIcon'),
        'aria-hidden': true
      }, getColumnPTOptions('rowTogglerIcon'));
      const icon = props.expanded ? props.expandedRowIcon || /*#__PURE__*/React.createElement(ChevronDownIcon, rowTogglerIconProps) : props.collapsedRowIcon || /*#__PURE__*/React.createElement(ChevronRightIcon, rowTogglerIconProps);
      const togglerIcon = IconUtils.getJSXIcon(icon, {
        ...rowTogglerIconProps
      }, {
        props
      });
      const ariaControls = `${props.tableSelector}_content_${props.rowIndex}_expanded`;
      const ariaLabelField = props.selectionAriaLabel || props.tableProps.dataKey;
      const ariaLabelText = ObjectUtils.resolveFieldData(props.rowData, ariaLabelField);
      const label = `${props.expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel')} ${ariaLabelText}`;
      const expanderProps = {
        onClick: onRowToggle,
        className: cx('rowToggler')
      };
      const rowTogglerProps = mergeProps({
        ...expanderProps,
        type: 'button',
        'aria-expanded': props.expanded,
        'aria-controls': ariaControls,
        tabIndex: props.tabIndex,
        'aria-label': label
      }, getColumnPTOptions('rowToggler'));
      content = /*#__PURE__*/React.createElement("button", rowTogglerProps, togglerIcon, /*#__PURE__*/React.createElement(Ripple, null));
      if (body) {
        expanderProps.element = content;
        content = ObjectUtils.getJSXElement(body, props.rowData, {
          column: props.column,
          field,
          rowIndex: props.rowIndex,
          frozenRow: props.frozenRow,
          props: props.tableProps,
          expander: expanderProps
        });
      }
    } else if (isRowEditor && rowEditor) {
      let rowEditorProps = {};
      const rowEditorSaveIconProps = mergeProps({
        className: cx('rowEditorSaveIcon')
      }, getColumnPTOptions('rowEditorSaveIcon'));
      const rowEditorCancelIconProps = mergeProps({
        className: cx('rowEditorCancelIcon')
      }, getColumnPTOptions('rowEditorCancelIcon'));
      const rowEditorInitIconProps = mergeProps({
        className: cx('rowEditorInitIcon')
      }, getColumnPTOptions('rowEditorInitIcon'));
      const rowEditorSaveIcon = IconUtils.getJSXIcon(props.rowEditorSaveIcon || /*#__PURE__*/React.createElement(CheckIcon, rowEditorSaveIconProps), {
        ...rowEditorSaveIconProps
      }, {
        props
      });
      const rowEditorCancelIcon = IconUtils.getJSXIcon(props.rowEditorCancelIcon || /*#__PURE__*/React.createElement(TimesIcon, rowEditorCancelIconProps), {
        ...rowEditorCancelIconProps
      }, {
        props
      });
      const rowEditorInitIcon = IconUtils.getJSXIcon(props.rowEditorInitIcon || /*#__PURE__*/React.createElement(PencilIcon, rowEditorInitIconProps), {
        ...rowEditorInitIconProps
      }, {
        props
      });
      if (editingState) {
        rowEditorProps = {
          editing: true,
          onSaveClick: onRowEditSave,
          saveClassName: cx('rowEditorSaveButton'),
          onCancelClick: onRowEditCancel,
          cancelClassName: cx('rowEditorCancelButton')
        };
        const rowEditorSaveButtonProps = mergeProps({
          type: 'button',
          name: 'row-save',
          'aria-label': ariaLabel('saveEdit'),
          onClick: rowEditorProps.onSaveClick,
          className: rowEditorProps.saveClassName,
          tabIndex: props.tabIndex,
          'data-p-row-editor-save': true
        }, getColumnPTOptions('rowEditorSaveButton'));
        const rowEditorCancelButtonProps = mergeProps({
          type: 'button',
          name: 'row-cancel',
          'aria-label': ariaLabel('cancelEdit'),
          onClick: rowEditorProps.onCancelClick,
          className: rowEditorProps.cancelClassName,
          tabIndex: props.tabIndex
        }, getColumnPTOptions('rowEditorCancelButton'));
        content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", rowEditorSaveButtonProps, rowEditorSaveIcon, /*#__PURE__*/React.createElement(Ripple, null)), /*#__PURE__*/React.createElement("button", rowEditorCancelButtonProps, rowEditorCancelIcon, /*#__PURE__*/React.createElement(Ripple, null)));
      } else {
        rowEditorProps = {
          editing: false,
          onInitClick: onRowEditInit,
          initClassName: cx('rowEditorInitButton')
        };
        const rowEditorInitButtonProps = mergeProps({
          type: 'button',
          name: 'row-edit',
          'aria-label': ariaLabel('editRow'),
          onClick: rowEditorProps.onInitClick,
          className: rowEditorProps.initClassName,
          tabIndex: props.tabIndex,
          'data-p-row-editor-init': true
        }, getColumnPTOptions('rowEditorInitButton'));
        content = /*#__PURE__*/React.createElement("button", rowEditorInitButtonProps, rowEditorInitIcon, /*#__PURE__*/React.createElement(Ripple, null));
      }
      if (body) {
        rowEditorProps.element = content;
        content = ObjectUtils.getJSXElement(body, props.rowData, {
          column: props.column,
          field,
          rowIndex: props.rowIndex,
          frozenRow: props.frozenRow,
          props: props.tableProps,
          rowEditor: rowEditorProps
        });
      }
    } else if (body && (!editingState || !editor)) {
      content = body ? ObjectUtils.getJSXElement(body, props.rowData, {
        column: props.column,
        field,
        rowIndex: props.rowIndex,
        frozenRow: props.frozenRow,
        props: props.tableProps
      }) : value;
    } else if (editor && editingState) {
      content = ObjectUtils.getJSXElement(editor, {
        rowData: editingRowDataState,
        value: resolveFieldData(editingRowDataState),
        column: props.column,
        field,
        rowIndex: props.rowIndex,
        frozenRow: props.frozenRow,
        props: props.tableProps,
        editorCallback
      });
    } else {
      content = value;
    }
    content = typeof content === 'boolean' ? content.toString() : content;
    if (!isRowEditor && editor) {
      const editorKeyHelperProps = mergeProps({
        tabIndex: '0',
        className: 'p-cell-editor-key-helper p-hidden-accessible',
        onFocus: e => onEditorFocus(e)
      }, getColumnPTOptions('editorKeyHelperLabel'));
      const editorKeyHelperLabelProps = mergeProps(getColumnPTOptions('editorKeyHelper'));
      editorKeyHelper = /*#__PURE__*/React.createElement("a", _extends({
        ref: keyHelperRef
      }, editorKeyHelperProps), /*#__PURE__*/React.createElement("span", editorKeyHelperLabelProps));
    }
    const bodyCellProps = mergeProps({
      style,
      className: classNames(bodyClassName, getColumnProp('className'), cellClassName, cx('bodyCell', {
        selectionMode,
        editor,
        editingState,
        frozen,
        cellSelected,
        align,
        bodyProps: props,
        getCellParams
      })),
      rowSpan: props.rowSpan,
      tabIndex,
      role: 'cell',
      onClick: e => onClick(e),
      onKeyDown: e => onKeyDown(e),
      onBlur: e => onBlur(e),
      onMouseDown: e => onMouseDown(e),
      onMouseUp: e => onMouseUp(e),
      'data-p-selectable-cell': props.allowCellSelection && props.isSelectable({
        data: getCellParams(),
        index: props.rowIndex
      }),
      'data-p-selection-column': getColumnProp('selectionMode') != null,
      'data-p-editable-column': isEditable() != null,
      'data-p-cell-editing': editingState,
      'data-p-frozen-column': frozen
    }, getColumnPTOptions('root'), getColumnPTOptions('bodyCell'));
    return /*#__PURE__*/React.createElement("td", _extends({
      ref: elementRef
    }, bodyCellProps), editorKeyHelper, title, content);
  };
  return getVirtualScrollerOption('loading') ? createLoading() : createElement();
});
BodyCell.displayName = 'BodyCell';

const BodyRow = /*#__PURE__*/React__default.memo(props => {
  const mergeProps = useMergeProps();
  const [editingState, setEditingState] = React__default.useState(false);
  const editing = props.onRowEditChange ? props.editing : editingState;
  const {
    ptm,
    cx
  } = props.ptCallbacks;
  const getBodyRowPTOptions = key => ptm(key, {
    parent: props.metaData,
    hostName: props.hostName,
    state: {
      editing
    },
    context: {
      index: props.index,
      selectable: props.allowRowSelection && props.isSelectable({
        data: props.rowData,
        index: props.rowIndex
      }),
      selected: !props.allowCellSelection && props.selected || props.contextMenuSelected,
      stripedRows: props.metaData.props.stripedRows
    }
  });
  const getColumnProp = (column, name) => ColumnBase.getCProp(column, name);
  const isFocusable = () => props.selectionMode && props.selectionModeInColumn !== 'single' && props.selectionModeInColumn !== 'multiple';
  const isGrouped = column => {
    const columnField = getColumnProp(column, 'field');
    if (props.groupRowsBy && columnField) {
      return Array.isArray(props.groupRowsBy) ? props.groupRowsBy.indexOf(columnField) > -1 : props.groupRowsBy === columnField;
    }
    return false;
  };
  const equals = (data1, data2) => props.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, props.dataKey);
  const getTabIndex = () => isFocusable() && !props.allowCellSelection ? props.rowIndex === 0 ? props.tabIndex : -1 : null;
  const findIndex = (collection, rowData) => (collection || []).findIndex(data => equals(rowData, data));
  const changeTabIndex = (currentRow, nextRow) => {
    if (currentRow && nextRow) {
      currentRow.tabIndex = -1;
      nextRow.tabIndex = props.tabIndex;
    }
  };
  const findFirstSelectableRow = row => {
    const firstRow = DomHandler.findSingle(row.parentNode, 'tr[data-p-selectable-row]');
    return firstRow || null;
  };
  const findNextSelectableRow = row => {
    const nextRow = row.nextElementSibling;
    return nextRow ? DomHandler.getAttribute(nextRow, 'data-p-selectable-row') === true ? nextRow : findNextSelectableRow(nextRow) : null;
  };
  const findPrevSelectableRow = row => {
    const prevRow = row.previousElementSibling;
    return prevRow ? DomHandler.getAttribute(prevRow, 'data-p-selectable-row') === true ? prevRow : findPrevSelectableRow(prevRow) : null;
  };
  const findLastSelectableRow = row => {
    const lastRow = DomHandler.findSingle(row.parentNode, 'tr[data-p-selectable-row]:last-child');
    return lastRow || null;
  };
  const shouldRenderBodyCell = (value, column, i) => {
    if (getColumnProp(column, 'hidden')) {
      return false;
    }
    if (props.rowGroupMode && props.rowGroupMode === 'rowspan' && isGrouped(column)) {
      const prevRowData = value[i - 1];
      if (prevRowData) {
        const currentRowFieldData = ObjectUtils.resolveFieldData(value[i], getColumnProp(column, 'field'));
        const previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, getColumnProp(column, 'field'));
        return currentRowFieldData !== previousRowFieldData;
      }
    }
    return true;
  };
  const calculateRowGroupSize = (value, column, index) => {
    if (isGrouped(column)) {
      const currentRowFieldData = ObjectUtils.resolveFieldData(value[index], getColumnProp(column, 'field'));
      let nextRowFieldData = currentRowFieldData;
      let groupRowSpan = 0;
      while (currentRowFieldData === nextRowFieldData) {
        groupRowSpan++;
        const nextRowData = value[++index];
        if (nextRowData) {
          nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, getColumnProp(column, 'field'));
        } else {
          break;
        }
      }
      return groupRowSpan === 1 ? null : groupRowSpan;
    }
    return null;
  };
  const onClick = event => {
    props.onRowClick({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onDoubleClick = event => {
    props.onRowDoubleClick({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onPointerDown = event => {
    props.onRowPointerDown({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onPointerUp = event => {
    props.onRowPointerUp({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onRightClick = event => {
    props.onRowRightClick({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onMouseEnter = event => {
    props.onRowMouseEnter({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onMouseLeave = event => {
    props.onRowMouseLeave({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onTouchEnd = event => {
    props.onRowTouchEnd(event);
  };
  const onKeyDown = event => {
    if (isFocusable() && !props.allowCellSelection) {
      const {
        target,
        currentTarget: row
      } = event;
      switch (event.code) {
        case 'ArrowDown':
          onArrowDownKey(row, event);
          break;
        case 'ArrowUp':
          onArrowUpKey(row, event);
          break;
        case 'Home':
          onHomeKey(row, event);
          break;
        case 'End':
          onEndKey(row, event);
          break;
        case 'Enter':
        case 'NumpadEnter':
          onEnterKey(row, event, target);
          break;
        case 'Space':
          onSpaceKey(row, event, target);
          break;
        case 'Tab':
          onTabKey(row, event);
          break;
      }
    }
  };
  const onArrowDownKey = (row, event) => {
    const nextRow = findNextSelectableRow(row);
    if (nextRow) {
      changeTabIndex(row, nextRow);
      nextRow.focus();
    }
    event.preventDefault();
  };
  const onArrowUpKey = (row, event) => {
    const prevRow = findPrevSelectableRow(row);
    if (prevRow) {
      changeTabIndex(row, prevRow);
      prevRow.focus();
    }
    event.preventDefault();
  };
  const onHomeKey = (row, event) => {
    const firstRow = findFirstSelectableRow(row);
    if (firstRow) {
      changeTabIndex(row, firstRow);
      firstRow.focus();
    }
    event.preventDefault();
  };
  const onEndKey = (row, event) => {
    const lastRow = findLastSelectableRow(row);
    if (lastRow) {
      changeTabIndex(row, lastRow);
      lastRow.focus();
    }
    event.preventDefault();
  };
  const onEnterKey = (row, event, target) => {
    if (!DomHandler.isClickable(target)) {
      onClick(event);
      event.preventDefault();
    }
  };
  const onSpaceKey = (row, event, target) => {
    if (!DomHandler.isClickable(target) && !target.readOnly) {
      onClick(event);
      event.preventDefault();
    }
  };
  const onTabKey = (row, event) => {
    const parent = row.parentNode;
    const rows = DomHandler.find(parent, 'tr[data-p-selectable-row="true"]');
    if (event.code === 'Tab' && rows && rows.length > 0) {
      const firstSelectedRow = DomHandler.findSingle(parent, 'tr[data-p-highlight="true"]');
      const focusedItem = DomHandler.findSingle(parent, 'tr[data-p-selectable-row="true"][tabindex="0"]');
      if (firstSelectedRow) {
        firstSelectedRow.tabIndex = '0';
        focusedItem && focusedItem !== firstSelectedRow && (focusedItem.tabIndex = '-1');
      } else {
        rows[0].tabIndex = '0';
        focusedItem !== rows[0] && (rows[rowIndex].tabIndex = '-1');
      }
    }
  };
  const onMouseDown = event => {
    props.onRowMouseDown({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onMouseUp = event => {
    props.onRowMouseUp({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onDragStart = event => {
    props.onRowDragStart({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onDragOver = event => {
    props.onRowDragOver({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onDragLeave = event => {
    props.onRowDragLeave({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onDragEnd = event => {
    props.onRowDragEnd({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onDrop = event => {
    props.onRowDrop({
      originalEvent: event,
      data: props.rowData,
      index: props.rowIndex
    });
  };
  const onEditChange = (e, isEditing) => {
    if (props.onRowEditChange) {
      let editingRows;
      const {
        dataKey
      } = props;
      const {
        originalEvent,
        data,
        index,
        newData
      } = e;
      if (dataKey) {
        const dataKeyValue = String(ObjectUtils.resolveFieldData(data, dataKey));
        editingRows = props.editingRows ? {
          ...props.editingRows
        } : {};
        if (!isEditing) {
          delete editingRows[dataKeyValue];
          // if the key value was changed, stop editing for the new key value too
          const newDataKeyValue = String(ObjectUtils.resolveFieldData(newData, dataKey));
          delete editingRows[newDataKeyValue];
        } else {
          editingRows[dataKeyValue] = true;
        }
      } else {
        const editingRowIndex = findIndex(props.editingRows, data);
        editingRows = props.editingRows ? [...props.editingRows] : [];
        if (editingRowIndex !== -1) {
          editingRows = editingRows.filter((val, i) => i !== editingRowIndex);
        } else {
          editingRows.push(data);
        }
      }
      props.onRowEditChange({
        originalEvent,
        data: editingRows,
        index
      });
    } else {
      setEditingState(isEditing);
    }
  };
  const onEditInit = e => {
    const {
      originalEvent: event
    } = e;
    if (props.onRowEditInit) {
      props.onRowEditInit({
        originalEvent: event,
        data: props.rowData,
        index: props.rowIndex
      });
    }
    onEditChange(e, true);
    event.preventDefault();
  };
  const onEditSave = e => {
    const {
      originalEvent: event,
      newData
    } = e;
    const valid = props.rowEditValidator ? props.rowEditValidator(newData, {
      props: props.tableProps,
      rowIndex: props.rowIndex
    }) : true;
    if (props.onRowEditSave) {
      props.onRowEditSave({
        originalEvent: event,
        data: props.rowData,
        index: props.rowIndex,
        newData,
        valid
      });
    }
    if (valid) {
      if (props.onRowEditComplete) {
        props.onRowEditComplete(e);
      }
      onEditChange(e, false);
    }
    event.preventDefault();
  };
  const onEditCancel = e => {
    const {
      originalEvent: event
    } = e;
    if (props.onRowEditCancel) {
      props.onRowEditCancel({
        originalEvent: event,
        data: props.rowData,
        index: props.rowIndex
      });
    }
    onEditChange(e, false);
    event.preventDefault();
  };
  const createContent = () => props.columns.map((col, i) => {
    if (shouldRenderBodyCell(props.value, col, props.index)) {
      const key = `${props.rowIndex}_${getColumnProp(col, 'columnKey') || getColumnProp(col, 'field')}_${i}`;
      const rowSpan = props.rowGroupMode === 'rowspan' ? calculateRowGroupSize(props.value, col, props.index) : null;
      return /*#__PURE__*/React__default.createElement(BodyCell, {
        hostName: props.hostName,
        key: key,
        allowCellSelection: props.allowCellSelection,
        cellClassName: props.cellClassName,
        checkIcon: props.checkIcon,
        collapsedRowIcon: props.collapsedRowIcon,
        column: col,
        compareSelectionBy: props.compareSelectionBy,
        dataKey: props.dataKey,
        editMode: props.editMode,
        editing: editing,
        editingMeta: props.editingMeta,
        expanded: props.expanded,
        expandedRowIcon: props.expandedRowIcon,
        frozenRow: props.frozenRow,
        index: i,
        isSelectable: props.isSelectable,
        onCheckboxChange: props.onCheckboxChange,
        onClick: props.onCellClick,
        onEditingMetaChange: props.onEditingMetaChange,
        onMouseDown: props.onCellMouseDown,
        onMouseUp: props.onCellMouseUp,
        onRadioChange: props.onRadioChange,
        onRowEditCancel: onEditCancel,
        onRowEditInit: onEditInit,
        onRowEditSave: onEditSave,
        onRowToggle: props.onRowToggle,
        responsiveLayout: props.responsiveLayout,
        rowData: props.rowData,
        rowEditorCancelIcon: props.rowEditorCancelIcon,
        rowEditorInitIcon: props.rowEditorInitIcon,
        rowEditorSaveIcon: props.rowEditorSaveIcon,
        rowIndex: props.rowIndex,
        rowSpan: rowSpan,
        selectOnEdit: props.selectOnEdit,
        selected: props.selected,
        selection: props.selection,
        selectionAriaLabel: props.tableProps.selectionAriaLabel,
        showRowReorderElement: props.showRowReorderElement,
        showSelectionElement: props.showSelectionElement,
        tabIndex: props.tabIndex,
        tableProps: props.tableProps,
        tableSelector: props.tableSelector,
        value: props.value,
        virtualScrollerOptions: props.virtualScrollerOptions,
        ptCallbacks: props.ptCallbacks,
        metaData: props.metaData
      });
    }
    return null;
  });
  const rowClassName = ObjectUtils.getPropValue(props.rowClassName, props.rowData, {
    props: props.tableProps
  });
  const style = {
    height: props.virtualScrollerOptions ? props.virtualScrollerOptions.itemSize : undefined
  };
  const content = createContent();
  const tabIndex = getTabIndex();
  const rowProps = mergeProps({
    role: 'row',
    tabIndex,
    className: classNames(cx('bodyRow', {
      rowProps: props
    })),
    style,
    onMouseDown: e => onMouseDown(e),
    onMouseUp: e => onMouseUp(e),
    onMouseEnter: e => onMouseEnter(e),
    onMouseLeave: e => onMouseLeave(e),
    onClick: e => onClick(e),
    onDoubleClick: e => onDoubleClick(e),
    onPointerDown: e => onPointerDown(e),
    onPointerUp: e => onPointerUp(e),
    onContextMenu: e => onRightClick(e),
    onTouchEnd: e => onTouchEnd(e),
    onKeyDown: e => onKeyDown(e),
    onDragStart: e => onDragStart(e),
    onDragOver: e => onDragOver(e),
    onDragLeave: e => onDragLeave(e),
    onDragEnd: e => onDragEnd(e),
    onDrop: e => onDrop(e),
    'aria-selected': props?.selectionMode ? props.selected : null,
    'data-p-selectable-row': props.allowRowSelection && props.isSelectable({
      data: props.rowData,
      index: props.rowIndex
    }),
    'data-p-highlight': props.selected,
    'data-p-highlight-contextmenu': props.contextMenuSelected
  }, getBodyRowPTOptions('bodyRow'), {
    className: classNames(rowClassName) // #5983 must be last so all unstyled merging takes place first
  });
  return /*#__PURE__*/React__default.createElement("tr", rowProps, content);
});
BodyRow.displayName = 'BodyRow';

const RowTogglerButton = /*#__PURE__*/React.memo(props => {
  const mergeProps = useMergeProps();
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const onClick = event => {
    props.onClick({
      originalEvent: event,
      data: props.rowData
    });
  };
  const getColumnProps = () => ColumnBase.getCProps(props.column);
  const getColumnPTOptions = key => {
    const cProps = getColumnProps();
    const columnMetaData = {
      props: getColumnProps(),
      parent: props.metaData,
      hostName: props.hostName
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
  };
  const rowGroupTogglerIconProps = mergeProps({
    className: cx('rowGroupTogglerIcon'),
    'aria-hidden': true
  }, getColumnPTOptions('rowGroupTogglerIcon'));
  const icon = props.expanded ? props.expandedRowIcon || /*#__PURE__*/React.createElement(ChevronDownIcon, rowGroupTogglerIconProps) : props.collapsedRowIcon || /*#__PURE__*/React.createElement(ChevronRightIcon, rowGroupTogglerIconProps);
  const togglerIcon = IconUtils.getJSXIcon(icon, {
    ...rowGroupTogglerIconProps
  }, {
    props
  });
  const label = props.expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
  const rowGroupTogglerProps = mergeProps({
    type: 'button',
    onClick: e => onClick(e),
    className: cx('rowGroupToggler'),
    tabIndex: props.tabIndex,
    'aria-label': label
  }, getColumnPTOptions('rowGroupToggler'));
  return /*#__PURE__*/React.createElement("button", rowGroupTogglerProps, togglerIcon, /*#__PURE__*/React.createElement(Ripple, null));
});
RowTogglerButton.displayName = 'RowTogglerButton';

const TableBody = /*#__PURE__*/React.memo(
/*#__PURE__*/
// eslint-disable-next-line no-unused-vars
React.forwardRef((props, ref) => {
  const mergeProps = useMergeProps();
  const {
    ptm,
    ptmo,
    cx,
    isUnsyled
  } = props.ptCallbacks;
  const [rowGroupHeaderStyleObjectState, setRowGroupHeaderStyleObjectState] = React.useState({});
  const getColumnProps = column => ColumnBase.getCProps(column);
  const getColumnPTOptions = key => {
    const cProps = getColumnProps(props.column);
    const columnMetaData = {
      props: cProps,
      parent: props.metaData,
      hostName: props.hostName,
      state: {
        rowGroupHeaderStyleObject: rowGroupHeaderStyleObjectState
      }
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
  };
  const elementRef = React.useRef(null);
  const refCallback = React.useCallback(el => {
    elementRef.current = el;
    props.virtualScrollerContentRef && props.virtualScrollerContentRef(el);
  }, [props]);
  const dragSelectionHelper = React.useRef(null);
  const initialDragPosition = React.useRef(null);
  const anchorRowIndex = React.useRef(null);
  const anchorCellIndex = React.useRef(null);
  const rangeRowIndex = React.useRef(null);
  const anchorRowFirst = React.useRef(null);
  const rowTouched = React.useRef(false);
  const rowDragging = React.useRef(false);
  const draggedRowIndex = React.useRef(null);
  const droppedRowIndex = React.useRef(null);
  const isSubheaderGrouping = props.rowGroupMode && props.rowGroupMode === 'subheader';
  const isRadioSelectionMode = props.selectionMode === 'radiobutton';
  const isCheckboxSelectionMode = props.selectionMode === 'checkbox';
  const isRadioSelectionModeInColumn = props.selectionModeInColumn === 'single';
  const isCheckboxSelectionModeInColumn = props.selectionModeInColumn === 'multiple';
  const equals = (data1, data2) => {
    if (allowCellSelection()) {
      return (data1.rowIndex === data2.rowIndex || data1.rowData === data2.rowData) && (data1.field === data2.field || data1.cellIndex === data2.cellIndex);
    }
    return props.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, props.dataKey);
  };
  const isSelectionEnabled = () => props.selectionMode || props.selectionModeInColumn !== null || props.columns && props.columns.some(col => col && !!getColumnProp(col, 'selectionMode'));
  const isSingleSelection = () => props.selectionMode === 'single' && !isCheckboxSelectionModeInColumn || !isRadioSelectionMode && isRadioSelectionModeInColumn;
  const isMultipleSelection = () => props.selectionMode === 'multiple' && !isRadioSelectionModeInColumn || isCheckboxSelectionModeInColumn;
  const isRadioOnlySelection = () => isRadioSelectionMode && isRadioSelectionModeInColumn;
  const isCheckboxOnlySelection = () => isCheckboxSelectionMode && isCheckboxSelectionModeInColumn;
  const isSelected = rowData => {
    if (rowData && props.selection) {
      return props.selection instanceof Array ? findIndex(props.selection, rowData) > -1 : equals(rowData, props.selection);
    }
    return false;
  };
  const isContextMenuSelected = rowData => {
    if (rowData && props.contextMenuSelection) {
      return equals(rowData, props.contextMenuSelection);
    }
    return false;
  };
  const isSelectable = options => props.isDataSelectable ? props.isDataSelectable(options) : true;
  const isRowExpanded = rowData => {
    if (rowData && props.expandedRows) {
      if (isSubheaderGrouping && props.expandableRowGroups) {
        return isRowGroupExpanded(rowData);
      }
      if (props.dataKey) {
        const rowId = ObjectUtils.resolveFieldData(rowData, props.dataKey);
        let expanded = false;
        if (props.expandedRows) {
          if (Array.isArray(props.expandedRows)) {
            expanded = props.expandedRows.some(row => ObjectUtils.resolveFieldData(row, props.dataKey) === rowId);
          } else {
            expanded = props.expandedRows[rowId] !== undefined;
          }
        }
        return expanded;
      }
      return findIndex(props.expandedRows, rowData) !== -1;
    }
    return false;
  };
  const isRowGroupExpanded = rowData => {
    if (props.dataKey === props.groupRowsBy) {
      return Object.keys(props.expandedRows).some(data => ObjectUtils.equals(data, ObjectUtils.resolveFieldData(rowData, props.dataKey)));
    }
    return props.expandedRows.some(data => ObjectUtils.equals(data, rowData, props.groupRowsBy));
  };
  const isRowEditing = rowData => {
    if (props.editMode === 'row' && rowData && props.editingRows) {
      if (props.dataKey) {
        return props.editingRows ? props.editingRows[ObjectUtils.resolveFieldData(rowData, props.dataKey)] !== undefined : false;
      }
      return findIndex(props.editingRows, rowData) !== -1;
    }
    return false;
  };
  const allowDrag = event => props.dragSelection && isMultipleSelection() && !event.originalEvent.shiftKey;
  const allowRowDrag = event => !allowCellSelection() && allowDrag(event) || props.reorderableRows;
  const allowCellDrag = event => allowCellSelection() && allowDrag(event);
  const allowSelection = event => !DomHandler.isClickable(event.originalEvent.target);
  const allowMetaKeySelection = event => !rowTouched.current && (!props.metaKeySelection || props.metaKeySelection && (event.originalEvent.metaKey || event.originalEvent.ctrlKey));
  const allowRangeSelection = event => isMultipleSelection() && event.originalEvent.shiftKey && anchorRowIndex.current !== null;
  const allowRowSelection = () => (props.selectionMode || props.selectionModeInColumn) && !isRadioOnlySelection() && !isCheckboxOnlySelection();
  const allowCellSelection = () => props.cellSelection && !isRadioSelectionModeInColumn && !isCheckboxSelectionModeInColumn;
  const getColumnsLength = () => props.columns ? props.columns.length : 0;
  const getColumnProp = (column, name) => ColumnBase.getCProp(column, name);
  const getVirtualScrollerOption = (option, options) => {
    options = options || props.virtualScrollerOptions;
    return options ? options[option] : null;
  };
  const findIndex = (collection, rowData) => (collection || []).findIndex(data => equals(rowData, data));
  const rowGroupHeaderStyle = () => {
    if (props.scrollable) {
      return {
        top: rowGroupHeaderStyleObjectState.top
      };
    }
    return null;
  };
  const getRowKey = (rowData, index) => props.dataKey ? ObjectUtils.resolveFieldData(rowData, props.dataKey) : index;
  const shouldRenderRowGroupHeader = (value, rowData, i) => {
    const currentRowFieldData = ObjectUtils.resolveFieldData(rowData, props.groupRowsBy);
    const prevRowData = value[i - 1];
    if (prevRowData) {
      const previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, props.groupRowsBy);
      return !ObjectUtils.deepEquals(currentRowFieldData, previousRowFieldData);
    }
    return true;
  };
  const shouldRenderRowGroupFooter = (value, rowData, i, expanded) => {
    if (props.expandableRowGroups && !expanded) {
      return false;
    }
    const currentRowFieldData = ObjectUtils.resolveFieldData(rowData, props.groupRowsBy);
    const nextRowData = value[i + 1];
    if (nextRowData) {
      const nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, props.groupRowsBy);
      return !ObjectUtils.deepEquals(currentRowFieldData, nextRowFieldData);
    }
    return true;
  };
  const updateFrozenRowStickyPosition = () => {
    elementRef.current.style.top = `${DomHandler.getOuterHeight(elementRef.current.previousElementSibling)}px`;
  };
  const updateFrozenRowGroupHeaderStickyPosition = () => {
    const tableHeaderHeight = DomHandler.getOuterHeight(elementRef.current.previousElementSibling);
    const top = `${tableHeaderHeight}px`;
    if (rowGroupHeaderStyleObjectState.top !== top) {
      setRowGroupHeaderStyleObjectState({
        top
      });
    }
  };
  const onSingleSelection = ({
    originalEvent,
    data,
    index,
    toggleable,
    type
  }) => {
    if (!isSelectable({
      data,
      index
    })) {
      return;
    }
    const selected = isSelected(data);
    let {
      selection
    } = props;
    if (selected) {
      if (toggleable) {
        selection = null;
        onUnselect({
          originalEvent,
          data,
          type
        });
      }
    } else {
      selection = data;
      onSelect({
        originalEvent,
        data,
        type
      });
    }
    focusOnElement(originalEvent, true);
    if (props.onSelectionChange && selection !== props.selection) {
      props.onSelectionChange({
        originalEvent,
        value: selection,
        type
      });
    }
  };
  const onMultipleSelection = ({
    originalEvent,
    data,
    index,
    toggleable,
    type
  }) => {
    if (!isSelectable({
      data,
      index
    })) {
      return;
    }
    const selected = isSelected(data);
    let selection = props.selection || [];
    if (selected) {
      if (toggleable) {
        const selectionIndex = findIndex(selection, data);
        selection = props.selection.filter((val, i) => i !== selectionIndex);
        onUnselect({
          originalEvent,
          data,
          type
        });
      } else if (selection.length) {
        props.selection.forEach(d => onUnselect({
          originalEvent,
          data: d,
          type
        }));
        selection = [data];
        onSelect({
          originalEvent,
          data,
          type
        });
      }
    } else {
      selection = ObjectUtils.isObject(selection) ? [selection] : selection;
      selection = toggleable && isMultipleSelection() ? [...selection, data] : [data];
      onSelect({
        originalEvent,
        data,
        type
      });
    }
    if (props.onSelectionChange && selection !== props.selection) {
      props.onSelectionChange({
        originalEvent,
        value: selection,
        type
      });
    }
  };
  const onRangeSelection = (event, type) => {
    DomHandler.clearSelection();
    rangeRowIndex.current = allowCellSelection() ? event.rowIndex : event.index;
    const selection = selectRange(event);
    if (props.onSelectionChange && selection !== props.selection) {
      props.onSelectionChange({
        originalEvent: event.originalEvent,
        value: selection,
        type
      });
    }
    anchorRowIndex.current = rangeRowIndex.current;
    anchorCellIndex.current = event.cellIndex;
  };
  const selectRange = event => {
    let rangeStart;
    let rangeEnd;
    let selectedSize;
    const isAllowCellSelection = allowCellSelection();
    const index = ObjectUtils.findIndexInList(event.data, props.value, props.dataKey);
    if (rangeRowIndex.current > anchorRowIndex.current) {
      rangeStart = anchorRowIndex.current;
      rangeEnd = rangeRowIndex.current;
      if (!isAllowCellSelection) {
        selectedSize = rangeEnd - rangeStart;
        rangeEnd = index;
        rangeStart = index - selectedSize;
      }
    } else if (rangeRowIndex.current < anchorRowIndex.current) {
      rangeStart = rangeRowIndex.current;
      rangeEnd = anchorRowIndex.current;
      if (!isAllowCellSelection) {
        selectedSize = rangeEnd - rangeStart;
        rangeStart = index;
        rangeEnd = index + selectedSize;
      }
    } else {
      rangeStart = rangeEnd = rangeRowIndex.current;
    }
    return isAllowCellSelection ? selectRangeOnCell(event, rangeStart, rangeEnd) : selectRangeOnRow(event, rangeStart, rangeEnd);
  };
  const selectRangeOnRow = (event, rowRangeStart, rowRangeEnd) => {
    const {
      value
    } = props;
    const selection = [];
    for (let i = rowRangeStart; i <= rowRangeEnd; i++) {
      const rangeRowData = value[i];
      if (!isSelectable({
        data: rangeRowData,
        index: i
      })) {
        continue;
      }
      selection.push(rangeRowData);
      onSelect({
        originalEvent: event.originalEvent,
        data: rangeRowData,
        type: 'row'
      });
    }
    return selection;
  };
  const selectRangeOnCell = (event, rowRangeStart, rowRangeEnd) => {
    let cellRangeStart;
    let cellRangeEnd;
    const {
      cellIndex
    } = event;
    if (cellIndex > anchorCellIndex.current) {
      cellRangeStart = anchorCellIndex.current;
      cellRangeEnd = cellIndex;
    } else if (cellIndex < anchorCellIndex.current) {
      cellRangeStart = cellIndex;
      cellRangeEnd = anchorCellIndex.current;
    } else {
      cellRangeStart = cellRangeEnd = cellIndex;
    }
    const {
      value
    } = props;
    const selection = [];
    for (let i = rowRangeStart; i <= rowRangeEnd; i++) {
      const rowData = value[i];
      const {
        columns
      } = props;
      const rowIndex = props.paginator ? i + props.first : i;
      for (let j = cellRangeStart; j <= cellRangeEnd; j++) {
        const field = getColumnProp(columns[j], 'field');
        const value = ObjectUtils.resolveFieldData(rowData, field);
        const rangeRowData = {
          value,
          field,
          rowData,
          rowIndex,
          cellIndex: j,
          selected: true
        };
        if (!isSelectable({
          data: rangeRowData,
          index: i
        })) {
          continue;
        }
        selection.push(rangeRowData);
        onSelect({
          originalEvent: event.originalEvent,
          data: rangeRowData,
          type: 'cell'
        });
      }
    }
    return selection;
  };
  const onSelect = event => {
    if (allowCellSelection()) {
      props.onCellSelect && props.onCellSelect({
        originalEvent: event.originalEvent,
        ...event.data,
        type: event.type
      });
    } else {
      props.onRowSelect && props.onRowSelect(event);
    }
  };
  const onUnselect = event => {
    if (allowCellSelection()) {
      props.onCellUnselect && props.onCellUnselect({
        originalEvent: event.originalEvent,
        ...event.data,
        type: event.type
      });
    } else {
      props.onRowUnselect && props.onRowUnselect(event);
    }
  };
  const enableDragSelection = event => {
    if (props.dragSelection && !dragSelectionHelper.current) {
      dragSelectionHelper.current = document.createElement('div');
      dragSelectionHelper.current.setAttribute('p-datatable-drag-selection-helper', 'true');
      !isUnsyled && DomHandler.addClass(dragSelectionHelper.current, 'p-datatable-drag-selection-helper');
      initialDragPosition.current = {
        x: event.clientX,
        y: event.clientY
      };
      dragSelectionHelper.current.style.top = `${event.pageY}px`;
      dragSelectionHelper.current.style.left = `${event.pageX}px`;
      bindDragSelectionEvents();
    }
  };
  const focusOnElement = (event, isFocused) => {
    const target = event.currentTarget;
    if (!allowCellSelection() && props.selectionAutoFocus) {
      if (isCheckboxSelectionModeInColumn) {
        const checkbox = DomHandler.findSingle(target, 'td[data-p-selection-column="true"] [data-pc-section="checkbox"]');
        checkbox && checkbox.focus();
      } else if (isRadioSelectionModeInColumn) {
        const radio = DomHandler.findSingle(target, 'td[data-p-selection-column="true"] input[type="radio"]');
        radio && radio.focus();
      }
    }
    !isFocused && target && target.focus();
  };
  const changeTabIndex = (event, type) => {
    const target = event.currentTarget;
    const isSelectable = DomHandler.getAttribute(target, type === 'cell' ? 'data-p-selectable-cell' : 'data-p-selectable-row') === true;
    if (isSelectable) {
      const selector = type === 'cell' ? 'tr > td' : 'tr';
      const tabbableEl = DomHandler.findSingle(elementRef.current, `${selector}[tabindex="${props.tabIndex}"]`);
      if (tabbableEl && target) {
        tabbableEl.tabIndex = -1;
        target.tabIndex = props.tabIndex;
      }
    }
  };
  const onRowClick = event => {
    if (event.defaultPrevented || event.originalEvent && event.originalEvent.defaultPrevented || allowCellSelection() || !allowSelection(event)) {
      return;
    }
    props.onRowClick && props.onRowClick(event);
    if (allowRowSelection()) {
      if (allowRangeSelection(event)) {
        onRangeSelection(event, 'row');
      } else {
        const toggleable = isRadioSelectionModeInColumn || isCheckboxSelectionModeInColumn || allowMetaKeySelection(event);
        anchorRowIndex.current = event.index;
        rangeRowIndex.current = event.index;
        anchorRowFirst.current = props.first;
        if (isSingleSelection()) {
          onSingleSelection({
            ...event,
            toggleable,
            type: 'row'
          });
        } else {
          onMultipleSelection({
            ...event,
            toggleable,
            type: 'row'
          });
        }
      }
      changeTabIndex(event.originalEvent, 'row');
    } else {
      focusOnElement(event.originalEvent);
    }
    rowTouched.current = false;
  };
  const onRowDoubleClick = e => {
    const {
      originalEvent: event
    } = e;
    if (DomHandler.isClickable(event.target)) {
      return;
    }
    if (props.onRowDoubleClick) {
      props.onRowDoubleClick(e);
    }
  };
  const onRowPointerDown = e => {
    const {
      originalEvent: event
    } = e;
    if (DomHandler.isClickable(event.target)) {
      return;
    }
    if (props.onRowPointerDown) {
      props.onRowPointerDown(e);
    }
  };
  const onRowPointerUp = e => {
    const {
      originalEvent: event
    } = e;
    if (DomHandler.isClickable(event.target)) {
      return;
    }
    if (props.onRowPointerUp) {
      props.onRowPointerUp(e);
    }
  };
  const onRowRightClick = event => {
    if (props.onContextMenu || props.onContextMenuSelectionChange) {
      const hasSelection = ObjectUtils.isNotEmpty(props.selection);
      const {
        data
      } = event;
      if (hasSelection) {
        DomHandler.clearSelection();
      }
      if (props.onContextMenuSelectionChange) {
        props.onContextMenuSelectionChange({
          originalEvent: event.originalEvent,
          value: data,
          index: event.index
        });
      }
      if (props.onContextMenu) {
        props.onContextMenu({
          originalEvent: event.originalEvent,
          data,
          index: event.index
        });
      }
      event.originalEvent.preventDefault();
    }
  };
  const onRowMouseEnter = event => {
    props.onRowMouseEnter && props.onRowMouseEnter(event);
  };
  const onRowMouseLeave = event => {
    props.onRowMouseLeave && props.onRowMouseLeave(event);
  };
  const onRowTouchEnd = () => {
    rowTouched.current = true;
  };
  const onRowMouseDown = e => {
    const {
      originalEvent: event
    } = e;
    if (!isUnsyled && DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle')) {
      event.currentTarget.draggable = true;
    } else {
      event.currentTarget.draggable = false;
    }
    if (allowRowDrag(e)) {
      enableDragSelection(event);
      anchorRowIndex.current = e.index;
      rangeRowIndex.current = e.index;
      anchorRowFirst.current = props.first;
    }
  };
  const onRowMouseUp = event => {
    const isSameRow = event.index === anchorRowIndex.current;
    if (allowRowDrag(event) && !isSameRow) {
      onRangeSelection(event, 'row');
    }
  };
  const onRowToggle = event => {
    let expandedRows;
    const {
      dataKey
    } = props;
    const hasDataKey = props.groupRowsBy ? dataKey === props.groupRowsBy : !!dataKey;
    if (hasDataKey) {
      const dataKeyValue = String(ObjectUtils.resolveFieldData(event.data, dataKey));
      expandedRows = props.expandedRows ? {
        ...props.expandedRows
      } : {};
      if (expandedRows[dataKeyValue] != null) {
        delete expandedRows[dataKeyValue];
        if (props.onRowCollapse) {
          props.onRowCollapse({
            originalEvent: event,
            data: event.data
          });
        }
      } else {
        expandedRows[dataKeyValue] = true;
        if (props.onRowExpand) {
          props.onRowExpand({
            originalEvent: event,
            data: event.data
          });
        }
      }
    } else {
      const expandedRowIndex = findIndex(props.expandedRows, event.data);
      expandedRows = props.expandedRows ? [...props.expandedRows] : [];
      if (expandedRowIndex !== -1) {
        expandedRows = expandedRows.filter((_, i) => i !== expandedRowIndex);
        if (props.onRowCollapse) {
          props.onRowCollapse({
            originalEvent: event,
            data: event.data
          });
        }
      } else {
        expandedRows.push(event.data);
        if (props.onRowExpand) {
          props.onRowExpand({
            originalEvent: event,
            data: event.data
          });
        }
      }
    }
    if (props.onRowToggle) {
      props.onRowToggle({
        data: expandedRows
      });
    }
  };
  const onRowDragStart = e => {
    const {
      originalEvent: event,
      index
    } = e;
    if (allowRowDrag(event)) {
      rowDragging.current = true;
      draggedRowIndex.current = index;
      event.dataTransfer.setData('text', 'b'); // For firefox
    }
  };
  const onRowDragOver = e => {
    const {
      originalEvent: event,
      index
    } = e;
    if (rowDragging.current && draggedRowIndex.current !== index) {
      const rowElement = event.currentTarget;
      const rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
      const pageY = event.pageY + window.scrollY;
      const rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
      const prevRowElement = rowElement.previousElementSibling;
      if (pageY < rowMidY) {
        rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
        !isUnsyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
        droppedRowIndex.current = index;
        if (prevRowElement) {
          prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'true');
          !isUnsyled && DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');
        } else {
          rowElement.setAttribute('data-p-datatable-dragpoint-top', 'true');
          !isUnsyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
        }
      } else {
        if (prevRowElement) {
          prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
          !isUnsyled && DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
        } else {
          rowElement.setAttribute('data-p-datatable-dragpoint-top', 'true');
          !isUnsyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
        }
        droppedRowIndex.current = index + 1;
        rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'true');
        !isUnsyled && DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
      }
    }
    event.preventDefault();
  };
  const onRowDragLeave = e => {
    const {
      originalEvent: event
    } = e;
    const rowElement = event.currentTarget;
    const prevRowElement = rowElement.previousElementSibling;
    if (prevRowElement) {
      prevRowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
      !isUnsyled && DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
    }
    rowElement.setAttribute('data-p-datatable-dragpoint-bottom', 'false');
    !isUnsyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
    rowElement.setAttribute('data-p-datatable-dragpoint-top', 'false');
    !isUnsyled && DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
  };
  const onRowDragEnd = e => {
    const {
      originalEvent: event
    } = e;
    rowDragging.current = false;
    draggedRowIndex.current = null;
    droppedRowIndex.current = null;
    event.currentTarget.draggable = false;
  };
  const onRowDrop = e => {
    const {
      originalEvent: event
    } = e;
    if (droppedRowIndex.current != null) {
      const dropIndex = draggedRowIndex.current > droppedRowIndex.current ? droppedRowIndex.current : droppedRowIndex.current === 0 ? 0 : droppedRowIndex.current - 1;
      const val = [...props.tableProps.value];
      ObjectUtils.reorderArray(val, draggedRowIndex.current, dropIndex);
      if (props.onRowReorder) {
        props.onRowReorder({
          originalEvent: event,
          value: val,
          dragIndex: draggedRowIndex.current,
          dropIndex
        });
      }
    }

    // cleanup
    onRowDragLeave(e);
    onRowDragEnd(e);
    event.preventDefault();
  };
  const onRadioChange = event => {
    onSingleSelection({
      ...event,
      toggleable: true,
      type: 'radio'
    });
  };
  const onCheckboxChange = event => {
    onMultipleSelection({
      ...event,
      toggleable: true,
      type: 'checkbox'
    });
  };
  const onDragSelectionMouseMove = event => {
    const {
      x,
      y
    } = initialDragPosition.current;
    const dx = event.clientX - x;
    const dy = event.clientY - y;
    if (dy < 0) {
      dragSelectionHelper.current.style.top = `${event.pageY + 5}px`;
    }
    if (dx < 0) {
      dragSelectionHelper.current.style.left = `${event.pageX + 5}px`;
    }
    dragSelectionHelper.current.style.height = `${Math.abs(dy)}px`;
    dragSelectionHelper.current.style.width = `${Math.abs(dx)}px`;
    event.preventDefault();
  };
  const onDragSelectionMouseUp = () => {
    if (dragSelectionHelper.current) {
      dragSelectionHelper.current.remove();
      dragSelectionHelper.current = null;
    }
    document.removeEventListener('mousemove', onDragSelectionMouseMove);
    document.removeEventListener('mouseup', onDragSelectionMouseUp);
  };
  const onCellClick = event => {
    if (!allowSelection(event)) {
      return;
    }
    props.onCellClick && props.onCellClick(event);
    if (allowCellSelection()) {
      if (allowRangeSelection(event)) {
        onRangeSelection(event, 'cell');
      } else {
        const toggleable = allowMetaKeySelection(event);
        const {
          originalEvent,
          ...data
        } = event;
        anchorRowIndex.current = event.rowIndex;
        rangeRowIndex.current = event.rowIndex;
        anchorRowFirst.current = props.first;
        anchorCellIndex.current = event.cellIndex;
        if (isSingleSelection()) {
          onSingleSelection({
            originalEvent,
            data,
            index: event.rowIndex,
            toggleable,
            type: 'cell'
          });
        } else {
          onMultipleSelection({
            originalEvent,
            data,
            index: event.rowIndex,
            toggleable,
            type: 'cell'
          });
        }
      }
      changeTabIndex(event.originalEvent, 'cell');
    }
    rowTouched.current = false;
  };
  const onCellMouseDown = event => {
    if (allowCellDrag(event)) {
      enableDragSelection(event.originalEvent);
      anchorRowIndex.current = event.rowIndex;
      rangeRowIndex.current = event.rowIndex;
      anchorRowFirst.current = props.first;
      anchorCellIndex.current = event.cellIndex;
    }
  };
  const onCellMouseUp = event => {
    const isSameCell = event.rowIndex === anchorRowIndex.current && event.cellIndex === anchorCellIndex.current;
    if (allowCellDrag(event) && !isSameCell) {
      onRangeSelection(event, 'cell');
    }
  };
  const bindDragSelectionEvents = () => {
    document.addEventListener('mousemove', onDragSelectionMouseMove);
    document.addEventListener('mouseup', onDragSelectionMouseUp);
    document.body.appendChild(dragSelectionHelper.current);
  };
  const unbindDragSelectionEvents = () => {
    onDragSelectionMouseUp();
  };
  React.useEffect(() => {
    if (props.frozenRow) {
      updateFrozenRowStickyPosition();
    }
    if (props.scrollable && props.rowGroupMode === 'subheader') {
      updateFrozenRowGroupHeaderStickyPosition();
    }
  });
  useUpdateEffect(() => {
    if (props.paginator && isMultipleSelection()) {
      anchorRowIndex.current = null;
    }
  }, [props.first]);
  useUnmountEffect(() => {
    if (props.dragSelection) {
      unbindDragSelectionEvents();
    }
  });
  const createEmptyContent = () => {
    if (!props.loading) {
      const colSpan = getColumnsLength();
      const content = ObjectUtils.getJSXElement(props.emptyMessage, {
        props: props.tableProps,
        frozen: props.frozenRow
      }) || localeOption('emptyMessage');
      const emptyMessageProps = mergeProps({
        className: cx('emptyMessage'),
        role: 'row'
      }, getColumnPTOptions('emptyMessage'));
      const bodyCellProps = mergeProps({
        colSpan,
        role: 'cell'
      }, getColumnPTOptions('root'), getColumnPTOptions('bodyCell'));
      return /*#__PURE__*/React.createElement("tr", emptyMessageProps, /*#__PURE__*/React.createElement("td", bodyCellProps, content));
    }
    return null;
  };
  const createGroupHeader = (rowData, rowIndex, expanded, colSpan) => {
    if (isSubheaderGrouping && shouldRenderRowGroupHeader(props.value, rowData, rowIndex - props.first)) {
      const style = rowGroupHeaderStyle();
      const toggler = props.expandableRowGroups && /*#__PURE__*/React.createElement(RowTogglerButton, {
        hostName: props.hostName,
        onClick: onRowToggle,
        rowData: rowData,
        expanded: expanded,
        expandedRowIcon: props.expandedRowIcon,
        collapsedRowIcon: props.collapsedRowIcon,
        ptCallbacks: props.ptCallbacks,
        metaData: props.metaData
      });
      const options = {
        index: rowIndex,
        props: props.tableProps,
        customRendering: false
      };
      let content = ObjectUtils.getJSXElement(props.rowGroupHeaderTemplate, rowData, options);

      // check if the user wants complete control of the rendering
      if (!options.customRendering) {
        const bodyCellProps = mergeProps({
          colSpan
        }, getColumnPTOptions('root'), getColumnPTOptions('bodyCell'));
        const rowGroupHeaderNameProps = mergeProps({
          className: cx('rowGroupHeaderName')
        }, getColumnPTOptions('rowGroupHeaderName'));
        content = /*#__PURE__*/React.createElement("td", bodyCellProps, toggler, /*#__PURE__*/React.createElement("span", rowGroupHeaderNameProps, content));
      }
      const rowGroupHeaderProps = mergeProps({
        className: cx('rowGroupHeader'),
        style,
        role: 'row'
      }, getColumnPTOptions('rowGroupHeader'));
      return /*#__PURE__*/React.createElement("tr", rowGroupHeaderProps, content);
    }
    return null;
  };
  const createRow = (rowData, rowIndex, index, expanded) => {
    if (!props.expandableRowGroups || expanded) {
      const selected = isSelectionEnabled() ? isSelected(rowData) : false;
      const contextMenuSelected = isContextMenuSelected(rowData);
      const _allowRowSelection = allowRowSelection();
      const _allowCellSelection = allowCellSelection();
      const editing = isRowEditing(rowData);
      return /*#__PURE__*/React.createElement(BodyRow, {
        hostName: props.hostName,
        allowCellSelection: _allowCellSelection,
        allowRowSelection: _allowRowSelection,
        cellClassName: props.cellClassName,
        checkIcon: props.checkIcon,
        collapsedRowIcon: props.collapsedRowIcon,
        columns: props.columns,
        compareSelectionBy: props.compareSelectionBy,
        contextMenuSelected: contextMenuSelected,
        dataKey: props.dataKey,
        editMode: props.editMode,
        editing: editing,
        editingMeta: props.editingMeta,
        editingRows: props.editingRows,
        expanded: expanded,
        expandedRowIcon: props.expandedRowIcon,
        frozenRow: props.frozenRow,
        groupRowsBy: props.groupRowsBy,
        index: index,
        isSelectable: isSelectable,
        onCellClick: onCellClick,
        onCellMouseDown: onCellMouseDown,
        onCellMouseUp: onCellMouseUp,
        onCheckboxChange: onCheckboxChange,
        onEditingMetaChange: props.onEditingMetaChange,
        onRadioChange: onRadioChange,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowPointerDown: onRowPointerDown,
        onRowPointerUp: onRowPointerUp,
        onRowDragEnd: onRowDragEnd,
        onRowDragLeave: onRowDragLeave,
        onRowDragOver: onRowDragOver,
        onRowDragStart: onRowDragStart,
        onRowDrop: onRowDrop,
        onRowEditCancel: props.onRowEditCancel,
        onRowEditChange: props.onRowEditChange,
        onRowEditComplete: props.onRowEditComplete,
        onRowEditInit: props.onRowEditInit,
        onRowEditSave: props.onRowEditSave,
        onRowMouseDown: onRowMouseDown,
        onRowMouseEnter: onRowMouseEnter,
        onRowMouseLeave: onRowMouseLeave,
        onRowMouseUp: onRowMouseUp,
        onRowRightClick: onRowRightClick,
        onRowToggle: onRowToggle,
        onRowTouchEnd: onRowTouchEnd,
        responsiveLayout: props.responsiveLayout,
        rowClassName: props.rowClassName,
        rowData: rowData,
        rowEditValidator: props.rowEditValidator,
        rowEditorCancelIcon: props.rowEditorCancelIcon,
        rowEditorInitIcon: props.rowEditorInitIcon,
        rowEditorSaveIcon: props.rowEditorSaveIcon,
        rowGroupMode: props.rowGroupMode,
        rowIndex: rowIndex,
        selectOnEdit: props.selectOnEdit,
        selected: selected,
        selection: props.selection,
        selectionMode: props.selectionMode,
        selectionModeInColumn: props.selectionModeInColumn,
        showRowReorderElement: props.showRowReorderElement,
        showSelectionElement: props.showSelectionElement,
        tabIndex: props.tabIndex,
        tableProps: props.tableProps,
        tableSelector: props.tableSelector,
        value: props.value,
        virtualScrollerOptions: props.virtualScrollerOptions,
        ptCallbacks: props.ptCallbacks,
        metaData: props.metaData
      });
    }
  };
  const createExpansion = (rowData, rowIndex, expanded, colSpan) => {
    if (expanded && !(isSubheaderGrouping && props.expandableRowGroups)) {
      const id = `${props.tableSelector}_content_${rowIndex}_expanded`;
      const options = {
        index: rowIndex,
        customRendering: false
      };
      let content = ObjectUtils.getJSXElement(props.rowExpansionTemplate, rowData, options);

      // check if the user wants complete control of the rendering
      if (!options.customRendering) {
        const bodyCellProps = mergeProps({
          colSpan,
          role: 'cell'
        }, getColumnPTOptions('root'), getColumnPTOptions('bodyCell'));
        content = /*#__PURE__*/React.createElement("td", bodyCellProps, content);
      }
      const rowExpansionProps = mergeProps({
        id,
        className: cx('rowExpansion'),
        role: 'row'
      }, getColumnPTOptions('rowExpansion'));
      return /*#__PURE__*/React.createElement("tr", rowExpansionProps, content);
    }
    return null;
  };
  const createGroupFooter = (rowData, rowIndex, expanded, colSpan) => {
    if (isSubheaderGrouping && shouldRenderRowGroupFooter(props.value, rowData, rowIndex - props.first, expanded)) {
      const content = ObjectUtils.getJSXElement(props.rowGroupFooterTemplate, rowData, {
        index: rowIndex,
        colSpan,
        props: props.tableProps
      });
      const rowGroupFooterProps = mergeProps({
        className: cx('rowGroupFooter'),
        role: 'row'
      }, getColumnPTOptions('rowGroupFooter'));
      return /*#__PURE__*/React.createElement("tr", rowGroupFooterProps, content);
    }
    return null;
  };
  const createContent = () => props.value && props.value.map((rowData, index) => {
    const rowIndex = getVirtualScrollerOption('getItemOptions') ? getVirtualScrollerOption('getItemOptions')(index).index : props.first + index;
    const key = getRowKey(rowData, rowIndex);
    const expanded = isRowExpanded(rowData);
    const colSpan = getColumnsLength();
    const groupHeader = createGroupHeader(rowData, rowIndex, expanded, colSpan);
    const row = createRow(rowData, rowIndex, index, expanded);
    const expansion = createExpansion(rowData, rowIndex, expanded, colSpan);
    const groupFooter = createGroupFooter(rowData, rowIndex, expanded, colSpan);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: key
    }, groupHeader, row, expansion, groupFooter);
  });
  const content = props.empty ? createEmptyContent() : createContent();
  const ptKey = props.className === 'p-datatable-virtualscroller-spacer' ? 'virtualScrollerSpacer' : 'tbody';
  const tbodyProps = mergeProps({
    style: props.style,
    className: cx(ptKey, {
      className: props.className
    }),
    role: ' rowgroup'
  }, ptm(ptKey, {
    hostName: props.hostName
  }));
  return /*#__PURE__*/React.createElement("tbody", _extends({
    ref: refCallback
  }, tbodyProps), content);
}));
TableBody.displayName = 'TableBody';

const ColumnGroupBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: 'ColumnGroup',
    children: undefined
  },
  getCProp: (group, name) => ObjectUtils.getComponentProp(group, name, ColumnGroupBase.defaultProps),
  getCProps: group => ObjectUtils.getComponentProps(group, ColumnGroupBase.defaultProps)
});

const RowBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Row',
    style: null,
    className: null,
    children: undefined
  },
  getCProp: (row, name) => ObjectUtils.getComponentProp(row, name, RowBase.defaultProps)
});

const FooterCell = /*#__PURE__*/React.memo(props => {
  const [styleObjectState, setStyleObjectState] = React.useState({});
  const elementRef = React.useRef(null);
  const mergeProps = useMergeProps();
  const getColumnProps = () => ColumnBase.getCProps(props.column);
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const getColumnPTOptions = key => {
    const cProps = getColumnProps();
    const columnMetaData = {
      props: cProps,
      parent: props.metaData,
      hostName: props.hostName,
      state: {
        styleObject: styleObjectState
      },
      context: {
        index: props.index,
        size: props.metaData.props.size,
        showGridlines: props.metaData.props.showGridlines
      }
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
  };
  const getColumnProp = name => ColumnBase.getCProp(props.column, name);
  const getStyle = () => {
    const footerStyle = getColumnProp('footerStyle');
    const columnStyle = getColumnProp('style');
    return getColumnProp('frozen') ? {
      ...columnStyle,
      ...footerStyle,
      ...styleObjectState
    } : {
      ...columnStyle,
      ...footerStyle
    };
  };
  const updateStickyPosition = () => {
    if (getColumnProp('frozen')) {
      const styleObject = {
        ...styleObjectState
      };
      const align = getColumnProp('alignFrozen');
      if (align === 'right') {
        let right = 0;
        const next = elementRef.current.nextElementSibling;
        if (next) {
          right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
        }
        styleObject.right = `${right}px`;
      } else {
        let left = 0;
        const prev = elementRef.current.previousElementSibling;
        if (prev) {
          left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
        }
        styleObject.left = `${left}px`;
      }
      const isSameStyle = styleObjectState.left === styleObject.left && styleObjectState.right === styleObject.right;
      !isSameStyle && setStyleObjectState(styleObject);
    }
  };
  React.useEffect(() => {
    if (getColumnProp('frozen')) {
      updateStickyPosition();
    }
  });
  const style = getStyle();
  const align = getColumnProp('align');
  const colSpan = getColumnProp('colSpan');
  const rowSpan = getColumnProp('rowSpan');
  const content = ObjectUtils.getJSXElement(getColumnProp('footer'), {
    props: props.tableProps
  });
  const footerCellProps = mergeProps({
    style,
    className: classNames(getColumnProp('footerClassName'), getColumnProp('className'), cx('footerCell', {
      getColumnProp,
      align
    })),
    role: 'cell',
    colSpan,
    rowSpan
  }, getColumnPTOptions('root'), getColumnPTOptions('footerCell'));
  return /*#__PURE__*/React.createElement("td", _extends({
    ref: elementRef
  }, footerCellProps), content);
});
FooterCell.displayName = 'FooterCell';

const TableFooter = /*#__PURE__*/React.memo(props => {
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const mergeProps = useMergeProps();
  const getRowProps = row => ColumnGroupBase.getCProps(row);
  const getColumnGroupProps = () => props.footerColumnGroup ? ColumnGroupBase.getCProps(props.footerColumnGroup) : undefined;
  const getRowPTOptions = (row, key) => {
    const rProps = getRowProps(row);
    const rowMetaData = {
      props: rProps,
      parent: props.metaData,
      hostName: props.hostName
    };
    return mergeProps(ptm(`row.${key}`, {
      row: rowMetaData
    }), ptm(`row.${key}`, rowMetaData), ptmo(rProps, key, rowMetaData));
  };
  const getColumnGroupPTOptions = key => {
    const cGProps = getColumnGroupProps();
    const columnGroupMetaData = {
      props: getColumnGroupProps(),
      parent: props.metaData,
      hostName: props.hostName
    };
    return mergeProps(ptm(`columnGroup.${key}`, {
      columnGroup: columnGroupMetaData
    }), ptm(`columnGroup.${key}`, columnGroupMetaData), ptmo(cGProps, key, columnGroupMetaData));
  };
  const hasFooter = () => props.footerColumnGroup ? true : props.columns ? props.columns.some(col => col && getColumnProp(col, 'footer')) : false;
  const getColumnProp = (column, name) => ColumnBase.getCProp(column, name);
  const createGroupFooterCells = row => {
    const columns = React.Children.toArray(RowBase.getCProp(row, 'children'));
    return createFooterCells(columns);
  };
  const createFooterCells = columns => React.Children.map(columns, (col, i) => {
    const isVisible = col ? !getColumnProp(col, 'hidden') : true;
    const key = col ? getColumnProp(col, 'columnKey') || getColumnProp(col, 'field') || i : i;
    return isVisible && /*#__PURE__*/React.createElement(FooterCell, {
      hostName: props.hostName,
      key: key,
      tableProps: props.tableProps,
      column: col,
      ptCallbacks: props.ptCallbacks,
      metaData: props.metaData
    });
  });
  const createContent = () => {
    if (props.footerColumnGroup) {
      const rows = React.Children.toArray(ColumnGroupBase.getCProp(props.footerColumnGroup, 'children'));
      return rows.map((row, i) => {
        const rootProps = mergeProps({
          role: 'row'
        }, getRowPTOptions(row, 'root'));
        return /*#__PURE__*/React.createElement("tr", _extends({}, rootProps, {
          key: i
        }), createGroupFooterCells(row));
      });
    }
    const footerRowProps = mergeProps({
      role: 'row'
    }, ptm('footerRow', {
      hostName: props.hostName
    }));
    return /*#__PURE__*/React.createElement("tr", footerRowProps, createFooterCells(props.columns));
  };
  if (hasFooter()) {
    const content = createContent();
    const tfootProps = mergeProps({
      className: cx('tfoot'),
      role: 'rowgroup'
    }, getColumnGroupPTOptions('root'), ptm('tfoot', {
      hostName: props.hostName
    }));
    return /*#__PURE__*/React.createElement("tfoot", tfootProps, content);
  }
  return null;
});
TableFooter.displayName = 'TableFooter';

const ColumnFilter = /*#__PURE__*/React.memo(props => {
  const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
  const overlayRef = React.useRef(null);
  const overlayId = React.useRef(null);
  const iconRef = React.useRef(null);
  const selfClick = React.useRef(false);
  const overlayEventListener = React.useRef(null);
  const mergeProps = useMergeProps();
  const getColumnProp = name => ColumnBase.getCProp(props.column, name);
  const getColumnProps = () => ColumnBase.getCProps(props.column);
  const context = React.useContext(PrimeReactContext);
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const getColumnPTOptions = (key, params) => {
    const cProps = getColumnProps();
    const columnMetadata = {
      props: cProps,
      parent: props.metaData,
      hostName: props.hostName,
      state: {
        overlayVisible: overlayVisibleState
      },
      ...params
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetadata
    }), ptm(`column.${key}`, columnMetadata), ptmo(cProps, key, columnMetadata));
  };
  const field = getColumnProp('filterField') || getColumnProp('field');
  const filterModel = props.filters[field];
  const filterStoreModel = props.filtersStore && props.filtersStore[field];
  const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
    target: iconRef,
    overlay: overlayRef,
    listener: (event, {
      type,
      valid
    }) => {
      if (valid) {
        type === 'outside' ? !selfClick.current && !isTargetClicked(event.target) && hide() : hide();
      }
      selfClick.current = false;
    },
    when: overlayVisibleState
  });
  const hasFilter = () => {
    if (!filterStoreModel || !filterModel) {
      return false;
    }
    return filterStoreModel.operator ? !isFilterBlank(filterModel.constraints[0].value) : !isFilterBlank(filterModel.value);
  };
  const hasRowFilter = () => filterModel && !isFilterBlank(filterModel.value);
  const isFilterBlank = filter => ObjectUtils.isEmpty(filter);
  const isRowMatchModeSelected = matchMode => filterModel && filterModel.matchMode === matchMode;
  const matchModes = () => getColumnProp('filterMatchModeOptions') || context && context.filterMatchModeOptions[findDataType()].map(key => ({
    label: localeOption(key),
    value: key
  })) || PrimeReact.filterMatchModeOptions[findDataType()].map(key => ({
    label: localeOption(key),
    value: key
  }));
  const isShowMenuButton = () => getColumnProp('showFilterMenu') && (props.display === 'row' ? getColumnProp('dataType') !== 'boolean' : true);
  const isShowClearButton = () => getColumnProp('showClearButton') && props.display === 'row';
  const isShowMatchModes = () => getColumnProp('dataType') !== 'boolean' && getColumnProp('showFilterMatchModes') && matchModes() && getColumnProp('showFilterMenuOptions');
  const isShowOperator = () => getColumnProp('showFilterOperator') && filterModel && filterModel.operator && getColumnProp('showFilterMenuOptions');
  const showRemoveIcon = () => fieldConstraints().length > 1;
  const isShowAddConstraint = () => getColumnProp('showAddButton') && filterModel && filterModel.operator && fieldConstraints() && fieldConstraints().length < getColumnProp('maxConstraints') && getColumnProp('showFilterMenuOptions');
  const isOutsideClicked = target => !isTargetClicked(target) && overlayRef.current && !(overlayRef.current.isSameNode(target) || overlayRef.current.contains(target));
  const isTargetClicked = target => iconRef.current && (iconRef.current.isSameNode(target) || iconRef.current.contains(target));
  const getDefaultConstraint = () => {
    if (filterStoreModel) {
      if (filterStoreModel.operator) {
        return {
          matchMode: filterStoreModel.constraints[0].matchMode,
          operator: filterStoreModel.operator
        };
      }
      return {
        matchMode: filterStoreModel.matchMode
      };
    }
  };
  const findDataType = () => {
    const dataType = getColumnProp('dataType');
    const matchMode = getColumnProp('filterMatchMode');
    const hasMatchMode = key => context && context.filterMatchModeOptions[key].some(mode => mode === matchMode) || PrimeReact.filterMatchModeOptions[key].some(mode => mode === matchMode);
    if (matchMode === 'custom' && !hasMatchMode(dataType)) {
      context && context.filterMatchModeOptions[dataType].push(FilterMatchMode.CUSTOM) || PrimeReact.filterMatchModeOptions[dataType].push(FilterMatchMode.CUSTOM);
      return dataType;
    }
    if (matchMode) {
      return Object.keys(context && context.filterMatchModeOptions || PrimeReact.filterMatchModeOptions).find(key => hasMatchMode(key)) || dataType;
    }
    return dataType;
  };
  const clearFilter = () => {
    const filterClearCallback = getColumnProp('onFilterClear');
    const defaultConstraint = getDefaultConstraint();
    const filters = {
      ...props.filters
    };
    if (filters[field].operator) {
      filters[field].constraints.splice(1);
      filters[field].operator = defaultConstraint.operator;
      filters[field].constraints[0] = {
        value: null,
        matchMode: defaultConstraint.matchMode
      };
    } else {
      filters[field].value = null;
      filters[field].matchMode = defaultConstraint.matchMode;
    }
    filterClearCallback && filterClearCallback();
    props.onFilterChange(filters);
    props.onFilterApply();
    hide();
  };
  const applyFilter = () => {
    const filterApplyClickCallback = getColumnProp('onFilterApplyClick');
    filterApplyClickCallback && filterApplyClickCallback({
      field,
      constraints: filterModel
    });
    props.onFilterApply();
    hide();
  };
  const toggleMenu = () => {
    setOverlayVisibleState(prevVisible => !prevVisible);
  };
  const onToggleButtonKeyDown = event => {
    switch (event.key) {
      case 'Escape':
      case 'Tab':
        hide();
        break;
      case 'ArrowDown':
        if (overlayVisibleState) {
          const focusable = DomHandler.getFirstFocusableElement(overlayRef.current);
          focusable && focusable.focus();
          event.preventDefault();
        } else if (event.altKey) {
          setOverlayVisibleState(true);
          event.preventDefault();
        }
        break;
    }
  };
  const onContentKeyDown = event => {
    if (event.key === 'Escape') {
      hide();
      iconRef.current && iconRef.current.focus();
    }
  };
  const onInputChange = (event, index) => {
    const filters = {
      ...props.filters
    };
    const {
      value
    } = event.target;
    const filterField = filters[field];
    if (props.display === 'menu' && ObjectUtils.isNotEmpty(filterField.constraints)) {
      filterField.constraints[index].value = value;
    } else {
      filterField.value = value;
    }
    props.onFilterChange(filters);
    if (!getColumnProp('showApplyButton') || props.display === 'row') {
      props.onFilterApply();
    }
  };
  const onInputKeydown = event => {
    if (event.key === 'Enter') {
      if (!getColumnProp('showApplyButton') || props.display === 'menu') {
        applyFilter();
      }
    }
  };
  const onRowMatchModeChange = matchMode => {
    const filterMatchModeChangeCallback = getColumnProp('onFilterMatchModeChange');
    const filters = {
      ...props.filters
    };
    filters[field].matchMode = matchMode;
    filterMatchModeChangeCallback && filterMatchModeChangeCallback({
      field,
      matchMode
    });
    props.onFilterChange(filters);
    props.onFilterApply();
    hide();
  };
  const onRowMatchModeKeyDown = (event, matchMode, clear) => {
    const item = event.target;
    switch (event.key) {
      case 'ArrowDown':
        {
          const nextItem = findNextItem(item);
          if (nextItem) {
            item.removeAttribute('tabindex');
            nextItem.tabIndex = 0;
            nextItem.focus();
          }
          event.preventDefault();
          break;
        }
      case 'ArrowUp':
        {
          const prevItem = findPrevItem(item);
          if (prevItem) {
            item.removeAttribute('tabindex');
            prevItem.tabIndex = 0;
            prevItem.focus();
          }
          event.preventDefault();
          break;
        }
      case 'Enter':
        clear ? clearFilter() : onRowMatchModeChange(matchMode.value);
        event.preventDefault();
        break;
    }
  };
  const onOperatorChange = e => {
    const filterOperationChangeCallback = getColumnProp('onFilterOperatorChange');
    const {
      value
    } = e;
    const filters = {
      ...props.filters
    };
    filters[field].operator = value;
    props.onFilterChange(filters);
    filterOperationChangeCallback && filterOperationChangeCallback({
      field,
      operator: value
    });
    if (!getColumnProp('showApplyButton')) {
      props.onFilterApply();
    }
  };
  const onMenuMatchModeChange = (value, index) => {
    const filterMatchModeChangeCallback = getColumnProp('onFilterMatchModeChange');
    const filters = {
      ...props.filters
    };
    const filterField = filters[field];
    if (props.display === 'menu' && ObjectUtils.isNotEmpty(filterField.constraints)) {
      filterField.constraints[index].matchMode = value;
    } else {
      filterField.matchMode = value;
    }
    props.onFilterChange(filters);
    filterMatchModeChangeCallback && filterMatchModeChangeCallback({
      field,
      matchMode: value,
      index
    });
    if (!getColumnProp('showApplyButton')) {
      props.onFilterApply();
    }
  };
  const addConstraint = () => {
    const filterConstraintAddCallback = getColumnProp('onFilterConstraintAdd');
    const defaultConstraint = getDefaultConstraint();
    const filters = {
      ...props.filters
    };
    const newConstraint = {
      value: null,
      matchMode: defaultConstraint.matchMode
    };
    filters[field].constraints.push(newConstraint);
    filterConstraintAddCallback && filterConstraintAddCallback({
      field,
      constraint: newConstraint
    });
    props.onFilterChange(filters);
    if (!getColumnProp('showApplyButton')) {
      props.onFilterApply();
    }
  };
  const removeConstraint = index => {
    const filterConstraintRemoveCallback = getColumnProp('onFilterConstraintRemove');
    const filters = {
      ...props.filters
    };
    const removedConstraint = filters[field].constraints.splice(index, 1);
    filterConstraintRemoveCallback && filterConstraintRemoveCallback({
      field,
      constraint: removedConstraint
    });
    props.onFilterChange(filters);
    if (!getColumnProp('showApplyButton')) {
      props.onFilterApply();
    }
  };
  const findNextItem = item => {
    const nextItem = item.nextElementSibling;
    return nextItem ? DomHandler.getAttribute(nextItem, 'data-p-column-filter-separator') === true ? findNextItem(nextItem) : nextItem : item.parentElement.firstElementChild;
  };
  const findPrevItem = item => {
    const prevItem = item.previousElementSibling;
    return prevItem ? DomHandler.getAttribute(prevItem, 'data-p-column-filter-separator') === true ? findPrevItem(prevItem) : prevItem : item.parentElement.lastElementChild;
  };
  const hide = () => {
    setOverlayVisibleState(false);
  };
  const onContentClick = event => {
    selfClick.current = true;
    OverlayService.emit('overlay-click', {
      originalEvent: event,
      target: overlayRef.current
    });
  };
  const onContentMouseDown = () => {
    selfClick.current = true;
  };
  const onOverlayEnter = () => {
    ZIndexUtils.set('overlay', overlayRef.current, context && context.autoZIndex || PrimeReact.autoZIndex, context && context.zIndex.overlay || PrimeReact.zIndex.overlay);
    DomHandler.addStyles(overlayRef.current, {
      position: 'absolute',
      top: '0',
      left: '0'
    });
    DomHandler.alignOverlay(overlayRef.current, iconRef.current, context && context.appendTo || PrimeReact.appendTo, false);
    overlayEventListener.current = e => {
      if (!isOutsideClicked(e.target)) {
        selfClick.current = true;
      }
    };
    OverlayService.on('overlay-click', overlayEventListener.current);
  };
  const onOverlayEntered = () => {
    bindOverlayListener();
  };
  const onOverlayExit = () => {
    onOverlayHide();
  };
  const onOverlayExited = () => {
    ZIndexUtils.clear(overlayRef.current);
  };
  const onOverlayHide = () => {
    unbindOverlayListener();
    OverlayService.off('overlay-click', overlayEventListener.current);
    overlayEventListener.current = null;
    selfClick.current = false;
  };
  const fieldConstraints = () => filterModel ? filterModel.constraints || [filterModel] : [];
  const operator = () => filterModel.operator;
  const operatorOptions = () => [{
    label: localeOption('matchAll'),
    value: FilterOperator.AND
  }, {
    label: localeOption('matchAny'),
    value: FilterOperator.OR
  }];
  const noFilterLabel = () => localeOption('noFilter');
  const removeRuleButtonLabel = () => localeOption('removeRule');
  const addRuleButtonLabel = () => localeOption('addRule');
  const clearButtonLabel = () => localeOption('clear');
  const applyButtonLabel = () => localeOption('apply');
  const filterCallback = (value, index = 0) => {
    const filters = {
      ...props.filters
    };
    const meta = filters[field];
    props.display === 'menu' && meta && meta.operator ? filters[field].constraints[index].value = value : filters[field].value = value;
    props.onFilterChange(filters);
  };
  const filterApplyCallback = (...args) => {
    args && filterCallback(args[0], args[1]);
    props.onFilterApply();
  };
  useUpdateEffect(() => {
    if (props.display === 'menu' && overlayVisibleState) {
      DomHandler.alignOverlay(overlayRef.current, iconRef.current, context && context.appendTo || PrimeReact.appendTo, false);
    }
  });
  useMountEffect(() => {
    if (!overlayId.current) {
      overlayId.current = UniqueComponentId();
    }
  });
  useUnmountEffect(() => {
    if (overlayEventListener.current) {
      OverlayService.off('overlay-click', overlayEventListener.current);
      overlayEventListener.current = null;
    }
    if (overlayRef.current) {
      ZIndexUtils.clear(overlayRef.current);
      onOverlayHide();
    }
  });
  const createFilterElement = (model, index) => {
    const value = model ? model.value : null;
    return getColumnProp('filterElement') ? ObjectUtils.getJSXElement(getColumnProp('filterElement'), {
      field,
      index,
      filterModel: model,
      value,
      filterApplyCallback,
      filterCallback
    }) : /*#__PURE__*/React.createElement(InputText, {
      type: getColumnProp('filterType'),
      value: value || '',
      onChange: e => onInputChange(e, index),
      onKeyDown: e => onInputKeydown(e),
      className: "p-column-filter",
      placeholder: getColumnProp('filterPlaceholder'),
      maxLength: getColumnProp('filterMaxLength'),
      "aria-label": getColumnProp('filterPlaceholder'),
      unstyled: props.unstyled,
      __parentMetadata: {
        parent: props.metaData
      }
    });
  };
  const createRowFilterElement = () => {
    if (props.display === 'row') {
      const content = createFilterElement(filterModel, 0);
      const filterInputProps = mergeProps({
        className: cx('filterInput')
      }, getColumnPTOptions('filterInput'));
      return /*#__PURE__*/React.createElement("div", filterInputProps, content);
    }
    return null;
  };
  const createMenuFilterElement = (fieldConstraint, index) => props.display === 'menu' ? createFilterElement(fieldConstraint, index) : null;
  const createMenuButton = () => {
    if (!isShowMenuButton()) {
      return null;
    }
    const filterIconProps = mergeProps({
      'aria-hidden': true
    }, getColumnPTOptions('filterIcon'));
    const icon = props.filterIcon || /*#__PURE__*/React.createElement(FilterIcon, filterIconProps);
    const columnFilterIcon = IconUtils.getJSXIcon(icon, {
      ...filterIconProps
    }, {
      props
    });
    const label = overlayVisibleState ? ariaLabel('hideFilterMenu') : ariaLabel('showFilterMenu');
    const filterMenuButtonProps = mergeProps({
      type: 'button',
      className: cx('filterMenuButton', {
        overlayVisibleState,
        hasFilter
      }),
      'aria-haspopup': true,
      'aria-expanded': overlayVisibleState,
      'aria-label': label,
      'aria-controls': overlayId.current,
      onClick: e => toggleMenu(),
      onKeyDown: e => onToggleButtonKeyDown(e)
    }, getColumnPTOptions('filterMenuButton', {
      context: {
        active: hasFilter()
      }
    }));
    return /*#__PURE__*/React.createElement("button", _extends({
      ref: iconRef
    }, filterMenuButtonProps), columnFilterIcon, /*#__PURE__*/React.createElement(Ripple, null));
  };
  const createClearButton = () => {
    if (!isShowClearButton()) {
      return null;
    }
    const filterClearIconProps = mergeProps({
      'aria-hidden': true
    }, getColumnPTOptions('filterClearIcon'));
    const icon = props.filterClearIcon || /*#__PURE__*/React.createElement(FilterSlashIcon, filterClearIconProps);
    const filterClearIcon = IconUtils.getJSXIcon(icon, {
      ...filterClearIconProps
    }, {
      props
    });
    const clearLabel = clearButtonLabel();
    const headerFilterClearButtonProps = mergeProps({
      className: cx('headerFilterClearButton', {
        hasRowFilter
      }),
      type: 'button',
      onClick: e => clearFilter(),
      'aria-label': clearLabel
    }, getColumnPTOptions('headerFilterClearButton', {
      context: {
        hidden: hasRowFilter()
      }
    }));
    return /*#__PURE__*/React.createElement("button", headerFilterClearButtonProps, filterClearIcon, /*#__PURE__*/React.createElement(Ripple, null));
  };
  const createRowItems = () => {
    if (isShowMatchModes()) {
      const _matchModes = matchModes();
      const _noFilterLabel = noFilterLabel();
      const filterSeparatorProps = mergeProps({
        className: cx('filterSeparator'),
        'data-p-column-filter-separator': true
      }, getColumnPTOptions('filterSeparator'));
      const filterRowItemProps = mergeProps({
        className: cx('filterRowItem', {
          isRowMatchModeSelected,
          isShowMatchModes
        }),
        onClick: e => clearFilter(),
        onKeyDown: e => onRowMatchModeKeyDown(e, null, true)
      }, getColumnPTOptions('filterRowItem'));
      const filterRowItemsProps = mergeProps({
        className: cx('filterRowItems')
      }, getColumnPTOptions('filterRowItems'));
      return /*#__PURE__*/React.createElement("ul", filterRowItemsProps, _matchModes.map((matchMode, i) => {
        const {
          value,
          label
        } = matchMode;
        const tabIndex = i === 0 ? 0 : null;
        const filterRowItemProps = mergeProps({
          className: cx('filterRowItem', {
            isRowMatchModeSelected,
            isShowMatchModes,
            value
          }),
          onClick: () => onRowMatchModeChange(value),
          onKeyDown: e => onRowMatchModeKeyDown(e, matchMode),
          tabIndex
        }, getColumnPTOptions('filterRowItem', {
          context: {
            highlighted: matchMode && isRowMatchModeSelected(value)
          }
        }));
        return /*#__PURE__*/React.createElement("li", _extends({}, filterRowItemProps, {
          key: label
        }), label);
      }), /*#__PURE__*/React.createElement("li", filterSeparatorProps), /*#__PURE__*/React.createElement("li", filterRowItemProps, _noFilterLabel));
    }
    return null;
  };
  const createOperator = () => {
    if (isShowOperator()) {
      const options = operatorOptions();
      const value = operator();
      const filterOperatorProps = mergeProps({
        className: cx('filterOperator')
      }, getColumnPTOptions('filterOperator'));
      return /*#__PURE__*/React.createElement("div", filterOperatorProps, /*#__PURE__*/React.createElement(Dropdown, {
        options: options,
        value: value,
        onChange: onOperatorChange,
        className: "p-column-filter-operator-dropdown",
        pt: getColumnPTOptions('filterOperatorDropdown'),
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: props.metaData
        },
        "aria-label": ariaLabel('filterOperator')
      }));
    }
    return null;
  };
  const createMatchModeDropdown = (constraint, index) => {
    if (isShowMatchModes()) {
      const options = matchModes();
      return /*#__PURE__*/React.createElement(Dropdown, {
        options: options,
        value: constraint.matchMode,
        onChange: e => onMenuMatchModeChange(e.value, index),
        className: "p-column-filter-matchmode-dropdown",
        pt: getColumnPTOptions('filterMatchModeDropdown'),
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: props.metaData
        },
        "aria-label": ariaLabel('filterConstraint')
      });
    }
    return null;
  };
  const createRemoveButton = index => {
    if (showRemoveIcon()) {
      const removeRuleLabel = removeRuleButtonLabel();
      return /*#__PURE__*/React.createElement(Button, {
        type: "button",
        icon: props.filterRemoveIcon || /*#__PURE__*/React.createElement(TrashIcon, null),
        className: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
        onClick: () => removeConstraint(index),
        label: removeRuleLabel,
        pt: getColumnPTOptions('filterRemoveButton'),
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: props.metaData
        }
      });
    }
    return null;
  };
  const createConstraints = () => {
    const _fieldConstraints = fieldConstraints();
    const filterConstraintsProps = mergeProps({
      className: cx('filterConstraints')
    }, getColumnPTOptions('filterConstraints'));
    const filterConstraintProps = mergeProps({
      className: cx('filterConstraint')
    }, getColumnPTOptions('filterConstraint'));
    return /*#__PURE__*/React.createElement("div", filterConstraintsProps, _fieldConstraints.map((fieldConstraint, i) => {
      const matchModeDropdown = createMatchModeDropdown(fieldConstraint, i);
      const menuFilterElement = createMenuFilterElement(fieldConstraint, i);
      const removeButton = createRemoveButton(i);
      const filterRemoveProps = mergeProps(getColumnPTOptions('filterRemove'));
      return /*#__PURE__*/React.createElement("div", _extends({}, filterConstraintProps, {
        key: i
      }), matchModeDropdown, menuFilterElement, /*#__PURE__*/React.createElement("div", filterRemoveProps, removeButton));
    }));
  };
  const createAddRule = () => {
    if (isShowAddConstraint()) {
      const addRuleLabel = addRuleButtonLabel();
      const filterAddRuleProps = mergeProps({
        className: cx('filterAddRule')
      }, getColumnPTOptions('filterAddRule'));
      return /*#__PURE__*/React.createElement("div", filterAddRuleProps, /*#__PURE__*/React.createElement(Button, {
        type: "button",
        label: addRuleLabel,
        icon: props.filterAddIcon || /*#__PURE__*/React.createElement(PlusIcon, null),
        className: "p-column-filter-add-button p-button-text p-button-sm",
        onClick: addConstraint,
        pt: getColumnPTOptions('filterAddRuleButton'),
        unstyled: props.unstyled,
        __parentMetadata: {
          parent: props.metaData
        }
      }));
    }
    return null;
  };
  const createFilterClearButton = () => {
    if (getColumnProp('showClearButton')) {
      if (!getColumnProp('filterClear')) {
        const clearLabel = clearButtonLabel();
        return /*#__PURE__*/React.createElement(Button, {
          type: "button",
          outlined: true,
          size: "small",
          onClick: clearFilter,
          label: clearLabel,
          pt: getColumnPTOptions('filterClearButton'),
          unstyled: props.unstyled,
          __parentMetadata: {
            parent: props.metaData
          }
        });
      }
      return ObjectUtils.getJSXElement(getColumnProp('filterClear'), {
        field,
        filterModel,
        filterClearCallback: clearFilter
      });
    }
    return null;
  };
  const createFilterApplyButton = () => {
    if (getColumnProp('showApplyButton')) {
      if (!getColumnProp('filterApply')) {
        const applyLabel = applyButtonLabel();
        return /*#__PURE__*/React.createElement(Button, {
          type: "button",
          size: "small",
          onClick: applyFilter,
          label: applyLabel,
          pt: getColumnPTOptions('filterApplyButton'),
          unstyled: props.unstyled,
          __parentMetadata: {
            parent: props.metaData
          }
        });
      }
      return ObjectUtils.getJSXElement(getColumnProp('filterApply'), {
        field,
        filterModel,
        filterApplyCallback: applyFilter
      });
    }
    return null;
  };
  const createButtonBar = () => {
    const clearButton = createFilterClearButton();
    const applyButton = createFilterApplyButton();
    const filterButtonbarProps = mergeProps({
      className: cx('filterButtonBar')
    }, getColumnPTOptions('filterButtonBar'));
    return /*#__PURE__*/React.createElement("div", filterButtonbarProps, clearButton, applyButton);
  };
  const createItems = () => {
    const operator = createOperator();
    const constraints = createConstraints();
    const addRule = createAddRule();
    const buttonBar = createButtonBar();
    return /*#__PURE__*/React.createElement(React.Fragment, null, operator, constraints, addRule, buttonBar);
  };
  const createOverlay = () => {
    const style = getColumnProp('filterMenuStyle');
    const filterHeader = ObjectUtils.getJSXElement(getColumnProp('filterHeader'), {
      field,
      filterModel,
      filterApplyCallback
    });
    const filterFooter = ObjectUtils.getJSXElement(getColumnProp('filterFooter'), {
      field,
      filterModel,
      filterApplyCallback
    });
    const items = props.display === 'row' ? createRowItems() : createItems();
    const filterOverlayProps = mergeProps({
      style,
      className: cx('filterOverlay', {
        columnFilterProps: props,
        context,
        getColumnProp
      }),
      onKeyDown: e => onContentKeyDown(e),
      onClick: e => onContentClick(e),
      onMouseDown: e => onContentMouseDown(),
      id: overlayId.current,
      'aria-modal': overlayVisibleState,
      role: 'dialog'
    }, getColumnPTOptions('filterOverlay'));
    const transitionProps = mergeProps({
      classNames: cx('transition'),
      in: overlayVisibleState,
      timeout: {
        enter: 120,
        exit: 100
      },
      unmountOnExit: true,
      onEnter: onOverlayEnter,
      onEntered: onOverlayEntered,
      onExit: onOverlayExit,
      onExited: onOverlayExited
    }, getColumnPTOptions('transition'));
    return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(CSSTransition, _extends({
      nodeRef: overlayRef
    }, transitionProps), /*#__PURE__*/React.createElement("div", _extends({
      ref: overlayRef
    }, filterOverlayProps), /*#__PURE__*/React.createElement(FocusTrap, {
      autoFocus: true
    }, filterHeader, items, filterFooter))));
  };
  const rowFilterElement = createRowFilterElement();
  const menuButton = createMenuButton();
  const clearButton = createClearButton();
  const overlay = createOverlay();
  const columnFilter = mergeProps({
    className: cx('columnFilter', {
      columnFilterProps: props
    })
  }, getColumnPTOptions('columnFilter'));
  return /*#__PURE__*/React.createElement("div", columnFilter, rowFilterElement, menuButton, clearButton, overlay);
});
ColumnFilter.displayName = 'ColumnFilter';

const HeaderCheckbox = /*#__PURE__*/React.memo(props => {
  const mergeProps = useMergeProps();
  const getColumnProps = () => ColumnBase.getCProps(props.column);
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const getColumnPTOptions = key => {
    const cProps = getColumnProps();
    const columnMetaData = {
      props: cProps,
      parent: props.metaData,
      hostName: props.hostName,
      state: {},
      context: {
        checked: props.checked,
        disabled: props.disabled
      }
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
  };
  const onChange = event => {
    if (!props.disabled) {
      props.onChange({
        originalEvent: event,
        checked: !props.checked
      });
    }
  };
  const headerCheckboxIconProps = mergeProps({
    className: cx('checkIcon')
  }, getColumnPTOptions('headerCheckbox.icon'));
  const icon = props.checked ? props.checkIcon || /*#__PURE__*/React.createElement(CheckIcon, headerCheckboxIconProps) : null;
  const checkIcon = IconUtils.getJSXIcon(icon, {
    ...headerCheckboxIconProps
  }, {
    props
  });
  const tabIndex = props.disabled ? null : 0;
  const headerCheckboxProps = mergeProps({
    role: 'checkbox',
    'aria-checked': props.checked,
    'aria-label': props.checked ? ariaLabel('selectAll') : ariaLabel('unselectAll'),
    tabIndex,
    onChange,
    icon: checkIcon,
    checked: props.checked,
    disabled: props.disabled
  }, getColumnPTOptions('headerCheckbox'));
  return /*#__PURE__*/React.createElement(Checkbox, headerCheckboxProps);
});
HeaderCheckbox.displayName = 'HeaderCheckbox';

const HeaderCell = /*#__PURE__*/React.memo(props => {
  const [styleObjectState, setStyleObjectState] = React.useState({});
  const elementRef = React.useRef(null);
  const prevColumn = usePrevious(props.column);
  const mergeProps = useMergeProps();
  const {
    metaData: parentMetaData,
    ptCallbacks,
    index
  } = props;
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const params = {
    index
  };
  const parentParams = {
    ...parentMetaData,
    ...params
  };
  const getColumnProps = () => ColumnBase.getCProps(props.column);
  const getColumnPTOptions = key => {
    const cProps = getColumnProps();
    const columnMetaData = {
      props: cProps,
      parent: parentParams,
      hostName: props.hostName,
      state: {
        styleObject: styleObjectState
      },
      context: {
        index: props.index,
        sorted: getSortMeta().sorted,
        resizable: props.resizableColumns,
        size: props.metaData.props.size,
        showGridlines: props.metaData.props.showGridlines
      }
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
  };
  const isBadgeVisible = () => props.multiSortMeta && props.multiSortMeta.length > 1;
  const isSortableDisabled = () => !getColumnProp('sortable') || getColumnProp('sortable') && (props.allSortableDisabled || getColumnProp('sortableDisabled'));
  const getColumnProp = (...args) => props.column ? typeof args[0] === 'string' ? ColumnBase.getCProp(props.column, args[0]) : ColumnBase.getCProp(args[0] || props.column, args[1]) : null;
  const getStyle = () => {
    const headerStyle = getColumnProp('headerStyle');
    const columnStyle = getColumnProp('style');
    return getColumnProp('frozen') ? {
      ...columnStyle,
      ...headerStyle,
      ...styleObjectState
    } : {
      ...columnStyle,
      ...headerStyle
    };
  };
  const getMultiSortMetaIndex = () => props.multiSortMeta.findIndex(meta => meta.field === getColumnProp('field') || meta.field === getColumnProp('sortField'));
  const getSortMeta = () => {
    let sorted = false;
    let sortOrder = 0;
    let metaIndex = -1;
    if (props.sortMode === 'single') {
      sorted = props.sortField && (props.sortField === getColumnProp('field') || props.sortField === getColumnProp('sortField'));
      sortOrder = sorted ? props.sortOrder : 0;
    } else if (props.sortMode === 'multiple') {
      metaIndex = getMultiSortMetaIndex();
      if (metaIndex > -1) {
        sorted = true;
        sortOrder = props.multiSortMeta[metaIndex].order;
      }
    }
    return {
      sorted,
      sortOrder,
      metaIndex
    };
  };
  const getAriaSort = ({
    sorted,
    sortOrder
  }) => {
    if (getColumnProp('sortable')) {
      if (sorted && sortOrder < 0) {
        return 'descending';
      }
      if (sorted && sortOrder > 0) {
        return 'ascending';
      }
      return 'none';
    }
    return null;
  };
  const updateStickyPosition = () => {
    if (getColumnProp('frozen')) {
      const styleObject = {
        ...styleObjectState
      };
      const align = getColumnProp('alignFrozen');
      if (align === 'right') {
        let right = 0;
        const next = elementRef.current.nextElementSibling;
        if (next) {
          right = DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
        }
        styleObject.right = `${right}px`;
      } else {
        let left = 0;
        const prev = elementRef.current.previousElementSibling;
        if (prev) {
          left = DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
        }
        styleObject.left = `${left}px`;
      }
      const filterRow = elementRef.current.parentElement.nextElementSibling;
      if (filterRow) {
        const index = DomHandler.index(elementRef.current);
        filterRow.children[index].style.left = styleObject.left;
        filterRow.children[index].style.right = styleObject.right;
      }
      const isSameStyle = styleObjectState.left === styleObject.left && styleObjectState.right === styleObject.right;
      !isSameStyle && setStyleObjectState(styleObject);
    }
  };
  const updateSortableDisabled = prevColumn => {
    if (getColumnProp(prevColumn, 'sortableDisabled') !== getColumnProp('sortableDisabled') || getColumnProp(prevColumn, 'sortable') !== getColumnProp('sortable')) {
      props.onSortableChange();
    }
  };
  const onClick = event => {
    if (!isSortableDisabled()) {
      const targetNode = event.target;
      if (DomHandler.getAttribute(targetNode, 'data-p-sortable-column') === true || DomHandler.getAttribute(targetNode, 'data-pc-section') === 'headertitle' || DomHandler.getAttribute(targetNode, 'data-pc-section') === 'headercontent' || DomHandler.getAttribute(targetNode, 'data-pc-section') === 'sortIcon' || DomHandler.getAttribute(targetNode.parentElement, 'data-pc-section') === 'sortIcon' || targetNode.closest('[data-p-sortable-column="true"]') && !targetNode.closest('[data-pc-section="filtermenubutton"]')) {
        DomHandler.clearSelection();
        props.onSortChange({
          originalEvent: event,
          column: props.column,
          sortableDisabledFields: props.sortableDisabledFields
        });
      }
    }
  };
  const onMouseDown = event => {
    props.onColumnMouseDown({
      originalEvent: event,
      column: props.column
    });
  };
  const onKeyDown = event => {
    if ((event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') && event.currentTarget === elementRef.current && DomHandler.getAttribute(event.currentTarget, 'data-p-sortable-column') === 'true') {
      onClick(event);
      event.preventDefault();
    }
  };
  const onDragStart = event => {
    props.onColumnDragStart({
      originalEvent: event,
      column: props.column
    });
  };
  const onDragOver = event => {
    props.onColumnDragOver({
      originalEvent: event,
      column: props.column
    });
  };
  const onDragLeave = event => {
    props.onColumnDragLeave({
      originalEvent: event,
      column: props.column
    });
  };
  const onDrop = event => {
    props.onColumnDrop({
      originalEvent: event,
      column: props.column
    });
  };
  const onResizerMouseDown = event => {
    props.onColumnResizeStart({
      originalEvent: event,
      column: props.column
    });
  };
  const onResizerClick = event => {
    if (props.onColumnResizerClick) {
      props.onColumnResizerClick({
        originalEvent: event,
        element: event.currentTarget.parentElement,
        column: props.column
      });
      event.preventDefault();
    }
  };
  const onResizerDoubleClick = event => {
    if (props.onColumnResizerDoubleClick) {
      props.onColumnResizerDoubleClick({
        originalEvent: event,
        element: event.currentTarget.parentElement,
        column: props.column
      });
      event.preventDefault();
    }
  };
  React.useEffect(() => {
    if (getColumnProp('frozen')) {
      updateStickyPosition();
    }
    updateSortableDisabled(prevColumn);
  });
  const createResizer = () => {
    if (props.resizableColumns && !getColumnProp('frozen')) {
      const columnResizerProps = mergeProps({
        className: cx('columnResizer'),
        onMouseDown: e => onResizerMouseDown(e),
        onClick: e => onResizerClick(e),
        onDoubleClick: e => onResizerDoubleClick(e)
      }, getColumnPTOptions('columnResizer'));
      return /*#__PURE__*/React.createElement("span", columnResizerProps);
    }
    return null;
  };
  const createTitle = () => {
    const title = ObjectUtils.getJSXElement(getColumnProp('header'), {
      props: props.tableProps
    });
    const headerTitleProps = mergeProps({
      className: cx('headerTitle')
    }, getColumnPTOptions('headerTitle'));
    return /*#__PURE__*/React.createElement("span", headerTitleProps, title);
  };
  const createSortIcon = ({
    sorted,
    sortOrder
  }) => {
    if (getColumnProp('sortable')) {
      const sortIconProps = mergeProps({
        className: cx('sortIcon')
      }, getColumnPTOptions('sortIcon'));
      const sortProps = mergeProps(getColumnPTOptions('sort'));
      const icon = sorted ? sortOrder < 0 ? /*#__PURE__*/React.createElement(SortAmountDownIcon, sortIconProps) : /*#__PURE__*/React.createElement(SortAmountUpAltIcon, sortIconProps) : /*#__PURE__*/React.createElement(SortAltIcon, sortIconProps);
      const sortIcon = IconUtils.getJSXIcon(props.sortIcon || icon, {
        ...sortIconProps
      }, {
        props,
        sorted,
        sortOrder
      });
      return /*#__PURE__*/React.createElement("span", sortProps, sortIcon);
    }
    return null;
  };
  const createBadge = ({
    metaIndex
  }) => {
    if (metaIndex !== -1 && isBadgeVisible()) {
      const value = props.groupRowsBy && props.groupRowsBy === props.groupRowSortField ? metaIndex : metaIndex + 1;
      const sortBadgeProps = mergeProps({
        className: cx('sortBadge')
      }, getColumnPTOptions('root'), getColumnPTOptions('sortBadge'));
      return /*#__PURE__*/React.createElement("span", sortBadgeProps, value);
    }
    return null;
  };
  const createCheckbox = () => {
    if (props.showSelectAll && getColumnProp('selectionMode') === 'multiple' && props.filterDisplay !== 'row') {
      const allRowsSelected = props.allRowsSelected(props.value);
      return /*#__PURE__*/React.createElement(HeaderCheckbox, {
        hostName: props.hostName,
        checked: allRowsSelected,
        onChange: props.onColumnCheckboxChange,
        disabled: props.empty,
        ptCallbacks: ptCallbacks,
        metaData: parentMetaData
      });
    }
    return null;
  };
  const createFilter = () => {
    if (props.filterDisplay === 'menu' && getColumnProp('filter')) {
      return /*#__PURE__*/React.createElement(ColumnFilter, {
        hostName: props.hostName,
        display: "menu",
        column: props.column,
        filters: props.filters,
        onFilterChange: props.onFilterChange,
        onFilterApply: props.onFilterApply,
        filtersStore: props.filtersStore,
        filterIcon: props.filterIcon,
        filterClearIcon: props.filterClearIcon,
        ptCallbacks: ptCallbacks,
        metaData: parentMetaData,
        unstyled: props.unstyled
      });
    }
    return null;
  };
  const createHeader = sortMeta => {
    const title = createTitle();
    const sortIcon = createSortIcon(sortMeta);
    const badge = createBadge(sortMeta);
    const checkbox = createCheckbox();
    const filter = createFilter();
    const headerContentProps = mergeProps({
      className: cx('headerContent')
    }, getColumnPTOptions('headerContent'));
    return /*#__PURE__*/React.createElement("div", headerContentProps, title, sortIcon, badge, checkbox, filter);
  };
  const createElement = () => {
    const _isSortableDisabled = isSortableDisabled();
    const sortMeta = getSortMeta();
    const style = getStyle();
    const align = getColumnProp('alignHeader') || getColumnProp('align');
    const frozen = getColumnProp('frozen');
    const tabIndex = getColumnProp('sortable') && !_isSortableDisabled ? props.tabIndex : null;
    const colSpan = getColumnProp('colSpan');
    const rowSpan = getColumnProp('rowSpan');
    const ariaSort = getAriaSort(sortMeta);
    const headerTooltip = getColumnProp('headerTooltip');
    const headerClassName = getColumnProp('headerClassName');
    const hasTooltip = ObjectUtils.isNotEmpty(headerTooltip);
    const headerTooltipOptions = getColumnProp('headerTooltipOptions');
    const resizer = createResizer();
    const header = createHeader(sortMeta);
    const headerCellProps = mergeProps({
      className: classNames(headerClassName, cx('headerCell', {
        headerProps: props,
        frozen,
        sortMeta,
        align,
        _isSortableDisabled,
        getColumnProp
      })),
      style,
      role: 'columnheader',
      onClick: e => onClick(e),
      onKeyDown: e => onKeyDown(e),
      onMouseDown: e => onMouseDown(e),
      onDragStart: e => onDragStart(e),
      onDragOver: e => onDragOver(e),
      onDragLeave: e => onDragLeave(e),
      onDrop: e => onDrop(e),
      tabIndex,
      colSpan,
      rowSpan,
      'aria-sort': ariaSort,
      'data-p-sortable-column': getColumnProp('sortable'),
      'data-p-resizable-column': props.resizableColumns,
      'data-p-highlight': sortMeta.sorted,
      'data-p-filter-column': !props.metaData.props.headerColumnGroup && props.filterDisplay === 'row',
      'data-p-frozen-column': getColumnProp('frozen'),
      'data-p-reorderable-column': props.reorderableColumns
    }, getColumnPTOptions('root'), getColumnPTOptions('headerCell'));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("th", _extends({
      ref: elementRef
    }, headerCellProps), resizer, header), hasTooltip && /*#__PURE__*/React.createElement(Tooltip, _extends({
      target: elementRef,
      content: headerTooltip,
      pt: getColumnPTOptions('tooltip'),
      unstyled: props.unstyled
    }, headerTooltipOptions)));
  };
  const element = createElement();
  return element;
});
HeaderCell.displayName = 'HeaderCell';

const TableHeader = /*#__PURE__*/React.memo(props => {
  const [sortableDisabledFieldsState, setSortableDisabledFieldsState] = React.useState([]);
  const [allSortableDisabledState, setAllSortableDisabledState] = React.useState(false);
  const mergeProps = useMergeProps();
  const isSingleSort = props.sortMode === 'single';
  const isMultipleSort = props.sortMode === 'multiple';
  const isAllSortableDisabled = isSingleSort && allSortableDisabledState;
  const {
    ptm,
    ptmo,
    cx
  } = props.ptCallbacks;
  const getColumnProp = (column, name) => ColumnBase.getCProp(column, name);
  const getColumnProps = column => ColumnBase.getCProps(column);
  const getRowProps = row => ColumnGroupBase.getCProps(row);
  const getColumnGroupProps = () => props.headerColumnGroup ? ptmo(ColumnGroupBase.getCProps(props.headerColumnGroup)) : undefined;
  const getColumnGroupPTOptions = key => {
    const cGProps = getColumnGroupProps();
    const columnGroupMetaData = {
      props: cGProps,
      parent: props.metaData,
      hostName: props.hostName,
      state: {
        sortableDisabledFields: sortableDisabledFieldsState,
        allSortableDisabled: allSortableDisabledState
      }
    };
    return mergeProps(ptm(`columnGroup.${key}`, {
      columnGroup: columnGroupMetaData
    }), ptm(`columnGroup.${key}`, columnGroupMetaData), ptmo(cGProps, key, columnGroupMetaData));
  };
  const getColumnPTOptions = (column, key) => {
    const cProps = getColumnProps(column);
    const columnMetaData = {
      props: cProps,
      parent: props.metaData,
      hostName: props.hostName,
      state: {
        sortableDisabledFields: sortableDisabledFieldsState,
        allSortableDisabled: allSortableDisabledState
      }
    };
    return mergeProps(ptm(`column.${key}`, {
      column: columnMetaData
    }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
  };
  const getRowPTOptions = (row, key) => {
    const rProps = getRowProps(row);
    const rowMetaData = {
      props: rProps,
      parent: props.metaData,
      hostName: props.hostName
    };
    return mergeProps(ptm(`row.${key}`, {
      row: rowMetaData
    }), ptm(`row.${key}`, rowMetaData), ptmo(rProps, key, rowMetaData));
  };
  const isColumnSorted = column => props.sortField !== null ? getColumnProp(column, 'field') === props.sortField || getColumnProp(column, 'sortField') === props.sortField : false;
  const updateSortableDisabled = () => {
    if (isSingleSort || isMultipleSort && props.onSortChange) {
      const sortableDisabledFields = [];
      let allSortableDisabled = false;
      props.columns.forEach(column => {
        if (getColumnProp(column, 'sortableDisabled')) {
          sortableDisabledFields.push(getColumnProp(column, 'sortField') || getColumnProp(column, 'field'));
          if (!allSortableDisabled && isColumnSorted(column)) {
            allSortableDisabled = true;
          }
        }
      });
      setSortableDisabledFieldsState(sortableDisabledFields);
      setAllSortableDisabledState(allSortableDisabled);
    }
  };
  const onSortableChange = () => {
    updateSortableDisabled();
  };
  const onCheckboxChange = e => {
    props.onColumnCheckboxChange(e, props.value);
  };
  useMountEffect(() => {
    updateSortableDisabled();
  });
  const createGroupHeaderCells = row => {
    const columns = React.Children.toArray(RowBase.getCProp(row, 'children'));
    return createHeaderCells(columns);
  };
  const createHeaderCells = columns => React.Children.map(columns, (col, i) => {
    const isVisible = col ? !getColumnProp(col, 'hidden') : true;
    const key = col ? getColumnProp(col, 'columnKey') || getColumnProp(col, 'field') || i : i;
    return isVisible && /*#__PURE__*/React.createElement(HeaderCell, {
      hostName: props.hostName,
      allRowsSelected: props.allRowsSelected,
      allSortableDisabled: isAllSortableDisabled,
      column: col,
      index: i,
      empty: props.empty,
      filterClearIcon: props.filterClearIcon,
      filterDisplay: props.filterDisplay,
      filterIcon: props.filterIcon,
      filters: props.filters,
      filtersStore: props.filtersStore,
      groupRowSortField: props.groupRowSortField,
      groupRowsBy: props.groupRowsBy,
      key: key,
      multiSortMeta: props.multiSortMeta,
      onColumnCheckboxChange: onCheckboxChange,
      onColumnDragLeave: props.onColumnDragLeave,
      onColumnDragOver: props.onColumnDragOver,
      onColumnDragStart: props.onColumnDragStart,
      onColumnDrop: props.onColumnDrop,
      onColumnMouseDown: props.onColumnMouseDown,
      onColumnResizeStart: props.onColumnResizeStart,
      onColumnResizerClick: props.onColumnResizerClick,
      onColumnResizerDoubleClick: props.onColumnResizerDoubleClick,
      onFilterApply: props.onFilterApply,
      onFilterChange: props.onFilterChange,
      onSortChange: props.onSortChange,
      onSortableChange: onSortableChange,
      reorderableColumns: props.reorderableColumns,
      resizableColumns: props.resizableColumns,
      showSelectAll: props.showSelectAll,
      sortField: props.sortField,
      sortIcon: props.sortIcon,
      sortMode: props.sortMode,
      sortOrder: props.sortOrder,
      sortableDisabledFields: sortableDisabledFieldsState,
      tabIndex: props.tabIndex,
      tableProps: props.tableProps,
      value: props.value,
      ptCallbacks: props.ptCallbacks,
      metaData: props.metaData,
      unstyled: props.unstyled
    });
  });
  const createCheckbox = selectionMode => {
    if (props.showSelectAll && selectionMode === 'multiple') {
      const allRowsSelected = props.allRowsSelected(props.value);
      return /*#__PURE__*/React.createElement(HeaderCheckbox, {
        hostName: props.hostName,
        checked: allRowsSelected,
        onChange: onCheckboxChange,
        disabled: props.empty,
        ptCallbacks: props.ptCallbacks,
        metaData: props.metaData
      });
    }
    return null;
  };
  const createFilter = (column, filter) => {
    if (filter) {
      return /*#__PURE__*/React.createElement(ColumnFilter, {
        hostName: props.hostName,
        display: "row",
        column: column,
        filterClearIcon: props.filterClearIcon,
        filterIcon: props.filterIcon,
        filters: props.filters,
        filtersStore: props.filtersStore,
        metaData: props.metaData,
        onFilterApply: props.onFilterApply,
        onFilterChange: props.onFilterChange,
        ptCallbacks: props.ptCallbacks,
        unstyled: props.unstyled
      });
    }
    return null;
  };
  const createFilterCells = () => React.Children.map(props.columns, (col, i) => {
    const isVisible = !getColumnProp(col, 'hidden');
    if (isVisible) {
      const {
        filterHeaderStyle,
        style,
        filterHeaderClassName,
        className,
        frozen,
        columnKey,
        field,
        selectionMode,
        filter
      } = ColumnBase.getCProps(col);
      const colStyle = {
        ...(filterHeaderStyle || {}),
        ...(style || {})
      };
      const colKey = columnKey || field || i;
      const checkbox = createCheckbox(selectionMode);
      const filterRow = createFilter(col, filter);
      const headerCellProps = mergeProps({
        style: colStyle,
        className: classNames(filterHeaderClassName, className, cx('headerCell', {
          frozen,
          column: col
        })),
        key: colKey
      }, getColumnPTOptions(col, 'root'), getColumnPTOptions(col, 'headerCell'));
      return /*#__PURE__*/React.createElement("th", headerCellProps, checkbox, filterRow);
    }
    return null;
  });
  const createContent = () => {
    if (props.headerColumnGroup) {
      const rows = React.Children.toArray(ColumnGroupBase.getCProp(props.headerColumnGroup, 'children'));
      return rows.map((row, i) => {
        const headerRowProps = mergeProps({
          role: 'row'
        }, getRowPTOptions(row, 'root'));
        return /*#__PURE__*/React.createElement("tr", _extends({}, headerRowProps, {
          key: i
        }), createGroupHeaderCells(row));
      });
    }
    const headerRowProps = mergeProps({
      role: 'row'
    }, ptm('headerRow', {
      hostName: props.hostName
    }));
    const headerRow = /*#__PURE__*/React.createElement("tr", headerRowProps, createHeaderCells(props.columns));
    const filterRow = props.filterDisplay === 'row' && /*#__PURE__*/React.createElement("tr", headerRowProps, createFilterCells());
    return /*#__PURE__*/React.createElement(React.Fragment, null, headerRow, filterRow);
  };
  const content = createContent();
  const theadProps = mergeProps({
    className: cx('thead'),
    role: 'rowgroup'
  }, getColumnGroupPTOptions('root'), ptm('thead', {
    hostName: props.hostName
  }));
  return /*#__PURE__*/React.createElement("thead", theadProps, content);
});
TableHeader.displayName = 'TableHeader';

const DataTable = /*#__PURE__*/React.forwardRef((inProps, ref) => {
  const context = React.useContext(PrimeReactContext);
  const mergeProps = useMergeProps();
  const props = DataTableBase.getProps(inProps, context);
  const [firstState, setFirstState] = React.useState(props.first);
  const [rowsState, setRowsState] = React.useState(props.rows);
  const [sortFieldState, setSortFieldState] = React.useState(props.sortField);
  const [sortOrderState, setSortOrderState] = React.useState(props.sortOrder);
  const [multiSortMetaState, setMultiSortMetaState] = React.useState(props.multiSortMeta);
  const [filtersState, setFiltersState] = React.useState(props.filters);
  const [columnOrderState, setColumnOrderState] = React.useState([]);
  const [groupRowsSortMetaState, setGroupRowsSortMetaState] = React.useState(null);
  const [editingMetaState, setEditingMetaState] = React.useState({});
  const [d_rowsState, setD_rowsState] = React.useState(props.rows);
  const [d_filtersState, setD_filtersState] = React.useState({});
  const metaData = {
    props,
    state: {
      first: firstState,
      rows: rowsState,
      sortField: sortFieldState,
      sortOrder: sortOrderState,
      multiSortMeta: multiSortMetaState,
      filters: filtersState,
      columnOrder: columnOrderState,
      groupRowsSortMeta: groupRowsSortMetaState,
      editingMeta: editingMetaState,
      d_rows: d_rowsState,
      d_filters: d_filtersState
    },
    context: {
      scrollable: props.scrollable
    }
  };
  const ptCallbacks = DataTableBase.setMetaData(metaData);
  useHandleStyle(DataTableBase.css.styles, ptCallbacks.isUnstyled, {
    name: 'datatable'
  });
  const attributeSelector = React.useRef('');
  const elementRef = React.useRef(null);
  const tableRef = React.useRef(null);
  const wrapperRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const frozenBodyRef = React.useRef(null);
  const virtualScrollerRef = React.useRef(null);
  const reorderIndicatorUpRef = React.useRef(null);
  const reorderIndicatorDownRef = React.useRef(null);
  const colReorderIconWidth = React.useRef(null);
  const colReorderIconHeight = React.useRef(null);
  const resizeHelperRef = React.useRef(null);
  const draggedColumnElement = React.useRef(null);
  const draggedColumn = React.useRef(null);
  const dropPosition = React.useRef(null);
  const styleElement = React.useRef(null);
  const responsiveStyleElement = React.useRef(null);
  const beforeResizeStyleElement = React.useRef(null);
  const columnWidthsState = React.useRef(null);
  const tableWidthState = React.useRef(null);
  const resizeColumn = React.useRef(null);
  const resizeColumnElement = React.useRef(null);
  const columnResizing = React.useRef(false);
  const lastResizeHelperX = React.useRef(null);
  const columnSortable = React.useRef(false);
  const columnSortFunction = React.useRef(null);
  const columnField = React.useRef(null);
  const filterTimeout = React.useRef(null);
  if (props.rows !== d_rowsState && !props.onPage) {
    setRowsState(props.rows);
    setD_rowsState(props.rows);
  }
  const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({
    type: 'mousemove',
    listener: event => {
      if (columnResizing.current) {
        onColumnResize(event);
      }
    }
  });
  const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({
    type: 'mouseup',
    listener: () => {
      if (columnResizing.current) {
        columnResizing.current = false;
        onColumnResizeEnd();
      }
    }
  });
  const isCustomStateStorage = () => props.stateStorage === 'custom';
  const isStateful = () => props.stateKey != null || isCustomStateStorage();
  const isVirtualScrollerDisabled = () => ObjectUtils.isEmpty(props.virtualScrollerOptions) || !props.scrollable;
  const isEquals = (data1, data2) => props.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, props.dataKey);
  const hasFilter = () => ObjectUtils.isNotEmpty(getFilters()) || props.globalFilter;
  const getFirst = () => props.onPage ? props.first : firstState;
  const getRows = () => props.onPage ? props.rows : rowsState;
  const getSortField = () => props.onSort ? props.sortField : sortFieldState;
  const getSortOrder = () => props.onSort ? props.sortOrder : sortOrderState;
  const getMultiSortMeta = () => (props.onSort ? props.multiSortMeta : multiSortMetaState) || [];
  const getFilters = () => props.onFilter ? props.filters : filtersState;
  const getColumnProp = (column, name) => ColumnBase.getCProp(column, name);
  const getColumns = ignoreReorderable => {
    const columns = React.Children.toArray(props.children);
    if (!columns) {
      return null;
    }
    if (!ignoreReorderable && props.reorderableColumns && columnOrderState) {
      const orderedColumns = columnOrderState.reduce((arr, columnKey) => {
        const column = findColumnByKey(columns, columnKey);
        column && arr.push(column);
        return arr;
      }, []);
      return [...orderedColumns, ...columns.filter(col => orderedColumns.indexOf(col) < 0)];
    }
    return columns;
  };
  const getStorage = () => {
    switch (props.stateStorage) {
      case 'local':
        return window.localStorage;
      case 'session':
        return window.sessionStorage;
      case 'custom':
        return null;
      default:
        throw new Error(`${props.stateStorage} is not a valid value for the state storage, supported values are "local", "session" and "custom".`);
    }
  };
  const saveState = () => {
    const state = {};
    if (props.paginator) {
      state.first = getFirst();
      state.rows = getRows();
    }
    const sortField = getSortField();
    if (sortField) {
      state.sortField = sortField;
      state.sortOrder = getSortOrder();
    }
    const multiSortMeta = getMultiSortMeta();
    if (multiSortMeta) {
      state.multiSortMeta = multiSortMeta;
    }
    if (hasFilter()) {
      state.filters = getFilters();
    }
    if (props.resizableColumns) {
      saveColumnWidths(state);
    }
    if (props.reorderableColumns) {
      state.columnOrder = columnOrderState;
    }
    if (props.expandedRows) {
      state.expandedRows = props.expandedRows;
    }
    if (props.selection && props.onSelectionChange) {
      state.selection = props.selection;
    }
    if (isCustomStateStorage()) {
      if (props.customSaveState) {
        props.customSaveState(state);
      }
    } else {
      const storage = getStorage();
      if (ObjectUtils.isNotEmpty(state)) {
        storage.setItem(props.stateKey, JSON.stringify(state));
      }
    }
    if (props.onStateSave) {
      props.onStateSave(state);
    }
  };
  const clearState = () => {
    const storage = getStorage();
    if (storage && props.stateKey) {
      storage.removeItem(props.stateKey);
    }
  };
  const restoreState = () => {
    let restoredState = {};
    if (isCustomStateStorage()) {
      if (props.customRestoreState) {
        restoredState = props.customRestoreState();
      }
    } else {
      const storage = getStorage();
      const stateString = storage.getItem(props.stateKey);
      const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      const reviver = function (key, value) {
        return typeof value === 'string' && dateFormat.test(value) ? new Date(value) : value;
      };
      if (stateString) {
        restoredState = JSON.parse(stateString, reviver);
      }
    }
    _restoreState(restoredState);
  };
  const restoreTableState = restoredState => {
    _restoreState(restoredState);
  };
  const _restoreState = (restoredState = {}) => {
    if (ObjectUtils.isNotEmpty(restoredState)) {
      if (props.paginator) {
        if (props.onPage) {
          const getOnPageParams = (first, rows) => {
            const totalRecords = getTotalRecords(processedData());
            const pageCount = Math.ceil(totalRecords / rows) || 1;
            const page = Math.floor(first / rows);
            return {
              first,
              rows,
              page,
              pageCount
            };
          };
          props.onPage(createEvent(getOnPageParams(restoredState.first, restoredState.rows)));
        } else {
          setFirstState(restoredState.first);
          setRowsState(restoredState.rows);
        }
      }
      if (restoredState.sortField) {
        if (props.onSort) {
          props.onSort(createEvent({
            sortField: restoredState.sortField,
            sortOrder: restoredState.sortOrder
          }));
        } else {
          setSortFieldState(restoredState.sortField);
          setSortOrderState(restoredState.sortOrder);
        }
      }
      if (restoredState.multiSortMeta) {
        if (props.onSort) {
          props.onSort(createEvent({
            multiSortMeta: restoredState.multiSortMeta
          }));
        } else {
          setMultiSortMetaState(restoredState.multiSortMeta);
        }
      }
      if (restoredState.filters) {
        setD_filtersState(cloneFilters(restoredState.filters));
        if (props.onFilter) {
          props.onFilter(createEvent({
            filters: restoredState.filters
          }));
        } else {
          setFiltersState(cloneFilters(restoredState.filters));
        }
      }
      if (props.resizableColumns) {
        columnWidthsState.current = restoredState.columnWidths;
        tableWidthState.current = restoredState.tableWidth;
        restoreColumnWidths();
      }
      if (props.reorderableColumns) {
        setColumnOrderState(restoredState.columnOrder);
      }
      if (restoredState.expandedRows && props.onRowToggle) {
        props.onRowToggle({
          data: restoredState.expandedRows
        });
      }
      if (restoredState.selection && props.onSelectionChange) {
        props.onSelectionChange({
          value: restoredState.selection
        });
      }
      if (props.onStateRestore) {
        props.onStateRestore(restoredState);
      }
    }
  };
  const saveColumnWidths = state => {
    const widths = [];
    const headers = DomHandler.find(elementRef.current, '[data-pc-section="thead"] > tr > th');
    headers.forEach(header => widths.push(DomHandler.getOuterWidth(header)));
    state.columnWidths = widths.join(',');
    if (props.columnResizeMode === 'expand') {
      state.tableWidth = `${DomHandler.getOuterWidth(tableRef.current)}px`;
    }
  };
  const addColumnWidthStyles = widths => {
    createStyleElement();
    let innerHTML = '';
    const selector = `[data-pc-name="datatable"][${attributeSelector.current}] > [data-pc-section="wrapper"] ${isVirtualScrollerDisabled() ? '' : '> [data-pc-name="virtualscroller"]'} > [data-pc-section="table"]`;
    widths.forEach((width, index) => {
      const style = `width: ${width}px !important; max-width: ${width}px !important`;
      innerHTML += `
				${selector} > [data-pc-section="thead"] > tr > th:nth-child(${index + 1}),
				${selector} > [data-pc-section="tbody"] > tr > td:nth-child(${index + 1}),
				${selector} > [data-pc-section="tfoot"] > tr > td:nth-child(${index + 1}) {
					${style}
				}
			`;
    });
    styleElement.current.innerHTML = innerHTML;
  };
  const restoreColumnWidths = () => {
    if (columnWidthsState.current) {
      const widths = columnWidthsState.current.split(',');
      if (props.columnResizeMode === 'expand' && tableWidthState.current) {
        tableRef.current.style.width = tableWidthState.current;
        tableRef.current.style.minWidth = tableWidthState.current;
      }
      if (ObjectUtils.isNotEmpty(widths)) {
        addColumnWidthStyles(widths);
      }
    }
  };
  const findParentHeader = element => {
    if (element.nodeName === 'TH') {
      return element;
    }
    let parent = element.parentElement;
    while (parent.nodeName !== 'TH') {
      parent = parent.parentElement;
      if (!parent) {
        break;
      }
    }
    return parent;
  };
  const getGroupRowSortField = () => props.sortMode === 'single' ? props.sortField : groupRowsSortMetaState ? groupRowsSortMetaState.field : null;
  const getSelectableData = val => {
    if (props.showSelectionElement || props.isDataSelectable) {
      return val.filter((data, index) => {
        let isSelectable = true;
        if (props.showSelectionElement) {
          isSelectable = props.showSelectionElement({
            rowIndex: index,
            props
          });
        }
        if (props.isDataSelectable && isSelectable) {
          isSelectable = props.isDataSelectable({
            data,
            index
          });
        }
        return isSelectable;
      });
    }
    return val;
  };
  const allRowsSelected = processedData => {
    if (props.onSelectAllChange) {
      return props.selectAll;
    }
    const data = props.selectionPageOnly ? dataToRender(processedData) : processedData;
    const val = ObjectUtils.isNotEmpty(props.frozenValue) ? [...props.frozenValue, ...data] : data;
    const selectableVal = getSelectableData(val);
    return ObjectUtils.isNotEmpty(selectableVal) && props.selection && selectableVal.every(sv => ObjectUtils.isArray(props.selection) && props.selection.some(s => isEquals(s, sv)));
  };
  const getSelectionModeInColumn = columns => {
    if (columns) {
      const col = columns.find(c => !!getColumnProp(c, 'selectionMode'));
      return col ? getColumnProp(col, 'selectionMode') : null;
    }
    return null;
  };
  const findColumnByKey = (columns, key) => ObjectUtils.isNotEmpty(columns) ? columns.find(col => getColumnProp(col, 'columnKey') === key || getColumnProp(col, 'field') === key) : null;
  const getTotalRecords = data => props.lazy ? props.totalRecords : data ? data.length : 0;
  const onEditingMetaChange = e => {
    const {
      rowData,
      field,
      editingKey,
      editing
    } = e;
    const editingMeta = {
      ...editingMetaState
    };
    let meta = editingMeta[editingKey];
    if (editing) {
      !meta && (meta = editingMeta[editingKey] = {
        data: {
          ...rowData
        },
        fields: []
      });
      meta.fields.push(field);
    } else if (meta) {
      const fields = meta.fields.filter(f => f !== field);
      !fields.length ? delete editingMeta[editingKey] : meta.fields = fields;
    }
    setEditingMetaState(editingMeta);
  };
  const clearEditingMetaData = () => {
    if (props.editMode && ObjectUtils.isNotEmpty(editingMetaState)) {
      setEditingMetaState({});
    }
  };
  const onColumnResizeStart = e => {
    createBeforeResizeStyleElement();
    const {
      originalEvent: event,
      column
    } = e;
    const containerLeft = DomHandler.getOffset(elementRef.current).left;
    resizeColumn.current = column;
    resizeColumnElement.current = event.currentTarget.parentElement;
    columnResizing.current = true;
    lastResizeHelperX.current = event.pageX - containerLeft + elementRef.current.scrollLeft;
    bindColumnResizeEvents();
  };
  const onColumnResize = event => {
    const containerLeft = DomHandler.getOffset(elementRef.current).left;
    elementRef.current.setAttribute('data-p-unselectable-text', true);
    resizeHelperRef.current.style.height = `${elementRef.current.offsetHeight}px`;
    resizeHelperRef.current.style.top = `${0}px`;
    resizeHelperRef.current.style.left = `${event.pageX - containerLeft + elementRef.current.scrollLeft}px`;
    resizeHelperRef.current.style.display = 'block';
  };
  const onColumnResizeEnd = () => {
    const delta = resizeHelperRef.current.offsetLeft - lastResizeHelperX.current;
    const columnWidth = resizeColumnElement.current.offsetWidth;
    const newColumnWidth = columnWidth + delta;
    const minWidth = resizeColumnElement.current.style.minWidth || 15;
    if (columnWidth + delta > parseInt(minWidth, 10)) {
      if (props.columnResizeMode === 'fit') {
        const nextColumn = resizeColumnElement.current.nextElementSibling;
        const nextColumnWidth = nextColumn.offsetWidth - delta;
        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          resizeTableCells(newColumnWidth, nextColumnWidth);
        }
      } else if (props.columnResizeMode === 'expand') {
        const tableWidth = `${tableRef.current.offsetWidth + delta}px`;
        const updateTableWidth = el => {
          !!el && (el.style.width = el.style.minWidth = tableWidth);
        };

        // https://github.com/primefaces/primereact/issues/3970 Reasoning: resize table cells before updating the table width so that it can use existing computed cell widths and adjust only the one column.
        resizeTableCells(newColumnWidth);
        updateTableWidth(tableRef.current);
        if (!isVirtualScrollerDisabled()) {
          updateTableWidth(bodyRef.current);
          updateTableWidth(frozenBodyRef.current);
          if (wrapperRef.current) {
            updateTableWidth(DomHandler.findSingle(wrapperRef.current, '[data-pc-name="virtualscroller"] > table > tbody'));
          }
        }
      }
      if (props.onColumnResizeEnd) {
        props.onColumnResizeEnd({
          element: resizeColumnElement.current,
          column: resizeColumn.current,
          delta
        });
      }
      if (isStateful()) {
        saveState();
      }
    }
    resizeHelperRef.current.style.display = 'none';
    resizeColumn.current = null;
    resizeColumnElement.current = null;
    elementRef.current.setAttribute('data-p-unselectable-text', 'true');
    destroyBeforeResizeStyleElement();
    unbindColumnResizeEvents();
  };
  const resizeTableCells = (newColumnWidth, nextColumnWidth) => {
    const widths = [];
    const colIndex = DomHandler.index(resizeColumnElement.current);
    const headers = DomHandler.find(tableRef.current, '[data-pc-section="thead"] > tr > th');
    headers.forEach(header => widths.push(DomHandler.getOuterWidth(header)));
    destroyStyleElement();
    createStyleElement();
    let innerHTML = '';
    const selector = `[data-pc-name="datatable"][${attributeSelector.current}] > [data-pc-section="wrapper"] ${isVirtualScrollerDisabled() ? '' : '> [data-pc-name="virtualscroller"]'} > [data-pc-section="table"]`;
    widths.forEach((width, index) => {
      const colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
      const style = `width: ${colWidth}px !important; max-width: ${colWidth}px !important`;
      innerHTML += `
				${selector} > [data-pc-section="thead"] > tr > th:nth-child(${index + 1}),
				${selector} > [data-pc-section="tbody"] > tr > td:nth-child(${index + 1}),
				${selector} > [data-pc-section="tfoot"] > tr > td:nth-child(${index + 1}) {
					${style}
				}
		`;
    });
    styleElement.current.innerHTML = innerHTML;
  };
  const bindColumnResizeEvents = () => {
    bindDocumentMouseMoveListener();
    bindDocumentMouseUpListener();
  };
  const unbindColumnResizeEvents = () => {
    unbindDocumentMouseMoveListener();
    unbindDocumentMouseUpListener();
  };
  const onColumnHeaderMouseDown = e => {
    DomHandler.clearSelection();
    const {
      originalEvent: event,
      column
    } = e;
    if (props.reorderableColumns && getColumnProp(column, 'reorderable') !== false && !getColumnProp(column, 'frozen')) {
      if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || DomHandler.getAttribute(event.target, '[data-pc-section="columnresizer"]')) {
        event.currentTarget.draggable = false;
      } else {
        event.currentTarget.draggable = true;
      }
    }
  };
  const onColumnHeaderCheckboxChange = (e, processedData) => {
    if (props.onSelectAllChange) {
      props.onSelectAllChange(e);
    } else {
      const {
        originalEvent,
        checked
      } = e;
      const data = props.selectionPageOnly ? dataToRender(processedData) : processedData;
      let selection = props.selectionPageOnly && props.selection ? props.selection.filter(s => !data.some(d => isEquals(s, d))) : [];
      if (checked) {
        selection = ObjectUtils.isNotEmpty(props.frozenValue) ? [...selection, ...props.frozenValue, ...data] : [...selection, ...data];
        selection = getSelectableData(selection);
        props.onAllRowsSelect && props.onAllRowsSelect({
          originalEvent,
          data: selection,
          type: 'all'
        });
      } else {
        props.onAllRowsUnselect && props.onAllRowsUnselect({
          originalEvent,
          data: selection,
          type: 'all'
        });
      }
      if (props.onSelectionChange) {
        props.onSelectionChange({
          originalEvent,
          value: selection,
          type: 'all'
        });
      }
    }
  };
  const onColumnHeaderDragStart = e => {
    const {
      originalEvent: event,
      column
    } = e;
    if (columnResizing.current) {
      event.preventDefault();
      return;
    }
    if (!props.reorderableColumns) {
      return;
    }
    colReorderIconWidth.current = DomHandler.getHiddenElementOuterWidth(reorderIndicatorUpRef.current);
    colReorderIconHeight.current = DomHandler.getHiddenElementOuterHeight(reorderIndicatorUpRef.current);
    draggedColumn.current = column;
    draggedColumnElement.current = findParentHeader(event.currentTarget);
    event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
  };
  const onColumnHeaderDragOver = e => {
    const {
      originalEvent: event,
      column
    } = e;
    const dropHeader = findParentHeader(event.currentTarget);
    if (props.reorderableColumns && draggedColumnElement.current && dropHeader && !getColumnProp(column, 'frozen')) {
      event.preventDefault();
      if (draggedColumnElement.current !== dropHeader) {
        const containerOffset = DomHandler.getOffset(elementRef.current);
        const dropHeaderOffset = DomHandler.getOffset(dropHeader);
        const targetLeft = dropHeaderOffset.left - containerOffset.left;
        const columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        const dragIndex = DomHandler.index(draggedColumnElement.current);
        const dropIndex = DomHandler.index(findParentHeader(event.currentTarget));
        reorderIndicatorUpRef.current.style.top = `${dropHeaderOffset.top - containerOffset.top - (colReorderIconHeight.current - 1)}px`;
        reorderIndicatorDownRef.current.style.top = `${dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight}px`;
        if (event.pageX > columnCenter && dragIndex < dropIndex) {
          reorderIndicatorUpRef.current.style.left = `${targetLeft + dropHeader.offsetWidth - Math.ceil(colReorderIconWidth.current / 2)}px`;
          reorderIndicatorDownRef.current.style.left = `${targetLeft + dropHeader.offsetWidth - Math.ceil(colReorderIconWidth.current / 2)}px`;
          dropPosition.current = 1;
        } else if (dragIndex > dropIndex) {
          reorderIndicatorUpRef.current.style.left = `${targetLeft - Math.ceil(colReorderIconWidth.current / 2)}px`;
          reorderIndicatorDownRef.current.style.left = `${targetLeft - Math.ceil(colReorderIconWidth.current / 2)}px`;
          dropPosition.current = -1;
        }
        reorderIndicatorUpRef.current.style.display = 'block';
        reorderIndicatorDownRef.current.style.display = 'block';
      }
    }
  };
  const onColumnHeaderDragLeave = e => {
    const {
      originalEvent: event
    } = e;
    if (props.reorderableColumns && draggedColumnElement.current) {
      event.preventDefault();
      reorderIndicatorUpRef.current.style.display = 'none';
      reorderIndicatorDownRef.current.style.display = 'none';
    }
  };
  const onColumnHeaderDrop = e => {
    const {
      originalEvent: event,
      column
    } = e;
    event.preventDefault();
    if (draggedColumnElement.current) {
      const dragIndex = DomHandler.index(draggedColumnElement.current);
      const dropIndex = DomHandler.index(findParentHeader(event.currentTarget));
      let allowDrop = dragIndex !== dropIndex;
      if (allowDrop && (dropIndex - dragIndex === 1 && dropPosition.current === -1 || dragIndex - dropIndex === 1 && dropPosition.current === 1)) {
        allowDrop = false;
      }
      if (allowDrop) {
        const columns = getColumns();
        const isSameColumn = (col1, col2) => getColumnProp(col1, 'columnKey') || getColumnProp(col2, 'columnKey') ? ObjectUtils.equals(col1.props, col2.props, 'columnKey') : ObjectUtils.equals(col1.props, col2.props, 'field');
        const dragColIndex = columns.findIndex(child => isSameColumn(child, draggedColumn.current));
        let dropColIndex = columns.findIndex(child => isSameColumn(child, column));
        const widths = [];
        const headers = DomHandler.find(tableRef.current, '[data-pc-section="thead"] > tr > th');
        headers.forEach(header => widths.push(DomHandler.getOuterWidth(header)));
        const movedItem = widths.find((items, index) => index === dragColIndex);
        const remainingItems = widths.filter((items, index) => index !== dragColIndex);
        const reorderedWidths = [...remainingItems.slice(0, dropColIndex), movedItem, ...remainingItems.slice(dropColIndex)];
        addColumnWidthStyles(reorderedWidths);
        if (dropColIndex < dragColIndex && dropPosition.current === 1) {
          dropColIndex++;
        }
        if (dropColIndex > dragColIndex && dropPosition.current === -1) {
          dropColIndex--;
        }
        ObjectUtils.reorderArray(columns, dragColIndex, dropColIndex);
        const columnOrder = columns.reduce((orders, col) => {
          orders.push(getColumnProp(col, 'columnKey') || getColumnProp(col, 'field'));
          return orders;
        }, []);
        setColumnOrderState(columnOrder);
        if (props.onColReorder) {
          props.onColReorder({
            originalEvent: event,
            dragIndex: dragColIndex,
            dropIndex: dropColIndex,
            columns
          });
        }
      }
      reorderIndicatorUpRef.current.style.display = 'none';
      reorderIndicatorDownRef.current.style.display = 'none';
      draggedColumnElement.current.draggable = false;
      draggedColumnElement.current = null;
      draggedColumn.current = null;
      dropPosition.current = null;
    }
  };
  const createBeforeResizeStyleElement = () => {
    beforeResizeStyleElement.current = DomHandler.createInlineStyle(context && context.nonce || PrimeReact.nonce, context && context.styleContainer);
    const innerHTML = `
[data-pc-name="datatable"][${attributeSelector.current}] {
    user-select:none;
}
        `;
    beforeResizeStyleElement.current.innerHTML = innerHTML;
  };
  const createStyleElement = () => {
    styleElement.current = DomHandler.createInlineStyle(context && context.nonce || PrimeReact.nonce, context && context.styleContainer);
  };
  const createResponsiveStyle = () => {
    if (!responsiveStyleElement.current) {
      responsiveStyleElement.current = DomHandler.createInlineStyle(context && context.nonce || PrimeReact.nonce, context && context.styleContainer);
      const tableSelector = `.p-datatable-wrapper ${isVirtualScrollerDisabled() ? '' : '> .p-virtualscroller'} > .p-datatable-table`;
      const selector = `.p-datatable[${attributeSelector.current}] > ${tableSelector}`;
      const gridLinesSelector = `.p-datatable[${attributeSelector.current}].p-datatable-gridlines > ${tableSelector}`;
      const innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
	${selector} > .p-datatable-thead > tr > th,
	${selector} > .p-datatable-tfoot > tr > td {
		display: none;
	}

	${selector} > .p-datatable-tbody > tr > td {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
	}

	${selector} > .p-datatable-tbody > tr > td:not(:last-child) {
		border: 0 none;
	}

	${gridLinesSelector} > .p-datatable-tbody > tr > td:last-child {
		border-top: 0;
		border-right: 0;
		border-left: 0;
	}

	${selector} > .p-datatable-tbody > tr > td > .p-column-title {
		display: block;
	}
}
`;
      responsiveStyleElement.current.innerHTML = innerHTML;
    }
  };
  const destroyResponsiveStyle = () => {
    responsiveStyleElement.current = DomHandler.removeInlineStyle(responsiveStyleElement.current);
  };
  const destroyStyleElement = () => {
    styleElement.current = DomHandler.removeInlineStyle(styleElement.current);
  };
  const destroyBeforeResizeStyleElement = () => {
    beforeResizeStyleElement.current = DomHandler.removeInlineStyle(beforeResizeStyleElement.current);
  };
  const onPageChange = e => {
    clearEditingMetaData();
    if (props.onPage) {
      props.onPage(createEvent(e));
    } else {
      setFirstState(e.first);
      setRowsState(e.rows);
    }
    if (props.onValueChange) {
      props.onValueChange(processedData());
    }
  };
  const onSortChange = e => {
    clearEditingMetaData();
    const {
      originalEvent: event,
      column,
      sortableDisabledFields
    } = e;
    let sortField = getColumnProp(column, 'sortField') || getColumnProp(column, 'field');
    let sortOrder = props.defaultSortOrder;
    let multiSortMeta;
    let eventMeta;
    columnSortable.current = getColumnProp(column, 'sortable');
    columnSortFunction.current = getColumnProp(column, 'sortFunction');
    columnField.current = sortField;
    if (props.sortMode === 'multiple') {
      const metaKey = event.metaKey || event.ctrlKey;
      multiSortMeta = [...getMultiSortMeta()];
      const sortMeta = multiSortMeta.find(sortMeta => sortMeta.field === sortField);
      sortOrder = sortMeta ? getCalculatedSortOrder(sortMeta.order) : sortOrder;
      const newMetaData = {
        field: sortField,
        order: sortOrder
      };
      if (sortOrder) {
        multiSortMeta = metaKey ? multiSortMeta : multiSortMeta.filter(meta => sortableDisabledFields.some(field => field === meta.field));
        addSortMeta(newMetaData, multiSortMeta);
      } else if (props.removableSort) {
        removeSortMeta(newMetaData, multiSortMeta);
      }
      eventMeta = {
        multiSortMeta
      };
    } else {
      sortOrder = getSortField() === sortField ? getCalculatedSortOrder(getSortOrder()) : sortOrder;
      if (props.removableSort) {
        sortField = sortOrder ? sortField : null;
      }
      eventMeta = {
        sortField,
        sortOrder
      };
    }
    if (props.onSort) {
      props.onSort(createEvent(eventMeta));
    } else {
      setFirstState(0);
      setSortFieldState(eventMeta.sortField);
      setSortOrderState(eventMeta.sortOrder);
      setMultiSortMetaState(eventMeta.multiSortMeta);
    }
    if (props.onValueChange) {
      props.onValueChange(processedData({
        sortField,
        sortOrder,
        multiSortMeta
      }));
    }
  };
  const getCalculatedSortOrder = currentOrder => props.removableSort ? props.defaultSortOrder === currentOrder ? currentOrder * -1 : 0 : currentOrder * -1;
  const compareValuesOnSort = (value1, value2, comparator, order) => ObjectUtils.sort(value1, value2, order, comparator, context && context.nullSortOrder || PrimeReact.nullSortOrder);
  const addSortMeta = (meta, multiSortMeta) => {
    const index = multiSortMeta.findIndex(sortMeta => sortMeta.field === meta.field);
    if (index >= 0) {
      multiSortMeta[index] = meta;
    } else {
      multiSortMeta.push(meta);
    }
  };
  const removeSortMeta = (meta, multiSortMeta) => {
    const index = multiSortMeta.findIndex(sortMeta => sortMeta.field === meta.field);
    if (index >= 0) {
      multiSortMeta.splice(index, 1);
    }
    multiSortMeta = multiSortMeta.length > 0 ? multiSortMeta : null;
  };
  const sortSingle = (data, field, order) => {
    if (props.groupRowsBy && props.groupRowsBy === props.sortField) {
      const multiSortMeta = [{
        field: props.sortField,
        order: props.sortOrder || props.defaultSortOrder
      }];
      props.sortField !== field && multiSortMeta.push({
        field,
        order
      });
      return sortMultiple(data, multiSortMeta);
    }
    let value = [...data];
    if (columnSortable.current && columnSortFunction.current) {
      value = columnSortFunction.current({
        data,
        field,
        order
      });
    } else {
      // performance optimization to prevent resolving field data in each loop
      const lookupMap = new Map();
      const comparator = ObjectUtils.localeComparator(context && context.locale || PrimeReact.locale);
      for (const item of data) {
        lookupMap.set(item, ObjectUtils.resolveFieldData(item, field));
      }
      value.sort((data1, data2) => {
        const value1 = lookupMap.get(data1);
        const value2 = lookupMap.get(data2);
        return compareValuesOnSort(value1, value2, comparator, order);
      });
    }
    return value;
  };
  const sortMultiple = (data, multiSortMeta = []) => {
    if (props.groupRowsBy && (groupRowsSortMetaState || multiSortMeta.length && props.groupRowsBy === multiSortMeta[0].field)) {
      let groupRowsSortMeta = groupRowsSortMetaState;
      const firstSortMeta = multiSortMeta[0];
      if (!groupRowsSortMeta) {
        groupRowsSortMeta = firstSortMeta;
        setGroupRowsSortMetaState(groupRowsSortMeta);
      }
      if (firstSortMeta.field !== groupRowsSortMeta.field) {
        multiSortMeta = [groupRowsSortMeta, ...multiSortMeta];
      }
    }
    let value = [...data];
    if (columnSortable.current && columnSortFunction.current) {
      const meta = multiSortMeta.find(meta => meta.field === columnField.current);
      const field = columnField.current;
      const order = meta ? meta.order : props.defaultSortOrder;
      value = columnSortFunction.current({
        data,
        field,
        order,
        multiSortMeta
      });
    } else {
      const comparator = ObjectUtils.localeComparator(context && context.locale || PrimeReact.locale);
      value.sort((data1, data2) => multisortField(data1, data2, multiSortMeta, 0, comparator));
    }
    return value;
  };
  const multisortField = (data1, data2, multiSortMeta, index, comparator) => {
    if (!multiSortMeta || !multiSortMeta[index]) {
      return;
    }
    const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);

    // check if they are equal handling dates and locales
    if (ObjectUtils.compare(value1, value2, comparator) === 0) {
      return multiSortMeta.length - 1 > index ? multisortField(data1, data2, multiSortMeta, index + 1, comparator) : 0;
    }
    return compareValuesOnSort(value1, value2, comparator, multiSortMeta[index].order);
  };
  const onFilterChange = filters => {
    clearEditingMetaData();
    setD_filtersState(filters);
  };
  const onFilterApply = filtersToApply => {
    clearTimeout(filterTimeout.current);
    filterTimeout.current = setTimeout(() => {
      const filters = cloneFilters(filtersToApply || d_filtersState);
      if (props.onFilter) {
        props.onFilter(createEvent({
          filters
        }));
      } else {
        setFirstState(0);
        setFiltersState(filters);
      }
      if (props.onValueChange) {
        props.onValueChange(processedData({
          filters
        }));
      }
    }, props.filterDelay);
  };
  const getActiveFilters = filters => {
    const removeEmptyFilters = ([key, value]) => {
      if (value.constraints) {
        const filteredConstraints = value.constraints.filter(constraint => constraint.value !== null);
        if (filteredConstraints.length > 0) {
          return [key, {
            ...value,
            constraints: filteredConstraints
          }];
        }
      } else if (value.value !== null) {
        return [key, value];
      }
      return undefined;
    };
    const filterValidEntries = entry => entry !== undefined;
    const entries = Object.entries(filters).map(removeEmptyFilters).filter(filterValidEntries);
    return Object.fromEntries(entries);
  };
  const filterLocal = (data, filters) => {
    if (!data) {
      return;
    }
    const activeFilters = filters ? getActiveFilters(filters) : {};
    const columns = getColumns();
    let filteredValue = [];
    const isGlobalFilter = activeFilters.global || props.globalFilter;
    let globalFilterFieldsArray;
    if (isGlobalFilter) {
      globalFilterFieldsArray = props.globalFilterFields || columns.filter(col => !getColumnProp(col, 'excludeGlobalFilter')).map(col => getColumnProp(col, 'filterField') || getColumnProp(col, 'field'));
    }
    for (let i = 0; i < data.length; i++) {
      let localMatch = true;
      let globalMatch = false;
      let localFiltered = false;
      for (const prop in activeFilters) {
        if (prop === 'null') {
          continue;
        }
        if (Object.prototype.hasOwnProperty.call(activeFilters, prop) && prop !== 'global') {
          localFiltered = true;
          const filterField = prop;
          const filterMeta = activeFilters[filterField];
          if (filterMeta.operator) {
            for (let j = 0; j < filterMeta.constraints.length; j++) {
              const filterConstraint = filterMeta.constraints[j];
              localMatch = executeLocalFilter(filterField, data[i], filterConstraint, j);
              if (filterMeta.operator === FilterOperator.OR && localMatch || filterMeta.operator === FilterOperator.AND && !localMatch) {
                break;
              }
            }
          } else {
            localMatch = executeLocalFilter(filterField, data[i], filterMeta, 0);
          }
          if (!localMatch) {
            break;
          }
        }
      }
      if (localMatch && isGlobalFilter && !globalMatch && globalFilterFieldsArray) {
        for (let j = 0; j < globalFilterFieldsArray.length; j++) {
          const globalFilterField = globalFilterFieldsArray[j];
          const matchMode = activeFilters.global ? activeFilters.global.matchMode : props.globalFilterMatchMode;
          const value = activeFilters.global ? activeFilters.global.value : props.globalFilter;
          globalMatch = FilterService.filters[matchMode](ObjectUtils.resolveFieldData(data[i], globalFilterField), value, props.filterLocale);
          if (globalMatch) {
            break;
          }
        }
      }
      let matches;
      if (isGlobalFilter) {
        matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
      } else {
        matches = localFiltered && localMatch;
      }
      if (matches) {
        filteredValue.push(data[i]);
      }
    }
    if (filteredValue.length === props.value.length || Object.keys(activeFilters).length === 0) {
      filteredValue = data;
    }
    return filteredValue;
  };
  const executeLocalFilter = (field, rowData, filterMeta, index) => {
    const filterValue = filterMeta.value;
    const filterMatchMode = filterMeta.matchMode === 'custom' ? `custom_${field}` : filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
    const dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
    const filterConstraint = FilterService.filters[filterMatchMode];
    return ObjectUtils.isFunction(filterConstraint) && filterConstraint(dataFieldValue, filterValue, props.filterLocale, index);
  };
  const cloneFilters = filters => {
    filters = filters || props.filters;
    let cloned = {};
    if (filters) {
      Object.entries(filters).forEach(([prop, value]) => {
        cloned[prop] = value.operator ? {
          operator: value.operator,
          constraints: value.constraints.map(constraint => ({
            ...constraint
          }))
        } : {
          ...value
        };
      });
    } else {
      const columns = getColumns();
      cloned = columns.reduce((filters, col) => {
        const field = getColumnProp(col, 'filterField') || getColumnProp(col, 'field');
        const filterFunction = getColumnProp(col, 'filterFunction');
        const dataType = getColumnProp(col, 'dataType');
        const matchMode = getColumnProp(col, 'filterMatchMode') || (context && context.filterMatchModeOptions[dataType] || PrimeReact.filterMatchModeOptions[dataType] ? context && context.filterMatchModeOptions[dataType][0] || PrimeReact.filterMatchModeOptions[dataType][0] : FilterMatchMode.STARTS_WITH);
        const constraint = {
          value: null,
          matchMode
        };
        if (filterFunction) {
          FilterService.register(`custom_${field}`, (...args) => filterFunction(...args, {
            column: col
          }));
        }
        filters[field] = props.filterDisplay === 'menu' ? {
          operator: FilterOperator.AND,
          constraints: [constraint]
        } : constraint;
        return filters;
      }, {});
    }
    return cloned;
  };
  const filter = (value, field, matchMode, index = 0) => {
    const filters = {
      ...d_filtersState
    };
    const meta = filters[field];
    let constraint = meta && meta.operator ? meta.constraints[index] : meta;
    constraint = meta ? {
      value,
      matchMode: matchMode || constraint.matchMode
    } : {
      value,
      matchMode
    };
    props.filterDisplay === 'menu' && meta && meta.operator ? filters[field].constraints[index] = constraint : filters[field] = constraint;
    setD_filtersState(filters);
    onFilterApply(filters);
  };
  const reset = () => {
    setD_rowsState(props.rows);
    setD_filtersState(cloneFilters(props.filters));
    setGroupRowsSortMetaState(null);
    setEditingMetaState({});
    if (!props.onPage) {
      setFirstState(props.first);
      setRowsState(props.rows);
    }
    if (!props.onSort) {
      setSortFieldState(props.sortField);
      setSortOrderState(props.sortOrder);
      setMultiSortMetaState(props.multiSortMeta);
    }
    if (!props.onFilter) {
      setFiltersState(props.filters);
    }
    resetColumnOrder();
  };
  const resetScroll = () => {
    if (wrapperRef.current) {
      const scrollableContainer = !isVirtualScrollerDisabled() ? DomHandler.findSingle(wrapperRef.current, '[data-pc-name="virtualscroller"]') : wrapperRef.current;
      scrollableContainer.scrollTo(0, 0);
    }
  };
  const resetResizeColumnsWidth = () => {
    destroyStyleElement();
  };
  const resetColumnOrder = () => {
    const columns = getColumns(true);
    let columnOrder = [];
    if (columns) {
      columnOrder = columns.reduce((orders, col) => {
        orders.push(getColumnProp(col, 'columnKey') || getColumnProp(col, 'field'));
        return orders;
      }, []);
    }
    setColumnOrderState(columnOrder);
  };
  const exportCSV = options => {
    let data;
    let csv = '\ufeff';
    const columns = getColumns();
    if (options && options.selectionOnly) {
      data = props.selection || [];
    } else {
      data = [...(props.frozenValue || []), ...(processedData() || [])];
    }

    // headers
    columns.forEach((column, i) => {
      const [field, header, exportHeader, exportable] = [getColumnProp(column, 'field'), getColumnProp(column, 'header'), getColumnProp(column, 'exportHeader'), getColumnProp(column, 'exportable')];
      if (exportable && field) {
        const columnHeader = String(exportHeader || header || field).replace(/"/g, '""').replace(/\n/g, '\u2028');
        csv = `${csv}"${columnHeader}"`;
        if (i < columns.length - 1) {
          csv += props.csvSeparator;
        }
      }
    });

    // body
    data.forEach(record => {
      csv = `${csv}\n`;
      columns.forEach((column, i) => {
        const [colField, exportField, exportable] = [getColumnProp(column, 'field'), getColumnProp(column, 'exportField'), getColumnProp(column, 'exportable')];
        const field = exportField || colField;
        if (exportable && field) {
          let cellData = ObjectUtils.resolveFieldData(record, field);
          if (cellData != null) {
            if (props.exportFunction) {
              cellData = props.exportFunction({
                data: cellData,
                field,
                rowData: record,
                column
              });
            } else {
              cellData = String(cellData).replace(/"/g, '""').replace(/\n/g, '\u2028');
            }
          } else {
            cellData = '';
          }
          csv = `${csv}"${cellData}"`;
          if (i < columns.length - 1) {
            csv += props.csvSeparator;
          }
        }
      });
    });
    DomHandler.exportCSV(csv, props.exportFilename);
  };
  const closeEditingCell = () => {
    if (props.editMode !== 'row') {
      document.body.click();
    }
  };
  const closeEditingRows = () => {
    DomHandler.find(document.body, '[data-pc-section="roweditorcancelbuttonprops"]').forEach((button, index) => {
      setTimeout(() => {
        button.click();
      }, index * 5);
    });
  };
  const createEvent = event => ({
    first: getFirst(),
    rows: getRows(),
    sortField: getSortField(),
    sortOrder: getSortOrder(),
    multiSortMeta: getMultiSortMeta(),
    filters: getFilters(),
    ...event
  });
  const processedData = localState => {
    let data = props.value || [];
    if (!props.lazy) {
      if (data && data.length) {
        const filters = localState && localState.filters || getFilters();
        const sortField = localState && localState.sortField || getSortField();
        const sortOrder = localState && localState.sortOrder || getSortOrder();
        const multiSortMeta = localState && localState.multiSortMeta || getMultiSortMeta();
        const columns = getColumns();
        const sortColumn = columns.find(col => getColumnProp(col, 'field') === sortField);
        if (sortColumn) {
          columnSortable.current = getColumnProp(sortColumn, 'sortable');
          columnSortFunction.current = getColumnProp(sortColumn, 'sortFunction');
        }
        if (ObjectUtils.isNotEmpty(filters) || props.globalFilter) {
          data = filterLocal(data, filters);
        }
        if (sortField || ObjectUtils.isNotEmpty(multiSortMeta)) {
          if (props.sortMode === 'single') {
            data = sortSingle(data, sortField, sortOrder);
          } else if (props.sortMode === 'multiple') {
            data = sortMultiple(data, multiSortMeta);
          }
        }
      }
    }
    return data;
  };
  const dataToRender = data => {
    if (data && props.paginator) {
      const first = props.lazy ? 0 : getFirst();
      return data.slice(first, first + getRows());
    }
    return data;
  };
  useMountEffect(() => {
    if (elementRef.current) {
      attributeSelector.current = UniqueComponentId();
      elementRef.current.setAttribute(attributeSelector.current, '');
    }

    // setFiltersState(cloneFilters(props.filters)); // Github #4248
    setD_filtersState(cloneFilters(props.filters));
    if (isStateful()) {
      restoreState();
      if (props.resizableColumns) {
        restoreColumnWidths();
      }
    }
  });
  useUpdateEffect(() => {
    if (props.responsiveLayout === 'stack' && !props.scrollable) {
      createResponsiveStyle();
    }
    return () => {
      destroyResponsiveStyle();
    };
  }, [props.breakpoint]);
  useUpdateEffect(() => {
    const filters = cloneFilters(props.filters);
    setFiltersState(filters);
    setD_filtersState(cloneFilters(props.filters));
    if (props.onValueChange) {
      props.onValueChange(processedData({
        filters
      }));
    }
  }, [props.filters]);
  useUpdateEffect(() => {
    if (isStateful()) {
      saveState();
    }
  });
  useUpdateEffect(() => {
    destroyResponsiveStyle();
    if (props.responsiveLayout === 'stack' && !props.scrollable) {
      createResponsiveStyle();
    }
  }, [props.responsiveLayout, props.scrollable]);
  useUpdateEffect(() => {
    if (props.globalFilter) {
      filter(props.globalFilter, 'global', props.globalFilterMatchMode);
    } else {
      // #3819 was filtering but now reset filter state
      setFiltersState(props.filters);
    }
  }, [props.globalFilter, props.globalFilterMatchMode]);
  useUnmountEffect(() => {
    unbindColumnResizeEvents();
    destroyStyleElement();
    destroyResponsiveStyle();
    destroyBeforeResizeStyleElement();
  });
  React.useImperativeHandle(ref, () => ({
    props,
    clearState,
    closeEditingCell,
    closeEditingRows,
    exportCSV,
    filter,
    reset,
    resetColumnOrder,
    resetScroll,
    resetResizeColumnsWidth,
    restoreColumnWidths,
    restoreState,
    restoreTableState,
    saveState,
    getElement: () => elementRef.current,
    getTable: () => tableRef.current,
    getVirtualScroller: () => virtualScrollerRef.current
  }));
  const createLoader = () => {
    if (props.loading) {
      const loadingIconProps = mergeProps({
        className: ptCallbacks.cx('loadingIcon')
      }, ptCallbacks.ptm('loadingIcon'));
      const icon = props.loadingIcon || /*#__PURE__*/React.createElement(SpinnerIcon, _extends({}, loadingIconProps, {
        spin: true
      }));
      const loadingIcon = IconUtils.getJSXIcon(icon, {
        ...loadingIconProps
      }, {
        props
      });
      const loadingOverlayProps = mergeProps({
        className: ptCallbacks.cx('loadingOverlay')
      }, ptCallbacks.ptm('loadingOverlay'));
      return /*#__PURE__*/React.createElement("div", loadingOverlayProps, loadingIcon);
    }
    return null;
  };
  const createHeader = () => {
    if (props.header) {
      const content = ObjectUtils.getJSXElement(props.header, {
        props
      });
      const headerProps = mergeProps({
        className: ptCallbacks.cx('header')
      }, ptCallbacks.ptm('header'));
      return /*#__PURE__*/React.createElement("div", headerProps, content);
    }
    return null;
  };
  const createTableHeader = (options, empty, _isVirtualScrollerDisabled) => {
    if (props.showHeaders === false) {
      return null;
    }
    const sortField = getSortField();
    const sortOrder = getSortOrder();
    const multiSortMeta = [...getMultiSortMeta()];
    const groupRowSortField = getGroupRowSortField();
    const filters = d_filtersState;
    const filtersStore = !props.onFilter && props.filters || getFilters();
    const {
      items: processedData,
      props: virtualScrollerProps,
      columns
    } = options;
    const data = _isVirtualScrollerDisabled || virtualScrollerProps.lazy ? processedData : virtualScrollerProps.items;
    return /*#__PURE__*/React.createElement(TableHeader, {
      hostName: "DataTable",
      value: data,
      tableProps: props,
      columns: columns,
      tabIndex: props.tabIndex,
      empty: empty,
      headerColumnGroup: props.headerColumnGroup,
      resizableColumns: props.resizableColumns,
      onColumnResizeStart: onColumnResizeStart,
      onColumnResizerClick: props.onColumnResizerClick,
      onColumnResizerDoubleClick: props.onColumnResizerDoubleClick,
      sortMode: props.sortMode,
      sortField: sortField,
      sortIcon: props.sortIcon,
      sortOrder: sortOrder,
      multiSortMeta: multiSortMeta,
      groupRowsBy: props.groupRowsBy,
      groupRowSortField: groupRowSortField,
      onSortChange: onSortChange,
      filterDisplay: props.filterDisplay,
      filters: filters,
      filtersStore: filtersStore,
      filterIcon: props.filterIcon,
      filterClearIcon: props.filterClearIcon,
      onFilterChange: onFilterChange,
      onFilterApply: onFilterApply,
      showSelectAll: props.showSelectAll,
      allRowsSelected: allRowsSelected,
      onColumnCheckboxChange: onColumnHeaderCheckboxChange,
      onColumnMouseDown: onColumnHeaderMouseDown,
      onColumnDragStart: onColumnHeaderDragStart,
      onColumnDragOver: onColumnHeaderDragOver,
      onColumnDragLeave: onColumnHeaderDragLeave,
      onColumnDrop: onColumnHeaderDrop,
      rowGroupMode: props.rowGroupMode,
      reorderableColumns: props.reorderableColumns,
      ptCallbacks: ptCallbacks,
      metaData: metaData,
      unstyled: props.unstyled
    });
  };
  const createTableBody = (options, selectionModeInColumn, empty, isVirtualScrollerDisabled) => {
    const first = getFirst();
    const {
      rows,
      columns,
      contentRef,
      style,
      className,
      spacerStyle,
      itemSize
    } = options;
    const frozenBody = ObjectUtils.isNotEmpty(props.frozenValue) && /*#__PURE__*/React.createElement(TableBody, {
      hostName: "DataTable",
      ref: frozenBodyRef,
      cellClassName: props.cellClassName,
      cellSelection: props.cellSelection,
      checkIcon: props.checkIcon,
      className: "p-datatable-tbody p-datatable-frozen-tbody",
      collapsedRowIcon: props.collapsedRowIcon,
      columns: columns,
      compareSelectionBy: props.compareSelectionBy,
      contextMenuSelection: props.contextMenuSelection,
      dataKey: props.dataKey,
      dragSelection: props.dragSelection,
      editMode: props.editMode,
      editingMeta: editingMetaState,
      editingRows: props.editingRows,
      emptyMessage: props.emptyMessage,
      expandableRowGroups: props.expandableRowGroups,
      expandedRowIcon: props.expandedRowIcon,
      expandedRows: props.expandedRows,
      first: first,
      frozenRow: true,
      groupRowsBy: props.groupRowsBy,
      isDataSelectable: props.isDataSelectable,
      isVirtualScrollerDisabled: true,
      lazy: props.lazy,
      loading: props.loading,
      metaKeySelection: props.metaKeySelection,
      onCellClick: props.onCellClick,
      onCellSelect: props.onCellSelect,
      onCellUnselect: props.onCellUnselect,
      onContextMenu: props.onContextMenu,
      onContextMenuSelectionChange: props.onContextMenuSelectionChange,
      onEditingMetaChange: onEditingMetaChange,
      onRowClick: props.onRowClick,
      onRowCollapse: props.onRowCollapse,
      onRowDoubleClick: props.onRowDoubleClick,
      onRowPointerDown: props.onRowPointerDown,
      onRowPointerUp: props.onRowPointerUp,
      onRowEditCancel: props.onRowEditCancel,
      onRowEditChange: props.onRowEditChange,
      onRowEditComplete: props.onRowEditComplete,
      onRowEditInit: props.onRowEditInit,
      onRowEditSave: props.onRowEditSave,
      onRowExpand: props.onRowExpand,
      onRowMouseEnter: props.onRowMouseEnter,
      onRowMouseLeave: props.onRowMouseLeave,
      onRowReorder: props.onRowReorder,
      onRowSelect: props.onRowSelect,
      onRowToggle: props.onRowToggle,
      onRowUnselect: props.onRowUnselect,
      onSelectionChange: props.onSelectionChange,
      paginator: props.paginator,
      reorderableRows: props.reorderableRows,
      responsiveLayout: props.responsiveLayout,
      rowClassName: props.rowClassName,
      rowEditValidator: props.rowEditValidator,
      rowEditorCancelIcon: props.rowEditorCancelIcon,
      rowEditorInitIcon: props.rowEditorInitIcon,
      rowEditorSaveIcon: props.rowEditorSaveIcon,
      rowExpansionTemplate: props.rowExpansionTemplate,
      rowGroupFooterTemplate: props.rowGroupFooterTemplate,
      rowGroupHeaderTemplate: props.rowGroupHeaderTemplate,
      rowGroupMode: props.rowGroupMode,
      scrollable: props.scrollable,
      selectOnEdit: props.selectOnEdit,
      selection: props.selection,
      selectionAutoFocus: props.selectionAutoFocus,
      selectionMode: props.selectionMode,
      selectionModeInColumn: selectionModeInColumn,
      showRowReorderElement: props.showRowReorderElement,
      showSelectionElement: props.showSelectionElement,
      tabIndex: props.tabIndex,
      tableProps: props,
      tableSelector: attributeSelector.current,
      value: props.frozenValue,
      virtualScrollerOptions: options,
      ptCallbacks: ptCallbacks,
      metaData: metaData
    });
    const body = /*#__PURE__*/React.createElement(TableBody, {
      hostName: "DataTable",
      ref: bodyRef,
      cellClassName: props.cellClassName,
      cellSelection: props.cellSelection,
      checkIcon: props.checkIcon,
      className: classNames('p-datatable-tbody', className),
      collapsedRowIcon: props.collapsedRowIcon,
      columns: columns,
      compareSelectionBy: props.compareSelectionBy,
      contextMenuSelection: props.contextMenuSelection,
      dataKey: props.dataKey,
      dragSelection: props.dragSelection,
      editMode: props.editMode,
      editingMeta: editingMetaState,
      editingRows: props.editingRows,
      empty: empty,
      emptyMessage: props.emptyMessage,
      expandableRowGroups: props.expandableRowGroups,
      expandedRowIcon: props.expandedRowIcon,
      expandedRows: props.expandedRows,
      first: first,
      frozenRow: false,
      groupRowsBy: props.groupRowsBy,
      isDataSelectable: props.isDataSelectable,
      isVirtualScrollerDisabled: isVirtualScrollerDisabled,
      lazy: props.lazy,
      loading: props.loading,
      metaKeySelection: props.metaKeySelection,
      onCellClick: props.onCellClick,
      onCellSelect: props.onCellSelect,
      onCellUnselect: props.onCellUnselect,
      onContextMenu: props.onContextMenu,
      onContextMenuSelectionChange: props.onContextMenuSelectionChange,
      onEditingMetaChange: onEditingMetaChange,
      onRowClick: props.onRowClick,
      onRowCollapse: props.onRowCollapse,
      onRowDoubleClick: props.onRowDoubleClick,
      onRowEditCancel: props.onRowEditCancel,
      onRowEditChange: props.onRowEditChange,
      onRowEditComplete: props.onRowEditComplete,
      onRowEditInit: props.onRowEditInit,
      onRowEditSave: props.onRowEditSave,
      onRowExpand: props.onRowExpand,
      onRowMouseEnter: props.onRowMouseEnter,
      onRowMouseLeave: props.onRowMouseLeave,
      onRowPointerDown: props.onRowPointerDown,
      onRowPointerUp: props.onRowPointerUp,
      onRowReorder: props.onRowReorder,
      onRowSelect: props.onRowSelect,
      onRowToggle: props.onRowToggle,
      onRowUnselect: props.onRowUnselect,
      onSelectionChange: props.onSelectionChange,
      paginator: props.paginator,
      reorderableRows: props.reorderableRows,
      responsiveLayout: props.responsiveLayout,
      rowClassName: props.rowClassName,
      rowEditValidator: props.rowEditValidator,
      rowEditorCancelIcon: props.rowEditorCancelIcon,
      rowEditorInitIcon: props.rowEditorInitIcon,
      rowEditorSaveIcon: props.rowEditorSaveIcon,
      rowExpansionTemplate: props.rowExpansionTemplate,
      rowGroupFooterTemplate: props.rowGroupFooterTemplate,
      rowGroupHeaderTemplate: props.rowGroupHeaderTemplate,
      rowGroupMode: props.rowGroupMode,
      scrollable: props.scrollable,
      selectOnEdit: props.selectOnEdit,
      selection: props.selection,
      selectionAutoFocus: props.selectionAutoFocus,
      selectionMode: props.selectionMode,
      selectionModeInColumn: selectionModeInColumn,
      showRowReorderElement: props.showRowReorderElement,
      showSelectionElement: props.showSelectionElement,
      style: style,
      tabIndex: props.tabIndex,
      tableProps: props,
      tableSelector: attributeSelector.current,
      value: dataToRender(rows),
      virtualScrollerContentRef: contentRef,
      virtualScrollerOptions: options,
      ptCallbacks: ptCallbacks,
      metaData: metaData
    });
    const spacerBody = ObjectUtils.isNotEmpty(spacerStyle) ? /*#__PURE__*/React.createElement(TableBody, {
      hostName: "DataTable",
      style: {
        height: `calc(${spacerStyle.height} - ${rows.length * itemSize}px)`
      },
      className: "p-datatable-virtualscroller-spacer",
      ptCallbacks: ptCallbacks,
      metaData: metaData
    }) : null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, frozenBody, body, spacerBody);
  };
  const createTableFooter = options => {
    const {
      columns
    } = options;
    return /*#__PURE__*/React.createElement(TableFooter, {
      hostName: "DataTable",
      tableProps: props,
      columns: columns,
      footerColumnGroup: props.footerColumnGroup,
      ptCallbacks: ptCallbacks,
      metaData: metaData
    });
  };
  const createContent = (processedData, columns, selectionModeInColumn, empty) => {
    if (!columns) {
      return;
    }
    const _isVirtualScrollerDisabled = isVirtualScrollerDisabled();
    const virtualScrollerOptions = props.virtualScrollerOptions || {};
    const wrapperProps = mergeProps({
      className: ptCallbacks.cx('wrapper'),
      style: {
        ...ptCallbacks.sx('wrapper'),
        maxHeight: _isVirtualScrollerDisabled ? props.scrollHeight : null
      }
    }, ptCallbacks.ptm('wrapper'));
    return /*#__PURE__*/React.createElement("div", _extends({
      ref: wrapperRef
    }, wrapperProps), /*#__PURE__*/React.createElement(VirtualScroller, _extends({
      ref: virtualScrollerRef
    }, virtualScrollerOptions, {
      items: processedData,
      columns: columns,
      style: {
        ...virtualScrollerOptions.style,
        ...{
          height: props.scrollHeight !== 'flex' ? props.scrollHeight : undefined
        }
      },
      scrollHeight: props.scrollHeight !== 'flex' ? undefined : '100%',
      disabled: _isVirtualScrollerDisabled,
      loaderDisabled: true,
      inline: true,
      autoSize: true,
      pt: ptCallbacks.ptm('virtualScroller'),
      __parentMetadata: {
        parent: metaData
      },
      showSpacer: false
      // eslint-disable-next-line react/no-unstable-nested-components
      ,
      contentTemplate: options => {
        const ref = el => {
          tableRef.current = el;
          options.spacerRef && options.spacerRef(el);
        };
        const tableHeader = createTableHeader(options, empty, _isVirtualScrollerDisabled);
        const tableBody = createTableBody(options, selectionModeInColumn, empty, _isVirtualScrollerDisabled);
        const tableFooter = createTableFooter(options);
        const tableProps = mergeProps({
          className: classNames(props.tableClassName, ptCallbacks.cx('table')),
          style: props.tableStyle,
          role: 'table'
        }, ptCallbacks.ptm('table'));
        return /*#__PURE__*/React.createElement("table", _extends({
          ref: ref
        }, tableProps), tableHeader, tableBody, tableFooter);
      }
    })));
  };
  const createFooter = () => {
    if (props.footer) {
      const content = ObjectUtils.getJSXElement(props.footer, {
        props
      });
      const footerProps = mergeProps({
        className: ptCallbacks.cx('footer')
      }, ptCallbacks.ptm('footer'));
      return /*#__PURE__*/React.createElement("div", footerProps, content);
    }
    return null;
  };
  const createPaginator = (position, totalRecords) => /*#__PURE__*/React.createElement(Paginator, {
    first: getFirst(),
    rows: getRows(),
    pageLinkSize: props.pageLinkSize,
    className: classNames(props.paginatorClassName, ptCallbacks.cx('paginator', {
      position
    })),
    onPageChange: onPageChange,
    template: props.paginatorTemplate,
    totalRecords: totalRecords,
    rowsPerPageOptions: props.rowsPerPageOptions,
    currentPageReportTemplate: props.currentPageReportTemplate,
    leftContent: props.paginatorLeft,
    rightContent: props.paginatorRight,
    alwaysShow: props.alwaysShowPaginator,
    dropdownAppendTo: props.paginatorDropdownAppendTo,
    pt: ptCallbacks.ptm('paginator'),
    unstyled: props.unstyled,
    __parentMetadata: {
      parent: metaData
    }
  });
  const createPaginatorTop = totalRecords => {
    if (props.paginator && props.paginatorPosition !== 'bottom') {
      return createPaginator('top', totalRecords);
    }
    return null;
  };
  const createPaginatorBottom = totalRecords => {
    if (props.paginator && props.paginatorPosition !== 'top') {
      return createPaginator('bottom', totalRecords);
    }
    return null;
  };
  const createResizeHelper = () => {
    if (props.resizableColumns) {
      const resizeHelperProps = mergeProps({
        className: ptCallbacks.cx('resizeHelper'),
        style: ptCallbacks.sx('resizeHelper')
      }, ptCallbacks.ptm('resizeHelper'));
      return /*#__PURE__*/React.createElement("div", _extends({
        ref: resizeHelperRef
      }, resizeHelperProps));
    }
    return null;
  };
  const createReorderIndicators = () => {
    if (props.reorderableColumns) {
      const style = {
        position: 'absolute',
        display: 'none'
      };
      const reorderIndicatorUpProps = mergeProps({
        className: ptCallbacks.cx('reorderIndicatorUp'),
        style: ptCallbacks.sx('reorderIndicatorUp', {
          style
        })
      }, ptCallbacks.ptm('reorderIndicatorUp'));
      const reorderIndicatorUpIconProps = mergeProps(ptCallbacks.ptm('reorderIndicatorUpIcon'));
      const reorderIndicatorUpIcon = IconUtils.getJSXIcon(props.reorderIndicatorUpIcon || /*#__PURE__*/React.createElement(ArrowDownIcon, reorderIndicatorUpIconProps), {
        ...reorderIndicatorUpIconProps
      }, {
        props
      });
      const reorderIndicatorDownProps = mergeProps({
        className: ptCallbacks.cx('reorderIndicatorDown'),
        style: ptCallbacks.sx('reorderIndicatorDown', {
          style
        })
      }, ptCallbacks.ptm('reorderIndicatorDown'));
      const reorderIndicatorDownIconProps = mergeProps(ptCallbacks.ptm('reorderIndicatorDownIcon'));
      const reorderIndicatorDownIcon = IconUtils.getJSXIcon(props.reorderIndicatorDownIcon || /*#__PURE__*/React.createElement(ArrowUpIcon, reorderIndicatorDownIconProps), {
        ...reorderIndicatorDownIconProps
      }, {
        props
      });
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", _extends({
        ref: reorderIndicatorUpRef
      }, reorderIndicatorUpProps), reorderIndicatorUpIcon), /*#__PURE__*/React.createElement("span", _extends({
        ref: reorderIndicatorDownRef
      }, reorderIndicatorDownProps), reorderIndicatorDownIcon));
    }
    return null;
  };
  const data = processedData();
  const columns = getColumns();
  const totalRecords = getTotalRecords(data);
  const empty = ObjectUtils.isEmpty(data);
  const selectionModeInColumn = getSelectionModeInColumn(columns);
  const selectable = props.selectionMode || selectionModeInColumn;
  const loader = createLoader();
  const header = createHeader();
  const paginatorTop = createPaginatorTop(totalRecords);
  const content = createContent(data, columns, selectionModeInColumn, empty);
  const paginatorBottom = createPaginatorBottom(totalRecords);
  const footer = createFooter();
  const resizeHelper = createResizeHelper();
  const reorderIndicators = createReorderIndicators();
  const rootProps = mergeProps({
    id: props.id,
    className: classNames(props.className, ptCallbacks.cx('root', {
      selectable
    })),
    style: props.style,
    'data-scrollselectors': '.p-datatable-wrapper',
    'data-showgridlines': props.showGridlines
  }, DataTableBase.getOtherProps(props), ptCallbacks.ptm('root'));
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: elementRef
  }, rootProps), loader, header, paginatorTop, content, paginatorBottom, footer, resizeHelper, reorderIndicators);
});
DataTable.displayName = 'DataTable';

export { DataTable };
