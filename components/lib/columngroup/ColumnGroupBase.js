import { ComponentBase } from 'primereact/componentbase/componentbase.esm.js';
import { ObjectUtils } from 'primereact/utils/utils.esm.js';

export const ColumnGroupBase = ComponentBase.extend({
	defaultProps: {
		__TYPE: 'ColumnGroup',
		children: undefined
	},
	getCProp: (group, name) => ObjectUtils.getComponentProp(group, name, ColumnGroupBase.defaultProps),
	getCProps: group => ObjectUtils.getComponentProps(group, ColumnGroupBase.defaultProps)
});
