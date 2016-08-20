import isClassComponent from './isClassComponent'

const isReferentiallyTransparentFunctionComponent = Component => Boolean(
  typeof Component === 'function' &&
  !isClassComponent(Component) &&
  !Component.defaultProps &&
  !Component.contextTypes &&
  !Component.propTypes
)

export default isReferentiallyTransparentFunctionComponent
