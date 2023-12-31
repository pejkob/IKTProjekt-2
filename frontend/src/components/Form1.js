import React from 'react'
import EditCardForm from './EditCardForm';
import NewCardForm from './NewCardForm';

function EditForm(props) {

      return (
        <>
            
          {!props.form ? (
              <NewCardForm setCount={props.setCount}/>
          ) : (

              <EditCardForm formSwitch={props.formSwitch} formData={props.formData} setCount={props.setCount}/>

          )}
        </>
      );
}

export default EditForm