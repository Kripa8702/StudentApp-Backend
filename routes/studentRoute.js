const express = require('express');

const router = express.Router();
const Student = require('../models/studentModel');

module.exports = router;


//Get All Method
router.get('/getAll' , async (req, res) => {
    try {
        const data = await Student.find()
        res.json(data)

    } catch (error) {

        res.status(500).json({ message : error.message})
        
    }
})

//Get By ID Method
router.get('/getOne/:id' , async (req, res) => {
    try {
        const data = await Student.findById(req.params.id);
        res.json(data)

    } catch (error) {

        res.status(500).json({ message : error.message})
        
    }
})

//Post Method
router.post( '/post' , async (req, res) => {

    var today = new Date();
    var birthDate = new Date(req.body.dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const data = new Student({
        name : req.body.name,
        email : req.body.email,
        dob : req.body.dob,
        age : age,
    })

    try {
        const postData = await data.save();
        res.status(200).json(postData)

    } catch (error) {

        res.status(400).json({message : error.message})
        
    }
})

//Update By ID Method
router.patch('/update/:id' , async (req, res) => {
    try {
        const id = req.params.id;
        const newBody = req.body;
        const options = { new : true };

        const data = await Student.findByIdAndUpdate(
            id, newBody, options
        )

        res.status(200).json(data)

    } catch (error) {

        res.status(400).json({message : error.message})
        
    }
})

//Delete By ID Method
router.delete('/delete/:id' , async (req, res) => {
   try {
    const id = req.params.id;
    const data = await Student.findByIdAndDelete(id)
    res.send(`Document ${data.name} has been deleted..`)

   } catch (error) {
        res.status(400).json({message : error.message})
   }
})