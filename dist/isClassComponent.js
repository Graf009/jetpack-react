'use strict';

exports.__esModule = true;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && (0, _typeof3.default)(Component.prototype.isReactComponent) === 'object');
};

exports.default = isClassComponent;
module.exports = exports['default'];