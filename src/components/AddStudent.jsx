import React from "react";
import { useState } from "react";
import {set, ref} from 'firebase/database'
import {db} from '../firebase'
import {useNavigate} from 'react-router-dom'

const AddStudent = () => {
  const [admNumber, setAdmNumber] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
        e.preventDefault()
        set(ref(db, 'students/' + admNumber),{
          name : name,
          phoneNumber: number,
        })
        
        navigate('/studentList')
        
        setAdmNumber('')
        setName('')
        setNumber('')
  };

  return (
    <div style={{ color: "#ffffff", width: "80vw", alignContent:'center' }}>
      <form style={{ display:'flex', flexDirection:'column' , gap:'10px', alignItems:'center' }} onSubmit={handleSubmit}>
        <input
          value={admNumber}
          onChange={(e) => setAdmNumber(e.target.value)}
          type="text"
          placeholder="enter addmission number"
          style={{
            padding: "15px",
            width: "40%",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="enter name"
          style={{
            padding: "15px",
            width: "40%",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="enter phone number"
          style={{
            padding: "15px",
            width: "40%",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;
