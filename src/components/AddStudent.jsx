import React from "react";
import { useState } from "react";
import {set, ref} from 'firebase/database'
import {db, storage} from '../firebase'
import {ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {useNavigate} from 'react-router-dom'

const AddStudent = () => {
  const [admNumber, setAdmNumber] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [selectedFile, setSelectedFile] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
        e.preventDefault()
    
        const myRef = storageRef(storage, `images/${admNumber}`)
        await uploadBytes(myRef, selectedFile)

        const imageUrl = await getDownloadURL(myRef)

        set(ref(db, 'students/' + admNumber),{
          name : name,
          phoneNumber: number,
          imageUrl: imageUrl,
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
          onChange={(e) => setSelectedFile(e.target.files[0])}
          type="file"
          style={{
            padding: "15px",
            width: "40%",
            borderRadius: "10px",
            border: "none",
            outline: "none",
          }}
        />

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
