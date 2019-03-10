# Arkham Horror LCG companion App

Welcome to Arkham Horror LCG companion App! The goal of this project was to create a tool for keeping track of all the necessary data during Arkham Horror LCG campaings.

## Getting Started

After installing dependencies:

```
npm install
```

Start the server. The app is using json-server for api purposes. Command for running server:

```
npm run api
```

Command for running the app (on localhost:4200):

```
npm start
```

## "How to use" guide

Welcome screen allows for:
* Creating a new campaign
* Editing existing one. Here you can:
  * Change current scenario on the top of the screen
  * Edit exisiting character by clicking on character card. Here you can:
    * Update character status (trauma, xp, deleting character)
  * Add a new character. Here you can:
    * Add a new character using existing investigator templates
    * Add new investigator template to database (name and img link)
  * Edit exisiting note by clicking on character card
  * Add a new note
  * Delete current campaign