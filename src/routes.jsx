import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PhotoViewer from './components/views/PhotoViewer';
import SignUp from './components/views/SignUp';
import Dashboard from './components/views/Dashboard';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={PhotoViewer} />
        <Route path='signup' component={SignUp} />
        <Route path='photoviewer' component={PhotoViewer} />
        <Route path='dashboard' component={Dashboard} />
    </Route>
);