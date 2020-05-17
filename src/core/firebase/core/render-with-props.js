import { Children, cloneElement, isValidElement } from 'react';

const cloneChildWithProps = (child, props) => {
  // NOTE Throw if child is a DOM Element instead of a React Component
  // Custom Props cannot be passed to DOM Element
  return cloneElement(child, props);
};

export const renderWithProps = (children, props) => {
  if (!children) return null;

  const isFunction = typeof children === 'function';
  if (isFunction) return children(props);

  const isListOfChildrens = Children.count(children).length > 0;
  if (isListOfChildrens) {
    return Children.map((parent, child) => cloneChildWithProps(child, props));
  }

  const isElement = isValidElement(children);
  if (!isElement) return null;

  return cloneChildWithProps(children, props);
};

export default renderWithProps;
