const express = require('express');
const router = express.Router();
const roleRouter = require('./roleRouter');
const privilegeRouter = require('./privilegeRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');

router.use('/roles', roleRouter);
router.use('/privileges', privilegeRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);

module.exports = router;
