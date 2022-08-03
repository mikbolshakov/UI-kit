import React from "react";
import clsx from "clsx";

export default function Button(props) {
  const { сlassName, children, ...rest } = props;
  const newClassName = clsx("ui-button", сlassName);
  console.log(newClassName);
  return (
    <button className={newClassName} {...rest}>
      {children}
    </button>
  );
}
