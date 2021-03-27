const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const getAllProducts = (req, res) => {
  const databaseCall = functions.findAllSelect(base.TBProducts).then((data) => {
    return res.status(200).json(data);
  });
};

const getProductsByID = (req, res) => {
  const { id } = req.params;
  const databaseCall = functions
    .findByPkSelect(base.TBProducts, id)
    .then((data) => {
      return res.status(200).json(data);
    });
};

const postProduct = (req, res) => {
  const bodyInput = req.body;
  const databaseCall = functions
    .createInsert(base.TBProducts, bodyInput)
    .then((data) => {
      return res.status(201).json(data);
    });
};

const putProductByID = async (req, res) => {
  const { id } = req.params;
  const { image, price } = req.body;
  const databaseCall = functions
    .updateDB(
      base.TBProducts,
      {
        image: image,
        price: price,
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

const deleteProductByID = async (req, res) => {
  const { id } = req.params;
  const parameters = { where: { id: Number(id) } };
  const databaseCall = functions
    .destroyDelete(base.TBProducts, parameters)
    .then((data) => {
      return res.status(201).json(data);
    });
};

module.exports = {
  getAllProducts,
  getProductsByID,
  postProduct,
  putProductByID,
  deleteProductByID,
};
