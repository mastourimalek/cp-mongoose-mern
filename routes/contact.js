// 1 require express 
const express = require("express");
const Contact = require("../models/Contact");
// 2  express router
const router = express.Router()

// Routes
router.get('/test', (req, res)=>{
res.send("hello world");
})

router.post('/add', async (req, res) => {
    try {
        const {name, email, phone} = req.body ;
        const newContact = new Contact ({name, email, phone});
        await newContact.save();
        res.status(200).send({msg : "Concat added successfully",newContact })
    } catch (error) {
      res.status(400).send({msg: "cannot add contact!!!", error})  
    }
})

router.get('/all', async (req, res) => {
    try {
       const listContacts = await Contact.find();
        res.status(200).send({msg : "This is the list of contact",listContacts })
    } catch (error) {
      res.status(400).send({msg: "cannot get all contact!!!", error})  
    }
})

router.get('/:id', async (req, res) => {
    try {
       const contactToGet = await Contact.findOne({_id: req.params.id});
        res.status(200).send({msg : "I get the contact",contactToGet })
    } catch (error) {
      res.status(400).send({msg: "cannot get the contact with this id !!!", error})  
    }
})

router.delete('/:_id', async (req, res) => {
    try {
       const {_id} = req.params
       await Contact.findOneAndDelete({_id});
        res.status(200).send({msg : " contact deleted"})
    } catch (error) {
      res.status(400).send({msg: "cannot delete these contact with this id !!!", error})  
    }
})

router.put('/:_id', async (req, res) => {
    try {
      const {_id} = req.params;
        const result =
        await Contact.updateOne({_id},{$set:{...req.body}})
        res.status(200).send({msg : "Concat updated successfully" })
    } catch (error) {
      res.status(400).send({msg: "cannot update contact!!!", error})  
    }
})

// 3 export
module.exports =  router ;