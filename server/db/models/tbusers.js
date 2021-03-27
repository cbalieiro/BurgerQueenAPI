const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TBUsers extends Model {
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
  TBUsers.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: {
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
          notEmpty: {
            msg: "The Email field must not be empty",
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The Password field must not be empty",
          },
          len: {
            args: [4, 20],
            msg: "Password must be 4-20 characters",
          },
        },
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The Role field must not be empty",
          },
        },
      },
      restaurant: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The Restaurant field must not be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "TBUsers",
    }
  );
  return TBUsers;
};
