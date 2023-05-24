"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          amount: "200",
          date: "Feb 2",
          bank: "Chase",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "2000",
          date: "Feb 27",
          bank: "Wells Fargo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};

("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Post",
      [
        { title: "First Post", content: "This is the first post", userId: 1 },
        { title: "Second Post", content: "This is the second post", userId: 2 },
        { title: "Third Post", content: "This is the third post", userId: 3 },
        { title: "Fourth Post", content: "This is the fourth post", userId: 1 },
        { title: "Fifth Post", content: "This is the fifth post", userId: 2 },
      ],
      {}
    );
  },
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Post",
      [
        { name: "John Doe", email: "johndoe@example.com" },
        { name: "Jane Smith", email: "janesmith@example.com" },
        { name: "Mark Johnson", email: "markjohnson@example.com" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
