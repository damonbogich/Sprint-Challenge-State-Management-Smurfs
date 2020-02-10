This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


*  What problem does the context API help solve?
*  In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
*  What is the difference between Application state and Component state? When would be a good time to use one over the other?
*  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
*  What is your favorite state management system you've learned and this sprint? Please explain why!

1. With Context API you no longer have to pass props down from component to component.  We can now store data on a context object, and retrieve that data in the necessary components from the context object, not props!

2. 

    1. Actions: objects made up of a type and a payload.  The type describes what the action is supposed to do.  The payload supplies the data that the action is supposed to effect.
    2. Reducers: this is a file that supplies the original state and manipulates state.
    3. The store: The store holds all of the state for the entire app.

3. Application state is the state being held in the store that your whole app has access to.  Component state is only available within its component.  You should use application state when a certain piece of state will be used multiple times.  

4. Redux-thunk: We use Redux Thunk to make the flow asynchronous and make API calls from our action creators.

5. I like redux the best because I can see how it would be so useful in an app that is really big.  I’m having trouble once our app goes beyond two or three components, so passing state in anything bigger than that would probably be confusing for anyone without something like redux.