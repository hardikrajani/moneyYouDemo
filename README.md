# moneyYouDemo

## Description

This demo is intended to show AWS serverless capabilities. This application is using following AWS services.

 - API gateway
 - Lambda
 - SNS
 - DynamoDB
 
 I have setup one API gateway for this service. There are 2 methods defined in the API Gateway as following
 
  - GET
   Get method is integrated with Lambda Function. It calls a Lambda function to fetch all the records with defined subject. Lambda function in sequence queries DynamoDB to fetch all the records with given subject.
 - POST
  Post method is integrated with SNS directly. We have defined one topic in SNS. API gateway needs ARN for the SNS to post a message the topic. All the email address needs to be subscribed to the topic to get the message. One Lambda is also subscribed to the topic. That Lambda extracts the message from the SNS and stores it to DynamoDB.

As the diagram is self-explanatory, I will add extra points to the design. API gateway have instroduced functionality to communicate with other AWS services directly. In previous version, this was used go via Lambda functions only. 

![alt text](https://raw.githubusercontent.com/hardikrajani/moneyYouDemo/master/design.png)

## Assumption

 - API gateway assess control
 - CI / CD and cloudformation is assumed to be there. 
 - For Security - IAM roles and policies are maintained. Other security measures like Authorization, OWASP can be considered while validation
 - Error handling can be handled throughout the application. 
 - NodeJS is used to speedup the demo.
