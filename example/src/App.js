import React from 'react'

import { 
  Button,
  Input,
  Avatar,
  Checkbox  } from 'olimpo'
import 'olimpo/dist/index.css'

const App = () => {
  function myOnClickFunction() {
    console.log("MY ON LCICK FUNCTION WORKS");
  }

  function myOnMouseOverFunction() {
    console.log("MY ON MOUSE OVER FUNCTION WORKS");
  }
  function myOnChangeFunction() {
    console.log("MY ON CHANGE FUNCTION WORKS");
  }
  return ( 
    <div> 
      <Avatar 
        type="text"
        value="Olimpo"
        fontColor="white"
        backgroundColor="#0891a1"
        shape="circle" 
        size={300} />
    </div> 
  );
}

export default App
