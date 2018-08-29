# stackoverflow-lite

# StackOverflow-lite
StackOverflow-lite is a platform where people can ask questions and provide answers.

## Heroku deployment
> **[Check it out](https://emma-stackoverflow-lite.herokuapp.com/)**

## Project Overview
StackOverflow-lite is a platform where people can ask questions and provide answers.

## Required Features
    - Users can create an account and log in.
    - Users can post questions.
    - Users can delete the questions they post
    - Users can post answers
    - Users can view the answers
    - Users can accept an answer out of all the answers to his/her queston as they preferred answer


#  Complete Tasks
 > **[Complete UI Pages](https://p8ul.github.io/stackoverflow-lite/UI/)**

 >  **[API End points documentation](https://stackoverflowlite2.docs.apiary.io/#reference)**

 >  **[Pivot tracker board](https://www.pivotaltracker.com/n/projects/2189597)**


## Installation

```

    $ git clone https://github.com/p8ul/stackoverflow-lite.git
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
GET | `/api/v1/questions/?q={search_string}` | Search a questions
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
POST | `/api/v1/questions/answers/vote/{answer_id}` | Upvote/DownVote an answer
POST | `/api/v1/questions/answers/comment/{answer_id}` | Comment on an answer


## Credits
This challenge was part of the Andela VLF Technical Assesment.

Credits to [Avinash Tripathi](https://dribbble.com/nashatwork) for an awesome [Stackoverflow redesign concept](https://dribbble.com/shots/2876030-Stackoverflow-redesign?_=1535432246078&utm_source=Clipboard_Shot&utm_campaign=nashatwork&utm_content=Stackoverflow%20redesign&utm_medium=Social_Share). Helped in comming up with some dashboard UI components.

## Author
Emmanuel Odianosen.

##License
Apache-2.0
