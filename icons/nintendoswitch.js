var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' }, props),
		React.createElement(
			'title',
			null,
			'Shape'
		),
		React.createElement('path', { d: 'M9.45 16h2.45c2.25 0 4.1-1.85 4.1-4.1V4.1C16 1.85 14.15 0 11.9 0H9.4c-.05 0-.1.05-.1.1v15.8c0 .05.05.1.15.1zm3.05-8.8c.9 0 1.6.75 1.6 1.6 0 .9-.75 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.05-.9.7-1.6 1.6-1.6zM7.6 0H4.1C1.85 0 0 1.85 0 4.1v7.8C0 14.15 1.85 16 4.1 16h3.5c.05 0 .1-.05.1-.1V.1c0-.05-.05-.1-.1-.1zM6.45 14.7H4.1c-1.55 0-2.8-1.25-2.8-2.8V4.1c0-1.55 1.25-2.8 2.8-2.8h2.3l.05 13.4zM2.5 4.8c0 .85.65 1.5 1.5 1.5s1.5-.65 1.5-1.5S4.85 3.3 4 3.3s-1.5.65-1.5 1.5z', 'fill-rule': 'nonzero' })
	);
}