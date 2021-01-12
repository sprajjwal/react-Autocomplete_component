# WORD SUGGEST

This is a reusable React Component that can be used straight up by copying over the Utils folder along with the Suggest.jsx file.

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

```javascript
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

The Suggest Component automatically updates selections users make to LocalStorage in an Object named after the Namespace provied to the component. This allows to share suggestions among multiple instances of the component or have unique suggestions.

This can be acheived by passing the same or different names to the component in the following way.

```javascript
<Suggest
name="first_name"
/>
```
