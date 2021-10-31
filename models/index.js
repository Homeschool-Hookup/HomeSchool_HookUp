const Pod = require("./pod-post");
const Project = require("./project-post");
const SelfCarePost = require("./self-care-post");
const User = require("./user");

//user can have many post
User.hasMany(Pod, {
  foreignKey: "user_id",
});
User.hasMany(Project, {
  foreignKey: "user_id",
});
User.hasMany(SelfCarePost, {
  foreignKey: "user_id",
});

//Post belong to one user
Pod.belongsTo(User, {
  foreignKey: "user_id",
});
Project.belongsTo(User, {
  foreignKey: "user_id",
});
SelfCarePost.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Pod, User, Project, SelfCarePost };
