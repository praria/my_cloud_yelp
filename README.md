# Welcome to My Cloud Yelp
***

## Task
To build and deploy a basic real-time Restaurant CRUD application built in ReactJS into 
AWS Amplify using authentificated GraphQL APIs

## Description
This appplication is a serverless, cloud-hosted platfrom for managing restaurant data, built using AWS Amplify, APPSyns, and DynamoDB.
The application supports CRUD operations and leverages GraphQL APIs for data interactions.

## Installation
Node >= v10.9.0
NPM >= V6.9.0 packaged with Node
AWS CLI: Install and configure AWS CLI with appropriate credentials.
Amplify CLI: nstall using npm install -g @aws-amplify/cli.

## Usage
The application uses DynamoDB for managing restaurant data. 
operations can be performed by creating an user account in the URL: https://dmdmqz4yb5cm3.cloudfront.net

OR  

operations are also performed using APPSyns GraphQL APIs. For example:
- To create a restaurant in the API:
mutation createRestaurant {
  createRestaurant(input: {
    name: "Katana"
    description: "Great Sushi"
    city: "Sunnyvale"
  }) {
    id name description city
  }
}

- To query/list the records:
query listRestaurants {
  listRestaurants {
    items {
      id
      name
      description
      city
    }
  }
}

