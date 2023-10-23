// utils/dbConnect.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tests', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;