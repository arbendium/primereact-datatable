import * as React from 'react';
import { PrimeReactContext } from 'primereact/api/api.esm.js';
import { useMergeProps } from 'primereact/hooks/hooks.esm.js';
import { RowBase } from './RowBase.js';

export function Row(inProps) {
	const mergeProps = useMergeProps();
	const context = React.useContext(PrimeReactContext);
	const props = RowBase.getProps(inProps, context);
	// @todo Pass Parent MetaData
	const { ptm } = RowBase.setMetaData({
		props
	});

	const rootProps = mergeProps(
		{
			className: props.className,
			style: props.style
		},
		RowBase.getOtherProps(props),
		ptm('root')
	);

	return <tr {...rootProps}>{props.children}</tr>;
}

Row.displayName = 'Row';
