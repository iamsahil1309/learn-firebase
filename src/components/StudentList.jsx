import { onValue, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

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
    remove(studentRef)
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
