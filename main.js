const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cors = require('cors');

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cors());

// import routes
const userRoute = require('./src/routes/user_route');
// const boardsRoute = require('./src/routes/boards_route');
// const pinsRoute = require('./src/routes/pins_route');
// const board_pinsRoute = require('./src/routes/board_pins_route');

//using route files when specified route is reached
app.use('/user', userRoute);
// app.use('/boards', boardsRoute);

// app.use('/boards', pinsRoute);
// app.use('/boards', board_pinsRoute);

//Error-handling 
app.all('*', (req, res, next) => res.sendStatus(404))
app.use((err, req, res, next) => {
  res.status(err.status).json(err)
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
      console.log(`Your server.js port is running ${port}!`)
    })
}

module.exports = app