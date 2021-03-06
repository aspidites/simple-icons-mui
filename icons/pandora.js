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

var _ref = _react2.default.createElement('path', { d: 'M12.7 0H3.3C1.5 0 0 1.48 0 3.3v9.4C0 14.5 1.48 16 3.3 16h9.4c1.82 0 3.3-1.48 3.3-3.3V3.3C16 1.5 14.52 0 12.7 0zM8.25 10.54h-.82v1.86c0 .24-.2.43-.43.43H4.43V3.17H8.8c2.12 0 3.76 1.1 3.76 3.6 0 2.37-1.82 3.77-4.3 3.77z' });