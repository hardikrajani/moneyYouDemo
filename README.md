# moneyYouDemo

## Description

This demo is intended to show AWS serverless capabilities. This application is using following AWS services.

 - API gateway
 - Lambda
 - SNS
 - DynamoDB
 
 As the diagram is self-explanatory, I will add extra points to the design. API gateway have instroduced functionality to communicate with other AWS services directly. In previous version, this was used go via Lambda functions only. 

![alt text](https://raw.githubusercontent.com/hardikrajani/moneyYouDemo/master/design.png)

## Assumption

 - CI / CD and cloudformation is assumed to be there. 
 - For Security - IAM roles and policies are maintained. Other security measures like Authorization, OWASP can be considered while validation
 - Error handling can be handled throughout the application. 
 - NodeJS is used to speedup the demo.
