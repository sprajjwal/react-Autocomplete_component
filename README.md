Features:
1. validator
2. onChange

# AutoComplete

This is a reusable React Component that can be used straight up by copying over the Utils folder along with the Tree.jsx file.

## Features:

This Component allow features that developers will find really useful. This Features include:

- Ability to pass a list of items to hint word-completion from.
- Ability to pass a custom Validator
- Ability to pass a callback to get the selected input.
- Ability to remember selections by adding it to localhost
- Ability to add a Namespace to be able to re-use the component.

## DATALIST

The Suggest component can take a list as prop to make the inner tree from. This can be acheived by passing it to `data` in the following way.

```javascript
const items = ['apple', 'adam', 'app', 'alan', 'airport', 'anthony'];
<Suggest
data={items}
/>

```

## VALIDATOR

The Suggest Component can take a validator function that get run everytime user makes an input. The input doesn't get registered if the validator doesn't return true for the input.

Here is an example validator that can also be seen in App.js in src.

```javascript
function validator(input) {
  for (let i = 0; i < input.length; i += 1) {
    if (!isNaN(input[i])) {
      return false;
    }
  }
  return true;
}
```

This can then be passed to the component like this:

```
<Suggest
  validator={validator}
/>
```

Now, an if the user enters `2`, the validator will approve it and the component will accept the input. However, if the user enters an `a` after, the validator will deny it and the input will still have `2` only.

## GETTING THE VALUE

Now, since this is an input bar, the values need to be accessed after a user enters it. This can be accessed by passing a callback through props to `onChange` in the following way.

```javascript
<Suggest
  onChange={(prefix) => { console.log(prefix); }}
/>
```

## SAVING PREVIOUS SELECTION

The Suggest Component












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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
