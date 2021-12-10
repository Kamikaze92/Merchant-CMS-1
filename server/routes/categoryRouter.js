const express = require("express");
const router = express.Router();
const Controller = require("../controllers/category");
router.get("/", Controller.getAllCategories);
router.post("/", Controller.postCategory);
router.put("/:id", Controller.putCategory);
router.delete("/:id", Controller.deleteCategory);

router.post("/sub/", Controller.postSubCategory);
router.put("/sub/:id", Controller.putSubCategory);
router.delete("/sub/:id", Controller.deleteSubCategory);
module.exports = router;
