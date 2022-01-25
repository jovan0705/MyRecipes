"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Recipes", 'categoryId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Categories'
        },
        key: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Recipes", "categoryId");
  },
};
