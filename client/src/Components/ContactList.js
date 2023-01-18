
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactCard from '../Components/ContactCard'
import { getContacts } from '../JS/Action/conatct'
import '../App.css'
const ContactList = () => {
    const listContats = useSelector(state => state.contactReducer.listContacts)
    const dispatch = useDispatch()
    const load = useSelector(state => state.contactReducer.load)

    useEffect(() => {
   dispatch(getContacts())
    }, [dispatch]);
  return (
    <div className='alignthem'>
         {load ? <h2>loading...</h2> : listContats.map((el)=> <ContactCard contact={el} key={el._id}/>)}
    </div>
  )
}

export default ContactList