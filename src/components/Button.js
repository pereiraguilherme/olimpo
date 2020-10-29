import React, { Component } from 'react'
import { Button as MaterialButton } from '@material-ui/core'
import { Button as AntdButton } from 'antd'
import Utils from '../resources/Utils'
import styles from './css/button.module.css'

export default class Button extends Component {
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

  renderDefaultButton = () => {
    return (
      <button
        className={styles.buttonComponent}
        style={{
          width: Utils.shouldReturnSize(this.props.size, 'button'),
          height: Utils.shouldReturnSize(this.props.size, 'button'),
          backgroundColor: this.props.color,
          color: this.props.textColor,
          ...Utils.shouldReturnShape(this.props.shape),
          ...this.props.style
        }}
        disabled={this.props.disabled}
        onClick={this.onClick()}
        onMouseOver={this.onMouseOver()}
      >
        {this.props.text || 'Placeholder'}
      </button>
    )
  }

  renderMaterialuiButton = () => {
    return (
      <MaterialButton
        onClick={this.onClick()}
        onMouseOver={this.onMouseOver()}
        {...this.props}
      >
        {this.props.text || 'Placeholder'}
      </MaterialButton>
    )
  }

  renderAntdButton = () => {
    return (
      <AntdButton
        onClick={this.onClick()}
        onMouseOver={this.onMouseOver()}
        {...this.props}
      >
        {this.props.text || 'Placeholder'}
      </AntdButton>
    )
  }

  render() {
    let button
    switch (this.props.framework) {
      case 'materialui':
        button = this.renderMaterialuiButton()
        break
      case 'antd':
        button = this.renderAntdButton()
        break
      default:
        button = this.renderDefaultButton()
        break
    }

    return <div>{button}</div>
  }
}
