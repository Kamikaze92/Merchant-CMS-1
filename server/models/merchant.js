'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Merchant.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });

      Merchant.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'sub_category',
      });

      Merchant.belongsTo(models.Merchant, {
        foreignKey: 'parent_id',
        as: 'non_tenant_merchant',
      });

      Merchant.belongsTo(models.Category, {
        foreignKey: 'tenant_category_id',
        as: 'tenant_category',
      });

      Merchant.belongsTo(models.Province, {
        foreignKey: 'province_id',
        as: 'province',
      });

      Merchant.belongsTo(models.City, {
        foreignKey: 'city_id',
        as: 'city',
      });
    }
  }

  Merchant.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'User is required',
          },
          notEmpty: {
            msg: 'User is required',
          },
        },
      }, // required, since merchant need to have user.
      institution: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Institution is required',
          },
          notEmpty: {
            msg: 'Institution is required',
          },
          len: {
            args: [0, 50],
            msg: 'Maximum 50 characters',
          },
          noSpecialCharacter: (value) => {
            if (!value.match(/^[A-Z ]+$/gi)) {
              throw new Error(
                'No special character, only alphabet and space are allowed'
              );
            }
          },
        },
      }, // required, Text, no special character, limit to 50 char.
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Address is required',
          },
          notEmpty: {
            msg: 'Address is required',
          },
        },
      }, // required.
      postal_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Postal code is required',
          },
          notEmpty: {
            msg: 'Postal code is required',
          },
          isNumeric: {
            msg: 'Only numbers are allowed',
          },
          len: {
            args: [0, 5],
            msg: 'Maximum 5 digits',
          },
        },
      }, // required, max 5 digit, only number.
      province_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Province is required',
          },
          notEmpty: {
            msg: 'Province is required',
          },
        },
      }, // required.
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'City is required',
          },
          notEmpty: {
            msg: 'City is required',
          },
        },
      }, // required.
      place_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Place name is required',
          },
          notEmpty: {
            msg: 'Place name is required',
          },
          len: {
            args: [0, 40],
            msg: 'Maximum 40 characters',
          },
          noSpecialCharacter: (value) => {
            if (!value.match(/^[^,\n]+$/gi)) {
              throw new Error(
                'No special character, only alphabet and space are allowed'
              );
            }
          },
        },
      }, // Text, limited special character (no comma, no ENTER), limit to 40 char.
      category_id: {
        type: DataTypes.INTEGER,
        validate: {
          requiredIfNotTenant(value) {
            if (!value && !this.tenant_category_id) {
              // if booth null will error.
              // throw new Error('Category is required');
              throw new Error(`Category is required, ${value} ${this.tenant_category_id}`);
            }
            if (value && this.tenant_category_id) {
              // if booth filled will error.
              throw new Error('Choose one, either category or tenant category');
            }
          },
        },
      }, // not required // must null if have tenant_category_id.
      tenant_category_id: {
        type: DataTypes.INTEGER,
        validate: {
          requiredIfNotTenant(value) {
            if (!value && !this.category_id) {
              // if booth null will error.
              throw new Error('Category is required');
            }
            if (value && this.category_id) {
              // if booth filled will error.
              throw new Error('Choose one, either category or tenant category');
            }
            if (!value && this.parent_id) {
              // if parent_id selected but category still not will error.
              throw new Error('Category is required');
            }
          },
        },
      }, // required // must null if have category_id.
      parent_id: {
        type: DataTypes.INTEGER,
        validate: {
          requiredIfNotTenant: (value) => {
            if (!value && this.tenant_category_id) {
              // if booth null will error.
              throw new Error('Non tenant place name is required');
            }
          },
        },
      }, // required if category tenant selected.
    },
    {
      sequelize,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      modelName: 'Merchant',
      hooks: {
        beforeSave(user) {
          user.category_id = user.category_id || null;
          user.tenant_category_id = user.tenant_category_id || null;
          user.parent_id = user.parent_id || null;
        },
      },
    }
  );
  return Merchant;
};
