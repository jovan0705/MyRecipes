const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//middleware untuk imageupload
const instanceMulter = require('./middlewares/multer')
const imageKitUpload = require('./middlewares/imageKit')

app.get('/', (req, res) => {
    res.send('image upload')
})

//pakai middleware instanceMulter.single('imageFile') dan imageKitUpload untuk upload image, nama file gambar dari postman adalah 'imagefile'
app.post('/users', instanceMulter.single('imageFile'), imageKitUpload,  (req, res) => {
    //setelah image terupload di imagekit nama file gambar didapat dari req.additionalData
    const imageData = req.additionalData
    
    res.status(200).json('image uploaded')
})

app.listen(port, () => {
    console.log(`app listening to http://localhost:${port}`)
})