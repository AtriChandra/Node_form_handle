const express=require('express');

const app=express();
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


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})