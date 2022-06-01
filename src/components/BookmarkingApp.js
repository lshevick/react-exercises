import BookmarkForm from './BookmarkingApp/BookmarkForm';
import { useState } from "react";

const BookmarkingApp = () => {

    return (<div className="bookmarking-app">

        <BookmarkForm />

        <div className="tags">
            <p>Filter by Language</p>
            <button type="button">HTML</button>
            <button type="button">CSS</button>
            <button type="button">JS</button>
            <button type="button">ALL</button>
        </div>

        <ul className="bookmarks">

            <li>
                <div>
                    <h2>bookmark title</h2>
                    <p>http://example url</p>
                    <p>tags</p>
                </div>
            </li>

            <li>
                <div>
                    <h2>bookmark title</h2>
                    <p>http://example url</p>
                    <p>tags</p>
                </div>
            </li>

            <li>
                <div>
                    <h2>bookmark title</h2>
                    <p>http://example url</p>
                    <p>tags</p>
                </div>
            </li>

        </ul>

    </div>
    );
}

export default BookmarkingApp;