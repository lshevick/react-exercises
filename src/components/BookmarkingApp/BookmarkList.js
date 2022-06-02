
const BookmarkList = ({ bookmarks }) => {


    // makes array of tags from bookmark state
    const buttons = bookmarks.map((bookmark) => {
        const filter = [...bookmark.tag];
        const newButtons = filter.join('');
        return newButtons;
    }
    )

    const handleFilterClick = (e) => {
        const currentFilter = e.target.value;
        console.log(currentFilter);
    }
    
    
    // need to use buttons when clicked to filter out the bookmarks that dont have the same tag
    const bookmarkList = bookmarks.map((bookmark) => (
        <li key={bookmark.id}>
            <div>
                <h2>{bookmark.title}</h2>
                <p>{bookmark.url}</p>
                <p>{bookmark.tag}</p>
            </div>
        </li>
    ));

    
    //makes Set of unique buttons from provided tags
    const filterButtons = [...new Set(buttons)].map((button, i) => {
        console.log(button);
        return (<button
            key={i}
            type='button'
            value={button}
            onClick={handleFilterClick}>
            {button}
        </button>
        )
    })


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