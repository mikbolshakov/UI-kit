/* 1. Возвращает элемент <a /> с текстовым содержимым и 
атрибутом href, переданными в пропсах.
2. Добавляет сгенерированным ссылкам класс .ui-link */

import React from "react";

export default function Link(props) {
  const { href, children } = props;
  return (
    <a href={href} className="ui-link">
      {children}
    </a>
  );
}
