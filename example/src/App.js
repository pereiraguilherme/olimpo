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
  return ( 
    <div> 
      <Button 
        variant="outlined"
        color="primary"
        framework={'antd'}>
          My button
      </Button> 
    </div> 
  );
}

export default App
