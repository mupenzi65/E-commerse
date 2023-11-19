const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors')
const db=require('./config/db')
const productsRoutes=require('./routes/ProductsRoutes')
const userRoutes=require('./routes/UserRoutes')
const cookieParser = require('cookie-parser')





app.use(express.json())
app.use(cors())
app.use('/images',express.static('./images'))
app.use('/api/products',productsRoutes)
app.use('/api/user',userRoutes)
app.use(cookieParser())





const PORT=process.env.PORT || 8000

app.listen(PORT,()=>console.log(`server is listening to ${PORT}... `))