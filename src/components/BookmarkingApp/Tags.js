
const Tags = ({ bookmarks }) => {

    const handleClick = (e) => {

    }

    const buttons = bookmarks.map((bookmark) => (
        <button 
        key={bookmark.id} 
        type='button'

        >
            {bookmark.tag}
            </button>
    ))

    return (
        <div className="tags">
            <p>Filter by Language</p>
            {buttons}
        </div>
    );
}

export default Tags;