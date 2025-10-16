import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/jsx-runtime';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='App'>
      <header className='App-header'>
          <img align= 'center' src={logo} className="App-logo" alt="logo" />
          <h1 style = {{fontSize: 30}}>Welcome to Fullstack Development - I</h1>
          <h1 style={ {fontSize: 25}}>React JS Programming Week09 Lab Exercise</h1>
          <h2 style={{fontSize:20}}>101508910</h2>
          <h2 style={{fontSize:15}}>Hetvi Patel</h2>
          <h3 style={{fontSize:15}}>George Brown College, Toronto</h3>
      </header>
    </div>
  );
}

export default App;
