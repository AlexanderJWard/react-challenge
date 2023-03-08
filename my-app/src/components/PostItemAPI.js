import React from "react"
import css from "./css/PostItem.module.css";


function PostItemAPI(props) {

    if (!props.savedPosts) {
        return null
    }

    else {
        return (
            props.savedPosts.map(post => {
                const { type, user, webformatURL, tags, id } = post;
                return <div className={css.SearchItem} key={id}>
                    <p>{type}</p>
                    <p>{user}</p>
                    <img src={webformatURL} alt="random" />
                    <p>{tags}</p>
                </div>
            }
            )
        )
    }
}

export default PostItemAPI