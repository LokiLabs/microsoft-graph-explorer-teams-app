var request = require('request');
var graph = require('@microsoft/microsoft-graph-client');
var Q = require('q');

// The auth module object.
var auth = {};

auth.getAccessToken = function () {
    var deferred = Q.defer();
    var requestParams = {
      grant_type: 'client_credentials',
      client_id: '<<web rsc client id>>',  
      client_secret: "<<client secret>>",
      scope: 'https://graph.microsoft.com/.default'
    };
    /* Find all the information for client id, client secret and tenant id in the overview of the app in Azure
    * Note that the client secret can be replaced and regenerated. Please do NOT delete existing ones unless they
    * only YOU use it. 
    */

    var url = "https://login.microsoftonline.com/<<tenant id>>/oauth2/v2.0/token";
    request.post({ url: url, form: requestParams }, function (err, response, body) {
      var parsedBody = JSON.parse(body);
  
      if (err) {
        console.log("err")
        deferred.reject(err);
      } else if (parsedBody.error) {
        console.log("parse error")
        deferred.reject(parsedBody.error_description);
      } else {
        console.log("success")
        // If successful, return the access token.
        deferred.resolve(parsedBody.access_token);
      }
    });
  
    return deferred.promise;
  };
  
  module.exports = auth;