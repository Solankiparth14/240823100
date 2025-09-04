
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://parth_db_user:parth1483@parth.tmzs6kl.mongodb.net/?retryWrites=true&w=majority&appName=parth");

const studentSchema =new mongoose.Schema({
    name:String,
    department:String,
    startYear:Number,
    endyear:Number,
    enrollment:Number,
    address:String,
});

const Student=mongoose.model("student",studentSchema);

console.log("mongodb connected sucessfully");

// const student=new Student({
//     name:"parth solanki",
//     department:"MCA",
//      startYear:2024,
//      endyear:2026,
//      enrollment:240823100,
//      address:"mavdi chowkdi",
// });

const student=new Student({
    name:"hitesh rudakiya",
    department:"MCA",
     startYear:2024,
     endyear:2026,
     enrollment:240823082,
     address:"rajkot",
});

// student
// .save()
// .then(()=>{
//     console.log("student saved");
// })
// .catch((error)=>{
//     console.log("error",error);
// });

Student.find({name:"vishnu purohit"})
 .then((result)=>{console.log("all record",result);})

 .catch((error)=>{
    console.log("error",error);
});