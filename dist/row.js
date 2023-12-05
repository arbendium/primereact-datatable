import * as React from 'react';
import { PrimeReactContext } from 'primereact/api/api.esm.js';
import { useMergeProps } from 'primereact/hooks/hooks.esm.js';
import { ComponentBase } from 'primereact/componentbase/componentbase.esm.js';
import { ObjectUtils } from 'primereact/utils/utils.esm.js';

const RowBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Row',
    style: null,
    className: null,
    children: undefined
  },
  getCProp: (row, name) => ObjectUtils.getComponentProp(row, name, RowBase.defaultProps)
});

function Row(inProps) {
  const mergeProps = useMergeProps();
  const context = React.useContext(PrimeReactContext);
  const props = RowBase.getProps(inProps, context);
  // @todo Pass Parent MetaData
  const {
    ptm
  } = RowBase.setMetaData({
    props
  });
  const rootProps = mergeProps({
    className: props.className,
    style: props.style
  }, RowBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/React.createElement("tr", rootProps, props.children);
}
Row.displayName = 'Row';

export { Row };
