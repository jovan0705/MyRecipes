require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const router = require('./router')
const { getRecipes, getUserFavouritedRecipes, getLoggedInUserRecipes, getRecipeDetail } = require('./controller/recipeController')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(router);


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

module.exports = app