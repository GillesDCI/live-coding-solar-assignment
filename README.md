# React Solar System

Build a frontend interface to access the Express Solar System API! 🌌🪐

> ⚠️ This assignment requires completion of the [Express Solar System API](https://github.com/FrancoSpeziali/express-solar-system-api)

> ⚠️ This assignment uses the [Express Solar System API](https://github.com/FrancoSpeziali/express-solar-system-api) as a backend system

## Setup

- Use [Create React App](https://create-react-app.dev/)
  - `npx create-react-app .`
  - This will install `create-react-app` directly inside the folder
- Install [React Router DOM](https://www.npmjs.com/package/react-router-dom)
  - `npm i react-router-dom`
- You may wish to additionally install the `axios` library for handling your requests
  - `npm i axios`

## Tasks

> **Note**: These tasks do not detail how to style your application. This is left to your own discretion.

## Task 1 - Initial Setup - Setting up our pages

1. Create 2 Functional components. These will function as our pages;
   1. Satellites
   2. Planets

2. Using `react-router-dom` setup routes in your main `App.js` so that;
   1. The path `/satellites` links to the `Satellites` page component
   2. The path `/planets` links to the `Planets` page component
   
## Task 2 - A UI for the Satellites Backend Route

Your Satellites Backend route provides the following endpoints;
- Find a satellite by name
- Find the largest or smallest satellite
- Find the densest or least dense satellite

In the following tasks you will create an interface for connecting to each of these

## Task 2.1 - UI for finding the largest and smallest satellite

1. Use the `useEffect` hook to immediately call the endpoint when the component loads
2. Store the results using the `useState` hook
3. Create some UI to display the results

## Task 2.2 - UI for finding the densest or least dense satellite

1. Use the `useEffect` hook to immediately call the endpoint when the component loads
2. Store the results using the `useState` hook
3. Create some UI to display the results

## Task 2.3 - UI for finding a satellite by name

1. Create a `<form>` element
2. Inside the `<form>` element, use a `Text` `<input>` field for handling user input
3. Inside the `<form>` element, Use a `Submit` `<button>` to handle the submission of the user input
4. Store the results using the `useState` hook
5. Create some UI to display the results

## Task 3 - A UI for the Planets Backend Route

Your Planets Backend route provides the following endpoints;
- Find a planet by name
- Find the largest or smallest planet
- Find the planets with the most and least moons
- Find the planets closest to and furthest from the sun
- Find the hottest and coldest planets
- Find the planets with the longest and shortest day

In the following tasks you will create an interface which will connect to each of these. The interface should exist inside the Satellites Page Component.

> You may wish to build sub-components to house each of the UI elements

## Task 3.1 - UI for finding the largest and smallest planet

1. Use the `useEffect` hook to immediately call the endpoint when the component loads
2. Store the results using the `useState` hook
3. Create some UI to display the results

## Task 3.2 - UI for finding the planets with the most and least moons

1. Use the `useEffect` hook to immediately call the endpoint when the component loads
2. Store the results using the `useState` hook
3. Create some UI to display the results

## Task 3.3 - UI for finding the planets closest to and furthest from the sun

1. Use the `useEffect` hook to immediately call the endpoint when the component loads
2. Store the results using the `useState` hook
3. Create some UI to display the results

## Task 3.4 - UI for finding the hottest and coldest planets

1. Use the `useEffect` hook to immediately call the endpoint when the component loads
2. Store the results using the `useState` hook
3. Create some UI to display the results

## Task 3.5 - UI for finding the planets with the longest and shortest day

1. Use the `useEffect` hook to immediately call the endpoint when the component loads
2. Store the results using the `useState` hook
3. Create some UI to display the results

## Task 3.6 - UI for Find a planet by name

1. Create a `<form>` element
2. Inside the `<form>` element, use a `Text` `<input>` field for handling user input
3. Inside the `<form>` element, Use a `Submit` `<button>` to handle the submission of the user input
4. Store the results using the `useState` hook
5. Create some UI to display the results
