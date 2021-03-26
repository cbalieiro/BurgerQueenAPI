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

const postUser = async (req, res) => {
  const { name, email, password, role, restaurant } = req.body;
  const resultado = res.result
  try {
    const [user, created] = await base.TBUser.findOrCreate({
      where:{ name, email},
      defaults:req.body
    })
    console.log (created)
    console.log(user)
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, postUser };
