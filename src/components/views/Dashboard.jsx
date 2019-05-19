import React, { Component } from "react";

import Header from '../Header';
import NavigationBar from '../NavigationBar';

import Styles from '../../styles/dashboard.css';

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state ={
            userImpressions: null,
            overlaysShown: null,
            overlaysClicked: null,
            revenue: null
        }
    }

    componentWillMount(){
        const ranUserImpressions = Math.floor(Math.random()*100);
        const ranOverlaysShown = Math.floor(Math.random()*100);
        const ranOverlaysClicked = Math.floor(Math.random()*100);
        const ranRevenue = Math.random()* 1000;

        this.setState({
            userImpressions: ranUserImpressions,
            overlaysShown: ranOverlaysShown,
            overlaysClicked: ranOverlaysClicked,
            revenue: ranRevenue
        });

        console.log(ranUserImpressions);
    }
    

    render() {
        return(
            <div id="dashboard">
                 <Header />
                 <div className={Styles.phrase}>
                    <span>User Impressions: {this.state.userImpressions}</span>
                 </div>
                <div className={Styles.phrase}>
                    <span>Overlays Shown: {this.state.overlaysShown}</span>
                </div>
                <div className={Styles.phrase}>
                    <span>Overlays Clicked: {this.state.overlaysClicked}</span>
                </div>
                <div className={Styles.phrase}>
                    <span>Revenue: £ {this.state.revenue}</span>
                </div>
                <NavigationBar />
            </div>
        );
    }
}