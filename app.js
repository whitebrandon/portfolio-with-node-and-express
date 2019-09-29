const express = require('express');
const {projects} = require('./data.json');

const app = express();

const indexRoute = require('./routes');
const aboutRoute = require('./routes/about.js');
const projectRoutes = require('./routes/projects.js');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use("/", indexRoute);

app.use("/about", aboutRoute);

app.use("/projects", projectRoutes);

app.listen(3000, () => {
    console.log('The application is running on localhost:3000...');
});