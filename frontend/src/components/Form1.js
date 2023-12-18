import React from 'react'
import NewCardForm from './NewCardForm';
import EditCardForm from './EditCardForm';

function EditForm(props) {

      return (
        <div>
          {!props.form ? (
              <NewCardForm formData={props.formData} setCount={props.setCount}/>
          ) : (
              <EditCardForm formSwitch={props.formSwitch} formData={props.formData} setCount={props.setCount}/>
          )}
        </div>
      );
}

export default EditForm