import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PostCompany(props) {
  const checkInput = () => {
    const name = document.getElementById("NewCompanyName").value;
    const phoneNumber = document.getElementById("NewphoneNumber").value;
    const email = document.getElementById("Newemail").value;
    const ceo = document.getElementById("Newceo").value;
    if (name !== "" && phoneNumber !== "" && email !== "" && ceo !== "") {
      handleNew();
    } else {
      console.log("error");
    }
  };

  const handleNew = async () => {
    const url = "http://localhost:5273/Company";
    try {
      const response = await toast.promise(fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("NewCompanyName").value,
          phoneNumber: document.getElementById("NewphoneNumber").value,
          email: document.getElementById("Newemail").value,
          ceo: document.getElementById("Newceo").value,
        }),
      }),
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response from server:", responseData);
        toast.success("Új cég létrehozva!");
        props.setCount();
       
    } else {
        const errorData = await response.json(); 
        console.error("HTTP error! Status:", response.status);
        console.error("Error details:", errorData);
    }
    } catch (error) {
      toast.error(`Hiba az adatok lekérdezésekor ${error}`)
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <button onClick={checkInput} className="btn btn-success">
        Send
      </button>
    <ToastContainer/>

    </>
  );
}

export default PostCompany;
