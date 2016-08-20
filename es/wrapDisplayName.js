import getDisplayName from './getDisplayName';

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + getDisplayName(BaseComponent) + ')';
};

export default wrapDisplayName;