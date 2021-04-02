/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const getAllOrders = (req, res, next) => {
  const parameters = {
    include: [
      {
        model: base.TBProducts,
        as: "TBProducts",
        required: false,
        attributes: ["id", "name", "typeProducts", "category", "image", "price", "typeMenu"],
        through: {
          model: base.TBProductsOrders,
          as: "qtd",
          attributes: ["qtd"],
        },
      },
    ],
  };
  functions
    .findAllSelect(base.TBOrders, parameters)
    .then((data) => {
      if (data.length === 0) {
        return res.status(400).json({
          code: 400,
          message: "Orders not found",
        });
      }
      res.status(200).json(data);
    })
    .catch(next);
};

const getOrderByID = (req, res, next) => {
  const { id } = req.params;
  const parameters = {
    where: { id: Number(id) },
    include: [
      {
        model: base.TBProducts,
        as: "TBProducts",
        required: false,
        attributes: ["id", "name", "typeProducts", "category", "image", "price", "typeMenu"],
        through: {
          model: base.TBProductsOrders,
          as: "qtd",
          attributes: ["qtd"],
        },
      },
    ],
  };

  functions
    .findAllSelect(base.TBOrders, parameters)
    .then((data) => {
      if (data.length === 0) {
        return res.status(400).json({
          code: 400,
          message: "Order not found",
        });
      }
      res.status(200).json(data);
    })
    .catch(next);
};

const postOrders = async (req, res) => {
  const { userID, clientName, table, status, comments, products } = req.body;
  const parameters = {
    userID,
    clientName,
    table,
    status,
    comments,
  };

  const user = await base.TBUsers.findByPk(userID);

  if (!user) {
    return res.status(400).json({
      code: 400,
      message: "userID not found.",
    });
  }
  const savedOrder = await base.TBOrders.create(parameters);
  const { id } = savedOrder;

  products.forEach(async (item) => {
    const product = await base.TBProducts.findByPk(item.id);
    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }

    const poList = {
      productsID: item.id,
      ordersID: id,
      qtd: item.qtd,
    };
    await base.TBProductsOrders.create(poList);
  });
  return res.status(201).json(savedOrder);
};

const putOrderByID = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  functions
    .updateDB(
      base.TBOrders,
      { status },
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
          status: "Order information has been successfully changed",
        });
      }
      if (data[0] === 0 || data[0] === false) {
        return res.status(400).json({
          code: 400,
          status: "Order information couldn't be changed",
        });
      }
    })
    .catch(next);
};

const deleteOrderByID = async (req, res, next) => {
  const { id } = req.params;
  const parameters = { where: { id: Number(id) } };
  functions
    .destroyDelete(base.TBOrders, parameters)
    .then((data) => {
      if (data === 1 || data === true) {
        return res.status(201).json({
          code: 201,
          status: "Order was successfully deleted",
        });
      }
      if (data === 0 || data === false) {
        return res.status(400).json({
          code: 400,
          status: "Order couldn't be deleted",
        });
      }
    })
    .catch(next);
};

module.exports = {
  postOrders,
  getOrderByID,
  getAllOrders,
  putOrderByID,
  deleteOrderByID,
};
