/* eslint-disable consistent-return */
const base = require("../../db/models");
// const functions = require("../../sequilezeFunctions");

const postOrders = async (req, res) => {
  const {
    userID, clientName, table, status, comments, products,
  } = req.body;
  const parameters = {
    userID, clientName, table, status, comments,
  };

  // let

  // functions
  //   .createInsert(base.TBOrders, parameters)
  //   .then((data) => res.status(201).json(data))
  //   .catch(next);

  const savedOrder = await base.TBOrders.create(parameters);

  products.forEach(async (item) => {
    const product = await base.TBProducts.findByPk(item.id);
    if (!product) {
      return res.status(400).json({ error: "not bad" });
    }

    const poList = {
      productsID: item.id,
      ordersID: savedOrder.id,
      qtd: item.qtd,
    };
    await base.TBProductsOrders.create(poList);
  });
  return res.status(200).json(savedOrder);
};

// const getAllExamples = (req, res) => {
//   console.log("você também pode utilizar o console para visualizar =)");
//   res.send("Request feita");
// };

module.exports = { postOrders };
