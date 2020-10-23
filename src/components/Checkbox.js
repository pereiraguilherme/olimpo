import React, { Component } from 'react'
import { Checkbox as CheckboxMaterialUI } from '@material-ui/core'
import styles from './css/checkbox.module.css'

export default class Input extends Component {
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

    shouldReturnSize = (size) => {
        if (isNaN(size)){
            switch (size) {
                case "small":
                    return {
                        width: 20,
                        height: 20
                    }
                case "large":
                    return {
                        width: 30,
                        height: 30
                    }
                default:
                    return {
                        width: 25,
                        height: 25
                    }
            }
        } else {
            return size;
        }
    }

    renderMaterialuiCheckbox = () => {
        return (
            <CheckboxMaterialUI {...this.props}/>
        );
    }
    renderDefaultCheckbox = () => {
        return (
            <div>
                { this.props.label ? 
                    <label className={styles.checkboxComponentLabel}>
                        <input 
                            disabled={this.props.disable}
                            checked={this.state.checked}
                            type={this.props.type || 'checkbox'}
                            style={{
                                ...this.shouldReturnSize(this.props.size)}}
                            onClick={this.onClick}/>
                        <span 
                            className={styles.checkmark}
                            style={{
                                ...this.shouldReturnShape(this.props.shape),
                                ...this.shouldReturnSize(this.props.size),   
                                backgroundColor: this.props.backgroundColor
                            }}    
                        ></span>
                        {this.props.label}
                    </label> : 
                null}
            </div>
        );
    }

    render() {
        let checkbox;
        switch (this.props.framework) {
            case 'materialui':
                checkbox = this.renderMaterialuiCheckbox();
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