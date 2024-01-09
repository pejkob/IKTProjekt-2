import React from 'react'
import './style.css'
import PostCompany from './hooks/PostCompany';

function NewCompanyForm(props) {
  return (

    <>
    <form onSubmit={(event) => {event.preventDefault();}} >
        <fieldset>
        <div className="form">
                <label className="form-text" htmlFor="NewCompanyName">
                Company name:
                </label>
                <input required className="form-control" type="text" id="NewCompanyName" />
                <br />
                <label className="form-text" htmlFor="NewphoneNumber" >
                Phone Number:
                </label>
                <input  className="form-control" type="text" id="NewphoneNumber" placeholder='111-222-3333' />
                <br />
                <label className="form-text" htmlFor="Newemail">
                Email:
                </label>
                <input  className="form-control" type="text" id="Newemail" placeholder='test@email.com' />
                <label className="form-text" htmlFor="Newceo">
                CEO:
                </label>
                <input required className="form-control" type="text" id="Newceo" />
                <PostCompany setCount={props.setCount}/>
                </div>
           
         
           
        </fieldset>
    </form>

    </>
  )
}

export default NewCompanyForm