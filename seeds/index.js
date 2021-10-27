const sequelize = require("../config/connection");
const { User, Post, Tag, PostTag } = require("../models");

const userData = require("./user-seed.json");
const postData = require("./post-seed.json");
const tagData = require("./tag-seed.json");
const postTagData = require("./post-tag-seed.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE GENERATE ---\n");
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- USERS TABLE ---\n");
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- POST TABLE ---\n");
  await Tag.bulkCreate(tagData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- TAG TABLE ---\n");
  await PostTag.bulkCreate(postTagData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- POST TAGS TABLE ---\n");

  process.exit(0);
};

seedDatabase();
