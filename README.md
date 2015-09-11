# React Native 0.10.1 and Redux 2.0.0 Example

Redux is amazing and combine it with React-Native makes the whole experience more enjoyable. ** However ** there is one tiny thing you have to do. You have to fork react-native and apply 2 patches.

First `Babel` in React_Native needs to be patch in order for us to use some features such as `Decorator` and `module`. In order to do that you have to [patch](https://github.com/alinz/react-native/commit/4182e64b4a94639e828c1792fcd41dbd4dae8118) `packager/packager.js`. This patch lets babel reads configuration from `.babelrc` file.

Second, This patch is optional but highly recommended, lets you use `import` with multiple line. As an example,

instead of this,

```js
import React, { Component, View, Text, ScrollView } from 'react-native'
```

you can do this with this patch:

```js
import React, {
  Component,
  View,
  Text,
  ScrollView
} from 'react-native'
```

which makes it alot easer to read.

So for doing that, you have to [patch](https://github.com/alinz/react-native/commit/17900b71dad37b290b8416a238d60de3319c8591) `packager/react-packager/src/DependencyResolver/replacePatterns.js` import regular expression to include enter char.

I have already using my [fork](https://github.com/alinz/react-native/tree/v0.10.1-stable-redux) in production which includes latest stable react-native 0.10 with these two patches. In this example, I have used my fork.

Enjoy and happy reducing :P
