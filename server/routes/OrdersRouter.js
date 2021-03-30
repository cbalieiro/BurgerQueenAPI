const { Router } = require("express");
const OrdersController = require("../controller/orders/OrdersController");

const router = Router();

router.get("/:id", OrdersController.getOrderByID);
router.get("/", OrdersController.getAllOrders);
router.post("/", OrdersController.postOrders);
router.delete("/:id", OrdersController.deleteOrderByID);
router.put("/:id", OrdersController.putOrderByID);

module.exports = router;
