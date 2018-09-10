# StackOverflow-lite
[![Build Status](https://travis-ci.org/emmaodia/stackoverflow-lite.svg?branch=master)](https://travis-ci.org/emmaodia/stackoverflow-lite) [![Coverage Status](https://coveralls.io/repos/github/emmaodia/stackoverflow-lite/badge.svg)](https://coveralls.io/github/emmaodia/stackoverflow-lite)

## Project Overview
StackOverflow-lite is a platform where people can ask questions and provide answers.

## Heroku deployment
> **[Check it out](https://emma-stackoverflow-lite.herokuapp.com/)**

## Required Features
    - Users can create an account and log in.
    - Users can post questions.
    - Users can delete the questions they post
    - Users can post answers
    - Users can view the answers
    - Users can accept an answer out of all the answers to his/her queston as they preferred answer


#  Complete Tasks
 > **[Complete UI Pages](https://emma-stackoverflow-lite-ui.herokuapp.com/)**

 >  **[API End points documentation](https://stackoverflowlite2.docs.apiary.io/#reference)**

 >  **[Pivot tracker board](https://www.pivotaltracker.com/n/projects/2193928)**


## Installation

```
    $ git clone https://github.com/emmaodia/stackoverflow-lite.git
    $ cd stackoverflow-lite
    $ npm install
```
## Running the application
```
    $ nodemon server.js
```

## Testing
```

```

### Endpoints

#### Users Endpoints

Method | Endpoint | Functionality
--- | --- | ---
POST | `/api/v1/auth/signup` | Add a user
GET | `/api/v1/auth/users` | Lists all users
GET | `/api/v1/auth/users/{user_id}` | Retrieve a user
POST | `/api/v1/auth/login` | Login a user

#### Questions Endpoints

Method | Endpoint | Functionality
--- | --- | ---
POST | `/api/v1/questions` | Add a question
GET | `/api/v1/questions` | Lists all questions
GET | `/api/v1/questions/{question_id}` | Retrieve a question
PUT | `/api/v1/questions/{question_id}` | Edit a question of a logged in user
DELETE | `/api/v1/questions/{question_id}` | Delete a request of a logged in user

#### Answers Endpoints

Method | Endpoint | Functionality
--- | --- | ---
POST | `/api/v1/questions/{question_id}/answers` | Add an answer
GET | `/api/v1/questions/answers` | Lists all answers
GET | `/api/v1/questions/answers/{answerID}` | Retrieve an answer
PUT | `/api/v1/questions/{question_id}/answer/{answerID}` | Edit an answer
DELETE | `/api/v1/questions/{question_id}/answer/{answerID}` | Delete an answer
POST | `/api/v1/questions/answers/vote/{answer_id}` | Mark answer as prefared


## Credits
This challenge was part of the Andela VLF Technical Assesment.

Credits to Papa Google!

## Author
Emmanuel Odianosen.

##License
Apache-2.0
