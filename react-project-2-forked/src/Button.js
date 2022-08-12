/*Все компоненты должны сохранить свои дефолтные имена классов, 
такие как ui-container, ui-textfield, ui-link и ui-button. 
Любое новое значение атрибута className должно добавляться 
как еще один класс вдобавок к текущему. Дефолтным значением 
type у <Input /> должен быть text*/
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
