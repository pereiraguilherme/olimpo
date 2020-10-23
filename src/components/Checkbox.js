import React, { Component } from 'react'
import { Checkbox as CheckboxMaterialUI } from '@material-ui/core'
import { Checkbox as CheckboxAntd } from 'antd';
import styles from './css/checkbox.module.css'
import Utils from '../resources/Utils';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    onClick = () => {
        if (this.props.onClick) {
            if(this.props.framework !== 'materialui'){
                console.log("Click");
                this.setState({checked: !this.state.checked})
            }
            return this.props.onClick
        }
    }

    onChange = () => {
        if (this.props.onChange) {
            return this.props.onChange
        }
    }

    shouldReturnShape = (shape) => {
        switch (shape) {
            case "circle":
                return {borderRadius: 12}
            case "round":
                return {borderRadius: 6}
            default:
                return {borderRadius: 3}
        } 
    }

    renderMaterialuiCheckbox = () => {
        return (
            <CheckboxMaterialUI {...this.props}/>
        );
    }

    renderAntdCheckbox = () => {
        return (
            <CheckboxAntd {...this.props}> 
            {this.props.label}
            </CheckboxAntd>
        );
    }
    renderDefaultCheckbox = () => {
        console.log(this.props);
        return (
            <div>
                <label className={styles.checkboxComponentLabel}>
                    <input 
                        disabled={this.props.disable}
                        defaultChecked={this.state.checked || false}
                        type={this.props.type || 'checkbox'}
                        style={{
                            ...Utils.shouldReturnSize(this.props.size, "checkbox")}}
                        onClick={this.onClick()}
                        onChange={this.onChange()}/>
                    <span 
                        className={styles.checkmark}
                        style={{
                            ...this.shouldReturnShape(this.props.shape),
                            ...Utils.shouldReturnSize(this.props.size, "checkbox"),   
                            backgroundColor: this.props.backgroundColor
                        }}    
                    ></span>
                    {this.props.label || 'Placeholder'}
                </label> 
            </div>
        );
    }

    render() {
        let checkbox;
        switch (this.props.framework) {
            case 'materialui':
                checkbox = this.renderMaterialuiCheckbox();
                break;
            case 'antd':
                checkbox = this.renderAntdCheckbox();
                break;
            default:
                checkbox = this.renderDefaultCheckbox();
                break;
        }
        return (
            <div>
                { checkbox }
            </div>
        );
    }
}