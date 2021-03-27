const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const getAllProducts = async (req, res) => {
  const databaseCall = functions
  .findSelect(base.TBProducts)
  .then((data) => {return res.status(200).json(data)});
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
  const bodyInput = req.body;
  try {
    const created = await base.TBProducts.create(bodyInput);
    return res.status(201).json(created);
  } catch (error) {
    console.log(error);
  }
};

const putProductByID = async (req, res) => {
  const { id } = req.params;
  const { image, price } = req.body;
  try {
    const updated = await base.TBProducts.update(
      {
        image: image,
        price: price,
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
    const updated = await base.TBProducts.destroy({
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
  getAllProducts,
  getProductsByID,
  postProduct,
  putProductByID,
  deleteProductByID,
};
