var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M4.613 16h-2.07c-.443 0-.724-.354-.624-.786l.1-.45H3.4c.444 0 .89-.355.988-.787l.71-3.062c.1-.432.544-.786.987-.786h.588c2.526 0 4.49-.52 5.894-1.56s2.106-2.4 2.106-4.09c0-.75-.13-1.37-.392-1.86 0-.01-.01-.02-.01-.03l.09.05c.5.31.88.71 1.14 1.21.27.5.4 1.12.4 1.86 0 1.69-.7 3.05-2.11 4.09-1.4 1.03-3.37 1.55-5.89 1.55h-.6c-.44 0-.89.35-.99.79l-.71 3.07c-.1.43-.54.78-.98.78zm-1.785-1.797H.758c-.442 0-.723-.353-.624-.786L3.05.787C3.15.353 3.593 0 4.036 0h4.31c.93 0 1.74.065 2.433.192.69.127 1.28.346 1.79.66.49.31.88.715 1.13 1.213.26.498.39 1.12.39 1.864 0 1.69-.7 3.05-2.11 4.08-1.4 1.04-3.37 1.55-5.89 1.55H5.5c-.44 0-.886.35-.985.78l-.707 3.06c-.1.43-.545.78-.99.78zm4.964-11.58h-.676c-.444 0-.888.353-.987.785l-.62 2.68c-.1.433.18.786.62.786h.51c1.11 0 1.98-.228 2.6-.68.62-.457.93-1.103.93-1.942 0-.553-.2-.963-.6-1.226-.4-.27-1-.404-1.79-.404z' })
	);
}