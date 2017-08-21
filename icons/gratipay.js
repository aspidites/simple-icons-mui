var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M16 8c0 4.42-3.58 8-8 8-4.418 0-8-3.582-8-8s3.582-8 8-8c4.42 0 8 3.58 8 8zm-4.746-3.015c-.9-.594-1.756-.144-2.204.377-.168.194-.454.423-.995.423-.54 0-.827-.23-.994-.423-.44-.52-1.3-.97-2.2-.377-1.05.697-.75 1.957-.44 2.32l3.64 4.928 3.64-4.928c.31-.363.62-1.623-.44-2.32z', 'fill-rule': 'nonzero' })
	);
}