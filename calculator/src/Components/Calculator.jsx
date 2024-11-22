import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [symbol, setSymbol] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    const value = e.target.value;

    if (value === "Reset") {
      setNum1("");
      setNum2("");
      setSymbol("");
      setResult(0);
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      setSymbol(value);
    } else if (symbol === "") {
      setNum1((prev) => prev + value);
    } else {
      setNum2((prev) => prev + value);
    }
  };

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (symbol === "+") {
      setResult(number1 + number2);
    } else if (symbol === "-") {
      setResult(number1 - number2);
    } else if (symbol === "*") {
      setResult(number1 * number2);
    } else if (symbol === "/") {
      setResult(number2 !== 0 ? number1 / number2 : "Error");
    } 
    // else {
    //   setNum1("");
    //   setNum2("");
    //   setSymbol("");
    //   setResult(0);
    // }
    calculate()
  };

  return (
    <div>
      <h3>
        {num1} {symbol} {num2}
      </h3>
      <br />
      <h2>Result: {result}</h2>
      <div id="mainDiv">
        <input onClick={handleInput} type="button" value="7" />
        <input onClick={handleInput} type="button" value="8" />
        <input onClick={handleInput} type="button" value="9" />
        <input onClick={handleInput} type="button" value="4" />
        <input onClick={handleInput} type="button" value="5" />
        <input onClick={handleInput} type="button" value="6" />
        <input onClick={handleInput} type="button" value="1" />
        <input onClick={handleInput} type="button" value="2" />
        <input onClick={handleInput} type="button" value="3" />
        <input onClick={handleInput} type="button" value="0" />
        <input onClick={handleInput} type="button" value="+" />
        <input onClick={handleInput} type="button" value="-" />
        <input onClick={handleInput} type="button" value="*" />
        <input onClick={handleInput} type="button" value="/" />
        <input onClick={handleInput} type="button" value="Reset" />
        <input onClick={calculate} type="button" value="=" />
      </div>
    </div>
  );
};

export default Calculator;
