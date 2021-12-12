const router = require('express').Router();
const ProvinceController = require('../controllers/province')

router.get('/provinces', ProvinceController.getProvince);

module.exports = router;