import css from "./css/NavBarSimple.module.css"
import React from "react"

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message : "Hello, guest!",
            buttonText : "Log in",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state:", prevState);
            console.log("Previous props:", prevProps);
            return {
                message : prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText : prevState.buttonText === "Log in" ? "Log out" : "Log in",
            }
        }, () => {
            console.log("new state:", this.state.message);
            console.log("new state:", this.state.buttonText);
        });
    }
    
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        ) 
    }
}


export default NavBarSimple;