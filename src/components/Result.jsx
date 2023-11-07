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
    <div id="results">
      <table>
        {investmentValues.map((item) => (
          <tr key={item.year}>
            <thead>
              <th>Year: {item.year}</th>
            </thead>
            <tbody>
              <td>Investment Value: {formatter.format(item.valueEndOfYear)}</td>
              <td>Interest Year: {formatter.format(item.interest)}</td>
              <td>
                Total Interest:{" "}
                {formatter.format(item.interest + item.annualInvestment)}
              </td>
              <td>
                Invested Capital:{" "}
                {formatter.format(item.interest + item.annualInvestment)}
              </td>
            </tbody>
          </tr>
        ))}
      </table>
    </div>
  );
}

Result.propTypes = {
  investmentValues: PropTypes.array,
};
