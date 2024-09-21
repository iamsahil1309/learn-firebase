import { onValue, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ref as storageRef, deleteObject } from "firebase/storage";

const StudentList = () => {

  const [studentData, setStudentData] = useState(null)
  const [loading, setloading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const studentRef = ref(db, 'students')
      onValue(studentRef, (snapShot) => {
        const data = snapShot.val()
        setStudentData(data)
        console.log(data)
        setloading(false)
      })

  },[])

  const handleDelete = (key) => {
    const studentRef = ref(db, 'students/'+ key)
    const myRef = storageRef(storage, 'images/'+key)

    deleteObject(myRef).then(res => {
      remove(studentRef)
    })
    
  }



  if(loading) return <h1>Loading...</h1>

  return (
    <div
      style={{
        color: "#ffffff",
        width: "75vw",
        overflow: "hidden",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
   
   {studentData && (
    <div>
      {Object.entries(studentData).map(([key, list]) => (
     <div key={key} style={{display: 'flex',alignItems:'center', gap:'10px'}}>
          <img style={{borderRadius:'50%', height:'50px', width:'50px', overflow:'hidden'}} src={list.imageUrl} />
         <p style={{color:'white'}} >{list.name} {list.phoneNumber}</p>
         <button onClick={() => handleDelete(key)}>Delete</button>
         <button onClick={() => navigate('/update',  {state: [key, list]})}>Update</button>
     </div>
      ))}
    </div>
   )}
    
    </div>
  );
};

export default StudentList;
