# chaseadams.io

[![Circle CI](https://img.shields.io/circleci/project/chaseadamsio/chaseadams.io/master.svg)](https://circleci.com/gh/chaseadamsio/chaseadams.io)


_The personal website of Chase Adams._

## Technologies

- Hugo
- Webpack

## Publishing

- Generate `app.[hash].js`, `app.[hash].css` & `manifest.json` with webpack
- Update `manifest` key in `config.json` with `manifest.js`
- Generate static `html` using `hugo`
- Publish to `surge.sh`
