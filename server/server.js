
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());

logger.info('This is an info log');
logger.warn('This is a warning log');
logger.error('This is an error log');

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Example routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
