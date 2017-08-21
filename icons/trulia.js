var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8 0C5.46.014 3.82 1.72 3.82 4.297c0 2.134 1.392 3.96 2.185 6.733.455 1.59.7 3.534.827 4.97h2.336c.128-1.436.372-3.38.827-4.97.793-2.774 2.185-4.6 2.185-6.733C12.18 1.72 10.54.014 8 0zm.013 6.567C6.957 6.567 6.1 5.71 6.1 4.655s.857-1.912 1.913-1.912c1.057 0 1.913.856 1.913 1.912S9.07 6.567 8.013 6.567z', 'fill-rule': 'nonzero' })
	);
}