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
      <Button framework="antd" type="primary"/>
    </div> 
  );
}

export default App
