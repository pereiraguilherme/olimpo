import React, { Component } from 'react'
import styles from './css/avatar.module.css'
import { Avatar as MaterialuiAvatar } from '@material-ui/core'
const defaultAvatar = require('/home/ia/olimpo/src/resources/images/default-avatar.jpg')

export default class Avatar extends Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        if (this.props.onClick) {
            return this.props.onClick
        }
    }

    shouldReturnShapeClass = (shape) => {
        switch (shape) {
            case "round":
                return styles.roundedAvatar
            case "circle":
                return styles.circleAvatar
            default:
                return styles.squareAvatar
        } 
    }

    getInitials = (str) => {
        let splitedString = str.split(' ');
        if(splitedString.length > 2) {
            splitedString = splitedString.slice(0,2);
        }
        return splitedString.map(string => string.charAt(0)).join().replaceAll(',', '');
    }

    textAvatar = () => {
        return ( 
            <div className={this.shouldReturnShapeClass(this.props.shape)}>
                <span className={styles.initials}>
                    {this.getInitials(this.props.value)}
                </span>
            </div>
        ); 
    }

    imageAvatar = () => {
        return ( 
            <div>
                <img className={this.shouldReturnShapeClass(this.props.shape)} src={defaultAvatar} alt="Avatar" />
            </div>
        ); 
    }

    renderDefaultAvatar = () => {
        return (
            <div>
                {this.props.type === 'text' ? this.textAvatar() : this.imageAvatar()}
            </div>
            
        );        
    }
    
    renderMaterialuiAvatar = () => {
        return (
            <MaterialuiAvatar/>
        );        
    }
    render() {  
        let avatar;
        switch (this.props.framework) {
            case 'materialui':
                avatar = this.renderMaterialuiAvatar();
                break;
            default:
                avatar = this.renderDefaultAvatar();
                break;
        }

        return (
            <div>
                { avatar }
            </div> 
        );
    }

   
}