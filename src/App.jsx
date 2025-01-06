import React from 'react';
import { useState } from 'react';
import Header from './component/Header.jsx';
import UserInput from './component/UserInput.jsx';
import Results from './component/Results.jsx';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return{
          ...prevUserInput,
          [inputIdentifier]: +newValue  // using the plus sign to convert the string to a number
      };
  });
}

  return (
    <>
    <Header/>
    <UserInput onChange={handleChange} userInput={userInput}/>
    {!inputIsValid && <p className='center'>Please enter a duration that is greater than zero</p>}
    {inputIsValid && <Results userInput={userInput}/>}
    </>
  );
}

export default App
