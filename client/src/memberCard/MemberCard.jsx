import axios from 'axios'
import React from 'react'
import "./memberCard.css"

const MemberCard = (props) => {

    let token = localStorage.getItem('Authorization');
    const handleDelete = () => {
        console.log(props.id)
        axios.delete(`/deleteMember/${props.id}`,{headers:{"Authorization":token}})
        .then((res) => {
            window.location.reload()
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }
  return (
    <div className='memberCard-container'>
        <h3>{props.fName} {props.lName}</h3>
        <p>{props.email}</p>
        <div className='memberCard-buttons'>
            <button >Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default MemberCard