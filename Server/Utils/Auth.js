import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// hashpassword
const hashpassword = async (password)=>{
    try{
        const salt = 10;
        const hashedpassword = await bcrypt.hash(password,salt);
        return hashedpassword;
    }catch(e){
        res.json("Something went wrong"+e.message);
    }
};

// compare password
const comparepassword = async (password,hashedpassword)=>{
    // console.log(password);
    console.log(bcrypt.compare(password,hashedpassword));
    return await bcrypt.compare(password,hashedpassword);
};

// verify user
// const verifyuser = async (req,res,next)=>{
//     // const token = req.params.
//     if(!token){
//         return next(errorHandler(401,"Unauthorized"))
//     }
//     jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
//         if(err){
//             // return next()
//         }
//         req.user = user;
//         next();
//     })
// };

export {hashpassword,comparepassword};