# PokemonApp

## Documentation

- [Endpoints](documentation/endpoints.md) - Cointains all services' routes.

## In Markdown

Inspired by [@iros](https://github.com/iros)'s [documentation
gist](https://gist.github.com/iros/3426278).


## Directory structure

This is the main directory structure you end up with following the instructions of this page:

```plaintext
|-- src
|   |-- Assets
|       |-- FONTS
|       |-- IMAGES
|       |-- SCSS
|           |-- 00 - VENDOR
|           |-- 01 - ATOMS
|           |-- 02 - MOLECULES
|           |-- 03 - ORGANISMS
|           |-- 04 - TEMPLATES
|           |-- 05 - PAGES
|   |-- components
|           |-- 00 - VENDOR
|           |-- 01 - ATOMS
|           |-- 02 - MOLECULES
|           |-- 03 - ORGANISMS
|           |-- 04 - TEMPLATES
|           |-- 05 - PAGES
|   |-- plugins
|   |-- router
|       |-- index.js
|       |-- routes.js
|   |-- store
|       |-- Pokemos
|           |-- index.js
|       |-- index.js
|   |-- App.vue
|   |-- main.js
|-- eslintrc.js
|-- babel.config.js
|-- jest.config.js
|-- package.json
```

- `/Assets/documentation` - contains information files
- `/components` - contains components of vuejs
- `/plugins` - contains plugins used in the project
- `/router` - contains routes used in the project
- `/store` - contains vuex modules used in the project

---

## Overview

The Project installation consists of setting up the following components:

1. [NodeJs](https://nodejs.org/en/) - This necesary install tool
1. [Yarn](https://yarnpkg.com/) - This necesary install tool
1. [Vuejs](https://cli.vuejs.org/) - This necesary install tool

---

## Development

### Prerequisite

You'll need to have at least [NodeJs](https://nodejs.org/en/) installled to run the application and
[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installled to clone the repository and submit a pull request.

### Architecture components
In this project we use the following development concepts:

1. [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) 
1. [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) 
1. [BEM CSS](https://blog.interactius.com/metodolog%C3%ADa-css-block-element-modifier-bem-f26e69d1de3) 

Principals Functions in store:

* THIS FORMAT NAMED FUNCTIONS :
  * State      -> S_
  * Mutation   -> M_
  * Action     -> A_
  * Getter     -> G_

* FORMAT FUNCTION LOGICS
  * SET      -> setting data in state
  * PUSH     -> pushing data in array state
*
* DEFAULT MUTATIONS
  * SET_DATA     -> set data in element state
  * PUSH_DATA    -> push data in element state
### Installed Plugins
This project uses the following plugins

1. [Vee Validate](https://vee-validate.logaretm.com/v4/) 
1. [Vuex](https://vuex.vuejs.org/) 
1. [Axios](https://github.com/axios/axios) 
1. [VueJsModal](https://euvl.github.io/vue-js-modal/) 
1. [vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) 
1. [secure-ls](https://github.com/softvar/secure-ls) 

### Configuration to run the environment

You need to know a little of Git, which is the tool that helps us controlling our files' versioning.

```bash
git clone git@github.com:makrozai/pokemon-app.git
git cd pokemon-app/
```

```js
// this instalation project
yarn install
```

### Execute project

```js
// Compiles and hot-reloads for development
yarn serve

// Compiles and minifies for production
yarn build
```

## Restriction

The code in this repository is protected for makrozai.

Do what you want, [Unlicense dot org](http://unlicense.org/), spread the word.

### Contributors

| [![Marco Condori][luismayta_avatar]][luismayta_homepage]<br/>[Marco condori][luismayta_homepage] |
| ------------------------------------------------------------------------------------------------ |

[luismayta_homepage]: https://github.com/makrozai
[luismayta_avatar]: https://github.com/makrozai.png?size=150
