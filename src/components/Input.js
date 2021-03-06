import React, { Component } from 'react'
import Utils from '../resources/Utils'
import { TextField as InputMaterialUI } from '@material-ui/core'
import { Input as InputAntd } from 'antd'
import styles from './css/input.module.css'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder: null
    }
  }

  onClick = () => {
    if (this.props.onClick) {
      return this.props.onClick
    }
  }

  onMouseOver = () => {
    if (this.props.onMouseOver) {
      return this.props.onMouseOver
    }
  }

  onChange = () => {
    if (this.props.onChange) {
      return this.props.onChange
    }
  }

  renderMaterialuiInput = () => {
    return <InputMaterialUI {...this.props} />
  }

  renderAntdInput = () => {
    return <InputAntd {...this.props} />
  }

  renderDefaultInput = () => {
    return (
      <div style={{ display: 'inline-block' }}>
        {this.props.label ? (
          <label
            className={styles.inputComponentLabel}
            style={{ color: this.props.error ? 'red' : 'black' }}
          >
            {this.props.label}
          </label>
        ) : null}
        <input
          className={styles.inputComponent}
          type='text'
          placeholder={this.props.placeholder}
          style={{
            cursor: this.props.disable ? 'not-allowed' : 'auto',
            backgroundColor: this.props.backgroundColor,
            width: Utils.shouldReturnSize(this.props.size),
            border: !this.props.error ? '1px solid #cccccc' : '1px solid red',
            ...Utils.shouldReturnShape(this.props.shape),
            ...this.props.style
          }}
          disabled={this.props.disabled}
          onClick={this.onClick()}
          onMouseOver={this.onMouseOver()}
          onChange={this.onChange()}
        />
      </div>
    )
  }

  render() {
    let input
    switch (this.props.framework) {
      case 'materialui':
        input = this.renderMaterialuiInput()
        break
      case 'antd':
        input = this.renderAntdInput()
        break
      default:
        input = this.renderDefaultInput()
        break
    }
    return <div>{input}</div>
  }
}
