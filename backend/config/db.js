const db = require('./sequelize');
const User = require('../models/User');
const Post = require('../models/Post');
const Comments = require('../models/Comments');

User.hasMany(Post, { foreignKey: 'userId', onDelete: 'cascade' });
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });

Comments.belongsTo(Post, { foreignKey: 'postId', onDelete: 'cascade' });
Post.hasMany(Comments, { foreignKey: 'postId', onDelete: 'cascade' });

Comments.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
User.hasMany(Comments, { foreignKey: 'userId', onDelete: 'cascade' });

module.exports = db;
