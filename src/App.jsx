/** @format */

import React, { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: parseFloat(value) });
  }

  const investmentResults = calculateInvestmentResults(inputValues);

  return (
    <div>
      <header id="header">
        <img src="./investment-calculator-logo.png" alt="Logo" />
        <h1>Investment Calculator</h1>
      </header>
      <UserInput inputValues={inputValues} onChange={handleChange} />
      <Result investmentValues={investmentResults} />
    </div>
  );
}

export default App;
