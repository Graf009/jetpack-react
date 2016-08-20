import _typeof from 'babel-runtime/helpers/typeof';
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};

export default isClassComponent;