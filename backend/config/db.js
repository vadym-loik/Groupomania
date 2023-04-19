const db = require('./sequelize');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Like = require('../models/Like');

User.hasMany(Post, { foreignKey: 'userId', onDelete: 'cascade' });
User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'cascade' });

Comment.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
Comment.belongsTo(Post, { foreignKey: 'postId', onDelete: 'cascade' });

Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'cascade' });
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });

Like.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
Like.belongsTo(Post, { foreignKey: 'postId', onDelete: 'cascade' });

// db.sync({ alter: true });

module.exports = db;
