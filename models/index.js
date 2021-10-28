const Pod = require("./pod-post");
const Project = require("./project-post");
const SelfCarePost = require("./self-care-post");
const User = require("./user");
const Post = require("./post");

//user has many post
User.hasMany(Post, {
  foreignKey: "user_id",
});
User.hasMany(Pod, {
  foreignKey: "user_id",
});
User.hasMany(Project, {
  foreignKey: "user_id",
});
User.hasMany(SelfCarePost, {
  foreignKey: "user_id",
});
//post will have pod, project and self-care
Post.hasMany(Pod, {
  foreignKey: "podPost_id",
});
Post.hasMany(Project, {
  foreignKey: "projectPost_id",
});
Post.hasMany(SelfCarePost, {
  foreignKey: "selfCarePost_id",
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

module.exports = { Pod, User, Project, SelfCarePost, Post };
