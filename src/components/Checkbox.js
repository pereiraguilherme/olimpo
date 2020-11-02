import React, { Component } from 'react'
import { Checkbox as CheckboxMaterialUI } from '@material-ui/core'
import { Checkbox as CheckboxAntd } from 'antd'
import styles from './css/checkbox.module.css'
import Utils from '../resources/Utils'

export default class Checkbox extends Component {
  onClick = () => {
    if (this.props.onClick) {
      return this.props.onClick
    }
  }

  onChange = () => {
    if (this.props.onChange) {
      return this.props.onChange
    }
  }

  renderMaterialuiCheckbox = () => {
    return <CheckboxMaterialUI {...this.props} />
  }

  renderAntdCheckbox = () => {
    return <CheckboxAntd {...this.props}>{this.props.label}</CheckboxAntd>
  }

  renderDefaultCheckbox = () => {
    return (
      <div>
        <label className={styles.checkboxComponentLabel}>
          <input
            disabled={this.props.disabled}
            type='checkbox'
            style={{
              ...Utils.shouldReturnSize(this.props.size, 'checkbox'),
              ...this.props.checkboxStyle
            }}
            onClick={this.onClick()}
            onChange={this.onChange()}
          />
          <span
            className={styles.checkmark}
            style={{
              ...Utils.shouldReturnShape(this.props.shape),
              ...Utils.shouldReturnSize(this.props.size, 'checkbox'),
              backgroundColor: this.props.backgroundColor,
              ...this.props.labelStyle
            }}
          />
          {this.props.label || 'Placeholder'}
        </label>
      </div>
    )
  }

  render() {
    let checkbox
    switch (this.props.framework) {
      case 'materialui':
        checkbox = this.renderMaterialuiCheckbox()
        break
      case 'antd':
        checkbox = this.renderAntdCheckbox()
        break
      default:
        checkbox = this.renderDefaultCheckbox()
        break
    }
    return <div>{checkbox}</div>
  }
}
