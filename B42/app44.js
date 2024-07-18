//npm i jsonwebtoken
//b1: import thu vien
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

//b2: tao server
const app44 = express();

//b3: cau hinh su dung json
app44.use(bodyParser.urlencoded({extended:true}));
app44.use(bodyParser.json());

//b4: qui tac tao token
//b4.1: khoa bi mat
const khoaBiMat='13456';

//b4.2: khai bao user, pass
const users = [
    {id: 1, username: 'user123', password: 'password'},
];

//b4.3: viet ham tao token
function taoToken(user){
    return jwt.sign(user, khoaBiMat,{expiresIn:'15m'});
}

//b5: viet api
app44.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => 
        u.username===username && u.password===password
    );
    //neu u,p ko dung
    if (!user) {
        return "thong tin user, pass khong dung";
    }
    //neu dung, ta tao token
    const token=taoToken({id:user.id,username: user.username});
    //tra ve token cho nguoi dung
    res.json(token);
    console.log("Token vua tao: "+token);
});

//b6- lang nghe
app44.listen(3004,()=>{
    console.log("server dang chay o cong 3004");
});