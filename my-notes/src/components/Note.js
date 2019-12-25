import React from 'react';

export const Note = ({ notes, onRemove }) => (
  <ul className="list-group">
    { notes.map( note => (
      <li className="list-note list-group-item" key={ note.id }>
        {note.title}
        <div>
          <small>{ note.date }</small>
          <button onClick={ () => onRemove(note.id) } type="button" class="btn btn-outline-danger btn-modifer">&times;</button>
        </div>
      </li>
    ) ) }
  </ul>
)