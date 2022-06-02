import { useState } from "react";

const Form = ({ addBlog }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = e => setTitle(e.target.value);
    const handleBodyChange = e => setBody(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (body.trim().length === 0) {
            return;
        }
        addBlog(title, body);
        setTitle('');
        setBody('');
    }

    return (
        <form onSubmit={handleSubmit} className="cms-blog-form">
            <label htmlFor="blog-title"></label>
            <input id="blog-title" type="text" name='title' value={title} onChange={handleTitleChange} />

            <label htmlFor="blog-body"></label>
            <input id="blog-body" type="text" name='body' value={body} onChange={handleBodyChange} />

            <button type='submit'>Submit</button>
        </form>
    );
}

export default Form;