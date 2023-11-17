import React, { createElement } from "react";

const withProps = (WrappedComponent, additionalProps = {}) => {
  const WithProps = React.memo((props) => {
    return createElement(WrappedComponent, {
      ...props,
      ...additionalProps,
    });
  });

  return WithProps;
};

export default withProps;
