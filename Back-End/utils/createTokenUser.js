const createTokenUser=(user)=>{
    return {userId:user.id,email:user.email,role:user.role}
}

module.exports=createTokenUser