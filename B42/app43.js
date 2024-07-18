//npm i nodemailer

//b1 import thu vien
const { text } = require('body-parser');
const express = require('express');
const mailer = require('nodemailer');

//b2: tao server
const app43 = express();

//b3: khai bao cau hinh gui mail
let transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'vinhldph35167@fpt.edu.vn',
        pass: 'bcad apmh qrlw yngk'
    }
});

//them thong tin gui mail
let mailOption = {
    from: 'vinhldph35167@fpt.edu.vn',
    to: 'vinhtiendo12@gmail.com',
    subject: 'hoc nodejs',
    text: 'chao mung cac ban den voi khoa hoc'
};

//b4: xu ly gui mail
transporter.sendMail(mailOption,(error,info) => {
    if (error) {
        console.error(error);
    }
    else{
        console.log("Thanh cong: ",info.messageId);
    }
});

//b5- khoi dong server
app43.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});