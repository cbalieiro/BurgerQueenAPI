/* eslint-disable object-curly-newline */
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
  const { image, price, name, typeProducts, category, typeMenu } = req.body;

  if (name || typeProducts || category || typeMenu) {
    return res.status(400).json({
      code: 400,
      status: "Products information couldn't be changed",
    });
  }

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
    .then((data) => {
      if (data[0] === 1 || data[0] === true) {
        return res.status(201).json({
          code: 201,
          status: "Product information has been successfully changed",
        });
      }
      if (data[0] === 0 || data[0] === false) {
        return res.status(400).json({
          code: 400,
          status: "Product information couldn't be changed",
        });
      }
    }).catch(next);
};

const deleteProductByID = async (req, res, next) => {
  const { id } = req.params;
  const parameters = { where: { id: Number(id) } };
  functions
    .destroyDelete(base.TBProducts, parameters)
    .then((data) => {
      if (data === 1 || data === true) {
        return res.status(201).json({
          code: 201,
          status: "Product was successfully deleted",
        });
      }
      if (data === 0 || data === false) {
        return res.status(400).json({
          code: 400,
          status: "Product information couldn't be deleted",
        });
      }
    }).catch(next);
};

module.exports = {
  getAllProducts,
  getProductsByID,
  postProduct,
  putProductByID,
  deleteProductByID,
};
