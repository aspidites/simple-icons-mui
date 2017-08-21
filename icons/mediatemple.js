var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement('path', { d: 'M3.226 6.763v.38h.023c.68-.41 1.38-.444 1.8-.444 1.13 0 1.52.32 1.66.44.26-.15.82-.45 1.79-.45 1.93 0 1.93.76 1.93 1.06v1.8H8.88V7.96c0-.33 0-.697-.827-.697-.408 0-.828.124-.975.307-.137.156-.194.297-.194.642V9.56h-1.55V8.025c0-.474.01-.76-.804-.76-.41 0-.828.108-.987.27-.124.123-.204.253-.204.664v1.36H1.78v-2.8h1.44zm10.954.62h-1.127v1.12c0 .395 0 .524.46.524.22 0 .413-.025.62-.064l.047-.006.146.57c-.545.1-1.14.11-1.31.11-.507 0-1.162-.074-1.404-.283-.206-.17-.23-.337-.23-.76V7.38h-.764v-.584h.763v-.553l1.68-.433v.986h1.13v.584zM1.027 11.14C.41 10.208 0 9.1 0 7.986 0 6.67.517 5.6 1.04 4.846h.624C1.2 5.873.886 6.746.886 8.014c0 1.455.516 2.577.75 3.085.007 0 .022.03.022.04h-.63zm13.946-6.28C15.59 5.792 16 6.9 16 8.014c0 1.314-.517 2.387-1.04 3.14h-.624c.463-1.028.78-1.9.78-3.168 0-1.456-.518-2.576-.753-3.086-.007-.007-.02-.033-.02-.04h.63z', 'fill-rule': 'nonzero' })
	);
}