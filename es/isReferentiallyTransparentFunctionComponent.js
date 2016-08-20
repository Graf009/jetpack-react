import isClassComponent from './isClassComponent';

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !isClassComponent(Component) && !Component.defaultProps && !Component.contextTypes && !Component.propTypes);
};

export default isReferentiallyTransparentFunctionComponent;