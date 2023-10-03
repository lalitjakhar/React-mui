import React, { useState } from 'react';
import './App.css';
import { Delete } from '@mui/icons-material';
import Button from '@mui/material/Button';

function App() {
  const [color,setColor]=useState("secondary")
  const[disableBtn ,setdisableBtn]=useState(false)

  function customMe()
  {
    // setColor("secondary")
    setdisableBtn("true")
    alert("function called")
  }
  return (
    <div className="App">
      <h1>React Material UI</h1>
      <Button
      color={color}
      disabled={disableBtn}
      variant="contained"
      onclick={()=>{customElements()}}
      startIcon={<Delete />}
      >Click Me
      </Button>
    </div>
  );
}

export default App;
