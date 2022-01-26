# MyRecipes
My Recipes Repository

## SETUP
### SERVER SETUP - JOVAN
1. Create Database (npx sequelize db:create)
2. Create Tables (npx sequelize model:generate --name (name) --attributes attributes:type attributes:type dst)
3. Create Seeders (npx sequelize seed:generate --name (name))
4. Migrate (npx sequelize db:migrate)
5. Seed (npx sequelize db:seed:all)

### CLIENT SETUP
1. create-react-app (nama-app)
2. npm i redux, redux-thunk, axios, react-router-dom
3. setup folder store, hooks, routeProtector(?)
4. mkdir views/pages, components
5. dibuat deh pages2 nya :)

## PAGES (sementara client coba buat data dummy aja)
### - USER PAGE
1. Login Page - v
2. Register Page - v
3. Profile Page - 
4. Open Chat Page - 
5. Following/Followers Page 
6. Classes Page - v
7. Class Detail 
8. My Class Page
9. Top Up Balance Page + balance page - v

### - RECIPE PAGE
1. Home Page - v
2. Favourite Page
3. Recipe Detail Page + Review Page - v
4. Add / Edit Recipe Page - (add sudah edit belum)
5. My Recipes 
6. Categories Page - v

### - ADMIN PAGE
1. Login Page (jadi 1 sama user) - v
2. Register Page (register admin di dalem setelah admin sudah login) - v
3. Profile Page
4. Home Page
5. Ingridients Page - v
6. Classes Page 
7. Edit Recipe Page
8. Add/Edit Class Page
9. Add Ingredients Page - v
10. Edit Ingredients Page

## FEATURES
EMAIL = myrecipeh8@gmail.com
PASSWORD = Inipasswordh-8
Geri - 5
Jovan - 7
Hadar - 7
Ihza - 8
### USER FEATURE
1. Login (jwt, bcrypt(comparePassword), authorization, authentication) - geri (done, bisa login dengan email atau username) - v
2. Register (bcrypt(createPassword)) (ROLE NYA = admin dan user)- geri (done) - v
3. Edit Profile (imageKit(buat upload profile picture)) - geri (done) - v
4. Follow User - geri (done) - v
5. LiveChat using socket io - hadar (server side done)
6. Top Up Balance (payment gateway) - jovan - v
6. Register Classes, payment with balance - jovan - v
7. fetch classes on My Class Page - jovan - v

### RECIPE FEATURE
1. Fetch All Recipe on Home Page - ihza (done) - v
2. Fetch Favorited Recipe (berdasarkan Favoritenya User) My Favorite Page - ihza - v
3. Fetch My Recipes (semua resep 1 user berdasarkan yang login) - ihza - v
4. Fetch Recipe Detail on Recipe Detail Page - ihza (done) - v
5. Create Recipe (imagekit) - ihza - v
6. Edit Recipe (hanya user yang buat yang boleh edit, imagekit) - ihza - v
7. Delete Recipe (hanya user yang buat yang boleh delete) - ihza - v
8. Rate Recipe (1 user hanya bisa rate 1 x recipe yang sama) - ihza - v
9. Add Favorite - jovan
10. Delete Favorite - jovan

### ADMIN PAGE
1. Login bareng sama User Feature, dibagi berdasarkan role aja - v
2. Register admin beda page, tapi sama2 pakai bcrypt - geri (done) - v
3. Fetch All Recipes - ihza - v
4. Edit Recipes (bisa edit semua, imagekit) - ihza - v
5. Delete Recipes (bisa delete semua) - ihza - v
6. Fetch all Ingridients - hadar (done) - v
7. Edit Ingridient - hadar (done) - v
8. Add Ingridient - hadar (done) - v
9. Fetch Classes - jovan (done) - v
10. Add Class (imagekit) - jovan (done) - v
11. Edit Class (imagekit) - jovan (done) -v 
12. Delete Class - jovan (done) - v
13. Add Categories (imagekit) - hadar - v 
14. Edit Categories (imagekit) - hadar - v
15. Delete Categories - hadar - v

### TESTING

### NOTE
>Category ada image atau ngga ya ? di model cuma ada name aja
