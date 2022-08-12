/* 1. Возвращает кнопку с текстом из пропсов.
2. Присваивает значения атрибутам type и disabled из пропсов.
3. Добавляет всем кнопкам класс .ui-button */

import React from "react";

export default function Button(props) {
  return (
    <button type={props.type} disabled={props.disabled} className="ui-button">
      {props.children}
    </button>
  );
}
