import * as React from 'react';
import { ariaLabel } from 'primereact/api/api.esm.js';
import { useMergeProps } from 'primereact/hooks/hooks.esm.js';
import { Ripple } from 'primereact/ripple/ripple.esm.js';
import { IconUtils } from 'primereact/utils/utils.esm.js';
import { ChevronDownIcon } from 'primereact/icons/chevrondown/index.esm.js';
import { ChevronRightIcon } from 'primereact/icons/chevronright/index.esm.js';
import { ColumnBase } from '../column/ColumnBase.js';

export const RowTogglerButton = React.memo(props => {
	const mergeProps = useMergeProps();
	const { ptm, ptmo, cx } = props.ptCallbacks;

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

		return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(cProps, key, columnMetaData));
	};

	const rowGroupTogglerIconProps = mergeProps(
		{
			className: cx('rowGroupTogglerIcon'),
			'aria-hidden': true
		},
		getColumnPTOptions('rowGroupTogglerIcon')
	);
	const icon = props.expanded ? props.expandedRowIcon || <ChevronDownIcon {...rowGroupTogglerIconProps} /> : props.collapsedRowIcon || <ChevronRightIcon {...rowGroupTogglerIconProps} />;
	const togglerIcon = IconUtils.getJSXIcon(icon, { ...rowGroupTogglerIconProps }, { props });
	const label = props.expanded ? ariaLabel('collapseLabel') : ariaLabel('expandLabel');
	const rowGroupTogglerProps = mergeProps(
		{
			type: 'button',
			onClick: e => onClick(e),
			className: cx('rowGroupToggler'),
			tabIndex: props.tabIndex,
			'aria-label': label
		},
		getColumnPTOptions('rowGroupToggler')
	);

	return (
		<button {...rowGroupTogglerProps}>
			{togglerIcon}
			<Ripple />
		</button>
	);
});

RowTogglerButton.displayName = 'RowTogglerButton';
