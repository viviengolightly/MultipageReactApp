import React from 'react';

import { Link } from 'react-router';

import Styles from '../styles/navbar.css';


const NavigationBar = () => {

    return(
            <div className={Styles.menu}>
                <div className={Styles.linkstyle}>
                    <Link className={Styles.link} to="/">Photo Viewer</Link>{' '}
                </div>
                <div className={Styles.linkstyle}>
                    <Link className={Styles.link} to={{pathname: '/signup'}}>Sign Up</Link>{' '}
                </div>
                <div className={Styles.linkstyle}>
                    <Link className={Styles.link} to="/dashboard">Dashboard</Link>
                </div>
            </div>
    );
};

export default NavigationBar;