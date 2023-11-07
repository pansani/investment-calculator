/** @format */

import React from "react";
import PropTypes from "prop-types";
import { formatter } from "../util/investment";

export default function Result({ investmentValues }) {
  if (!investmentValues || !Array.isArray(investmentValues)) {
    return <div>No data available</div>;
  }

  return (
    <div id="results">
      <h2>Investment Results</h2>
      <ul>
        {investmentValues.map((item) => (
          <li key={item.year}>
            Year: {item.year}, Interest Value: {formatter.format(item.interest)}
            , Interest Year: {formatter.format(item.valueEndOfYear)}, Total
            Interest: {formatter.format(item.interestEarnedInYear)}, Invested
            Capital: {formatter.format(item.investmentValue)}
          </li>
        ))}
      </ul>
    </div>
  );
}

Result.propTypes = {
  investmentValues: PropTypes.array,
};
