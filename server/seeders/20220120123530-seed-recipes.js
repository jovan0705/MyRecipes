'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
      {
        name: "10-minute couscous salad",
        steps: ["Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed.", "Meanwhile, slice the onions and pepper, and dice the cucumber.", "Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve."],
        imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/couscous-9ab75f0.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        categoryId: 3,
        totalCalories: 327,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spanish potatoes",
        steps: ["Heat oven to 180C/fan 160C/gas 4.", "Mix the oil, tomato purée and paprika together, then coat the potatoes thoroughly in it.", "Squash the garlic in its skin with the flat of a knife and place on a baking tray with the potatoes.", "Season well with salt and pepper, then roast for 40 mins, turning halfway through, until the potatoes have crisped up and are fluffy inside." ,"Five mins before the end of cooking, sprinkle over the lemon juice and return to the oven. Serve with the parsley scattered over."],
        imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-488484_11-ecf4ff0.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        categoryId: 3,
        totalCalories: 217,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cheeky pie",
        steps: ["Heat oven to 180C/160C fan/gas 4." ,"Bring a pan of salted water to the boil and cook the potato slices for 3 mins. Drain and cool.", "Butter a shallow ovenproof dish and spread over the garlic." ,"Layer the potatoes, leeks and cheese, season well, then pour over the cream. Cover with foil and bake for 1 hr.", "Remove the foil and continue cooking for 20 mins or until the top is browned and the potatoes are cooked through." ,"Leave to stand for 5 mins before serving."],
        imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Pie-cd58020.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        categoryId: 4,
        totalCalories: 531,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Onion focaccia",
        steps: ["Put 500g strong white flour, 1 tsp salt and (not touching the salt) 7g fast-action dried yeast in a mixing bowl. Add 300ml lukewarm water and 2 tbsp olive oil oil and mix, using a wooden spoon, to form a firm, slightly sticky dough. If needed, add more water to work in any flour left in the bowl.", "Leave it to rise for 10 minutes" ,"Meanwhile, heat 1 tbsp oil and 15g butter in a frying pan. Add 1 thickly sliced red onion and cook, over a low heat, for 15 mins, or until just softened. Add 1 tbsp sherry vinegar and 1 tsp clear honey and continue cooking for 5-8 mins, until sticky and golden. Remove from the heat and set aside until needed." ,"Line a 30cm x 20cm baking tin with baking paper; brush with oil. Leave to prove for 1-2 hrs, or until risen and puffy." ,"Preheat the oven to gas 7, 220°C, fan 200°C. Make dimples in the dough and press into each 1 chopped clove of garlic and 1 tbsp fresh rosemary leaves. Cover; leave to rise for 10 mins. Drizzle over 1 tbsp oil mixed with 1 tbsp water and bake for 15 mins. Top with the onions and 1 tsp sea salt flakes; bake for 8 mins, or until risen and golden."],
        imageUrl: "https://realfood.tesco.com/Media/images/Focaccia-Step-6H-cdec7c7d-52fc-4e9e-85d2-fa0726c22812-0-472x310.jpg",
        userId: 2,
        categoryId: 2,
        totalCalories: 296,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tuna and cherry tomato pasta",
        steps: ["Cook pasta in a large saucepan of boiling, salted water following packet directions until tender. Drain." ,"Meanwhile, heat oil in a saucepan over medium heat. Add capsicum and garlic. Cook, stirring, for 2 minutes or until capsicum has softened. Add tomatoes. Cook, stirring, for 2 minutes or until tomatoes have just collapsed." ,"Add pasta, tuna and basil. Cook, tossing, for 2 minutes or until heated through. Season with salt and pepper. Serve."],
        imageUrl: "https://img.taste.com.au/D2f-6LLI/w643-h428-cfill-q90/taste/2016/11/tuna-and-cherry-tomato-pasta-84605-1.jpeg",
        userId: 2,
        categoryId: 2,
        totalCalories: 296,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vegetable and tofu nasi goreng",
        steps: ["Place cauli ower in a food processor. Process until very nely chopped. Transfer to a bowl. Repeat with broccoli and carrot." ,"Cut tofu crossways into 1cm-thick slices. Cut each slice in half crossways. Heat a wok over high heat. Add 1 tablespoon oil. Swirl to coat. Cook tofu in 2 batches, turning occasionally, for 3 minutes or until golden. Transfer to a plate lined with paper towel." ,"Add onion and ginger to wok. Stir-fry for 1 minute or until fragrant. Add processed vegetables. Stir-fry for 3 minutes or until tender. Add oyster sauce, kecap manis and bean sprouts. Stir-fry for 30 seconds or until combined. Remove from heat." ,"Heat remaining oil in a large non-stick frying pan over medium heat. Crack eggs into pan. Cook for 2 minutes or until whites are just set." ,"Toss coriander through vegetable mixture. Divide among serving bowls. Top with tofu, egg, extra coriander and onion. Serve with sambal oelek and lime wedges."],
        imageUrl: "https://img.taste.com.au/1De7Q-P0/w643-h428-cfill-q90/taste/2018/12/vegetable-and-tofu-nasi-goreng-145374-2.jpg",
        userId: 2,
        categoryId: 1,
        totalCalories: 357,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "A Healthy, Lean Take on the Ultimate Burger Recipe",
        steps: ["Heat a grill or stovetop grill pan until hot." ,"Combine the sirloin, brisket, salt, and pepper in a bowl and gently mix." ,"Form into 4 patties. Caution: Overworking the meat or packing your patties too tightly can make tough burgers." ,"Cook the burgers for 2 to 3 minutes and flip." ,"Cook on the other side for another 2 to 3 minutes, until nicely charred on the outside but still medium-rare to medium within. (The center of the patty should be firm but easily yielding—like a Nerf football.)" ,"After you remove the burgers, toast the buns briefly." ,"Divide the arugula among the buns and top with the burgers and onions."],
        imageUrl: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=640%2C360",
        userId: 1,
        categoryId: 4,
        totalCalories: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Low-Calorie Sliders, Two Ways",
        steps: ["Heat a cast-iron skillet or sauté pan over medium heat." ,"Add the oil and garlic and sauté for 60 seconds, until fragrant but not brown." ,"Add the mushrooms and sauté for 2 to 3 minutes, until the mushrooms are nicely caramelized." ,"Season with salt and pepper." ,"Heat a grill pan or cast-iron skillet over medium heat." ,"Season the sirloin with salt and pepper; form into 4 patties, being careful not to overwork the meat (which will create dense, chewy patties)." ,"Brush each patty with steak sauce." ,"When the pan is hot, add the burgers and cook for 3 minutes on the first side, then flip." ,"Add the blue cheese crumbles to the cooked side and continue grilling for another 2 to 3 minutes, until the patties are firm and the cheese has begun to melt." ,"Remove the burgers." ,"While the pan is still hot, toast the rolls. Brush them with a bit more steak sauce if you like, then top each with a burger and mushrooms."],
        imageUrl: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/low-calorie-sliders-two-ways.jpg?quality=82&strip=1&resize=640%2C360",
        userId: 1,
        categoryId: 4,
        totalCalories: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spicy Honey Crispy Baked Chicken Wings",
        steps: ["Preheat oven to 275 degrees F. Set a wire rack inside of a foil-lined large rimmed baking sheet. Spray rack with nonstick cooking spray." ,"Pat wings and drummies with a paper towel to dry well. Add chicken to a large plastic bag along with baking powder and salt; close bag and shake to coat wings." ,"Add wings to wire rack and bake for 20 minutes. Then increase oven temp to 425 degrees F and bake for another 30-35 minutes or until wings are crispy and slightly golden." ,"While wings are baking, whisk soy sauce, vinegar, honey, chili paste sriracha and ginger together until well combined. Next add sesame oil to a small saucepan and place over medium heat. Once oil is hot, add in garlic and saute for 30 seconds. Add in soy sauce mixture and simmer over medium low heat for 5 minutes, stirring frequently. This will help thicken and concentrate the sauce. Turn off heat but keep in saucepan until wings are ready." ,"Once wings are done baking, place them in a medium bowl and add in sauce. Toss well to coat the wings. Garnish with sesame seeds and green onions. Drizzle a little extra honey on them if you'd like. Serves 6; 3 wings each."],
        imageUrl: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/low-calorie-sliders-two-ways.jpg?quality=82&strip=1&resize=640%2C360",
        userId: 2,
        categoryId: 6,
        totalCalories: 210,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Paleo Fruit Smoothie Recipe",
        steps: ["In a blender, combine peaches, banana, turmeric, almond milk, and date in a blender and puree until smooth. Pour into a freezer-safe container and place in the freezer." ,"Rinse out blender (no need to wash), then combine cherries, beets, almond milk, date, and ice in the blender and puree until smooth. Pour half the peach smoothie into a tall (freezer-safe) glass. Place in freezer for 5 to 10 minutes.", "Pour in half the cherry smoothie over the peach, then return to freezer for 5 to 10 minutes. Repeat with both smoothies, swirling with a spoon or straw until the desired ombre-swirl effect is achieved."],
        imageUrl: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/lava-lamp-smoothie.jpg?quality=82&strip=1&resize=640%2C360",
        userId: 2,
        categoryId: 7,
        totalCalories: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Healthy Oatmeal With Peanut Butter and Banana",
        steps: ["In a medium saucepan, bring the water to a boil. Turn the heat down to low and add the oatmeal and salt. Cook, stirring occasionally, for about 5 minutes, until the oats are tender and have absorbed most of the liquid." ,"Add the bananas, peanut butter, almonds, and agave syrup and stir to incorporate evenly. If the oatmeal is too thick, add a splash of milk."],
        imageUrl: "https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-oatmeal-with-eapnut-butter-and-banana-recipe.jpg?quality=82&strip=1&resize=640%2C360",
        userId: 2,
        categoryId: 7,
        totalCalories: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes')
  }
};
