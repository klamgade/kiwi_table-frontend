/**
 * Created by Joseph on 27/02/2018.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/auth'} >Login</Link></li>
                <li><Link to={'/vip'} >VIP</Link></li>
                <li><Link to={'/list'} >listing</Link></li>
                <li><Link to={'/deals'} >Deals</Link></li>

            </ul>
        );
    }
}