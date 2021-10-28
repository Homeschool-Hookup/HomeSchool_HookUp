const podPost = require("./pod-post");
const projectPost = require("./project-post");
const selfCarePost = require("./self-care-post");
const User = require("./user");

//user has many post
User.hasMany(podPost, {
  foreignKey: "user_id",
});
User.hasMany(projectPost, {
  foreignKey: "user_id",
});
User.hasMany(selfCarePost, {
  foreignKey: "user_id",
});
//Post belong to one user
podPost.belongsTo(User, {
  foreignKey: "user_id",
});
projectPost.belongsTo(User, {
  foreignKey: "user_id",
});
selfCarePost.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { podPost, User, projectPost, selfCarePost };
