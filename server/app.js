const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
// const router = require('./routes')
const { getRecipes, getUserFavouritedRecipes, getLoggedInUserRecipes, getRecipeDetail } = require('./controller/recipeController')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//middleware untuk imageupload
const instanceMulter = require('./middlewares/multer')
const imageKitUpload = require('./middlewares/imageKit')
const router = require('./router')

// app.use(router)
app.get('/', (req, res) => {
    res.send('MyRecipes Server')
})
app.use(router);


// pakai middleware instanceMulter.single('imageFile') dan imageKitUpload untuk upload image, nama file gambar dari postman adalah 'imagefile'
// app.post('/users', instanceMulter.single('imageFile'), imageKitUpload,  (req, res) => {
//     //setelah image terupload di imagekit nama file gambar didapat dari req.additionalData
//     const imageData = req.additionalData
    
//     res.status(200).json('image uploaded')
// })

// fetch all recipes 
app.get('/recipes', getRecipes)
// fetch all user favourited recipes (untested)
app.get('/recipes/favourite', getUserFavouritedRecipes)
// fetch all logged in user recipes (untested)
app.get('/recipes/own', getLoggedInUserRecipes)
// fetch recipe detail
app.get('/recipes/:id', getRecipeDetail)

app.listen(port, () => {
    console.log(`app listening to http://localhost:${port}`)
})