const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const { attachCookiesToResponse, createTokenUser,createJWT } = require('../utils');
const { StatusCodes } = require('http-status-codes');
const CustomError=require('../errors')





const CreateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  // check for duplicate

  const q = "SELECT * FROM users WHERE email =(?)";
  db.query(q, email, (err, data) => {
    if (err) {
      return res.json(err);
    } else if (data.length > 0) {
     
      return res.json("user arleady exist");
    }

    const pool = "INSERT INTO users (`email`,`passwords`) VALUES(?)";

    const userObject = [email, hashedPassword];
    db.query(pool, [userObject], (err, data) => {
      if (err) {
        return res.json(err);
      }
      const user=email
      res.json(user);
    });
  });
});


const CreateSeller = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const q = "SELECT * FROM sellers WHERE email =(?)";
  db.query(q, email, (err, data) => {
    if (err) {
      return res.json(err);
    } else if (data.length > 0) {
      return res.json("Email arleady exist");
    }

    const pool ="INSERT INTO sellers (`image`,`fname`,`lname`,`country`,`tel`,`email`,`passwords`) VALUES(?)";
    
    const values=[
      req.body.image,
      req.body.fname,
      req.body.lname,
      req.body.country,
      req.body.tel,
      req.body.email,
      hashedPassword
    ]

    db.query(pool,[values],(err,data)=>{
      if(err){
        return res.json(err);

      }
      const seller={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        image:req.body.image,


      }
      return res.json(seller)



    })

  
  
  
  
  
  
  
  
  
  
  
  });


 





});







const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userPassword=password

  


  const q=`SELECT * FROM users WHERE email=(?)`;
  db.query(q,email,async(err,data)=>{

    if(data.length>0){
      const [{passwords}]=data
      const isMacth=await bcrypt.compare(userPassword,passwords)
    
    if(!isMacth){
      return res.json({msg:"invalid credential"})
      
    }
    if(isMacth){
        const [{id,email,role}]=data
        const userObject={id,email,role}
        const tokenUser=createTokenUser(userObject)
        attachCookiesToResponse({res,user:tokenUser})
        const token=createJWT({payload:tokenUser})
        const user=[tokenUser,token]
        return res.json(user)
      
    }
   



  }
  res.json({msg:"account not exist"})



      
    
  })
  
  
});

const LoginForAdmin=asyncHandler(async(req,res)=>{
  const {email,password}=req.body
  const userPassword=password


  const query="SELECT * FROM sellers WHERE email=(?)"
  db.query(query,email,async(err,data)=>{
    if(err){
      return res.json(err)
    }
    if(data.length>0){
      const [{passwords}]=data
      const isMacth=await bcrypt.compare(userPassword,passwords)
    
    if(!isMacth){
      return res.json({msg:"invalid credential"})
      
    }
    if(isMacth){
        const [{id,email}]=data
        const userObject={id,email}
        const tokenUser=createTokenUser(userObject)
        const token=createJWT({payload:tokenUser})
        const user=[userObject,token]
        return res.json(user)
 

        
   

      
    }
   



  }
  res.json({msg:"user not exist"})
})
})



const logout=async(req,res)=>{
  const time=new Date(Date.now()+1000)
  console.log(time)
  res.cookie('token','logout',{
      httpOnly:true,
      expires:new Date(Date.now()+1000)
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
}

module.exports = { CreateUser, Login ,logout,LoginForAdmin,CreateSeller};
