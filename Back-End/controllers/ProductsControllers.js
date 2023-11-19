const asyncHandler = require("express-async-handler");
const db = require("../config/db");
const multer=require('multer')
const path=require('path');




const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'images')
  },
  filename:(req,file,cb)=>{
    cb(null, Date.now() +path.extname(file.originalname))
  }
 })

 const upload=multer({

  storage:storage,
  limits:{fileSize:'1000000'},
  fileFilter:(req,file,cb)=>{
    const fileTypes=/jpeg|jpg|png|gif/
    const mimeType=fileTypes.test(file.mimetype)
    const extname=fileTypes.test(path.extname(file.originalname))

    if(mimeType && extname){
      return cb(null,true)
    }
    cb("Give proper files formate to upload")
  }

 }).single('image')

const createProducts = asyncHandler(async (req, res) => {
  









  const q =
    "INSERT INTO products (`title`,`price`,`descriptions`,`image`,`category`,`ownerId`) VALUES (?)";
  let values = [
    req.body.title,
    req.body.price,
    req.body.description,
    req.body.category,
    req.body.owner
  ]
  console.log(values)

  // db.query(q, [values], (err, data) => {
  //   if (err) {
  //     return res.json(err);
  //   }
  //   console.log({...values})
  //   return res.json(data);
  // });
});

const getAllPropducts = asyncHandler(async (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM products WHERE id=(?)";
  db.query(q, id, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

const getByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  console.log(category);
  const q = "SELECT * FROM products WHERE category=(?)";

  db.query(q, category, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});



module.exports = {
  createProducts,
  getAllPropducts,
  getProduct,
  getByCategory,
  upload
};
