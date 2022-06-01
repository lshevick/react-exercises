
const BookmarkList = ({ bookmarks }) => {

    const bookmarkList = bookmarks.map((bookmark) => (
        <li key={bookmark.id}>
            <div>
                <h2>{bookmark.title}</h2>
                <p>{bookmark.url}</p>
                <p>{bookmark.tag}</p>
            </div>
        </li>
    ));

    return (
        <ul className="bookmarks">
            {bookmarkList}
        </ul>
    );
}

export default BookmarkList;