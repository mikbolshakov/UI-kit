/* Компонент Item.js должен возвращать наименование, фото и 
описание товара. Нажатие по кнопкам + и - должно изменять 
количество товара для заказа. При нуле спрячьте счетчик количества 
и сделайте кнопку - неактивной.*/
import React, { useState } from "react";

export default function Item(props) {
  const [quantity, setQuantity] = useState(0);
  const { name, desc, image } = props;
  return (
    <div className="item">
      <img src={image} alt={name} />
      <div className="item-info">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-button"
          disabled={quantity === 0}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        {quantity > 0 && <h3 className="item-total">{quantity}</h3>}
        <button
          className="item-button"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
