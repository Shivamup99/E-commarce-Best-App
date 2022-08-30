import express from 'express'
const PORT = process.env.PORT || 5000
import cors from 'cors'
import data from './data.js'
const app = express()
app.use(cors());
app.use(express.json())

app.get('/api/slider',(req,res)=>{
    res.send(data.slideData)
})

app.get('/api/category',(req,res)=>{
    res.send(data.categoryData)
})

app.get('/api/product',(req,res)=>{
    res.send(data.latestProduct)
})

app.get('/api/product/:slug',(req,res)=>{
    const product = data.latestProduct.find((n)=>n.slug===req.params.slug)
    if(product){
        res.send(product)
    }else{
        res.send({message:'not found'})
    }
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})