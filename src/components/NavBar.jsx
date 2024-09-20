import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{width:'20vw',backgroundColor:'#ffffff', color: '#000000', fontSize: '25px', fontWeight:'500', textAlign:'center',display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', gap:'15px'}}>
      <Link to='/addStudent'>Add Student</Link>
      <Link to='/studentList'>Student List</Link>
    </div>
  )
}

export default NavBar
