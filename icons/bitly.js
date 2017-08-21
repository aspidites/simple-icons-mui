var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8.72 14.2c-.898.016-1.553-.273-1.593-1.057-.015-.295-.01-.608.004-.798.09-1.146.89-1.97 1.69-2.13.99-.197 1.64.254 1.64 1.542 0 .87-.24 2.417-1.73 2.443zM7.964 0C3.554 0 0 3.538 0 8.165c0 2.4 1.283 4.717 3.088 6.11.347.268.76.243 1 .013.198-.193.182-.66-.19-.987-1.443-1.26-2.44-3.18-2.44-5.1 0-3.44 3.06-6.34 6.506-6.34 4.194 0 6.437 3.41 6.437 6.3 0 1.77-.86 3.9-2.42 5.26.01 0 .33-.63.33-1.86 0-2.09-1.32-3.23-2.86-3.23-1.11 0-1.78.4-2.23.77 0-.85.03-2.44.03-2.44 0-1.05-.36-1.89-1.65-1.91-.74-.01-1.29.33-1.63 1.1-.12.29-.08.61.17.75.2.12.54.03.7-.19.11-.14.17-.17.27-.16.16.02.17.27.17.44.01.13.13 1.94.06 6.59-.01 1.28 1 2.75 3.41 2.75 1.04 0 1.84-.29 3-.95 1.77-1 4.28-3.22 4.28-6.98C16 3.37 12.2 0 7.97 0', 'fill-rule': 'nonzero' })
	);
}