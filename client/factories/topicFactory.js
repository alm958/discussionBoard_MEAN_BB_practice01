app.factory('topicFactory', ['$http', '$location', function($http, $location){
    var factory = {};
    factory
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
    factory.findTopicById = function(id){
        console.log(id);
        if (id == null){
            console.log('id is undefined');
            var id = $route.current.params.id;
        }
        $http.get(`/topics/${id}`)
            .then(function(topic){
                console.log('********************');
                console.log(topic);
                $location.path(`/topic/${topic.data._id}`);
                // callback(factory.topiclist);
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

    return factory;
}])
