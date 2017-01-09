var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectDB');

mongoose.Promise = global.Promise;

var path = require('path');
var models_path = path.join(__dirname, './../models');

require(path.join(models_path,'/userModel'));
require(path.join(models_path,'/postModel'));
require(path.join(models_path,'/commentModel'));
require(path.join(models_path,'/topicModel'));


// require(models_path + '/postModel');
// require(models_path + '/commentModel');
// require(models_path + '/topicModel');
