import * as React from 'react';
import { CheckIcon } from 'primereact/icons/check/index.esm.js';
import { Checkbox } from 'primereact/checkbox/checkbox.esm.js';
import { useMergeProps } from 'primereact/hooks/hooks.esm.js';
import { IconUtils } from 'primereact/utils/utils.esm.js';
import { ColumnBase } from '../column/ColumnBase.js';

export const RowCheckbox = React.memo(props => {
	const mergeProps = useMergeProps();
	const getColumnProps = () => ColumnBase.getCProps(props.column);
	const { ptm, ptmo, cx } = props.ptCallbacks;

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

		return mergeProps(ptm(`column.${key}`, { column: columnMetaData }), ptm(`column.${key}`, columnMetaData), ptmo(getColumnProps(), key, columnMetaData));
	};

	const onChange = event => {
		if (!props.disabled) {
			props.onChange(event);
		}
	};

	const checkboxIconProps = mergeProps(
		{
			className: cx('checkIcon')
		},
		getColumnPTOptions('rowCheckbox.icon')
	);
	const icon = props.checked ? props.checkIcon || <CheckIcon {...checkboxIconProps} /> : null;
	const checkIcon = IconUtils.getJSXIcon(icon, { ...checkboxIconProps }, { props });
	const tabIndex = props.disabled ? null : '0';

	const checkboxProps = mergeProps(
		{
			role: 'checkbox',
			'aria-checked': props.checked,
			tabIndex,
			onChange,
			'aria-label': props.ariaLabel,
			checked: props.checked,
			icon: checkIcon,
			disabled: props.disabled
		},
		getColumnPTOptions('rowCheckbox')
	);

	return <Checkbox {...checkboxProps} />;
});

RowCheckbox.displayName = 'RowCheckbox';
