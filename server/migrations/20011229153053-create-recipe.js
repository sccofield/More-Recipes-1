module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Recipes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },

    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },

    ingredients: {
      type: Sequelize.STRING,
      allowNull: false
    },

    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    recipeImage: {
      type: Sequelize.STRING,
      allowNull: true
    },

    favourite: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  }),
  down: queryInterface => queryInterface.dropTable('Recipes')
};

