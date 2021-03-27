const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const getAllProducts = (req, res, next) => {
  const databaseCall = functions
    .findAllSelect(base.TBProducts)
    .then((resolve) => {
      return res.status(200).json(resolve).catch(next);
    });
};

const getProductsByID = (req, res, next) => {
  const { id } = req.params;
  const databaseCall = functions
    .findByPkSelect(base.TBProducts, id)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch(next);
};

const postProduct = (req, res, next) => {
  const bodyInput = req.body;
  const databaseCall = functions
    .createInsert(base.TBProducts, bodyInput)
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch(next);
};

const putProductByID = async (req, res, next) => {
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
    })
    .catch(next);
};

const deleteProductByID = async (req, res, next) => {
  const { id } = req.params;
  const parameters = { where: { id: Number(id) } };
  const databaseCall = functions
    .destroyDelete(base.TBProducts, parameters)
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch(next);
};

module.exports = {
  getAllProducts,
  getProductsByID,
  postProduct,
  putProductByID,
  deleteProductByID,
};
