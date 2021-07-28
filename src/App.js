import logo from './logo.svg';
import './App.css';

function throwError(text) {
  throw new Error(text);
}

function newThrowError() {
  throw new Error('Une toute nouvelle erreur !!!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={() => throwError('Une erreur est survenue !')}>Throw an Error</button>
        <button type="button" onClick={() => throwError('Une autre erreur est survenue !')}>Throw an other Error</button>
        <button type="button" onClick={() => throwError('Une autre autre erreur est survenue !')}>Throw an other other Error</button>
        <button type="button" onClick={() => newThrowError()}>An Other button that generates an Error</button>
      </header>
    </div>
  );
}

export default App;
