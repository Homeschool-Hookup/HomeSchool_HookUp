const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class podPost extends Model {}

podPost.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      validation: {
        len: [10],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "post",
    //     key: "id",
    //   },
    // },
    // tag_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "tag",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    // timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pod_post",
  }
);

module.exports = podPost;
