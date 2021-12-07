'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Privilege extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Privilege.init({
    action_a: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: {
          msg: "Privilege action can't be empty"
        },
        notEmpty: {
          msg: "Privilege action can't be empty"
        }
      }
    },
    action_b: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: {
          msg: "Privilege action can't be empty"
        },
        notEmpty: {
          msg: "Privilege action can't be empty"
        }
      }
    },
    action_c: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: {
          msg: "Privilege action can't be empty"
        },
        notEmpty: {
          msg: "Privilege action can't be empty"
        }
      }
    },
    action_d: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: {
          msg: "Privilege action can't be empty"
        },
        notEmpty: {
          msg: "Privilege action can't be empty"
        }
      }
    },
    action_e: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notNull: {
          msg: "Privilege action can't be empty"
        },
        notEmpty: {
          msg: "Privilege action can't be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Privilege',
  });
  return Privilege;
};