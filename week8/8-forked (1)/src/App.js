import React, { useState } from "react";
import "./styles.css";
import Dark from "./Dark";
import Light from "./Light";

export default function App() {
  const [isDark, setDark] = useState(false);
  const onChange = ({ target }) => {
    target.checked ? setDark(true) : setDark(false);
  };

  return (
    <div className="App">
      <div className="check-mode">
        <input type="checkbox" onClick={onChange}></input>
        다크모드
      </div>
      {/* 코드 구현 */ isDark === false ? <Light /> : <Dark />}
    </div>
  );
}
