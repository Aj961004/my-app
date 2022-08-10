import logo from './logo.svg';
import './App.css';
import KartuNama from './component/KartuNama';
import InputForm from './component/PageInput';

function App() {
  return (
    <>
    <KartuNama/>
    <InputForm/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to try it.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </>
  );
}

export default App;
