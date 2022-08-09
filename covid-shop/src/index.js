/* В компоненте App должна выводиться кнопка Войти и заголовок с 
предложением залогиниться. Как только пользователь нажимает на 
кнопку, он считается авторизовавшимся и должен видеть компонент 
<Shop /> и кнопку Выйти. Подсказка: useState(false)*/
import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Shop from "./Shop.js";

function App() {
  const [login, setLogin] = useState(true);
  if (login === true) {
    return (
      <>
        <div className="ui-container">
          <h2 className="ui-title">Нужно залогиниться!</h2>
          <button
            onClick={() => setLogin(login === false)}
            className="ui-button"
          >
            Войти
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="ui-container">
          <Shop />
          <button
            onClick={() => setLogin(login === false)}
            className="ui-button"
          >
            Выйти
          </button>
        </div>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
