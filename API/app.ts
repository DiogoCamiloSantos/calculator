import mongoose from "mongoose";
import { environment } from "./environment/environment";

const express = require('express');
const CalculatorRouter = require('./controllers/Calculator/CalculatorRouter');
const bodyParser = require('body-parser');
var cors = require('cors');

const App = express();
const port = 3000;

mongoose.connect(environment.mongodb)
  .then(() => console.log('Connected!'));

App.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(cors())
App.use('/calc', CalculatorRouter);

export default App;