import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteCar(props) {

    const handleDelete =async () => {
        const url = `http://localhost:5273/Job/`;
        await fetch(url+props.id, {
          method: "DELETE",
        })
          .then((resp) => {
            if (!resp.ok) {
              toast.error("Hiba történt a munka törlése közben!")
              throw new Error('Network response was not ok');
            }
            toast.success("Munka sikeresen törölve!");
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
       <button onClick={handleDelete} className="btn btn-danger" style={{width:"100%"}}>
            Delete
          </button>
    </div>
  )
}

export default DeleteCar