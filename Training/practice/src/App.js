import React from 'react';
// import './App.css';
import Header from './Header';
import Counter from './Counter';
import Container from './Container';

function App() {

  const countProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    //initialValue: 5,
  }

  return (
    <Container>
      <div>
        <Header/>
        <Counter {...countProps}/>
      </div>
    </Container>
  );
}

export default App;
