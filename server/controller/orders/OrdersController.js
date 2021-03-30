/* eslint-disable consistent-return */
const base = require("../../db/models");
const functions = require("../../sequilezeFunctions");

const postOrders = async (req, res) => {
  const {
    userID, clientName, table, status, comments, products,
  } = req.body;
  const parameters = {
    userID,
    clientName,
    table,
    status,
    comments,
  };
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

// const getAllOrders = (req, res) => {
//   console.log("você também pode utilizar o console para visualizar =)");
//   res.send("Request feita");
// };

const getOrderByID = (req, res, next) => {
  const { id } = req.params;

  const parameters = {
    where: { id: Number(id) },
    include: [
      {
        model: base.TBProducts,
        as: "TBProducts",
        required: false,
        attributes: ["id", "name", "typeProducts"],
        through: {
          model: base.TBProductsOrders,
          as: "TBProductsOrders",
          attributes: ["qtd"],
        },
      },
    ],
  };

  functions
    .findAllSelect(base.TBOrders, parameters)
    .then((data) => res.status(200).json(data))
    .catch(next);
};

module.exports = { postOrders, getOrderByID };
