import { useState } from "react";

const INITIAL_STATE = {
    url: '',
    title: '',
    tag: '',
}

const BookmarkForm = ({ addBookmark }) => {
    const [state, setState] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.url.trim().length === 0) {
            return;
        }
        addBookmark(state);
        setState(INITIAL_STATE);
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <form onSubmit={handleSubmit} className='url-form'>

            <label htmlFor="url">Enter URL</label>
            <input id='url' type="text" name='url' value={state.url} onChange={handleChange} autoComplete='off' />

            <label htmlFor="title">Enter a Title</label>
            <input id='title' type="text" name='title' value={state.title} onChange={handleChange} autoComplete='off' />

            <label htmlFor="tag">Enter a Tag</label>
            <input id='tag' type="text" name='tag' value={state.tag.toLowerCase()} onChange={handleChange} autoComplete='off' />

            <button type="submit">Add Bookmark</button>
        </form>
    );
}

export default BookmarkForm