# olimpo

> React Component Framework

[![NPM](https://img.shields.io/npm/v/olimpo.svg)](https://www.npmjs.com/package/olimpo) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save olimpo
```

## Usage

### Button
| Property | Description | Values |
|----------|--------|--------|
|text      | Text that will be displayed | **string**|
|color     | Button color | Standart HTML color name: `'red', 'green', 'blue', 'yellow'...`<br> RGB code. Ex.: `rgb(255,0,0)` <br> Hexadecimal color code. Ex.: `#FF0000`|
|textColor | Change the color of the text displayed | Standart HTML color name: `'red', 'green', 'blue', 'yellow'...`<br> RGB code. Ex.: `rgb(255,0,0)` <br> Hexadecimal color code. Ex.: `#ff0000`|
|size      | Component size | Default sizes: `small, medium, large`<br> Number value for size in pixels. Ex.: `100px` |
|shape     | Component and borders shape | `round, square, circle`|
|disable   | Disable button flag | `'true' or 'false'`|
|framework | Framework that component will be used when instanciated | `'antd' or 'materialui'` |
|onClick   | Callback method for click event| **function**|
|onMouseOver | Callback method for mouse over the component event | **function**|


```jsx
import React, { Component } from 'react'
import { Button } from 'olimpo'

class Example extends Component {

  onClick = () => {
    console.log("On click event");
  }

  onMouseOver = () => {
    console.log("On mouse over event");
  }

  render() {
    return <Button
        text="My text" 
        onClick={this.onClick()}
        onMouseOver={this.onMouseOver()}
        size={"large"}
        disabled={false}
        color={"red"}
        textColor={"yellow"}
        shape={"round"}
     />
  }
}
```
**Obs.:** When use `materialui` framework component, all properties available on [Material-UI](https://material-ui.com/components/buttons/) documentation can be use.

### Input
| Property | Description | Values |
|----------|--------|--------|
|label      | Text that will be placed as label above the input field| **string**|
|placeholder | Text that will be placed inside the input field| **string** |
|backgroundColor     | Input field background color | Standart HTML color name: `'red', 'green', 'blue', 'yellow'...`<br> RGB code. Ex.: `rgb(255,0,0)` <br> Hexadecimal color code. Ex.: `#FF0000`|
|size      | Component size | Default sizes: `small, medium, large`<br> Number value for size in pixels. Ex.: `100px` |
|shape     | Component and borders shape | `round, square, circle`|
|disable   | Disable input field flag | `'true' or 'false'`|
|error   | Error on field flag | `'true' or 'false'`|

|framework | Framework that component will be used when instanciated | `'antd' or 'materialui'` |
|onClick   | Callback method for click event| **function**|
|onMouseOver | Callback method for mouse over the component event | **function**|
|onChange | Callback method for mouse over the component event | **function**|



```jsx
import React, { Component } from 'react'
import { Input } from 'olimpo'

class Example extends Component {

  onClick = () => {
    console.log("On click event");
  }

  onMouseOver = () => {
    console.log("On mouse over event");
  }

  onChange = () => {
    console.log("On change event");
  }

  render() {
    return <Input
        label='This is an example'
        placeholder='Input Example' 
        backgroundColor='#cccc'
        size='large'
        shape='round'
        disable={false}
        error={false}
        onClick={this.onClick()}
        onMouseOver={this.onMouseOver()}
        onChange={this.onChange()}
     />
  }
}
```
**Obs.:** When use `materialui` framework component, all properties available on [Material-UI](https://material-ui.com/components/text-fields/) documentation can be use.

## Development
To import the module from local files, you need to import `olimpo` on your project then run the following commands:
```
npm start ./olimpo
npm start ./olimpo/example
``` 

## License

MIT © [pereiraguilherme](https://github.com/pereiraguilherme)
