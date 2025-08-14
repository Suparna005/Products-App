const express=require('express')
const router=express.Router('../routes/userRoutes')
const userSchema=require('../Models/usermodels')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post('/user',async (req,res)=>{
try{
   const user=await userSchema.findOne({email:req.body.email})
   if(!user){
    return res.status(401).send({message:"User not found"})
   }
   if(user.password==req.body.password){
    res.status(200).send({message:"Login Successfull...."})
  }   
}
catch(error){
    console.error(error)
   res.status(500).send({message:"Error in Server!"})
}
})

module.exports = router
