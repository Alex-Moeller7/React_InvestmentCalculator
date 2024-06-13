import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Yearly Interest</th>
            <th>Total Interest</th>
            <th>Total Invested Cpaital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((yearlyData) => {
            //calcualtes total interest earned over "duration" of time
            const totalInterest = yearlyData.valueEndOfYear - yearlyData.annualInvestment * yearlyData.year - initialInvestment;

            //calculates total value invested (combines initial investment and additional annnual investments)
            const totalAmountInvested = yearlyData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearlyData.year}>
                <td>{yearlyData.year}</td>
                <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                <td>{formatter.format(yearlyData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="footer">
        <div className="definitions-title">
          <p>Definitions:</p>
        </div>
        <div className="definitions">
          <p>Year - The duration of investment</p>
          <p>Investment Value - The total value of the initial investment, annual investments, and interest earned</p>
          <p>Total Interest - The sum of all interest earned</p>
          <p>Total invested capital - The sum of the intial investment and any annual contributions</p>
          <p id="Note">
            <br />
            Note: This calculator assumes you are reinvesting your interest and not removing any funds
          </p>
        </div>
      </div>
    </>
  );
}
