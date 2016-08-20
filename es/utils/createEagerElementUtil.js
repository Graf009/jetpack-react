import _extends from 'babel-runtime/helpers/extends';
import React from 'react';

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return React.createElement(
      Component,
      props,
      children
    );
  }

  return React.createElement(Component, props);
};

export default createEagerElementUtil;