const base = require("../../db/models");

const getAllProducts = async (req, res) => {
  try {
    const search = await base.TBProducts.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    return res.status(200).json(search);
  } catch (error) {
    console.log(error);
  }
};

const getProductsByID = async (req, res) => {
  const { id } = req.params;
  try {
    const search = await base.TBProducts.findByPk(Number(id));
    if (search !== null) {
      return res.status(200).json(search);
    }
  } catch (error) {
    console.log(error);
  }
};

const postProduct = async (req, res) => {
  const { email } = req.body;
  try {
    const [user, created] = await base.TBProducts.findOrCreate({
      where: { email },
      defaults: req.body,
    });
    console.log(created);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const putProductByID = async (req, res) => {
  const { id } = req.params;
  const { name, password, role, restaurant } = req.body;
  try {
    const updated = await base.TBProducts.update(
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

const deleteProductByID = async (req, res) => {
  const { id } = req.params;
   try {
    const updated = await base.TBProducts.destroy(
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
  getAllProducts,
  getProductsByID,
  postProduct,
  putProductByID,
  deleteProductByID,
};
