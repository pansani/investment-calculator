/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";

export default function UserInput() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <section id="user-input" className="input-group">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={inputValues.initialInvestment} />
        </p>
        <p>
          <label>Anuual Investment</label>
          <input type="number" value={inputValues.annualInvestment} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" value={inputValues.expectedReturn} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" value={inputValues.duration} />
        </p>
      </div>
    </section>
  );
}

UserInput.PropTypes = {
  onChange: PropTypes.func,
};
