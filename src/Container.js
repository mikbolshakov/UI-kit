import React from "react";
import clsx from "clsx";

export default function Container(props) {
  const { className, children, ...rest } = props;
  const newClassName = clsx("ui-container", className);
  console.log(newClassName);
  
  return (
    <div className={newClassName} {...rest}>
      {children}
    </div>
  );
}
