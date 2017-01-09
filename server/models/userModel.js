var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique: [true,'name must be unique. Name supplied already in use.'],
            required:[true,'name is required'],
            minlength:[2,'minumum name length is two non-whitespace characters'],
            trim: true
        },
        topiccount:{
            type:Number,
            min:0,
            default: 0
        },
        postcount:{
            type:Number,
            min:0,
            default: 0
        },
        commentcount:{
            type:Number,
            min:0,
            default: 0
        },
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('User', UserSchema);
