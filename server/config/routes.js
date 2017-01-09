var usersController = require('./../controllers/usersCont.js');
var topicsController = require('./../controllers/topicsCont.js');
var postsController = require('./../controllers/postsCont.js');
var commentsController = require('./../controllers/commentsCont.js');

module.exports = function(app){

    app.get('/users', usersController.index);
    app.post('/users', usersController.create);
    app.put('/users/topics/:id', usersController.updateTopiccount);
    app.put('/users/posts/:id', usersController.updatePostcount);
    app.put('/users/comments/:id', usersController.updateCommentcount);
    app.delete('/users/:id', usersController.delete);

    app.get('/topics', topicsController.index);
    app.post('/topics', topicsController.create);
    app.get('/topics/:id', topicsController.get);
    app.put('/topics/:id', topicsController.update);
    app.delete('/topics/:id', topicsController.delete);

    app.get('/posts', postsController.index);
    app.post('/posts', postsController.create);
    app.put('/posts/:id', postsController.update);
    app.delete('/posts/:id', postsController.delete);

    app.get('/comments', commentsController.index);
    app.post('/comments', commentsController.create);
    app.put('/comments/:id', commentsController.update);
    app.delete('/comments/:id', commentsController.delete);

};
