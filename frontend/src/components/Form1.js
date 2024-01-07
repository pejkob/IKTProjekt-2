import React from 'react'
import EditCardForm from './EditCardForm';
import NewCardForm from './NewCardForm';

function EditForm(props) {

      return (
        <div>
          {!props.form ? (
              <NewCardForm/>
          ) : (
              <EditCardForm formSwitch={props.formSwitch} formData={props.formData} setCount={props.setCount}/>
          )}
        </div>
      );
}

export default EditForm