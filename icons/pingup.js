var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M9.11 0H1.146v16H6.17V6.478H4.33c-.336 0-.433-.21-.213-.466L7 2.65c.218-.256.578-.256.797 0l2.882 3.362c.21.256.12.466-.22.466H8.62v4.45h.487c4.15 0 5.744-2.872 5.744-5.654C14.86 2.604 13.11 0 9.11 0', 'fill-rule': 'nonzero' })
	);
}