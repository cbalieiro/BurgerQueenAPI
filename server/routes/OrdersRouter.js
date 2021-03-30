const { Router } = require("express");
const OrdersController = require("../controller/orders/OrdersController");

const router = Router();

router.get("/:id", OrdersController.getOrderByID);
router.get("/", OrdersController.getAllOrders);
router.post("/", OrdersController.postOrders);
// router.put("/:id", ProductsController.putProductByID);
// router.delete("/:id", ProductsController.deleteProductByID);


module.exports = router;
