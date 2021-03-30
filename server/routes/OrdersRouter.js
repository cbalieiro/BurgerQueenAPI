const { Router } = require("express");
const OrdersController = require("../controller/orders/OrdersController");

const router = Router();

router.post("/", OrdersController.postOrders);
router.get("/:id", OrdersController.getOrderByID);
// router.post("/", ProductsController.postProduct);
// router.put("/:id", ProductsController.putProductByID);
// router.delete("/:id", ProductsController.deleteProductByID);


module.exports = router;
