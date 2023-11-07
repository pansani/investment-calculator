/** @format */

import React from "react";
import PropTypes from "prop-types";
import { formatter } from "../util/investment";

export default function Result({ investmentValues }) {
  if (!investmentValues || !Array.isArray(investmentValues)) {
    return <div>No data available</div>;
  }

  console.log(investmentValues);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentValues.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>
              {formatter.format(yearData.interest + yearData.annualInvestment)}
            </td>
            <td>
              {formatter.format(yearData.interest + yearData.annualInvestment)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Result.propTypes = {
  investmentValues: PropTypes.array,
};
