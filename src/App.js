import { useState } from 'react';

import BlogCMS from './components/BlogCMS';
import BookmarkingApp from './components/BookmarkingApp';
import BlogReadingApp from './components/BlogReadingApp';
import ContactList  from './components/ContactList';
import BlogForm from './components/BlogForm';

import './App.css';

function App(props) {
  const [selection, setSelection] = useState('BlogForm');

  return (
    <div className="react-exercises">

      <nav>
        <li><button onClick={() => setSelection('BlogForm')} >Blog Form</button></li> 
        <li><button onClick={() => setSelection('ContactList')} >Contact List</button></li>
        <li><button onClick={() => setSelection('BlogReadingApp')} >Blog Reading App</button></li>
        <li><button onClick={() => setSelection('BookmarkingApp')} >Bookmarking App</button></li>
        <li><button onClick={() => setSelection('BlogCMS')} >Blog CMS</button></li>
      </nav>

      {selection === 'BlogForm' && <BlogForm />}
      {selection === 'ContactList' && <ContactList />}
      {selection === 'BlogReadingApp' && <BlogReadingApp />}
      {selection === 'BookmarkingApp' && <BookmarkingApp />}
      {selection === 'BlogCMS' && <BlogCMS />}

    </div>
  );
}

export default App;
