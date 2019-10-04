# TECH DEGREE PROJECT #6 | STATIC NODE.js AND EXPRESS SITE

a COURSE BY TREEHOUSE

JS CODE by Brandon White | white.brandonsean@gmail.com

A portfolio site to show off the projects I've built.

## Getting Started

Clone repo to local machine using git:

```
$ git init
```
```
$ git clone https://github.com/whitebrandon/techdegree-project-6
```

Install dependencies via npm:

```
$ npm install
```

Run project via node:

```
$ node app.js
```

or npm:

```
$ npm start
```

## Live Version

A live version of this portfolio has been deployed using Heroku, and can be found by clicking on the following link:

[https://chldprdgy720-th-project-6.herokuapp.com/](https://chldprdgy720-th-project-6.herokuapp.com/)

## Built With

* Node.js
* [Express](https://expressjs.com/en/4x/api.html) - Web Framework
* [Pug](https://pugjs.org/api/getting-started.html) - Template Engine
* [Foundation](https://foundation.zurb.com/sites/docs/) - Framework for responsive CSS
* [Animate.css](https://github.com/daneden/animate.css) - Used to add animations via CSS

## License

This project is licensed under the MIT License.

## Acknowledgements

Background texture was located at [transparenttextures.com](https://www.transparenttextures.com/patterns/clean-gray-paper.png)

## Style Changes

I've...

* changed the background of the page and various elements using textures, gradients, and colors
* imported fonts from [Google Fonts](fonts.google.com)
* added text shadows throughout
* added box shadows to thumbnail images
* filtered out color of images so that they would pop on hover; they also scale up on hover
* added animations to images so that when clicked, they lead into the linked page by sliding off the current page
* used pseudo elements to add unicode glyphs to certain list items

## Behaviour Changes

I've created a main.js client-side file and added a function that causes the secondary heading of the about page to switch through a serious of words/phrases (.ie "More than a [designer, illustator, developer]).