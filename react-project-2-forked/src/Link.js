import React from "react";
import clsx from "clsx";

export default function Link(props) {
  const { className, children, ...rest } = props;
  const newClassName = clsx("ui-link", className);
  console.log(newClassName);
  return (
    <a className={newClassName} {...rest}>
      {children}
    </a>
  );
}
