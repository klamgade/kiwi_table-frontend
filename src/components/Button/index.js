/**
 * Created by Joseph on 09/02/2018.
 */
import React, { Component } from 'react';
import './index.css';

class Button extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
        };
    }

    handleClick() {
        console.log("hey someone clicked this = " + this);
    }

    render(){
        return (
        <div>
            <input type="button" className="button__wrapper--danger" onClick={this.handleClick} value={this.props.children}/>
        </div>
        );
    }

};
Button.propTypes = {

};
Button.defaultProps = {

};

export default Button;