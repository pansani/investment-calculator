/** @format */

import React from "react";
import PropTypes from "prop-types";

export default function UserInput({ onChange, inputValues }) {
  return (
    <section id="user-input" className="input-group">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            onChange={onChange}
            value={inputValues.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            onChange={onChange}
            value={inputValues.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            onChange={onChange}
            value={inputValues.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            onChange={onChange}
            value={inputValues.duration}
          />
        </p>
      </div>
    </section>
  );
}

UserInput.propTypes = {
  onChange: PropTypes.func,
  inputValues: PropTypes.object,
};
