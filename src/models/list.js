const mongoose = require("mongoose")


const to_do = mongoose.model('to_do', {
    description : {
        type: String,
        required : true
    },
    assigned_to : {
        type: String,
        required : true
    },
    is_completed :{
        type : String ,
        required : true
    },
    due_date :{
        type : String,
        required : true
    }
})

module.exports = to_do