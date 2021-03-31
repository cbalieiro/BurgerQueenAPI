/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const getAllUsers = (req, res, next) => {
  const parameters = { attributes: { exclude: ["password"] } };
  functions
    .findAllSelect(base.TBUsers, parameters)
    .then((data) => res.status(200).json(data))
    .catch(next);
};

const getUsersByID = (req, res, next) => {
  const { id } = req.params;
  const parameters = {
    where: {
      id: Number(id),
    },
    attributes: {
      exclude: ["password"],
    },
  };
  functions
    .findAllSelect(base.TBUsers, parameters)
    .then((data) => {
      if (data.length === 0) {
        return res.status(400).json({
          code: 400,
          message: "User not found",
        });
      }
      res.status(200).json(data);
    })
    .catch(next);
};

const postUser = async (req, res, next) => {
  const { email, name, password, role, restaurant } = req.body;
  const parameters = {
    where: { email },
    defaults: {
      email,
      name,
      password,
      role,
      restaurant,
    },
  };
  functions
    .createSelectInsert(base.TBUsers, parameters)
    .then((data) => {
      const verifiedStatus = data[1];
      const result = data[0];
      if (verifiedStatus === true) {
        return res.status(201).json(result);
      }
      if (verifiedStatus === false) {
        return res.status(400).json({
          code: 400,
          message: "The provided e-mail is already registered.",
        });
      }
    })
    .catch(next);
};

const putUserByID = async (req, res, next) => {
  const { id } = req.params;
  const { name, password, email, restaurant, role } = req.body;

  if (email || restaurant) {
    return res.status(400).json({
      code: 400,
      status: "User information couldn't be changed",
    });
  }
  functions
    .updateDB(
      base.TBUsers,
      {
        name,
        password,
        role,
      },
      {
        where: {
          id: Number(id),
        },
      }
    )
    .then((data) => {
      if (data[0] === 1 || data[0] === true) {
        return res.status(201).json({
          code: 201,
          status: "User information has been successfully changed",
        });
      }
      if (data[0] === 0 || data[0] === false) {
        return res.status(400).json({
          code: 400,
          status: "User information couldn't be changed",
        });
      }
    })
    .catch(next);
};

const deleteUserByID = async (req, res, next) => {
  const { id } = req.params;
  const parameters = { where: { id: Number(id) } };
  functions
    .destroyDelete(base.TBUsers, parameters)
    .then((data) => res.status(201).json(data))
    .catch(next);
};

module.exports = {
  getAllUsers,
  getUsersByID,
  postUser,
  putUserByID,
  deleteUserByID,
};
