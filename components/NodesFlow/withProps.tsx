import React, { createElement } from 'react'

const withProps = (WrappedComponent, additionalProps = {}) => {
  const WithProps = React.memo((props) => {
    return createElement(WrappedComponent, {
      ...props,
      ...additionalProps,
    })
  })

  WithProps.whyDidYouRender = true

  return WithProps
}

export default withProps
