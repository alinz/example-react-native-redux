## Example Project using React-Native 0.16 and Redux 3.0.4

This is a repo for starting a react-native app using Redux.

There are some issues which it needs to be addressed:
 - React-Native >= 0.16 use Babel 6 which doesn't support `Decorator` until until T2645 lands in Babel. So for binding your `connect` use the old style.


instead of this:

```js
@connect(state => ({
  state: state.counter
}))
class CounterApp extends Component {

}

export CounterApp;
```

use this:

```js
class CounterApp extends Component {

}

export default connect(state => ({
  state: state.counter
}))(CounterApp);
```

 - Babel 6 doesn't like old .babelrc and you need to clean all .babelrc in your `node_modules`. I have provided a simple `bash script` to clean all `.bashrc` files.

 once you install packages using `npm install`, make sure to run `npm run clean` to remove all `.bashrc` inside `node_modules`.


Cheers,
