const express=require('express')
const router=express.Router()
const {createProducts,getAllPropducts,getProduct,getByCategory,upload}=require('../controllers/ProductsControllers')


router.post('/create',upload,createProducts)
router.get('/allproducts',getAllPropducts)
router.get('/products/:id',getProduct)
router.get('/category/:category',getByCategory)



module.exports=router