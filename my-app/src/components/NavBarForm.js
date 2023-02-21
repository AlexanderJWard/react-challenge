import React, { Component } from 'react'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    }

    render() {
        return (
            <NavBarChild 
                isLoggedIn={this.state.isLoggedIn}
                handleClick={this.handleClick}
            />
        )
    }
}

export default NavBarForm
