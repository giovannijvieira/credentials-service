import dotenv from "dotenv"
import express from "express"
import crypto from "crypto"
import  { PrismaClient } from "@prisma/client"
const app = express()
app.use(express.json())
app.post("/credentials",async(resquest,response) => {

    const {cnpj,password,name} = resquest.body
    const prismaClient = new PrismaClient();
    const salt = crypto.randomBytes(128).toString('hex')
    const key = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
    const data = await prismaClient.real_estates.create({ 
        data: {
            cnpj, salt, password:key,name,address:{},created_at:new Date
      },})
    return response.status(200).json({data})
} )
app.listen(3333,() => {
    console.log("Server started on port 3333")
})

dotenv.config()

