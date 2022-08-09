/* В компоненте Shop.js находится массив товаров items, 
содержащий два наименования. Добавьте в него два пустых 
компонента <Item />, в каждый из которых через пропсы передайте 
соответствующий индекс массива с товарами.*/
import React from "react";
import Item from "./Item.js";

const Shop = () => {
  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image: "https://source.unsplash.com/400x300/?3M,mask"
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://source.unsplash.com/400x300/?latex,gloves"
    }
  ];
  return (
    <div className="shop">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          desc={item.desc}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Shop;
