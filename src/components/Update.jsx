import React from "react";
import { useState } from "react";
import { ref, update} from 'firebase/database'
import {db, storage} from '../firebase'
import {useLocation, useNavigate} from 'react-router-dom'
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const Update = () => {

    
  const location = useLocation()

  const [admNumber, setAdmNumber] = useState(location.state[0]);
  const [name, setName] = useState(location.state[1].name);
  const [number, setNumber] = useState(location.state[1].phoneNumber);
  const [ selectedFile, setSelectedFile] = useState(null)


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
        e.preventDefault()
        if(selectedFile) {
            
        const myRef = storageRef(storage, 'images/'+location.state[0])
        await uploadBytes(myRef, selectedFile)
        const imageUrl = await getDownloadURL(myRef)

       const studentRef =  ref(db, 'students/' + location.state[0])
        update(studentRef,{name : name, phoneNumber : number, imageUrl:imageUrl})
        navigate('/studentList')
        
        } else {

       const studentRef =  ref(db, 'students/' + location.state[0])
        update(studentRef,{name : name, phoneNumber : number})
        navigate('/studentList')
        
        }
  };

  return (
    <div style={{ color: "#ffffff", width: "80vw", alignContent:'center' }}>
      <form style={{ display:'flex', flexDirection:'column' , gap:'10px', alignItems:'center' }} onSubmit={handleSubmit}>
     
      <input
          onChange={(e) => setSelectedFile(e.target.files[0])}
          type="file"
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
          disabled
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
        <button >Update</button>
      </form>
    </div>
  );
};

export default Update;
