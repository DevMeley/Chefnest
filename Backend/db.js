const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')


// test connection
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}