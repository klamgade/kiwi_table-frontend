/**
 * Created by Joseph on 13/02/2018.
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Authentication from '../FacebookLogin'
import Deals from './../../scenes/Deals';
import Home from './../../scenes/Home';
import Listing from './../../scenes/Listing'
import Vip from './../../scenes/Vip'


export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/deals"} component={Deals}/>
                <Route exaxt path={"/auth"} component={Authentication}/>
                <Route exact path={"/list"} component={Listing}/>
                <Route exact path={"/vip"} component={Vip}/>
            </Switch>
        );
    }
};