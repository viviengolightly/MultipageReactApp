import React from 'react';

import Styles from '../styles/header.css'

import photo from '../../public/icons/header.png';

const Header = () => {
    return(
        <div className={Styles.header}>
            <img className={Styles.logo} src={photo} alt="photo" />
        </div>
    );
};

export default Header;