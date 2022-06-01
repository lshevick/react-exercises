import Tags from './BookmarkingApp/Tags';
import BookmarkList from './BookmarkingApp/BookmarkList';
import BookmarkForm from './BookmarkingApp/BookmarkForm';
import { useState, useEffect } from "react";

const DATA = [
    { id: 1, title: 'title html', url: 'https://url.com', tag: 'html' },
    { id: 2, title: 'title css', url: 'https://url.com', tag: 'css' },
    { id: 3, title: 'title js', url: 'https://url.com', tag: 'js' },
]

const INITIAL_STATE = [];

const BookmarkingApp = () => {
    const [bookmarks, setBookmarks] = useState(INITIAL_STATE);
    const [uid, setUid] = useState(0);

    useEffect(() => {
        setBookmarks(DATA);
    }, []);

    const addBookmark = (newBookmark) => {
        newBookmark.id = uid;
        setBookmarks([...bookmarks, newBookmark]);
        setUid(uid + 1);
    }

    return (<div className="bookmarking-app">

        <BookmarkForm addBookmark={addBookmark} />

        <Tags />

        <BookmarkList bookmarks={bookmarks} />

    </div>
    );
}

export default BookmarkingApp;