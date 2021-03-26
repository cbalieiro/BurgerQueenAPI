const base = require("../../db/models");

const getAllUsers = async (req, res) => {
  try {
    const search = await base.TBUser.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    return res.status(200).json(search);
  } catch (error) {
    console.log(error);
  }
};

const getUsersByID = async (req, res) => {
  const { id } = req.params;
  try {
    const search = await base.TBUser.findByPk(Number(id));
    if (search !== null) {
      return res.status(200).json(search);
    }
  } catch (error) {
    console.log(error);
  }
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
  const { name, password, role, restaurant } = req.body;
  try {
    const updated = await base.TBUser.update(
      {
        name: name,
        password: password,
        role: role,
        restaurant: restaurant,
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
    const updated = await base.TBUser.destroy(
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

module.exports = {
  getAllUsers,
  getUsersByID,
  postUser,
  putUserByID,
  deleteUserByID,
};
