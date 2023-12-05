import { ComponentBase } from 'primereact/componentbase/componentbase.esm.js';
import { ObjectUtils } from 'primereact/utils/utils.esm.js';

export const RowBase = ComponentBase.extend({
	defaultProps: {
		__TYPE: 'Row',
		style: null,
		className: null,
		children: undefined
	},
	getCProp: (row, name) => ObjectUtils.getComponentProp(row, name, RowBase.defaultProps)
});
