import React, { Component } from 'react'

const defaultAvatar = require('/home/ia/olimpo/src/resources/images/default-avatar.jpg')

export default class Avatar extends Component {
    render() {
        return ( 
        <div>
            <img src={defaultAvatar} alt="Avatar" />
        </div>
        ); 
    }
}