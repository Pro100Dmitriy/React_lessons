import React from 'react';

export const Note = ({ notes }) => {
  return (
    <ul className="list-group">
      { notes.map( note => (
        <li className="list-note list-group-item" key={ note.id }>
          {note.title}
          <div>
            <small>{ new Date().toLocaleDateString() }</small>
            <button type="button" class="btn btn-outline-danger btn-modifer">&times;</button>
          </div>
        </li>
      ) ) }
    </ul>

  )
}