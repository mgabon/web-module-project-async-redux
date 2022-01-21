import React, { useEffect } from 'react';
import './App.css';
import Dogs from './components/Dogs';
import  Typography  from '@mui/material/Typography';

function App() {

  return (
    <div className="App">
    <Typography variant="h1">REDUX DOG</Typography>
    <Dogs />
    </div>
  );
}

export default App;