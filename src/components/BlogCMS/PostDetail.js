import { useState } from "react";

const PostDetail = ({ id, title, body, ...props }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newBody, setNewBody] = useState(body);
    const [isEditing, setIsEditing] = useState(false);

    const saveBlog = () => {
        props.editBlog(id, newTitle, newBody);
        setIsEditing(false);
    }


    const previewHTML = (
            <li>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
            <button type="button" onClick={() => props.removeBlog(id)}>Delete Post</button>
        </li>
        )

    const editHTML = (
        <li>
            <div className="editing">
                <input type="text" name="{title}" id="{title}" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                <input type="text" name="{body}" id="{body}" value={newBody} onChange={e => setNewBody(e.target.value)} />
                <button id='save-btn' type='button' onClick={() => saveBlog(id, title, body)}>Save</button>
                <button type='button' onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        </li>
    )

    return (
        <ul>
            {isEditing ? editHTML : previewHTML}
        </ul>
    );
}

export default PostDetail;