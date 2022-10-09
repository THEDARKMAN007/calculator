import "./buttons.css";
import MainScreen from "./../main-screen/main-screen.main-page.component";
import { useState } from "react";

function Button() {
  // calculation ability
  const [state1, setState1] = useState("0");
  const [state2, setState2] = useState("0");

  // to display screen values
  const clickedValueNumber = (e) => {
    e.preventDefault();
    setState1((value) => {
      if (value.charAt(0) === "0") {
        value = value.substring(1);
      }
      value = value + e.target.value;
      return value;
    });
  };
  // to clear screen value
  const clear = (e) => {
    e.preventDefault();
    if (e.target.value.includes("C")) {
      setState2("0");
      setState1("0");
    } else if (e.target.value.includes("<")) {
      setState1((value) => {
        if (state1 === "0") {
          return "0";
        } else if (state1.length === 1 && state1 !== "0") {
          return "0";
        } else {
          value = value.slice(0, -1);
          return value;
        }
      });
    }
  };
  //submit button
  const submit = (e) => {
    e.preventDefault();
    setState2(eval(state1));
    setState1("0");
  };

  return (
    <div>
      <MainScreen state1={state1} state2={state2} />
      <div className="button">
        <input type="button" value="C" onClick={clear} />
        <input type="button" value="<" className="green" onClick={clear} />
        <input
          type="button"
          value="%"
          className="green"
          onClick={clickedValueNumber}
        />
        <input
          type="button"
          value="/"
          className="green"
          onClick={clickedValueNumber}
        />
        <input type="button" value="7" onClick={clickedValueNumber} />
        <input type="button" value="8" onClick={clickedValueNumber} />
        <input type="button" value="9" onClick={clickedValueNumber} />
        <input
          type="button"
          value="*"
          className="green"
          onClick={clickedValueNumber}
        />
        <input type="button" value="4" onClick={clickedValueNumber} />
        <input type="button" value="5" onClick={clickedValueNumber} />
        <input type="button" value="6" onClick={clickedValueNumber} />
        <input
          type="button"
          value="-"
          className="green"
          onClick={clickedValueNumber}
        />
        <input type="button" value="1" onClick={clickedValueNumber} />
        <input type="button" value="2" onClick={clickedValueNumber} />
        <input type="button" value="3" onClick={clickedValueNumber} />
        <input
          type="button"
          value="+"
          className="green"
          onClick={clickedValueNumber}
        />
        <input type="button" value="0" onClick={clickedValueNumber} />
        <input type="button" value="." onClick={clickedValueNumber} />
        <input type="submit" value="=" className="equals" onClick={submit} />
      </div>
    </div>
  );
}

export default Button;
