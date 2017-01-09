var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            required: [true, 'Empty post is not allowed'],
            minlength: [2, 'Validate post. Minimum length is 2 characters.']
        },
        upvote:{
            type:Number,
            min:0,
            default: 0
        },
        downvote:{
            type:Number,
            min:0,
            default: 0
        },
        user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Post', PostSchema);
