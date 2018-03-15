/**
 * Created by Joseph on 27/02/2018.
 */
import React, { Component } from 'react';
import FacebookLogin from '../../components/FacebookLogin';

export default class Home extends Component {

    render() {
        return (
            <div>
                <p>You are in HOME!</p>
                <p>Change this p to the search component</p>
                <FacebookLogin/>
            </div>
        );
    }

}