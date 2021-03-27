const { Router } = require("express");
const OrdersController = require("../controller/orders/OrdersController");

const router = Router();

router.get("/", OrdersController.getAllExamples);

module.exports = router;
