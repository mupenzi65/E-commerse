const express=require('express')
const {CreateUser, Login, logout,LoginForAdmin,CreateSeller}=require('../controllers/UserController')

const router=express.Router()

router.post('/create',CreateUser)
router.post('/login',Login)
router.get('/logout',logout)
router.post('/admin/login',LoginForAdmin)
router.post('/seller/register',CreateSeller)


module.exports=router