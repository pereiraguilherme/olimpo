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
      {/* <ExampleComponent text="Create React Library Example 😄" /> */}

      <Button 
        text="My text" 
        onClick={myOnClickFunction}
        onMouseOver={myOnMouseOverFunction}
        size={"large"}
        disabled={false}
        color={'red'}
        textColor={'yellow'}
        framework={"antd"}/> 
        

    </div> 
  );
}

export default App
