const sequelize = require("../config/connection");
const { User, Pod, Project, SelfCarePost } = require("../models");

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
  await Pod.bulkCreate(podPostData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- POD POST TABLE ---\n");
  await Project.bulkCreate(projectPostData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- PROJECT POST TABLE ---\n");
  await SelfCarePost.bulkCreate(selfCarePostData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- SELF CARE POST TABLE ---\n");
  process.exit(0);
};

seedDatabase();
