const mysql=require('mysql2')


const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    database:"e-commerce"

})

module.exports=db