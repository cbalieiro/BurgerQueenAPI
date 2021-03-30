const { Router } = require("express");
const OrdersController = require("../controller/orders/OrdersController");

const router = Router();

router.post("/", OrdersController.postOrders);

module.exports = router;
