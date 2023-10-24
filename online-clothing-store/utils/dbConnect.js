// utils/dbConnect.js

import { Sequelize } from 'sequelize';

let sequelize;

if (process.env.DB_PASS) {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });
}

export default sequelize;
