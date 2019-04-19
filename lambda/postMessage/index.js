const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(event, context, callback) {

    var params = {
        TableName : "postMessage",
        KeyConditionExpression: "#ky = :value",
        ExpressionAttributeNames:{
            "#ky": "key"
        },
        ExpressionAttributeValues: {
            ":value": event.Key
        }
    };
   console.log("Quering : ", event.Key);
   docClient.query(params, function(err, data) {
        if(err){
            callback(err, null);
        }else{
            callback(null,data);
        }
    });
};
