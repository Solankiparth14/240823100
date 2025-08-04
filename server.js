const express = require("express")
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello, atmiya university")
});


app.post("/show/:id",(req,res)=>{
   res.send(`rollno:${req.params.id}`)
});

app.put("/update/:id",(req,res)=>{
    res.send(`update id :${req.params.id}`)
    });

app.delete("/delete/:id",(req,res)=>{
    res.send(`deleted id: ${req.params.id}`)
});


const Port = 80;
app.listen(Port,()=>{
  console.log(`http://localhost:${Port}/`)
});

