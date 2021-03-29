const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const getAllUsers = (req, res, next) => {
  const parameters = { attributes: { exclude: ["password"] } };
  functions
    .findAllSelect(base.TBUsers, parameters)
    .then((data) => {
      return res.status(200).json(data);
    })
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
      return res.status(200).json(data);
    })
    .catch(next);
};

const postUser = async (req, res, next) => {
  const { email, name, password, role, restaurante } = req.body;
  const parameters = {
    where: { email },
    defaults: { email, name, password, role, restaurante },
  };
  functions
    .createSelectInsert(base.TBUsers, parameters)
    .then((data) => {
      console.log(data); /** corrigir tratativa de errors */
      return res.status(201).json(data);
    })
    .catch(next);
};

const putUserByID = async (req, res, next) => {
  const { id } = req.params;
  const { name, password, role } = req.body;
  functions
    .updateDB(
      base.TBUsers,
      {
        name: name,
        password: password,
        role: role,
      },
      {
        where: {
          id: Number(id),
        },
      }
    )
    .then((data) => {
      if (data === 1 || data === true) {
        return res.status(201).json({
          status: "User information has been successfully changed",
        });
      }
      if (data === 0 || data === false) {
        return res.status(400).json({
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
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch(next);
};

module.exports = {
  getAllUsers,
  getUsersByID,
  postUser,
  putUserByID,
  deleteUserByID,
};
