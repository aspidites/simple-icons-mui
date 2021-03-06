'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.414' }, props),
		_ref
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M7.973 11.87l5.307-2.264-4.7 4.828c-.083-.878-.288-1.74-.607-2.563zM16 7.413c-3.4-.157-6.805.276-10.058 1.28.683.715 1.254 1.528 1.69 2.414 2.695-1.5 6.43-3.415 8.368-3.687v-.01zm-8.383.183l.138-.04C8.78 7.25 9.788 6.88 10.77 6.452c.995-.39 1.93-.92 2.773-1.578.896-.713 1.57-1.666 1.944-2.748.08-.178.14-.366.177-.558C14.314 3.408 8.97 3.6 8.97 3.6l1.26-1.156C6.56 2.457 2.98 3.617 0 5.764c2.02.215 3.918 1.064 5.426 2.423.724-.224 1.464-.384 2.19-.586v-.004z' });