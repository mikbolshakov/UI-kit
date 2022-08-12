/* 1. Возвращает элемент <input /> с классом 
.ui-textfield.
2. Задает значение атрибута type="text", если 
оно отсутствует в пропсах.
3. Принимает также атрибуты placeholder и name. */

import React from "react";

export default function Input(props) {
  console.log(props);
  const { name, placeholder, type = "text" } = props;
  return (
    <input
      className="ui-textfield"
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
}
