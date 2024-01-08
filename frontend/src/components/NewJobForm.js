import React from 'react'
import PostJob from './hooks/PostJob';
import './style.css'

function NewJobForm(props) {
  return (

    <>
    <form onSubmit={(event) => {event.preventDefault();}} >
        <fieldset>
            <div className="form">
                <label className="form-text" htmlFor="NewJobName">
                  Job name:
                </label>
                <input required className="form-control" type="text" id="NewJobName" />
                <br />
                <label className="form-text" htmlFor="NewSkill">
                Skill:
                </label>
                <input required className="form-control" type="text" id="NewSkill" />
                <br />
                <label className="form-text" htmlFor="NewSalary">
                Salary:
                </label>
                <input required className="form-control" type="number" id="NewSalary" />
                <label className="form-text" htmlFor="NewCompanyId">
                Company Id:
                </label>
                <input required className="form-control" type="text" id="NewCompanyId" />
                <PostJob setCount={props.setCount}/>
            </div>
           
        
           
        </fieldset>
    </form>

    </>
  )
}

export default NewJobForm