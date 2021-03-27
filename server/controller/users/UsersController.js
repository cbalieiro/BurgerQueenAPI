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
  try {
    const [user, created] = await base.TBUser.findOrCreate({
      where: { email },
      defaults: req.body,
    });
    console.log(created);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const putUserByID = async (req, res) => {
  const { id } = req.params;
  const { name, password, role } = req.body;
  try {
    const updated = await base.TBUser.update(
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
    );
    return res.status(201).json(updated);
  } catch (error) {
    console.log(error);
  }
};

const deleteUserByID = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await base.TBUser.destroy({
      where: {
        id: Number(id),
      },
    });
    return res.status(201).json(updated);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUsersByID,
  postUser,
  putUserByID,
  deleteUserByID,
};
