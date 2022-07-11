import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> 
          Rishi Movva
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        return <Button variant="contained"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >react</Button>

        <Button variant="contained"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >instagram</Button>

        <Button outlined="contained"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >google</Button>

        <Button variant="contained" disabled
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >disabled</Button>

        <Button variant="contained" disableElevation
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >disableElevation</Button>

        <Button variant="contained" size="small"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >small</Button>

        <Button variant="contained" size="large"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >small</Button>

        <Button type="submit" color="primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >small</Button>

        <Button type="submit" color="secondary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >small</Button>

        {/* <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup> */}

        <Button
          onClick={() => console.log('you.clicked me)')}
          type="submit"
          color= "secondary"
          variant= "contained"
        >Submit</Button> 

      </header>
    </div>
  );
}

export default App;