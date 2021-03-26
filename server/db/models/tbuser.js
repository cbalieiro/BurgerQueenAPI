const {
  Model,
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TBUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  TBUser.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notNull: {
          msg: "The Name field must not be empty",
        },
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: "This field must contain a valid email address",
        },
        notNull: {
          msg: "The Email field must not be empty",
        },
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "The Password field must not be empty",
        },
        min: 6,
      },
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "The Role field must not be empty",
        },
      },
    },
    restaurant: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "The Restaurant field must not be empty",
        },
      },
    },
  }, {
    sequelize,
    modelName: "TBUser",
  });
  return TBUser;
};
