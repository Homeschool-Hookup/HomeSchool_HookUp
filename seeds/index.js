const sequelize = require("../config/connection");
const { User, podPost, projectPost, selfCarePost } = require("../models");

const userData = require("./user-seed.json");
const podPostData = require("./podPost-seed.json");
const projectPostData = require("./projectPost-seed.json");
const selfCarePostData = require("./selfCare-seed.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE GENERATE ---\n");
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- USERS TABLE ---\n");
  await podPost.bulkCreate(podPostData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- POD POST TABLE ---\n");
  await projectPost.bulkCreate(projectPostData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- PROJECT POST TABLE ---\n");
  await selfCarePost.bulkCreate(selfCarePostData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- SELF CARE POST TABLE ---\n");
  // await Post.bulkCreate(postData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // console.log("\n----- POST TABLE ---\n");
  // await Tag.bulkCreate(tagData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // console.log("\n----- TAG TABLE ---\n");
  // await PostTag.bulkCreate(postTagData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // console.log("\n----- POST TAGS TABLE ---\n");

  process.exit(0);
};

seedDatabase();
