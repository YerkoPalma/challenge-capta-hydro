import _sequelize from 'sequelize'
const { Sequelize, Model, DataTypes } = _sequelize
const sequelize = new Sequelize('sqlite::memory:', { logging: false })

export const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.UUID
  }
}, {
  sequelize,
  modelName: 'User'
})
