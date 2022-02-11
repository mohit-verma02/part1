var express = require('express')
require("./db/mongoose.js")
var list = require("./models/list")
const res = require('express/lib/response')
var app = express()

app.use(express.json())


app.get('/', function (req, res) {
    res.send('Hello World!');
});


//create
app.post('/ToDoList',(req,res)=>{
  const list1 = new list(req.body)

  list1.save().then(()=>{
      res.send(list1)
  }).catch((e)=>{
      res.status(400).send(e)
  })

})


//read whole db
app.get("/ToDoList",(req,res)=>{
   list.find().then((lists)=>{
      res.send(lists )
   }).catch((e)=>{
      res.status(400).send(e)
   })
})


// read particulars
app.get("/ToDoList/:id",(req,res)=>{
    const _id = req.params.id    
    list.findById(_id).then((user)=>{
      if(!user) {
          return res.status(500).send(e) 
      }
      res.send(user)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})


// update 
app.patch("/ToDolist/:id",(req,res)=>{
  const _id = req.params.id
  list.findByIdAndUpdate(_id,req.body,{new : true , runValidators :true }).then((user)=>{
      if(!user){
        res.status(500).send(e)

      }
      res.send(user)
  }).catch((e)=>{
      res.status(400).send(e)
  })
})

// delete
app.delete("/ToDolist/:id",(req,res)=>{
  const _id = req.params.id
  list.findByIdAndDelete(_id).then((user)=>{
      if(!user){
        res.status(500).send()
      }
      res.send(user)
  }).catch((e)=>{
      res.status(400).send(e)
  })
})



app.listen(8000, ()=>{
    console.log('Listening to Port 8000')
})