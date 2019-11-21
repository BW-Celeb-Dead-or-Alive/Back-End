BACK END FOR THE CELEBRITY DEAD OR ALIVE PROJECT BY FORREST DARABIAN

API: https://celebritydeadoralive-backend.herokuapp.com/

DESCRIPTION
Pitch: I'm always arguing with my friends over celebrities who have come and gone. I want a game to determine who knows best- once and for all!

MVP
As a user I can take the quiz without having to log in. The Quiz will start and there will be a timer and a celebrity picture/name with two buttons "Dead" and "Alive". The user will then be able to guess as to whether or not that celebrity is still living. Once they finish the quiz a modal will pop up to show them their score. If the user wants their score to persist in the system, they'll have to sign up and log in at that point.
STRETCH
Aggregate the data collected from the user taking the quiz to take account for the time it took to answer the question. The faster they took, the higher the score for the correct answer.

Register
[POST]

URL: /api/users/register

Payload:

{
"username": "Forrest",
"password": "ABC123"

}
Returns: a user object

Example:

{
"message": "User registered!",
"id": 5
}

Authentication
Login
[POST]

URL: /api/users/login

Payload:

{
"username": "Forrest",
"password": "ABC123"
}

Returns: Example:

{
"message": "Login Successful!",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MzYxOTMxLCJleHAiOjE1NzQ0NDgzMzF9.BTowt2kVto9KVoH8oe8kDz9_zahsJ5zDAuHEiOPpvj0"
}

Users
[GET] all users
URL: /api/users

Returns: an array of user objects
(Requires token for auth)
Example:

{
"id": 3,
"username": "Levi",
"password": "$2a$08\$tJ2apwNK5vQD33VLj0YN0OTsI14.5ukdCwtwUR3QWVHlJyYkl5km2",
"scores": 0
}

[DELETE] user
URL: /api/users/:id

Returns: (if successful) message and count of the records that was deleted.

Example:

{
{
"removed": 1
}
}

[PUT] add score
URL: api/users/:id

Payload: A score out of 10

Returns: Users updated score

{
{
"scores": "7"
}

Celebs
[GET] all celebs
URL: /api/celebs

Returns: an array of seeded celebrities

Example:

[
{
"id": 1,
"name": "Jack Nicholson",
"imageurl": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Jack_Nicholson_2001.jpg",
"dead": 0
},
{
"id": 2,
"name": "Angelina Jolie",
"imageurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/422px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg",
"dead": 0
},
{
"id": 3,
"name": "John Lennon",
"imageurl": "https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg",
"dead": 1
},
{
"id": 4,
"name": "Whitney Houston",
"imageurl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Whitney_Houston_Welcome_Home_Heroes_1_cropped.jpg",
"dead": 1
},
{
"id": 5,
"name": "Al Pacino",
"imageurl": "https://upload.wikimedia.org/wikipedia/commons/9/98/Al_Pacino.jpg",
"dead": 0
},
{
"id": 6,
"name": "Carrie Fisher",
"imageurl": "https://live.staticflickr.com/2036/2103448605_529af5337a.jpg",
"dead": 1
},
{
"id": 7,
"name": "Christopher Lloyd",
"imageurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Christopher_Lloyd_May_2015.jpg/706px-Christopher_Lloyd_May_2015.jpg",
"dead": 0
},
{
"id": 8,
"name": "Bruce Lee",
"imageurl": "https://live.staticflickr.com/27/43855760_fa16727836_z.jpg",
"dead": 1
},
{
"id": 9,
"name": "Heath Ledger",
"imageurl": "https://live.staticflickr.com/2296/2149692029_e506cce623_z.jpg",
"dead": 1
},
{
"id": 10,
"name": "John Travolta",
"imageurl": "https://upload.wikimedia.org/wikipedia/commons/0/00/John_Travolta_Deauville_2013.jpg",
"dead": 0
}
]

[GET] celeb by id
URL: /api/celebs/:id

Returns: a specific celebrity

Example:

{
"id": 8,
"name": "Bruce Lee",
"imageurl": "https://live.staticflickr.com/27/43855760_fa16727836_z.jpg",
"dead": 1
}
