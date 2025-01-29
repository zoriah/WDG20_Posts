import { DataTypes } from 'sequelize'
import sequelize from '../db/index.js'

const Post = sequelize.define('Post', {
    author: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Post.sync(); // Check the block about Model synchronization

export default Post;
