var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M2.88 8.432c1.74-.374 1.5-2.455 1.45-2.91-.085-.7-.91-1.925-2.028-1.827C.894 3.82.69 5.855.69 5.855c-.192.94.454 2.95 2.19 2.577m3.23-3.488c.96 0 1.735-1.106 1.735-2.473C7.845 1.11 7.07 0 6.11 0S4.37 1.104 4.37 2.47c0 1.368.78 2.474 1.74 2.474m4.138.163c1.285.168 2.108-1.203 2.273-2.242.17-1.037-.66-2.243-1.57-2.45-.91-.21-2.04 1.25-2.15 2.2-.12 1.166.17 2.327 1.45 2.492m5.09 1.745c0-.497-.41-1.995-1.94-1.995S11.66 6.27 11.66 7.27c0 .95.08 2.28 1.99 2.24 1.904-.05 1.696-2.16 1.696-2.66M13.4 11.21s-1.988-1.54-3.148-3.2c-1.575-2.45-3.81-1.453-4.556-.21-.746 1.254-1.906 2.04-2.07 2.25-.167.205-2.4 1.41-1.904 3.613.496 2.2 2.237 2.16 2.237 2.16s1.28.124 2.77-.208c1.49-.332 2.77.08 2.77.08s3.47 1.167 4.43-1.077c.95-2.245-.54-3.41-.54-3.41', 'fill-rule': 'nonzero' })
	);
}