const express = require("express");
const router = express.Router();
const Controller = require("../controllers/category");
const errorHandle = require("../middlewares/errorHandler");
router.get("/", Controller.getAllCategoriesNonTenant);
router.post("/", Controller.postCategoryNonTenant);
router.put("/:id", Controller.putCategoryNonTenant);

router.get("/tenant", Controller.getAllCategoriesIsTenant);
router.post("/tenant", Controller.postCategoryIsTenant);
router.put("/tenant/:id", Controller.putCategoryIsTenant);

router.post("/sub/:category_id", Controller.postSubCategory);
router.put("/sub/:id", Controller.putSubCategory);

router.get("/:id", Controller.getDetailCategory);

router.delete("/:id", Controller.deleteCategory);

router.use(errorHandle);

module.exports = router;
