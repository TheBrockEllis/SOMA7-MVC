define('sycamore', ["app"], function(app) {
    
    var base = "https://app.sycamoreeducation.com/api/v1/",

    get = function(key){
        //console.log("Getting " + key);
        return localStorage.getItem(key);
    },

    set = function(key, value){
        //console.log("Setting " + key + " => " + value);
        return localStorage.setItem(key, value);
    },
    
    getData = function(endpoint, params){
        //console.log("Attempting to call API - get");
        //console.log("Endpoint: " + endpoint);
        return  $.getJSON(base + endpoint, params);
    },
    
    postData = function(endpoint, data){
        //console.log("Attempting to call API - post");
        //console.log("Endpoint: " + endpoint);
        return $.post(base + endpoint, data);
    };

    $.ajaxSetup({
    'beforeSend': function(xhr) {
        var accessToken = app.f7.accessToken;
        //var accessToken = ""
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      }
    });
    
    return {
        get: get,
        set: set,
        getData: getData,
        postData: postData
    };
    
});