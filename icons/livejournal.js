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

var _ref = _react2.default.createElement('path', { d: 'M12.06 9.798c-1.008.442-1.817 1.256-2.254 2.266l2.846.588-.59-2.854zM1.65 5.545L0 3.9C.75 2.158 2.144.76 3.882 0h.004l1.646 1.642c.912-.394 1.917-.614 2.975-.614C12.645 1.028 16 4.38 16 8.514S12.644 16 8.507 16c-4.14 0-7.494-3.35-7.494-7.486 0-1.06.237-2.054.635-2.967l6.095 6.076c.75-1.742 2.145-3.14 3.882-3.9l-6.09-6.08H5.53c-1.738.76-3.13 2.16-3.882 3.9z' });