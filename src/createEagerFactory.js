import createEagerElementUtil from './utils/createEagerElementUtil'
import isReferentiallyTransparentFunctionComponent
  from './isReferentiallyTransparentFunctionComponent'

const createFactory = type => {
  const isReferentiallyTransparent =
    isReferentiallyTransparentFunctionComponent(type)
  return (props, children) =>
    createEagerElementUtil(false, isReferentiallyTransparent, type, props, children)
}

export default createFactory
