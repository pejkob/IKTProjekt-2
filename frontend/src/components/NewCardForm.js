import React from 'react'
import './style.css'
import NewJobForm from './NewJobForm'
import NewCompanyForm from './NewCompanyForm'

function NewCardForm(props) {
  return (

    <>
    <form onSubmit={(event) => {event.preventDefault();}} >
     <h1>New data</h1>
        <fieldset>
           <div className='left'> <NewJobForm/></div>
           <div className='right'>  <NewCompanyForm/> </div>
           
            <br></br>
        </fieldset>
    </form>

    </>
  )
}

export default NewCardForm