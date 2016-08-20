import createEagerElementUtil from './utils/createEagerElementUtil';
import isReferentiallyTransparentFunctionComponent from './isReferentiallyTransparentFunctionComponent';

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = isReferentiallyTransparentFunctionComponent(type);
  return function (props, children) {
    return createEagerElementUtil(false, isReferentiallyTransparent, type, props, children);
  };
};

export default createFactory;