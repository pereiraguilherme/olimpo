import React, { Component } from 'react'
import styles from './css/avatar.module.css'
import { Avatar as MaterialuiAvatar } from '@material-ui/core'
import { Avatar as AntdAvatar } from 'antd'
import Utils from '../resources/Utils'
import defaultAvatar from '../resources/images/default-avatar.jpg'

export default class Avatar extends Component {
  onMouseOver = () => {
    if (this.props.onMouseOver) {
      return this.props.onMouseOver
    }
  }

  shouldReturnShapeClass = (shape) => {
    switch (shape) {
      case 'round':
        return styles.roundedAvatar
      case 'circle':
        return styles.circleAvatar
      default:
        return styles.squareAvatar
    }
  }

  getInitials = (str) => {
    if (!str) {
      return 'OP'
    } else {
      let splitedString = str.split(' ')
      if (splitedString.length > 2) {
        splitedString = splitedString.slice(0, 2)
      }
      return splitedString
        .map((string) => string.charAt(0))
        .join()
        .replaceAll(',', '')
    }
  }

  textAvatar = (size) => {
    return (
      <div
        className={this.shouldReturnShapeClass(this.props.shape)}
        style={{
          width: size,
          height: size,
          backgroundColor: this.props.backgroundColor
        }}
      >
        <span
          className={styles.initials}
          style={{ fontSize: size * 0.4, color: this.props.fontColor }}
        >
          {this.getInitials(this.props.value)}
        </span>
      </div>
    )
  }

  imageAvatar = (size) => {
    return (
      <div>
        <img
          className={this.shouldReturnShapeClass(this.props.shape)}
          src={this.props.src || defaultAvatar}
          style={{
            width: size,
            height: size,
            backgroundColor: this.props.backgroundColor
          }}
          alt={'Avatar' || this.props.alt}
        />
      </div>
    )
  }

  renderDefaultAvatar = () => {
    const size = Utils.shouldReturnSize(this.props.size, 'avatar') || 100
    return (
      <div onMouseOver={this.onMouseOver()}>
        {this.props.type === 'text'
          ? this.textAvatar(size)
          : this.imageAvatar(size)}
      </div>
    )
  }

  renderMaterialuiAvatar = () => {
    if (this.props.type === 'text') {
      return (
        <MaterialuiAvatar {...this.props}>{this.props.value}</MaterialuiAvatar>
      )
    } else {
      return <MaterialuiAvatar {...this.props} />
    }
  }

  renderAntdAvatar = () => {
    if (this.props.type === 'text') {
      return <AntdAvatar {...this.props}>{this.props.value}</AntdAvatar>
    } else {
      return <AntdAvatar {...this.props} />
    }
  }

  render() {
    let avatar
    switch (this.props.framework) {
      case 'materialui':
        avatar = this.renderMaterialuiAvatar()
        break
      case 'antd':
        avatar = this.renderAntdAvatar()
        break
      default:
        avatar = this.renderDefaultAvatar()
        break
    }

    return <div>{avatar}</div>
  }
}
