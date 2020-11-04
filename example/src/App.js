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
      <Button text="Test" shape="round"/>
      <Checkbox label="Test" shape="round"/>
      <Input label='Password' size='medium'/>
      <Avatar type='text' value='Guilherme Silva' shape='circle' backgroundColor='#4287f5'/>
    </div> 
  );
}

export default App
