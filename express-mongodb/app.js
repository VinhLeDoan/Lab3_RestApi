// xay dung server
const express = require('express');
const mongoose = require('mongoose');
const sinhVienRoute = require('./routes/sinhvienRoute');
const bodyParser = require('body-parser'); //ho tro chay qua postman

const app = express();

mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Ket noi thanh cong");
}).catch((err)=>{
    console.log("loi: ",err);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

//su dung route
app.use('/sinhvien', sinhVienRoute);
app.set('view engine', 'ejs');

//khoi dong server
const PORT = process.env.PORT||3000;
app.listen(PORT, ()=>{
    console.log("server dang chay o cong 3000");
});