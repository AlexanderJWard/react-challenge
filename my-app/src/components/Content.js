import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {
                        savedPosts.map(post => {
                            return (
                                <div key={post.title} className={css.SearchItem}>
                                    <p>{post.title}</p>
                                    <p>{post.name}</p>
                                    <img src={post.image} alt="From Content.json" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Content