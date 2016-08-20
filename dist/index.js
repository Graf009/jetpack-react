'use strict';

exports.__esModule = true;
exports.createEagerFactory = exports.isClassComponent = exports.wrapDisplayName = exports.getDisplayName = exports.compose = exports.setStatic = exports.withHandlers = undefined;

var _withHandlers2 = require('./withHandlers');

var _withHandlers3 = _interopRequireDefault(_withHandlers2);

var _setStatic2 = require('./setStatic');

var _setStatic3 = _interopRequireDefault(_setStatic2);

var _compose2 = require('./compose');

var _compose3 = _interopRequireDefault(_compose2);

var _getDisplayName2 = require('./getDisplayName');

var _getDisplayName3 = _interopRequireDefault(_getDisplayName2);

var _wrapDisplayName2 = require('./wrapDisplayName');

var _wrapDisplayName3 = _interopRequireDefault(_wrapDisplayName2);

var _isClassComponent2 = require('./isClassComponent');

var _isClassComponent3 = _interopRequireDefault(_isClassComponent2);

var _createEagerFactory2 = require('./createEagerFactory');

var _createEagerFactory3 = _interopRequireDefault(_createEagerFactory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.withHandlers = _withHandlers3.default;

// Static property helpers
// Higher-order component helpers

exports.setStatic = _setStatic3.default;

// Composition function

exports.compose = _compose3.default;

// Other utils

exports.getDisplayName = _getDisplayName3.default;
exports.wrapDisplayName = _wrapDisplayName3.default;
exports.isClassComponent = _isClassComponent3.default;
exports.createEagerFactory = _createEagerFactory3.default;