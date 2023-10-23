// models/User.js
import { DataTypes } from 'sequelize';
import db from '../utils/dbConnect';

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;