//xay dung model
const mongoose = require('mongoose'); //improt thu vien
const sinhvienShema = new mongoose.Schema({ // dinh nghia cac truong du lieu
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
});
const sinhvien = mongoose.model('student', sinhvienShema); //tao model
module.exports=sinhvien; //export model