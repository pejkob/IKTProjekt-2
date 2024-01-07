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
                <label className="form-text" htmlFor="NewphoneNumber">
                phoneNumber:
                </label>
                <input  className="form-control" type="text" id="NewphoneNumber" />
                <br />
                <label className="form-text" htmlFor="Newemail">
                email:
                </label>
                <input  className="form-control" type="text" id="Newemail" />
                <label className="form-text" htmlFor="Newceo">
                ceo:
                </label>
                <input required className="form-control" type="text" id="Newceo" />
                </div>
           
            <br></br>
            <PostCompany setCount={props.setCount}/>
        </fieldset>
    </form>

    </>
  )
}

export default NewCompanyForm