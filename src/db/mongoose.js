const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/to-do-api")




// const me = new to_do({
//     description : "debug to-do app",
//     assigned_to : "mohit",
//     due_date : "2 feb",
//     is_completed : "no" 
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })