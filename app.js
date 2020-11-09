  
const express=require("express");
const bodyparser=require("body-parser");
//const ejs=require("ejs");
const app=express();
const port=3000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

let items=[];

app.get("/",(req,res)=>{
    let today=new Date();
   
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day=today.toLocaleDateString("en-US",options);

    res.render("List",{kindofday:day,newlistitem:items});
    
});


app.post("/",(req,res)=>{
     let item =req.body.newItem;
    items.push(item);
     res.redirect("/");


});

app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})