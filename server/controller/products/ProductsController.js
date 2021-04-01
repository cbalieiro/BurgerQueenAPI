/* eslint-disable consistent-return */
const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const getAllProducts = (req, res, next) => {
  functions.findAllSelect(base.TBProducts)
    .then((data) => {
      if (data.length === 0) {
        return res.status(400).json({
          code: 400,
          message: "Products not found",
        });
      }
      res.status(200).json(data);
    })
    .catch(next);
};

const getProductsByID = (req, res, next) => {
  const { id } = req.params;
  functions
    .findByPkSelect(base.TBProducts, id)
    .then((data) => {
      if (data === null) {
        return res.status(400).json({
          code: 400,
          message: "Product not found",
        });
      }
      res.status(200).json(data);
    })
    .catch(next);
};

const postProduct = (req, res, next) => {
  const bodyInput = req.body; /** desconstruir */
  functions
    .createInsert(base.TBProducts, bodyInput)
    .then((data) => res.status(201).json(data))
    .catch(next);
};

const putProductByID = async (req, res, next) => {
  const { id } = req.params;
  const { image, price } = req.body;
  functions
    .updateDB(
      base.TBProducts,
      {
        image,
        price,
      },
      {
        where: {
          id: Number(id),
        },
      },
    )
    .then((data) => res.status(201).json(data))
    .catch(next);
};

const deleteProductByID = async (req, res, next) => {
  const { id } = req.params;
  const parameters = { where: { id: Number(id) } };
  functions
    .destroyDelete(base.TBProducts, parameters)
    .then((data) => res.status(201).json(data))
    .catch(next);
};

module.exports = {
  getAllProducts,
  getProductsByID,
  postProduct,
  putProductByID,
  deleteProductByID,
};
