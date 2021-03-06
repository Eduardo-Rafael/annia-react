import logo from './logo.svg';
import './MainPage.css';
import Formulario from './Form';


function MainPage(){
  return(
    <div className="MainPage">
      <header className="App-header">
        <Formulario />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default MainPage;