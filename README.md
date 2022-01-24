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
1. Login Page 
2. Register Page
3. Profile Page
4. Open Chat Page
5. Following/Followers Page / pop up
6. Classes Page
7. My Class Page
8. Top Up Balance Page

### - RECIPE PAGE
1. Home Page
2. Favourite Page
3. Recipe Detail Page
4. Add / Edit Recipe Page
5. My Recipes 
6. Review Page

### - ADMIN PAGE
1. Login Page (jadi 1 sama user)
2. Register Page (register admin di dalem setelah admin sudah login)
3. Profile Page
4. Home Page
5. Ingridients Page
6. Classes Page
7. Edit Recipe Page
8. Add/Edit Class Page

## FEATURES
EMAIL = myrecipeh8@gmail.com
PASSWORD = Inipasswordh-8
Geri - 5
Jovan - 7
Hadar - 7
Ihza - 8
### USER FEATURE
1. Login (jwt, bcrypt(comparePassword), authorization, authentication) - geri (done, bisa login dengan email atau username)
2. Register (bcrypt(createPassword)) (ROLE NYA = admin dan user)- geri (done)
3. Edit Profile (imageKit(buat upload profile picture)) - geri (done)
4. Follow User - geri (done)
5. LiveChat using socket io - hadar
6. Top Up Balance (payment gateway) - jovan
6. Register Classes, payment with balance - jovan
7. fetch classes on My Class Page - jovan

### RECIPE FEATURE
1. Fetch All Recipe on Home Page - ihza (done)
2. Fetch Favorited Recipe (berdasarkan Favoritenya User) My Favorite Page - ihza
3. Fetch My Recipes (semua resep 1 user berdasarkan yang login) - ihza
4. Fetch Recipe Detail on Recipe Detail Page - ihza (done)
5. Create Recipe (imagekit) - ihza
6. Edit Recipe (hanya user yang buat yang boleh edit, imagekit) - ihza
7. Delete Recipe (hanya user yang buat yang boleh delete) - ihza
8. Rate Recipe (1 user hanya bisa rate 1 x recipe yang sama) - ihza
9. Add Favorite
10. Delete Favorite

### ADMIN PAGE
1. Login bareng sama User Feature, dibagi berdasarkan role aja
2. Register admin beda page, tapi sama2 pakai bcrypt - geri (done)
3. Fetch All Recipes - ihza
4. Edit Recipes (bisa edit semua, imagekit) - ihza
5. Delete Recipes (bisa delete semua) - ihza
6. Fetch all Ingridients - hadar (done)
7. Edit Ingridient - hadar (done)
8. Add Ingridient - hadar (done)
9. Fetch Classes - jovan (done)
10. Add Class (imagekit) - jovan (done)
11. Edit Class (imagekit) - jovan (done)
12. Delete Class - jovan (done)
13. Add Categories (imagekit) - hadar 
14. Edit Categories (imagekit) - hadar
15. Delete Categories - hadar

### TESTING

### NOTE
>Category ada image atau ngga ya ? di model cuma ada name aja
