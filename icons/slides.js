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

var _ref = _react2.default.createElement('path', { d: 'M16 0v16H0V0h16zM5.66 10.382c0-.086.054-.216.163-.39.108-.173.206-.26.292-.26.01 0 .08.04.21.123.13.083.315.165.558.248.243.082.536.123.878.123.35 0 .63-.097.85-.293.22-.195.33-.46.33-.793 0-.334-.1-.594-.29-.78-.19-.187-.58-.363-1.16-.528-.58-.165-1-.375-1.26-.63-.26-.257-.39-.645-.39-1.165s.2-.957.6-1.308c.4-.36.92-.53 1.56-.53.45 0 .84.05 1.19.17.35.11.52.24.52.37 0 .11-.05.26-.15.43-.1.18-.19.26-.26.26-.01 0-.06-.03-.17-.08-.29-.16-.62-.24-.99-.24s-.65.07-.86.22c-.2.15-.3.35-.3.59s.08.43.23.57c.15.14.41.26.78.38.82.25 1.37.52 1.66.82.29.3.44.75.44 1.35s-.21 1.1-.64 1.49c-.43.39-.94.58-1.54.58-.6 0-1.11-.09-1.55-.27-.43-.18-.65-.35-.65-.52z' });