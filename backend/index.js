const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',require("./Routes/uploadsRoute"))

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})