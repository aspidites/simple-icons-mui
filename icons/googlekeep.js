'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
	return _react2.default.createElement(
		_SvgIcon2.default,
		_extends({ ariaLabelledby: 'simpleicons-googlekeep-icon', role: 'img', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, props),
		_ref,
		_ref2
	);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
	'title',
	{ id: 'simpleicons-googlekeep-icon' },
	'Google Keep icon'
);

var _ref2 = _react2.default.createElement('path', { d: 'M19.995 7.995C19.995 3.6 16.396 0 12 0S4.005 3.6 4.005 7.995c0 2.55 1.2 4.89 3.194 6.405v7.979H8.82V24h6.359v-1.62H16.8V14.4c2.011-1.5 3.195-3.87 3.195-6.405zM8.805 20.774v-1.575h6.391v1.575H8.805zm0-3.194v-1.575h6.391v1.575H8.805zm6.75-4.261l-.359.24v.841H8.805v-.84l-.345-.24c-1.8-1.199-2.85-3.18-2.85-5.324 0-3.525 2.85-6.391 6.39-6.391s6.39 2.851 6.39 6.391c0 2.145-1.05 4.14-2.85 5.324h.015z' });