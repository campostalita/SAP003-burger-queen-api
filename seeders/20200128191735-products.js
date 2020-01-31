'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [
        {
          name: "Café americano",
          price: 5,
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Café com leite",
          price: 7,
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Misto quente",
          price: 10,
          isAlcoholic: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Suco Natural",
          price: 7,
          isAlcoholic: false,      
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});

  }
};