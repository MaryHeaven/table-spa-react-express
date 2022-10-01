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
    await queryInterface.bulkInsert('Tables', [{
      date: '2022-01-29 22:55:42.52+03',
      title: 'GName',
      quantity: 4,
      distance: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-10-29 22:55:42.52+03',
      title: 'ZName',
      quantity: 43,
      distance: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-07-29 22:55:42.52+03',
      title: 'TName',
      quantity: 34,
      distance: 37,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-09-19 22:55:42.52+03',
      title: 'RName',
      quantity: 24,
      distance: 39,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-03-09 22:55:42.52+03',
      title: 'YName',
      quantity: 324,
      distance: 43,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-02-20 22:55:42.52+03',
      title: 'UName',
      quantity: 87,
      distance: 56,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-05-23 22:55:42.52+03',
      title: 'HName',
      quantity: 45,
      distance: 43,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-09-29 22:55:42.52+03',
      title: 'JName',
      quantity: 99,
      distance: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2021-11-29 22:55:42.52+03',
      title: 'LName',
      quantity: 47,
      distance: 37,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2020-01-29 22:55:42.52+03',
      title: 'XName',
      quantity: 347,
      distance: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2024-09-19 22:55:42.52+03',
      title: 'EName',
      quantity: 254,
      distance: 397,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-04-09 22:55:42.52+03',
      title: 'AName',
      quantity: 324,
      distance: 453,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-02-21 22:55:42.52+03',
      title: 'QName',
      quantity: 7,
      distance: 56,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-05-13 22:55:42.52+03',
      title: 'SName',
      quantity: 455,
      distance: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2019-09-29 22:55:42.52+03',
      title: 'RName',
      quantity: 14,
      distance: 311,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2002-10-29 22:55:42.52+03',
      title: 'IName',
      quantity: 473,
      distance: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2009-07-29 22:55:42.52+03',
      title: 'PName',
      quantity: 304,
      distance: 327,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2012-09-19 22:55:42.52+03',
      title: 'MName',
      quantity: 2464,
      distance: 3987,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2000-03-09 22:55:42.52+03',
      title: 'VName',
      quantity: 324674,
      distance: 46643,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2014-12-20 22:55:42.52+03',
      title: 'CName',
      quantity: 87467,
      distance: 54676,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2020-05-13 22:55:42.52+03',
      title: 'ZZteName',
      quantity: 4475,
      distance: 443,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2007-09-03 22:55:42.52+03',
      title: 'Nfgfgame',
      quantity: 4746,
      distance: 347,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2018-07-01 22:55:42.52+03',
      title: 'Najhjme',
      quantity: 4743,
      distance: 376,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2002-02-22 22:55:42.52+03',
      title: 'hgjName',
      quantity: 7634,
      distance: 3677,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2021-11-19 22:55:42.52+03',
      title: 'Najydme',
      quantity: 8724,
      distance: 8739,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2021-05-29 22:55:42.52+03',
      title: 'Namdhge',
      quantity: 3264,
      distance: 463,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2006-02-21 22:55:42.52+03',
      title: 'Nadhgme',
      quantity: 287,
      distance: 256,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2006-05-21 22:55:42.52+03',
      title: 'Namhdge',
      quantity: 245,
      distance: 243,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2012-09-29 22:55:42.52+03',
      title: 'Namdhge',
      quantity: 24,
      distance: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-10-29 22:55:42.52+03',
      title: 'Nahdgme',
      quantity: 143,
      distance: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2012-07-19 22:55:42.52+03',
      title: 'Nameye',
      quantity: 7634,
      distance: 337,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2032-09-19 22:55:42.52+03',
      title: 'Namzdfe',
      quantity: 3524,
      distance: 239,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '1999-03-09 22:55:42.52+03',
      title: 'Namjfrye',
      quantity: 3624,
      distance: 243,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '1996-07-01 22:55:42.52+03',
      title: 'Namyjre',
      quantity: 87647,
      distance: 11156,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      date: '2022-12-23 22:55:42.52+03',
      title: 'Naryajme',
      quantity: 405,
      distance: 403,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
