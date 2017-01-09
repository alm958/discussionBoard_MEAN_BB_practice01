app.factory('objectFactory', ['$http', function($http){
    var oFactory = {};
    oFactory.objlist = [];
    oFactory.addObj = function(obj, callback){
        $http.post('/objects', obj)
            .then(function(addedObj){
                oFactory.objlist.push(addedObj);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    oFactory.getObjs = function(callback){
        $http.get('/objects')
            .then(function(objs){
                oFactory.objlist = objs.data;
                callback(oFactory.objlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    oFactory.findObj = function(id){
        return oFactory.objlist.find(obj => obj._id == id)
    };
    oFactory.updateObj = function(obj){
        $http.put(`/objects/${obj._id}`, obj)
            .then(function(response){
                var obj = response.data;
                var updateIndex = oFactory.objlist.findIndex(x => x._id === obj._id);
                if (updateIndex > -1) {
                 oFactory.objlist[updateIndex] = obj;
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
    oFactory.delObj = function(id, callback){
        $http.delete(`/objects/${id}`)
            .then(function(response){
                console.log(response);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }


    return oFactory;
}])
