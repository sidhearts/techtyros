import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Home from './HomeComponent';
import Footer from './Footer'
class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Footer />
            </div>
        );
    }
}

export default Main;