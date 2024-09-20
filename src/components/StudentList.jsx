import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const StudentList = () => {

  const [studentData, setStudentData] = useState(null)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const studentRef = ref(db, 'students')
      onValue(studentRef, (snapShot) => {
        const data = snapShot.val()
        setStudentData(data)
        console.log(data)
        setloading(false)
      })

  },[])


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
        <p style={{color:'white'}} key={key}>{list.name}</p>
      ))}
    </div>
   )}
    
    </div>
  );
};

export default StudentList;
