const express = require('express');
const router = express.Router();
const roleRouter = require('./roleRouter');
const privilegeRouter = require('./privilegeRouter');
const userGroupsRouter = require('./userGroupsRouter');

router.use('/roles', roleRouter);
router.use('/privileges', privilegeRouter);
router.use('/user-groups', userGroupsRouter);

module.exports = router;