# Welcome to  Treasure Hunt README.md File

 


# About Project

 This is a Puzzle game Project named  **Treasure Hunt**. It is built using **React js** and the backend part is of Node js, Mangoose, and Express so It is MERN Stack Project with proper **authentication of user**.

##  Set Up project

 **Clone it-** Clone the project in your system.
   
 **npm start-** Run this command to start the project. 
 **React js-** We use several features of Hooks like useState, useeffect, useContext to build the fronted part.
 **Database & Node js-** I have user MongoDB atlas for database and node js for server.
 
 ## Aim of the project
 We want to assess the soft skills  ,of users with this puzzle game. soft skills like eye for detail, perseverance, curiosity Problem-solving ,time management etc.
 
 ## Soft skills
 **Time management**
**Curiosity**
**Problem-solving**
**Perseverance**
**Patience**

## About the puzzle

 **Levels:**  It has **6 levels** the user needs to complete each in sequence to win.
 
 **Attempts:** In each level user has 5 attempts to find clue answer.
 
 **Dead End:** If the user fail to find any level answer in **5 attempts** then there is a dead end and the **game is over**, need to **start again**.
 
 **Solution:** There is a solution to game exits always.
 ## Flow chart  of game.
 ```mermaid
 graph LR
A[Create account]  
B[Already account, Login]
A --> C(Login)
C -->D
B --> D{Play Puzzle}
D -->E(Profile section to see performance)
E --> D
D --> F[Game over or dead end]
F --> G[start again]
G --> D
```

## Solution of Game

 There are 6 levels.
 **Solution** 
 **Level 1** Marble
 **Level 2** Dollar
 **Level 3** Twine
 **Level 4** Binoculars
 **Level 5** Phone
 **Level 6** Hairbrush

## Features


 **Authentication:-** 
 Every user needs to create an account to play Puzzle after creating an account, need to log in to access the game page.

**Register page** 
 Usersr need to haveana account to play puzzle.

**Login page** 
 Users need to login into account to play puzzle.
 
 **Admin portal:-**
  There is an admin portal that is accessible to only the admin. Here there are several feature line total users and their performance.
  
 **Profile Page:-** 
 Onn the Profile page user can see its performance and accuracy, time and **current level**, and information about himself.
 
 **Game page:-**
  It controls the complete Puzzle game and tracks the levels of user completed. and take necessary action to give the  option to **Resume Game** or **Start**
  
  **Levels page:-**
   There are 6 levels page and we will to that page where user is currently at any time
   Each has a **clue** and the  user need to **decode** it and submit it
   **Next level**
   When the user submit a  correct answer of clue then automatically **procced to the  next level.**
   
   **Dead end page:-** If the user submit 5 wrong answer then the game is over and need to restart
   
