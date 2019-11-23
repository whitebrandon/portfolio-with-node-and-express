/******************************************
    Treehouse Techdegree:
    FSJS project 6 - Static Node.js and Express Site
    Name: Brandon White
    Date of Last Modification: 23/11/2019
******************************************/

const express = require('express');
const app = express();

const indexRoute = require('./routes');
const aboutRoute = require('./routes/about.js');
const projectRoutes = require('./routes/projects.js');

const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use("/", indexRoute);

app.use("/about", aboutRoute);

app.use("/projects", projectRoutes);

app.use((req, res, next) => {
    next(new Error("The requested page was not found"));
});

app.use(function (err, req, res, next) {
    console.error(err)
    res.render('error', {
        message: "Page Not Found",
        status: 404,
        stack: err.stack
    });
});

app.listen(port, () => {
    console.log(`The application is running on localhost:${port}...`);
});