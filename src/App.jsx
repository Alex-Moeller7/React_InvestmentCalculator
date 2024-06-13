import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  //State managing to detect and change based on user input
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
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
        [inputID]: +newValue,
      };
    });
  }

  const inputValidation = inputValues.duration >= 1;

  return (
    <div>
      <Header />
      <UserInput userInput={inputValues} onChange={handleUserInput} />
      {!inputValidation && <p className="center">Please Enter a duration greater than 0</p>}
      {inputValidation && <Results userInput={inputValues} />}
    </div>
  );
}

export default App;
