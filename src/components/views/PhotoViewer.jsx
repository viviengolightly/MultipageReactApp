import React, { Component } from "react";
import { browserHistory } from 'react-router';

import Header from '../Header';
import NavigationBar from '../NavigationBar';

import Styles from '../../styles/PhotoViewer.css';

import photo from '../../../public/icons/photo.png';

export default class PhotoViewer extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div className={Styles.photoviewer}>
        <div>
          <Header />  
        </div>
        <div>
          <img className={Styles.photo} src={photo} alt="photo" />
        </div>
        <div>
          <NavigationBar />
        </div>
      </div>
    );
  }
}