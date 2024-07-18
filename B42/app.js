//npm i multer //upload anh
//npm i fs //quan ly file
//npm i path  //quan ly duong dan

//b1: tham chieu thu vien
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { error } = require('console');

//b2: tao ung dung
const app = express();

//b3: cac thiet lap
//b3.1: thiet lap thu muc upload
const upload=multer({dest: 'uploads/'});
app.use('/uploads',express.static(path.join(__dirname,'uploads')));//cau hinh duong dan upload
app.set('views',path.join(__dirname,'views'));//cau hinh duong dan view
app.set('view engine','ejs');//su dung file ejs

//b4: dinh nghia loi goi api
//b4.1: api doc anh trong thu muc
app.get('/gallery', (req, res) => {
    fs.readdir(path.join(__dirname,'uploads'), (err,files) => {
        if (err) {
            console.error(err);
            return;
        }
        res.render('gallery', {images: files});
    });
});

//4.2: api upload anh
app.post('/upload', upload.single('image'),(req,res)=>{
    res.redirect('/gallery');//sau khi upload thi hien thi anh
});

//b5. lang nghe
app.listen(3001,()=>{
    console.log("Server dang chay o cong 3001");
});