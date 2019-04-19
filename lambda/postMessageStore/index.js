const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(event, context, callback) {
    console.log('processing event: %j', event);
    const data = event.Records;
    console.log("data : " , data)
	for(var i = 0; i < data.length; i++) {
		console.log("key value : " , data[i].Sns.Subject);
		var params = {
			Item : {
				"key" : data[i].Sns.Subject,
				"message" : data[i].Sns.Message
			},
			TableName : "postMessage"
		};		
		
	    docClient.put(params, function(err, data){
			callback(err, data);
		});
	}
};
