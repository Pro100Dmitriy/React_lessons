import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export  const Form = () => {

  const [value, setValue] = useState('');
  const alert = useContext( AlertContext );
  const firebase = useContext( FirebaseContext )

  const submitHandler = event => {
    event.preventDefault();

    if( value.trim() ){
      // ....new note
      firebase.loadNote( value.trim() ).then( () => {
        alert.show( "Notes created success", 'success');
      }).catch( () => {
        alert.show( "Woops, something went wrong :(", 'danger');
      });

      alert.show( "Notes created success", 'success');
      setValue('');
    }else{
      alert.show( "Write the text");
    }
    
  }

  return (

    <form onSubmit={ submitHandler }>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Add note" value={value} onChange={ e => setValue( e.target.value ) } />
      </div>
    </form>

  )
}