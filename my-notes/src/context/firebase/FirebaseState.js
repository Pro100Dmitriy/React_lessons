import React, {useReducer, cloneElement} from 'react';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { SHOW_NOTE, REMOVE_NOTE, LOAD_NOTE, FEATCH_NOTE } from '../types';

//const url = process.env.REAC_APP_DB_URL;
const url = 'https://react-lessons-a33db.firebaseio.com';

export const FirebaseState = ({ children }) => {

  const initialState = {
     notes: [],
     loading: false
  }

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showNote = () => dispatch({ type: SHOW_NOTE})

  const featchNote = async () => {
    showNote();
    const result = await axios.get(`${url}/notes.json`);
    //console.log('featchNote', result.data)
    if( result.data ){
      const payload = Object.keys(result.data).map( key => {
        return {
          ...result.data[key],
          id: key
        }
      });
      dispatch({ type: FEATCH_NOTE, payload: payload })
    }
  }

  const loadNote = async title => {
    const note = {
      title, date: new Date().toJSON()
    }

    try{
      const result = await axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: result.data.name
      }
      dispatch({
        type: LOAD_NOTE,
        payload: payload
      })
    }catch(e){
      throw new Error(e.message);
    }
    
  }

  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({ type: REMOVE_NOTE, payload: id })
  }

  return (
    <FirebaseContext.Provider
      value={{
        showNote, loadNote, removeNote, featchNote,
        loading: state.loading,
        notes: state.notes
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}