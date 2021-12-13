import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose";
import categoryRoutes from "./controller/category/category.routes";
import productRoutes from "./controller/product/product.routes"
const app = express()
const PORT = 5000

app.use(express.json())//req.body
app.use(express.static('./public'))
app.use(cors())
app.use("/category", categoryRoutes)
app.use("/product", productRoutes)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/eCommerce").then(()=>{
    console.log("Successfully connected to database")
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`Server is Up and running on PORT ${PORT}`)
})
