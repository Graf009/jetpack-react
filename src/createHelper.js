const createHelper = (
  func,
  helperName,
  setDisplayName = true,
  noArgs = false
) => {
  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
    // const wrapDisplayName = require('./wrapDisplayName').default
    const wrapDisplayName = require('./wrapDisplayName')

    if (noArgs) {
      return BaseComponent => {
        const Component = func(BaseComponent)
        Component.displayName = wrapDisplayName(BaseComponent, helperName)
        return Component
      }
    }

    return (...args) => {
      if (args.length > func.length) {
        console.error( // eslint-disable-line no-console
          `Too many arguments passed to ${helperName}(). It should called ` +
          `like so: ${helperName}(...args)(BaseComponent).`
        )
      }

      return BaseComponent => {
        const Component = func(...args)(BaseComponent)
        Component.displayName = wrapDisplayName(BaseComponent, helperName)
        return Component
      }
    }
  }

  return func
}

export default createHelper
