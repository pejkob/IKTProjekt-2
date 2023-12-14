import React,{useState} from 'react'

function EditForm(props) {
    const [form,formSwitch]=useState(false);

    return (
        <div>
          {form ? (
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              { }
              <h1>New data</h1>
              <fieldset>
              <div className="form">
                <label className="form-text" htmlFor="name">
                  Car name:
                </label>
                <input required className="form-control" type="text" id="Name" />
                <br />
                <label className="form-text" htmlFor="name">
                  Car type:
                </label>
                <input required className="form-control" type="text" id="Type" />
                <br />
                <label className="form-text" htmlFor="name">
                  Car color:
                </label>
                <input required className="form-control" type="text" id="Color" />
              </div>
              <button onClick={()=>formSwitch(false)} className="btn btn-danger">X</button>
              </fieldset>
            </form>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => {
                formSwitch(true);
              }}
            >
              +
            </button>
          )}
        </div>
      );
}

export default EditForm