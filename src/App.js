// import logo from './logo.svg';
import logo2 from './healingFromScratch.png'
import './App.css';
import Survey from './components/Survey';
import VanessaInfo from './components/VanessaInfo';
import KeyInfo from './components/KeyInfo';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.healingfromscratch.com/" target="_blank">
        <img src={logo2} className="App-logo" alt="logo"/>
        </a>
        <p>
          Constitution Quiz
        </p>
        {/* <a
          className="App-link"
          href="https://www.healingfromscratch.com/"
          target="_blank"
          // rel="noopener noreferrer"
        >
          HealingFromScratch.com
        </a> */}
      </header>
      <div className="Body">
        <div className="Container">
          <Survey/>
          <KeyInfo/>
        </div>
      <VanessaInfo/>
      </div>
    </div>
  );
}

export default App;
