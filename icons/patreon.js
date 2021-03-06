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

var _ref = _react2.default.createElement('path', { d: 'M0 7.78C0 4.053 3.027.56 7.018.06c2.86-.333 5.023.765 6.52 2.196 1.396 1.33 2.228 3.028 2.428 5.025.166 2-.266 3.73-1.43 5.36-1.164 1.6-3.46 3.36-6.32 3.36H4.324V8.32c.034-1.697.6-3.162 2.66-3.86 1.797-.533 3.893.465 4.525 2.362.66 2.03-.3 3.394-1.43 4.226-1.14.832-2.9.832-4.06.033v2.63c.76.37 1.73.47 2.43.43 2.52-.36 4.49-1.79 5.32-3.96.86-2.29.26-4.96-1.53-6.62-2.16-1.77-4.53-2.2-7.05-.97-1.77.9-3 2.73-3.3 4.73V16H.03L0 7.78z', fillRule: 'nonzero' });