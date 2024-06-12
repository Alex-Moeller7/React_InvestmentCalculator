import { useState } from "react";

export default function UserInput() {
  //State managing to detect and change based on user input
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedGrowth: 5,
    duration: 10,
  });

  /**
   *
   * @param {*} inputID A string indicating which of the 4 user inputs the user is changing (intial, annual, growth, or duration)
   * @param {*} newValue The new value to replace the previously held value of whatever input type was selected
   */
  function handleUserInput(inputID, newValue) {
    setInputValues((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputID]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initital (Principal) Investment</label>
          <input
            type="number"
            required
            value={UserInput.initialInvestment}
            onChange={(event) => handleUserInput("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={UserInput.annualInvestment}
            onChange={(event) => handleUserInput("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Growth</label>
          <input
            type="number"
            required
            value={UserInput.expectedGrowth}
            onChange={(event) => handleUserInput("expectedGrowth", event.target.value)}
          />
        </p>
        <p>
          <label>Number of Years</label>
          <input type="number" value={UserInput.duration} onChange={(event) => handleUserInput("duration", event.target.value)} required />
        </p>
      </div>
    </section>
  );
}
