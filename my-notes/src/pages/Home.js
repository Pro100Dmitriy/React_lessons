import React, {Fragment} from 'react';
import {Form} from '../components/From';
import {Note} from '../components/Note';

export const Home = () => {
  
  const notes = new Array(5)
              .fill('')
              .map( (_, i) => ( {id: i, title: `notes ${ i + 1 }` } ) );

  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">My Notes</h1>
          <p className="lead">Hear all your notes :)</p>
        </div>
      </div>
      <Form></Form>

      <Note notes={notes}></Note>
    </Fragment>
  )
}