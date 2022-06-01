import React from "react";

 const BookmarkForm = () => {
    return <form className='url-form'>

        <label htmlFor="url">Enter URL</label>
        <input id='url' type="text" />

        <label htmlFor="title">Enter a Title</label>
        <input id='title' type="text" />

        <label htmlFor="tag">Enter a Tag</label>
        <input id='tag' type="text" />

        <button type="submit">Add Bookmark</button>
    </form>;
}

export default BookmarkForm