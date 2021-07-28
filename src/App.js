import logo from './logo.svg';
import './App.css';

function throwError() {
  console.log('coucou')
  throw new Error('Une erreur est survenue !');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={() => throwError()}>Throw an Error</button>
      </header>
    </div>
  );
}

export default App;
