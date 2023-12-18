import React from 'react'

function DeleteCar(props) {

    const handleDelete =async () => {
        const url = `http://localhost:5273/Job/`;
        await fetch(url+props.id, {
          method: "DELETE",
        })
          .then((resp) => {
            if (!resp.ok) {
              throw new Error('Network response was not ok');
            }
            return resp.json();
          })
          .then((res) => {
            if (res.isSuccess) {
            }
          })
          .catch(error => {
          })
          props.setCount();
    
      };
  return (
    <div>
       <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
    </div>
  )
}

export default DeleteCar