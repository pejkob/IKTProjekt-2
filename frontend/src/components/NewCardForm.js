import React from 'react'
import PostCard from './hooks/PostCard';


function NewCardForm(props) {
  return (

    <>
    <form onSubmit={(event) => {event.preventDefault();}} >
     <h1>New data</h1>
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
                <input required className="form-control" type="text" id="NewSalary" />
                <label className="form-text" htmlFor="NewSalary">
                Company Id:
                </label>
                <input required className="form-control" type="text" id="NewCompanyId" />
            </div>
            <PostCard setCount={props.setCount}/>
        </fieldset>
    </form>

    </>
  )
}

export default NewCardForm