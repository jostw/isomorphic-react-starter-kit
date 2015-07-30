# Isomorphic React Starter Kit

This project shows how to build an isomorphic application with React and Flux.
It is just another React starter kit includes some cool stuff.
If you are having trouble building isomorphic application with React and Flux, maybe you can find some answers in the codebase.

## Overview

This project includes the following tools.

- [React](http://facebook.github.io/react/)
- [React Router](http://rackt.github.io/react-router/)
- [Alt](http://alt.js.org/)
- [Immutable](https://facebook.github.io/immutable-js/)
- [Express](http://expressjs.com/)
- [BrowserSync](http://www.browsersync.io/)
- [Webpack](http://webpack.github.io/)
- [Babel](https://babeljs.io/)

## Getting Started

First, clone this project.

```
git clone https://github.com/jostw/isomorphic-react-starter-kit.git
```

- Make sure [Node.js](https://nodejs.org/) is installed properly.

- Use ` npm start ` for watching files and developing at ` http://localhost:3000 `.

- Use ` npm run build ` for production.

## Development

- ` app.js `: server side application
- ` js/app.js `: client side application

- Following features are isomorphic, shared between server side and client side applications.
    - ` js/app/config.js `: shared configurations
    - ` js/app/routes.js `: routing settings
    - ` js/app/request.js `: send ajax request with [SuperAgent](http://visionmedia.github.io/superagent/)
    - ` js/components/*.jsx `: react components

## Contribute

Pull requests are welcome :)

## License

MIT
