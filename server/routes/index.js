const express = require('express');
const router = express.Router();
const roleRouter = require('./roleRouter');
const privilegeRouter = require('./privilegeRouter');

router.use('/roles', roleRouter);
router.use('/privileges', privilegeRouter);

module.exports = router;