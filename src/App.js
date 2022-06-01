import { useState } from 'react';

import { BlogCMS } from './App_components/BlogCMS';
import { BookmarkingApp } from './App_components/BookmarkingApp';
import { BlogReadingApp } from './App_components/BlogReadingApp';
import { ContactList } from './App_components/ContactList';
import { BlogForm } from './App_components/BlogForm';

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
