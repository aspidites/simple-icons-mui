var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		React.createElement('path', { d: 'M0 4.89v5.333h4.444v.888H8v-.887h8V4.89H0zm4.444 4.443h-.888V6.666h-.89v2.667H.89V5.778h3.554v3.555zm2.667 0v.89H5.334V5.778H8.89v3.555H7.11zm8 0h-.887V6.666h-.89v2.667h-.89V6.666h-.887v2.667h-1.78V5.778h5.335v3.555zM9.778 5.778' }),
		React.createElement('path', { d: 'M7.11 6.667H8v1.778h-.89z' })
	);
}