const express = require('express');
const router = express.Router();
const roleRouter = require('./roleRouter');
const privilegeRouter = require('./privilegeRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const userGroupsRouter = require('./userGroupsRouter');
const authRouter = require('./authRouter');
const historyRouter = require('./historyRouter');
const provinceRouter = require('./provinceRouter');
const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authentication');

router.use('/', authRouter);
router.use('/', provinceRouter);
router.use('/categories', categoryRouter);

router.use(authentication);

router.use('/roles', roleRouter);
router.use('/privileges', privilegeRouter);
router.use('/users', userRouter);
router.use('/user-groups', userGroupsRouter);
router.use('/histories', historyRouter);

router.use(errorHandler);

module.exports = router;
