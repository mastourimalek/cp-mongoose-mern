import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../JS/Action/conatct';
import { Link } from "react-router-dom";
const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Title>{contact.email}</Card.Title>
        <Card.Title>{contact.phone}</Card.Title>
        <div className='btn'>
        <Link to={`/edit/${contact._id}`}><Button className='btn1' variant="primary">EDIT</Button></Link>
        </div>
        <Button variant="primary" onClick={()=>dispatch(deleteContact(contact._id)) }>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard