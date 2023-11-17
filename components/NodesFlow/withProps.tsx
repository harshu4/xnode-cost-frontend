import React, { createElement } from 'react'

const withProps = (WrappedComponent, additionalProps = {}) => {
  const WithProps = React.memo((props) => {
    return createElement(WrappedComponent, {
      ...props,
      ...additionalProps,
    })
  })

  // Define um displayName para o HOC
  WithProps.displayName = `WithProps(${getDisplayName(WrappedComponent)})`

  return WithProps
}

// Função auxiliar para obter o displayName de um componente
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default withProps
