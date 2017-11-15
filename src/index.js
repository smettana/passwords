import React from 'react';
import { render } from 'react-dom'; 
import Dashboard from './components/Dashboard';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import NotFound from './components/NotFound';
import './css/style.css';

import {BrowserRouter, Match, Miss} from 'react-router';


const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={LoginForm} />
                <Match exactly pattern="/register" component={RegisterForm} />
                <Match exactly pattern="/dashboard" component={Dashboard} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}
render(<Root/>, document.querySelector('#main'));