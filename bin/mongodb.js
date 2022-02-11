const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionURL ='mongodb://127.0.0.1:27017'
const database = 'to-do'

MongoClient.connect(connectionURL,{useNEWUrlParser:true},(error,client)=>{
    if(error){
        return console.log("unable to connect to database");
    }
    //console.log("connected succesfully");
    const db = client.db(database)
    db.collection('to-doList').insertOne({
        description : "debug to-do app",
        assigned_to : "mohit",
        due_date : "2 feb",
        is_completed : "no"
    })
})