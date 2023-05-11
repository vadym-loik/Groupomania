const db = require('./sequelize');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

User.hasMany(Post, { foreignKey: 'userId', onDelete: 'cascade' });
User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'cascade' });

Comment.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
Comment.belongsTo(Post, { foreignKey: 'postId', onDelete: 'cascade' });

Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'cascade' });
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });

// db.sync({ alter: true });

module.exports = db;
