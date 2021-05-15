import React from 'react'
import AppRouter from './route/RouterComponent';
import Container from '@material-ui/core/Container';
import NavBar from "./route/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
      <AppRouter/>
      </Container>
    
    </div>
  );
}

export default App;
