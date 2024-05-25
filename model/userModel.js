const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://saurabh:1010@localhost:5432/nodeapp', {
  logging: false, 
});

const User = sequelize.define('User', {
  uniqueId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  phonenumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  isGraduate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: true,
});


// (async () => {
//   try {
//     await sequelize.authenticate(); 
//     console.log('Connection has been established successfully.');

//     await sequelize.sync({ force: true });
//     console.log('User table created successfully');
//   } catch (error) {
//     console.error('Error syncing model with database:', error);
//   }
// })();

module.exports = User;
