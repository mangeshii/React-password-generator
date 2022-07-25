
import './App.css';

function App() {

  const randompassord = (length) => {
  const pass = 'ABCDEFGDEBNDLMDWLKM928T8406543bdwebkjfebdk!@#$%^&*()_+'
  var result= '';
  const charlength = pass.length;
    for (let i = 0; i < length; i++) {
      result += pass.charAt(Math.floor(Math.random() * charlength
      ))
    }
    return result
  }

  console.log(randompassord(8))
  return (
    <div className="App">
    </div>
  );
}

export default App;
