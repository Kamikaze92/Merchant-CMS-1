const express = require('express');
const router = express.Router();
const roleRouter = require('./roleRouter');
const privilegeRouter = require('./privilegeRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const userGroupsRouter = require('./userGroupsRouter');

router.use('/roles', roleRouter);
router.use('/privileges', privilegeRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/user-groups', userGroupsRouter);

module.exports = router;
