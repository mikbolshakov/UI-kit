import React from "react";
import { render } from "react-dom";
import Link from "./Link.js";
import Container from "./Container.js";
import Button from "./Button.js";
import Input from "./Input.js";
import "./index.css";

function App() {
  return (
    <>
      <Container className="Contclass">
        <Link href="https://moscoding.ru" className="linkClass">
          Закажи себе шапку
        </Link>
        <Input
          placeholder="vsemposhapke@mail.com"
          name="email"
          className="inputClass"
        />
        <Button disabled={true} сlassName="bestClass">
          Сейчас надену!
        </Button>
      </Container>
    </>
  );
}

render(<App />, document.querySelector("#root"));
