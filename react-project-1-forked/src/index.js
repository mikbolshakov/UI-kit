import React from "react";
import { render } from "react-dom";
import "./index.css";
import Link from "./Link.js";
import Container from "./Container.js";
import Input from "./Input.js";
import Button from "./Button.js";

function App() {
  return (
    <>
      <Container>
        <Link href="#">something</Link>
        <Input name="Mike" placeholder="text" />
        <Button type="interesting" disabled={false}>
          knopka
        </Button>
      </Container>
    </>
  );
}

render(<App />, document.querySelector("#root"));
