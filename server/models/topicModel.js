var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: [true, 'Title is required']
        },
        description:{
            type:String,
            required: [true, 'Description is required'],
            minlength : [7, 'Validte description. Minimum length is 7 characters.']
        },
        posts:[{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
        category: {
            type: String,
            enum: ['biscuits', 'tea-cozies', 'AI', 'numerology', 'SQL', 'non-relational DBs']
        },
        user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Topic', TopicSchema);
