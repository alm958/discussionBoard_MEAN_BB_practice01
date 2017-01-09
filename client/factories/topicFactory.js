app.factory('topicFactory', ['$http', function($http){
    var factory = {};
    factory.topiclist = [];
    factory.addTopic = function(topic, callback){
        $http.post('/topics', topic)
            .then(function(addedTopic){
                factory.topiclist.push(addedTopic);
                
                console.log(addedTopic.user);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getTopics = function(callback){
        $http.get('/topics')
            .then(function(topics){
                factory.topiclist = topics.data;
                callback(factory.topiclist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.findTopic = function(id){
        return factory.topiclist.find(topic => topic._id == id)
    };
    factory.updateTopic = function(topic){
        $http.put(`/topics/${topic._id}`, topic)
            .then(function(response){
                var topic = response.data;
                var updateIndex = factory.topiclist.findIndex(x => x._id === topic._id);
                if (updateIndex > -1) {
                 factory.topiclist[updateIndex] = topic;
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.delTopic = function(id, callback){
        $http.delete(`/topics/${id}`)
            .then(function(response){
                console.log(response);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }


    return factory;
}])
