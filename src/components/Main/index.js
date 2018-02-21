/**
 * Created by Joseph on 13/02/2018.
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Deals from './../../scenes/Deals';

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={Deals}/>
            </Switch>
        );
    }
};