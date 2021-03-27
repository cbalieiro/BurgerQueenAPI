const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const getAllUsers = (req, res) => {
  const parameters = { attributes: { exclude: ["password"] } };
  const databaseCall = functions
    .findAllSelect(base.TBUser, parameters)
    .then((data) => {
      return res.status(200).json(data);
    });
};

const getUsersByID = (req, res) => {
  const { id } = req.params;
  const parameters = {
    where: {
      id: Number(id),
    },
    attributes: {
      exclude: ["password"],
    },
  };
  const databaseCall = functions
    .findAllSelect(base.TBUser, parameters)
    .then((data) => {
      return res.status(200).json(data);
    });
};

const postUser = async (req, res) => {
  const { email } = req.body;
  const parameters = {
    where: { email },
    defaults: req.body,
  };
  const databaseCall = functions
    .createSelectInsert(base.TBUser, parameters)
    .then((data) => {
      return res.status(201).json(data);
    });
};

const putUserByID = async (req, res) => {
  const { id } = req.params;
  const { name, password, role } = req.body;
  const databaseCall = functions
    .updateDB(
      base.TBUser,
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
    });
};

const deleteUserByID = async (req, res) => {
  const { id } = req.params;
  const parameters = { where: { id: Number(id) } };
  const databaseCall = functions
    .destroyDelete(base.TBUser, parameters)
    .then((data) => {
      return res.status(201).json(data);
    });
};

module.exports = {
  getAllUsers,
  getUsersByID,
  postUser,
  putUserByID,
  deleteUserByID,
};
