//controller: viet api

const express = require('express'); //import thu vien
const router = express.Router(); // chua loi goi api
const sinhvien = require('../models/sinhvienModel'); //import model

//dinh nghia api: get
//http://localhost:3000/sinhvien
router.get('/', async(req, res)=>{
    try {
        const sinhviens = await sinhvien.find(); //lay ve toanf bo dl trong bang
        res.render('sinhviens', {sinhviens:sinhviens}); //tr ve ket qua cho view
    } catch (error) {
        console.error(error); //tra ve loi
    }
});

//dinh nghia post: insert du lieu
//loi goi ham: http://localhost:3000/sinhvien (goi qua postman)
router.post('/', async(req, res)=>{
    try {
        const {name,age} = req.body;
        const sinhvien1 = new sinhvien({name, age});
        await sinhvien1.save();
        res.status(201).json(sinhvien1);
        console.log(sinhvien1);
    } catch (error) {
        console.error(error);
    }
});

//dinh nghia put: cap nhat dl
//loi goi ham: http://localhost:3000/sinhvien/:_id
router.put('/:_id', async(req,res)=>{
    try {
        const {_id} = req.params;
        const {name, age} = req.body;
        const updatedSinhVien = await sinhvien.findByIdAndUpdate(_id, {name, age}, {new: true});
        res.json(updatedSinhVien);
    } catch (error) {
        
    }
});

// dinh nghia delete:
//
router.delete('/:_id', async (req, res) => {
    const {_id} = req.params;
    try {
        await sinhvien.findByIdAndDelete(_id);
        res.redirect('/');
    } catch (error) {
        console.error(error);
    }
});
//export
module.exports = router;