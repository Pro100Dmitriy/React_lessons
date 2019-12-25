import React, {Fragment, useContext, useEffect} from 'react';
import {Form} from '../components/From';
import {Note} from '../components/Note';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { Loader } from '../components/Loader';

export const Home = () => {
  
  //const notes = new Array(5).fill('').map( (_, i) => ( {id: i, title: `notes ${ i + 1 }` } ) );

  const {loading, notes, featchNote, removeNote} = useContext(FirebaseContext);

  useEffect( () => {
    featchNote()
    // eslint-disable-next-line
  }, [] )

  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">My Notes</h1>
          <p className="lead">{ "Hear all your notes :)" }</p>
        </div>
      </div>
      <Form></Form>

      {
        loading 
        ? <Loader></Loader>
        : <Note notes={notes} onRemove={removeNote}></Note>
      }

    </Fragment>
  )
}