const { Category } = require("../models");

module.exports = class CategoryController {
  static async getAllCategoriesNonTenant(req, res, next) {
    try {
      let response = await Category.findAll({
        include: "SubCategory",
        where: {
          parent_id: null,
          is_tenant_group: false,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async getAllCategoriesIsTenant(req, res, next) {
    try {
      let response = await Category.findAll({
        include: "SubCategory",
        where: {
          parent_id: null,
          is_tenant_group: true,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async postCategoryIsTenant(req, res, next) {
    try {
      let { name } = req.body;
      let response = await Category.create({
        name,
        is_tenant_group: true,
        createdBy: "req.user.name",
      });
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async postCategoryNonTenant(req, res, next) {
    try {
      let { name, description } = req.body;
      if (!description) {
        throw {
          name: "description_is_required",
        };
      }
      let response = await Category.create({
        name,
        description,
        createdBy: "req.user.name",
        is_tenant_group: false,
      });
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async putCategoryNonTenant(req, res, next) {
    try {
      try {
        let id = req.params.id;
        let response = await Category.findByPk(+id);
        if (!response) {
          throw {
            name: "Category not found",
          };
        }

        let { name, description } = req.body;
        if (!description) {
          throw {
            name: "Description is required",
          };
        }
        let [created, data] = await Category.update(
          { name, description },
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

  static async putCategoryIsTenant(req, res, next) {
    try {
      try {
        let id = req.params.id;
        let response = await Category.findByPk(+id);
        if (!response) {
          throw {
            name: "Category not found",
          };
        }
        let { name } = req.body;
        let [created, data] = await Category.update(
          { name },
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

  static async postSubCategory(req, res, next) {
    try {
      try {
        let { name } = req.body;
        let id = req.params.category_id;
        let category = await Category.findByPk(+id);
        if (!category) {
          throw {
            name: "Category not found",
            createdBy: "req.user.name",
          };
        }
        let data = await Category.create({
          name,
          createdBy: "req.user.name",
          parent_id: category.id,
        });
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
      let id = req.params.id;
      let response = await Category.findByPk(+id);
      if (!response) {
        throw {
          name: "Sub category not found",
        };
      }
      let { name, parent_id } = req.body;
      if (!parent_id) {
        throw {
          name: "Category not found",
        };
      }
      let [updated, data] = await Category.update(
        { name, parent_id },
        {
          where: {
            id: +id,
          },
          returning: true,
        }
      );
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getDetailCategory(req, res, next) {
    try {
      let id = req.params.id;
      let response = await Category.findOne({
        where: {
          id: +id,
          is_tenant_group: false,
          parent_id: null,
        },
        include: "SubCategory",
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
};
