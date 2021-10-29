// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Post extends Model {}

// Post.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     podPost_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "pod-post",
//         key: "id",
//       },
//     },
//     projectPost_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "project-post",
//         key: "id",
//       },
//     },
//     selfCarePost_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "self_care_post",
//         key: "id",
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
//     modelName: "post",
//   }
// );
// module.exports = Post;
