if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use([
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
]);


const PORT = process.env.PORT || 3000;
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
