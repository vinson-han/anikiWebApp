const express = require('express') 
const app = express()
const homeRoutes = require('./routes/home') 
const toDoRoutes = require('./routes/todo')




app.set('view engine')
app.use(express.static('public'))
app.use(express.json()) 



app.use('/', homeRoutes)

app.listen(3000,()=>{
    console.log("listening to port 3000 Change to process.env.PORT later")
})