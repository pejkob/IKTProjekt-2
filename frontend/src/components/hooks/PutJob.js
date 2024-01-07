import React from 'react';

function PutJob(props) {
  const handleEdit = async () => {
    const putObject = {
      Id: props.formData.Id,
      jobName: document.getElementById('Name').value,
      skill: document.getElementById('Skills').value,
      salary: document.getElementById('Salary').value,
      companyId: document.getElementById('CompanyId').value
    };

    const puturl = `http://localhost:5273/Job/${props.formData.Id}`;

    try {
      const response = await fetch(puturl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(putObject),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Response from server:', responseData);

    } catch (error) {
        console.error('Fetch error:', error);
    }
    props.setCount();
  };

  return (
    <>
      <button onClick={() => props.formSwitch(false)} className="btn btn-danger">
        X
      </button>
      <button onClick={handleEdit} className="btn btn-success">
        Done
      </button>
    </>
  );
}

export default PutJob;
