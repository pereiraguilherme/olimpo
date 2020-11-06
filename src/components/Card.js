import React, { Component } from 'react'
import styles from './css/card.module.css'
import { Card as MaterialuiCard } from '@material-ui/core'
import { Card as AntdCard } from 'antd'
import Utils from '../resources/Utils'

export default class Card extends Component {
  renderDefaultCard = () => {
    return (
      <div
        className={styles.card}
        style={{
          backgroundColor: this.props.backgroundColor,
          width: Utils.shouldReturnSize(this.props.size, 'card'),
          ...Utils.shouldReturnShape(this.props.shape || 'round'),
          ...this.props.style
        }}
        {...this.props}
      >
        {this.props.header ? (
          <div>
            {this.props.header}
            <hr />
          </div>
        ) : null}

        <div className={styles.container}>{this.props.children}</div>
      </div>
    )
  }

  renderMaterialuiCard = () => {
    return (
      <MaterialuiCard {...this.props}>{this.props.children}</MaterialuiCard>
    )
  }

  renderAntdCard = () => {
    return <AntdCard {...this.props}>{this.props.children}</AntdCard>
  }

  render() {
    let card
    switch (this.props.framework) {
      case 'materialui':
        card = this.renderMaterialuiCard()
        break
      case 'antd':
        card = this.renderAntdCard()
        break
      default:
        card = this.renderDefaultCard()
        break
    }

    return <div>{card}</div>
  }
}
