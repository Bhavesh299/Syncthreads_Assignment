const express=require("express")
const connect=require("./configs/db")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())




const loginAuth=require("./controllers/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./controllers/auth.controller.js")
app.use("/",RegisterAuth)



const port = process.env.PORT || 1020

app.listen(port,async function(){
    try {
        await connect()
           console.log("port 1020 is working properly")
    } catch (error) {
         console.log(error.message)
    }
})