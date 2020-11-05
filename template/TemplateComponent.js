import React, { Component } from 'react'
import styles from './css/templateComponent.module.css'
/**
 * Uncoment the lines below when importing the proper component from material-ui and antd
 */
// import { templateComponent as MaterialuitemplateComponent } from '@material-ui/core'
// import {  templateComponent as AntdtemplateComponent } from 'antd'

export default class MyTemplate extends Component {
  renderTemplateComponent = () => {
    return (
      <div className={styles.templateComponent} {...this.props}>
        <h1>This is a template component</h1>
      </div>
    )
  }

  renderMaterialuiTemplateComponent = () => {
    /**
     * Render MaterialUi component
     */
  }

  renderAntdTemplateComponent = () => {
    /**
     * Render Antd component
     */
  }

  render() {
    let template
    switch (this.props.framework) {
      case 'materialui':
        template = this.renderMaterialuiTemplateComponent()
        break
      case 'antd':
        template = this.renderAntdTemplateComponent()
        break
      default:
        template = this.renderTemplateComponent()
        break
    }

    return <div>{template}</div>
  }
}
