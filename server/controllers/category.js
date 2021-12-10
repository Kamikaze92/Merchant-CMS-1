const { Category, SubCategory } = require("../models");

module.exports = class CategoryController {
  static async getAllCategories(req, res, next) {
    try {
      let response = await Category.findAll({
        include: {
          model: SubCategory,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async postCategory(req, res, next) {
    try {
      let { name, description, isTenant, createdBy } = req.body;
      let response = await Category.create({
        name,
        description,
        isTenant,
        createdBy,
      });
      console.log(createdBy, ">>>");
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async postSubCategory(req, res, next) {
    try {
      let { name, CategoryId } = req.body;
      let response = await SubCategory.create({
        name,
        CategoryId,
      });
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      let id = req.params.id;
      let response = await Category.findByPk(+id);
      if (!response) {
        throw {
          name: "Category not found",
        };
      }
      await Category.destroy({
        where: { id: +id },
      });
      res.status(200).json({
        message: `Category with id ${id} has been deleted`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async putCategory(req, res, next) {
    try {
      try {
        let id = req.params.id;
        let response = await Category.findByPk(+id);
        if (!response) {
          throw {
            name: "Category not found",
          };
        }
        let { name, description, isTenant, createdBy } = req.body;
        let [created, data] = await Category.update(
          { name, description, isTenant, createdBy },
          {
            where: {
              id: +id,
            },
            returning: true,
          }
        );
        res.status(201).json(data);
      } catch (error) {
        next(error);
      }
    } catch (error) {
      next(error);
    }
  }
  static async putSubCategory(req, res, next) {
    try {
      try {
        let id = req.params.id;
        let response = await SubCategory.findByPk(+id);
        if (!response) {
          throw {
            name: "Sub category not found",
          };
        }
        let { name, CategoryId } = req.body;
        let [updated, data] = await SubCategory.update(
          { name, CategoryId },
          {
            where: {
              id: +id,
            },
            returning: true,
          }
        );
        res.status(201).json(data);
      } catch (error) {
        next(error);
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteSubCategory(req, res, next) {
    try {
      let id = req.params.id;
      let response = await SubCategory.findByPk(+id);
      if (!response) {
        throw {
          name: "Category not found",
        };
      }
      await SubCategory.destroy({
        where: { id: +id },
      });
      res.status(200).json({
        message: `Sub category with id ${id} has been deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
};
