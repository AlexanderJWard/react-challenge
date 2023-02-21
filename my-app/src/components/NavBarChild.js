import css from "./css/NavBarForm.module.css"
import React from 'react'

function NavBarChild(props) {
    return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            {
                props.isLoggedIn ? (
                    <div>
                        <form>
                            <label>
                                Username:&nbsp;
                                <input type="text" name="username" defaultValue="Username" />
                            </label>
                            <label>
                                Password:&nbsp;
                                <input type="text" name="password" defaultValue="Password" />
                            </label>
                            <button onClick={props.handleClick}>Submit</button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <button onClick={props.handleClick}>Login</button>
                    </div>
                )
            }
        </div>
    )
}

export default NavBarChild
