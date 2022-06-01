import React from "react";

export function BookmarkingApp({ }) {

    return (<div className="bookmarking-app">

        <form className='url-form'>

            <label htmlFor="url">Enter URL</label>
            <input id='url' type="text" />

            <label htmlFor="title">Enter a Title</label>
            <input id='title' type="text" />

            <label htmlFor="tag">Enter a Tag</label>
            <input id='tag' type="text" />

        </form>

        <ul className="bookmarks">

            <li>
                <div>
                    <h2>bookmark title</h2>
                    <p>example url</p>
                    <p>tags</p>
                </div>
            </li>

            <li>
                <div>
                    <h2>bookmark title</h2>
                    <p>example url</p>
                    <p>tags</p>
                </div>
            </li>

            <li>
                <div>
                    <h2>bookmark title</h2>
                    <p>example url</p>
                    <p>tags</p>
                </div>
            </li>

        </ul>

    </div>
    );
}
