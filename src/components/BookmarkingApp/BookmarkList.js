import { useState } from "react";

const BookmarkList = ({ bookmarks }) => {
    const [filter, setFilter] = useState('All');

    // makes array of tags from bookmark state
    const buttons = bookmarks.map((bookmark) => {
        const filters = [...bookmark.tag];
        const newButtons = filters.join('').toLowerCase();
        return newButtons;
    }
    )

    const handleFilterClick = (e) => {
        const currentFilter = e.target.value;
        return setFilter(currentFilter);

    }
    
    //makes Set of unique buttons from provided tags
    const filterButtons = [...new Set(buttons)].map((button, i) => {
        return (<button
            key={i}
            type='button'
            value={button}
            onClick={handleFilterClick}>
            {button}
        </button>
        )
    })
    
    // need to use buttons when clicked to filter out the bookmarks that dont have the same tag
    const bookmarkList = bookmarks
        .filter((bookmark) => filter === 'All' ? bookmark : bookmark.tag === filter)
        .map((bookmark) => (
        <li key={bookmark.id}>
            <div>
                <h2>{bookmark.title}</h2>
                <p>{bookmark.url}</p>
                <p><span className="tag">{bookmark.tag}</span></p>
            </div>
        </li>
    ));

    return (
        <>
            <div className="filter-buttons">
                <button type='button' value='All' onClick={handleFilterClick} >All</button>
                {filterButtons}
            </div>
            <ul className="bookmarks">
                {bookmarkList}
            </ul>
        </>
    );
}

export default BookmarkList;