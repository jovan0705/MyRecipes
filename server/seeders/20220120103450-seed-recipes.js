'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
      {
        name: "10-minute couscous salad",
        steps: ["Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed. Meanwhile, slice the onions and pepper, and dice the cucumber. Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve."],
        imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/couscous-9ab75f0.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        totalCalories: 327,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spanish potatoes",
        steps: ["Heat oven to 180C/fan 160C/gas 4. Mix the oil, tomato purée and paprika together, then coat the potatoes thoroughly in it. Squash the garlic in its skin with the flat of a knife and place on a baking tray with the potatoes.", "Season well with salt and pepper, then roast for 40 mins, turning halfway through, until the potatoes have crisped up and are fluffy inside. Five mins before the end of cooking, sprinkle over the lemon juice and return to the oven. Serve with the parsley scattered over."],
        imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-488484_11-ecf4ff0.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        totalCalories: 217,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cheeky pie",
        steps: ["Heat oven to 180C/160C fan/gas 4. Bring a pan of salted water to the boil and cook the potato slices for 3 mins. Drain and cool.", "Butter a shallow ovenproof dish and spread over the garlic. Layer the potatoes, leeks and cheese, season well, then pour over the cream. Cover with foil and bake for 1 hr.", "Remove the foil and continue cooking for 20 mins or until the top is browned and the potatoes are cooked through. Leave to stand for 5 mins before serving."],
        imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Pie-cd58020.jpg?quality=90&webp=true&resize=300,272",
        userId: 1,
        totalCalories: 531,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes')
  }
};
