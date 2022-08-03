import React from "react";
import clsx from "clsx";

export default function Input(props) {
  const { type = "text", className, ...rest } = props;
  const newClassName = clsx("ui-textfield", className);
  console.log(newClassName);
  return <input className={newClassName} type={type} {...rest} />;
}
