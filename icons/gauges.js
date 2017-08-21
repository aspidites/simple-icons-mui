var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-1.11c3.805 0 6.89-3.085 6.89-6.89 0-3.805-3.085-6.89-6.89-6.89-3.805 0-6.89 3.085-6.89 6.89 0 3.805 3.085 6.89 6.89 6.89zm2.32-4.817c0-1.116-.718-1.607-1.92-1.65l-.75-.035c-.63-.022-.798-.055-.798-.29 0-.09.067-.212.202-.28.123.024.213.035.337.035 1.61 0 2.42-.78 2.42-1.986 0-.2-.05-.38-.15-.49h.64v-1.34H8.4c-.315-.077-.595-.133-.977-.133-1.695 0-2.536.982-2.536 2.12 0 .713.337 1.227.84 1.494-.39.156-.682.58-.682 1.027 0 .39.215.702.54.858-.426.224-.81.77-.81 1.294 0 1.105.9 1.65 2.427 1.65 1.915 0 3.13-1.07 3.13-2.274zm-2-4.04c0 .473-.334.76-.883.76-.596 0-.895-.298-.895-.783 0-.453.322-.773.883-.773.597 0 .895.32.895.795zm.444 4.24c0 .42-.408.742-1.213.742-.63 0-1-.27-1-.667 0-.236.15-.473.4-.666.06.01.15 0 .22.01l.9.022c.53.022.72.258.72.56zm2.994-3.036c-.66 0-1.216.556-1.216 1.23 0 .672.556 1.215 1.216 1.215.673 0 1.23-.543 1.23-1.216 0-.673-.557-1.23-1.23-1.23z' })
	);
}