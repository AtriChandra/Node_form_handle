const express=require('express');

const app=express();
const userModel=require('./models/user')
const dbConnection=require('./config/db')
app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send('Data received');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;
    const newUser=await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send(newUser);
})

app.get('/get-users',(req,res)=>{
    userModel.find({
        username:'xyz'
    }).then((users)=>{
        res.send(users)
    })
})

app.get('/update-user',async(req,res)=>{
    await userModel.findOneAndUpdate({
        username: 'abc'
    },{
        email:'pqr@gmai.com'
    })
    res.send('updated')
})

app.get('/delete-user',async(req,res)=>{
    await userModel.findOneAndDelete({
        username: 'xyz'
    })
    res.send("user deleted")
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})