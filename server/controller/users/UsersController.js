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
  const { email } = req.body;
  const parameters = {
    where: { email },
    defaults: req.body,
  };
  functions
    .createSelectInsert(base.TBUsers, parameters)
    .then((data) => {
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
      return res.status(201).json(data);
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
