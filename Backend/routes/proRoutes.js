const express = require('express')
const router = express.Router('../routes/proRoutes')
const promodels = require('../Models/promodels')

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
router.post('/add', async (req, res) => {
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
router.put('/update/:id', async (req, res) => {
    try {
        await promodels.findByIdAndUpdate(req.params.id)
        res.status(200).send({ message: "Product updated...." })
    }
    catch (error) {
        console.error(error)
        res.status(400)({ message: "Product not updated...." })
    }
})

router.delete('/delete/:id', async (req, res) => {
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