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
            const totalInterest = yearlyData.valueEndOfYear - yearlyData.annualInvestment * yearlyData.year - initialInvestment;

            const totalAmountInvested = yearlyData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearlyData.year}>
                <td>{yearlyData.year}</td>
                <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                <td>{formatter.format(yearlyData.interest)}</td>
                <td>{formatter.format(yearlyData.totalInterest)}</td>
                <td>{formatter.format(yearlyData.totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
