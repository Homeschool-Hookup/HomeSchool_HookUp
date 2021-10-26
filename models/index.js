const Post =require('./post');
const PostTag=require('./post-tag');
const Tag =require('./tag');
const User=require('./user');

//user has many post
User.hasMany(Post, {
    foreignKey: 'user_id'
});
//Post belong to one user
Post.belongsTo(User,{
    foreignKey:'user_id'
})
//Post belong to one tag and related through postTag
Post.belongsTo(Tag, {
    through:{
        model: PostTag,
        unique: false
    },
    foreignKey:'post_id'
})
//Tag can belong to many post
Tag.belongsToMany(Post,{
    through:{
        model: PostTag,
        unique: false
    },
    foreignKey: 'tag_id'
})
module.exports= {Post, User, Tag, PostTag}