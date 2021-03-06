const { Category } = require("../models");
const redis = require("../config/redis");

module.exports = class CategoryController {
  static async getAllCategoriesNonTenant(req, res, next) {
    try {
      let chace = await redis.get("categories_non_tenant");
      if (chace) {
        res.status(200).json(JSON.parse(chace));
      } else {
        let response = await Category.findAll({
          include: [{
            model: Category,
            as: 'sub_category',
            require: false,
          }],
        });
        await redis.set("categories_non_tenant", JSON.stringify(response));
        res.status(200).json(response);
      }
    } catch (error) {
      next(error);
    }
  }

  static async getAllCategoriesIsTenant(req, res, next) {
    try {
      let chace = await redis.get("categories_tenant");
      if (chace) {
        res.status(200).json(JSON.parse(chace));
      } else {
        let response = await Category.findAll({
          where: {
            parent_id: null,
            is_tenant_category: true,
          },
        });
        await redis.set("categories_tenant", JSON.stringify(response));
        res.status(200).json(response);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async postCategoryIsTenant(req, res, next) {
    try {
      let { name } = req.body;
      let response = await Category.create({
        name,
        is_tenant_category: true,
      });
      await redis.del("categories_tenant");
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
        is_tenant_category: false,
      });
      await redis.del("categories_non_tenant");
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
            name: "category_not_found",
          };
        }

        let { name, description } = req.body;
        if (!name) {
          throw {
            name: "name_is_required",
          };
        }
        if (!description) {
          throw {
            name: "description_is_required",
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
        await redis.del("categories_non_tenant");
        res.status(200).json(data[0]);
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
            name: "category_not_found",
          };
        }
        let { name } = req.body;
        if (!name) {
          throw {
            name: "name_is_required",
          };
        }
        let [created, data] = await Category.update(
          { name },
          {
            where: {
              id: +id,
            },
            returning: true,
          }
        );
        await redis.del("categories_tenant");
        res.status(200).json(data[0]);
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
          name: "category_not_found",
        };
      }
      if (
        response.parent_id === null &&
        response.is_tenant_category === false
      ) {
        await redis.del("categories_non_tenant");
      }

      if (response.parent_id === null && response.is_tenant_category === true) {
        await redis.del("categories_tenant");
      }

      if (Number(response.parent_id)) {
        await redis.del("categories_non_tenant");
      }
      await Category.destroy({
        where: { id: +id },
      });
      res.status(200).json({
        message: `Category with id ${id} has been deleted`,
      });
    } catch (error) {
      console.log(error, ">>");
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
            name: "category_not_found",
          };
        }
        if (!name) {
          throw {
            name: "name_is_required",
          };
        }
        let data = await Category.create({
          name,
          parent_id: category.id,
        });
        await redis.del("categories_non_tenant");
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
          name: "sub_category_not_found",
        };
      }
      let { name, parent_id } = req.body;
      if (!parent_id) {
        throw {
          name: "category_not_found",
        };
      }
      let category = await Category.findByPk(+parent_id);
      if (!category) {
        throw {
          name: "category_not_found",
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
      await redis.del("categories_non_tenant");
      res.status(200).json(data[0]);
    } catch (error) {
      next(error);
    }
  }

  static async getDetailCategory(req, res, next) {
    try {
      let id = req.params.id;
      let response = await Category.findOne({
        where: {
          id: +id,
          // is_tenant_category: false,
          // parent_id: null,
        },
        include: {
          model: Category,
          as: 'sub_category',
          require: true,
        },
      });
      if (!response) {
        throw {
          name: "category_not_found",
        };
      }
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
};
