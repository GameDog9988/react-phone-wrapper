import "./App.css";
import PhoneSubtract from "./images/subtract-black.svg";
import PhoneContainer from "./components/phone-container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <img src={PhoneSubtract} alt="phone subtract" /> */}
        <PhoneContainer width="691" heigth="377">
          <div className="test-div">Hello there</div>
        </PhoneContainer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
