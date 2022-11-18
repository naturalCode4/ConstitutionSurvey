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
        <a className="App-logo" href="https://www.healingfromscratch.com/" target="_blank">
          <img className="app-logo-image" src={logo2} alt="logo"/>
        </a>
        <p>
          Constitution Quiz
        </p>
      </header>
        <hr></hr>
      <div className="Body">
        <p className="pre-explanation">A constitution is what tissue state you tend to have. Knowing yours can be helpful in identifying where you may be out of balance. It can also help you choose foods, herbs and supplements that support equilibrium. Answer the following questions to get a percentage of which constitution(s) you may have.</p>
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
