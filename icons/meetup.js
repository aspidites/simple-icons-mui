var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M1 13.25c-.552 0-1-.448-1-1V3.744c.004-.55.45-.994 1-.994h14c.55 0 .996.445 1 .994v8.506c0 .552-.448 1-1 1H1zm14.507-7.517h-15v6h15v-6z' })
	);
}