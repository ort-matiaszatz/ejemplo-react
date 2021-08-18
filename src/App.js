import React from "react";
import "./style.css";
import Mensaje from "./Mensaje";

export default function App() {
  return (
    <div>
      <Mensaje size={'chica'}>Buen día</Mensaje>
      <Mensaje size={'grande'}>Buen día</Mensaje>
    </div>
  );
}
