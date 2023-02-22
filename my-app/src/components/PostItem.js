import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {

    if (!props.savedPosts) {
        return null
    }

    else {
        return (
            props.savedPosts.map(post => {
                const { name, title, description, image } = post;
                return <div className={css.SearchItem} key={title}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt="random" />
                    <p>{description}</p>
                </div>
            }
            )
        )
    }
}

export default PostItem