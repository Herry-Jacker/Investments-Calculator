import { useState } from "react";
import Header from "./components/header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {

  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => setUserInput(prevInput => {
      return {
          ...prevInput,
          [inputIdentifier]: +newValue,
      }
  })

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {
        isInputValid ? <Results input={userInput}/> : <p className="center">Please enter duration greater than zero.</p>
      }
    </>
  )
}

export default App
