import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaRegClipboard } from 'react-icons/fa';
import { useState } from 'react';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './characters'

function App() {

  // const randompassord = (length) => {
  //   const pass = 'ABCDEFGDEBNDLMDWLKM928T8406543bdwebkjfebdk!@#$%^&*()_+'
  //   var result = '';
  //   const charlength = pass.length;
  //   for (let i = 0; i < length; i++) {
  //     result += pass.charAt(Math.floor(Math.random() * charlength
  //     ))
  //   }
  //   return result
  // }

  // console.log(randompassord(8))
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols) {
      alert("To generate password you must select atleast one checkbox", true)
    }
    else {
      let characterList = " "
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters
      }
      if (includeNumbers) {
        characterList = characterList + numbers
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters
      }
      setPassword(createpassword(characterList))
    }

  }

  const createpassword = (characterList) => {
    let result = " "
    for (let i = 0; i < passwordLength; i++) {
      result += characterList.charAt(Math.floor(Math.random() * characterList.length))
    }
    return result
  }


  return (
    <div className="App container">
      <div className='wrapper'>
        <div className="header">
          <h3>Password Generator</h3>
        </div>
        <div className='display-password'>
          <h6 className="col-md-11 pw" >{password}</h6>
          <div className='copy-icon'>
            <FaRegClipboard />
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className='pass-length space-around'>
            <label className="label" htmlFor="Password Length">Password Length</label>
            <input type="text" maxLength="2" name="Password Length" size="1" style={{ height: '25px' }} />
          </div>
          <div className='uppercase space-around'>
            <label className="label" htmlFor="uppercase">Add Upper Case Letters</label>
            <input checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} type="checkbox" name="uppercase" />
          </div>
          <div className='lowercase space-around'>
            <label className="label" htmlFor="lowercase">Add Lower Case Letters</label>
            <input checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} type="checkbox" name="lowercase" />
          </div>
          <div className='number space-around'>
            <label className="label" htmlFor="number">Include Numbers</label>
            <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" name="number" />
          </div>
          <div className='symbol space-around'>
            <label className="label" htmlFor="usymbol">Include Symbols</label>
            <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" name="symbol" />
          </div>
          <div className='generate-pass-btn'>
            <button onClick={handleGeneratePassword}>Generate Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;





