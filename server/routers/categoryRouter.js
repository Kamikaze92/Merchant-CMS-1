const express = require("express");
const router = express.Router();
const Controller = require("../controllers/category");
const errorHandle = require("../middlewares/errorHandler");
const authentication = require('../middlewares/authentication')

router.get("/", Controller.getAllCategoriesNonTenant);
router.get("/tenant", Controller.getAllCategoriesIsTenant);

router.get("/:id", Controller.getDetailCategory);
router.use(authentication)
router.post("/", Controller.postCategoryNonTenant);
router.put("/:id", Controller.putCategoryNonTenant);
router.post("/tenant", Controller.postCategoryIsTenant);
router.put("/tenant/:id", Controller.putCategoryIsTenant);

router.post("/sub/:category_id", Controller.postSubCategory);
router.put("/sub/:id", Controller.putSubCategory);


router.delete("/:id", Controller.deleteCategory);

router.use(errorHandle);

module.exports = router;
