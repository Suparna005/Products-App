const express=require('express')
require('dotenv').config()
const app=express()
const morgan=require('morgan')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const connectDB=require('./db/connection')
const promodel=require('./Models/promodels')
const proRoutes=require('./routes/proRoutes')
const usermodels=require('./Models/usermodels')
const userRoutes=require('./routes/userRoutes')
require('./db/connection')
const PORT=process.env.PORT ||5000

connectDB()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/products',proRoutes)
app.use('/api',userRoutes)

app.listen(PORT,(req,res)=>{
    console.log(`APP IS RUNNING AT PORT: ${PORT}`)
})