import React, { Component } from 'react';

import Styles from '../styles/app.css'

export default class App extends Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}