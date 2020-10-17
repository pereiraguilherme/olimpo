import React, { Component } from 'react'
import { Button as MaterialButton } from '@material-ui/core'
import { Button as AntdButton } from 'antd'
import './css/button.css'

export default class Button extends Component {
    constructor(props) {
        super(props);
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

    shouldReturnSize = (size) => {
        if (isNaN(size)){
            switch (size) {
                case "small":
                    return 150;
                case "medium":
                    return 200;
                case "large":
                    return 300
                default:
                    break;
            }
        } else {
            return size;
        }
    }

    shouldReturnShape = (shape) => {
        switch (shape) {
            case "round":
                return {borderRadius: 12};
            case "circle":
                const radius = !this.props.circleRadius ? 75 : this.props.circleRadius;
                return {
                    borderRadius: (radius / 2),
                    width: radius,
                    height: radius,
                }
            default:
                return {borderRadius: 3}
        } 
    }

    renderDefaultButton = () => {
        return (
            <button 
            className="button"
            style={{
                width: this.shouldReturnSize(this.props.size),
                backgroundColor: this.props.color,
                color: this.props.textColor,
                ...this.shouldReturnShape(this.props.shape)
            }}
            disabled={this.props.disabled}
            onClick={this.onClick()}
            onMouseOver={this.onMouseOver()}
            >
                {this.props.text || 'Placeholder'}
            </button>
            
        );        
    }
    
    renderMaterialuiButton = () => {
        return (
            <MaterialButton 
            onClick={this.onClick()}
            onMouseOver={this.onMouseOver()}
            {...this.props}>
                {this.props.text || 'Placeholder'}
            </MaterialButton>
        );        
    }

    renderAntdButton = () => {
        return (
            <AntdButton 
            onClick={this.onClick()}
            onMouseOver={this.onMouseOver()}
            {...this.props}>
                {this.props.text || 'Test'}
            </AntdButton>
        );        
    }
    
    render() {  
        let button;
        switch (this.props.framework) {
            case 'materialui':
                button = this.renderMaterialuiButton();
                break;
            case 'antd':
                button = this.renderAntdButton();
            default:
                button = this.renderDefaultButton();
                break;
        }

        return (
            <div>
                { button }
            </div> 
        );
    }
}