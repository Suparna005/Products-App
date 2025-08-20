const express = require('express')
const jwt=require('jsonwebtoken')
const router = express.Router('../routes/proRoutes')
const promodels = require('../Models/promodels')


function verifyToken(req,res,next){
let token=req.headers.token
try{
    if(!token)throw 'Unauthorized Access'
    let payload=jwt.verify(token,"secret")
    if(!payload) throw 'Unauthorized Access'
    next()

}catch(err){
    res.json({message:err})

}
}

router.get('/', async (req, res) => {
    try {
        const apps = await promodels.find()
        res.status(200).send(apps)
    }
    catch {
        console.error(error)
        res.status(400).send("failed to fetch products....")
    }
})
router.post('/add',verifyToken, async (req, res) => {
    try {
        const newPro = new promodels(req.body)
        await newPro.save()
        res.status(200).json({ message: "product is added....",product:newPro })
    }
    catch (error) {
        console.error(error)
        res.status(400).json("failed to add product....")
    }
})
router.put('/update/:id',verifyToken, async (req, res) => {
    try {
        await promodels.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send({ message: "Product updated...." })
    }
    catch (error) {
        console.error(error)
        res.status(400)({ message: "Product not updated...." })
    }
})

router.delete('/delete/:id',verifyToken, async (req, res) => {
    try {
        await promodels.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: "Product deleted...." })
    }
    catch (error) {
        console.error(error)
        res.status(400)({ message: "Product not deleted...." })
    }
})
module.exports = router