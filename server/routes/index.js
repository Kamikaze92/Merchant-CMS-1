const express = require('express');
const router = express.Router();
const roleRouter = require('./roleRouter');
const privilegeRouter = require('./privilegeRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const userGroupsRouter = require('./userGroupsRouter');
const authRouter = require('./authRouter');

router.use('/', authRouter);
router.use('/roles', roleRouter);
router.use('/privileges', privilegeRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/user-groups', userGroupsRouter);

module.exports = router;
