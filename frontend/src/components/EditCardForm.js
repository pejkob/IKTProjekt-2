import React, { useEffect } from 'react';
import './style.css';

function EditCardForm(props) {
  const handleEdit = () => {
    const putObject = {
      Id: props.formData.Id,
      JobName: document.getElementById('Name').value,
      skill: document.getElementById('Skills').value,
      salary: document.getElementById('Salary').value,
      companyId: document.getElementById('CompanyId').value
    };

    // Perform additional checks if needed
    checkInput();

    const puturl = "http://localhost:5273";

    // Update Job
    fetch(puturl + "/Job", {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(putObject)
    });

    // Update Company
    fetch(puturl + "/Company", {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Id: props.formData.companyId,
        Name: document.getElementById('CompanyName').value,
        PhoneNumber: document.getElementById('PhoneNumber').value,
        Email: document.getElementById('Email').value,
        CEO: document.getElementById("Ceo").value,
      })
    });

    props.setCount();
  };

  const checkInput = () => {
    // Implement your input validation logic here
  };

  return (
    <>
      <h1>Edit data</h1>
      <form id='jobform' onSubmit={(event) => { event.preventDefault(); }}>
        {/* ... Job form inputs */}
      </form>

      <form id='companyform' onSubmit={(event) => { event.preventDefault(); }}>
        {/* ... Company form inputs */}
        <hr></hr>
        <button onClick={() => props.formSwitch(false)} className="btn btn-danger">X</button>
        <button onClick={handleEdit} className="btn btn-success">Done</button>
      </form>
    </>
  );
}

export default EditCardForm;
