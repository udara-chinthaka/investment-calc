import Header from "./components/Header";
import Results from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  // manage object state using the usestate hook
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(newVal, inputIdentifier) {
    setUserInput((preUserInput) => {
      // use as a function not loss previouse state data
      return {
        ...preUserInput,
        [inputIdentifier]: +newVal,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">
          Please enter valid data (duration should be greater than 0)
        </p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
