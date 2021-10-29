// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Profile extends Model {}

// Profile.init(
//   {
//     // define columns
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//       validation: {
//         len: [20],
//       },
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     // timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "profile",
//   }
// );

// module.exports = Profile;
