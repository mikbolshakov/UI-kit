/* 1. Возвращает div, оборачивающий все 
остальные элементы.
2. Должен иметь класс .ui-container. */

import React from "react";

export default function Container(props) {
  return <div className="ui-container">{props.children}</div>;
}
