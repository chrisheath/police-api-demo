# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Police API Crime data demo

Run with standard "npm run start" after an install.

App allows you to select location and a Year/Month combination.

You have to click the button to load the data.

Basic error checking has been added with alert()'s as I was running out of time.

Older dates give a range of results, some years e.g. 2016 or older seem to 404 for some reason. Where as the last few years all seem to work.

By default its selecting the current year/month on page load, these do not return results probably becuase the data is not logged until next month.

Sorting and detail view of each outcome has not been added as I have run out of time.