'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16' }, props),
		_ref
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M0 7.998C0 3.679 3.575.21 8 .21s8 3.469 8 7.788c0 4.318-3.575 7.787-8 7.787s-8-3.469-8-7.787zm7.823 2.654c-.779 0-1.416-.07-1.84-.141-.496-.106-.815-.39-1.027-.779-.177-.39-.283-1.026-.248-1.876 0-.46.035-.885.07-1.31.072-.424.107-.778.178-1.062l.07-.283v-.035c0-.071-.07-.142-.141-.142l-1.027-.141h-.035c-.07 0-.142.07-.177.106 0 .07-.035.106-.07.248-.072.318-.107.601-.178.99a8.41 8.41 0 0 0-.106 1.381s-.035.106 0 .956.177 1.522.46 2.053c.283.496.744.885 1.416 1.097.673.213 1.593.319 2.761.319h.142c1.168 0 2.088-.106 2.76-.319.673-.212 1.134-.601 1.417-1.097.283-.53.425-1.203.46-2.053.035-.85 0-.956 0-.956 0-.495-.07-.956-.106-1.38-.071-.425-.106-.708-.177-.991-.036-.142-.036-.213-.071-.248 0-.071-.07-.106-.177-.106h-.035l-1.027.141c-.07 0-.142.071-.142.142V5.2l.071.283c.071.284.106.638.177 1.062.071.425.071.85.071 1.31 0 .85-.07 1.451-.248 1.876-.177.39-.53.673-1.026.779-.425.106-1.062.141-1.841.141h-.354z' });