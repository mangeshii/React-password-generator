import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const randompassord = (length) => {
    const pass = 'ABCDEFGDEBNDLMDWLKM928T8406543bdwebkjfebdk!@#$%^&*()_+'
    var result = '';
    const charlength = pass.length;
    for (let i = 0; i < length; i++) {
      result += pass.charAt(Math.floor(Math.random() * charlength
      ))
    }
    return result
  }

  console.log(randompassord(8))
  return (
    <div className="App container" style={{ border: '2px solid green' }}>
      <div className='wrapper'>
        <div class="header">
          <h3>Password Generator</h3>
        </div>
        <form>
          <div className='pass-length space-around'>
            <label className="label" for="Password Length">Password Length</label>
            <input type="text" maxLength="2" name="Password Length" size="2" />
          </div>
          <div className='uppercase space-around'>
            <label className="label" for="uppercase">Add Upper Case Letters</label>
            <input type="checkbox" name="uppercase" />
          </div>
          <div className='lowercase space-around'>
            <label className="label" for="lowercase">Add Lower Case Letters</label>
            <input type="checkbox" name="lowercase" />
          </div>
          <div className='number space-around'>
            <label className="label" for="number">Include Numbers</label>
            <input type="checkbox" name="number" />
          </div>
          <div className='symbol space-around'>
            <label className="label" for="usymbol">Include Symbols</label>
            <input type="checkbox" name="symbol" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;





