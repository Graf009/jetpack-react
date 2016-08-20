import createHelper from './createHelper';

var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    BaseComponent[key] = value;
    return BaseComponent;
  };
};

export default createHelper(setStatic, 'setStatic', false);