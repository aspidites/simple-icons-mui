var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

export default function (props) {
	return React.createElement(
		SvgIcon,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		React.createElement(
			'g',
			{ 'fill-rule': 'nonzero' },
			React.createElement('path', { d: 'M8 7.998c-.485 0-.878-.393-.878-.878s.393-.878.878-.878.878.393.878.878-.393.878-.878.878zm1.944-.014c0-1.886-.74-3.598-1.944-4.866-1.204 1.268-1.944 2.98-1.944 4.866 0 .864.156 1.69.44 2.455-.412.6-.716 1.44-.85 2.41.426-.51.948-.87 1.528-1.06.242.37.52.73.826 1.05.307-.33.584-.68.826-1.06.58.18 1.102.55 1.527 1.05-.133-.97-.437-1.81-.85-2.41.284-.77.44-1.59.44-2.46z' }),
			React.createElement('path', { d: 'M8 14.667c-3.682 0-6.667-2.985-6.667-6.667S4.318 1.333 8 1.333 14.667 4.318 14.667 8 11.682 14.667 8 14.667zM8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z' })
		)
	);
}