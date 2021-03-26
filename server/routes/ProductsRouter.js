const { Router } = require("express");
const ProductsController = require("../controller/products/ProductsController");

const router = Router();

router.get("/", ProductsController.getAllProducts);
router.get("/:id", ProductsController.getProductsByID);
router.post("/", ProductsController.postProduct);
router.put("/:id", ProductsController.putProductByID);
router.delete("/:id", ProductsController.deleteProductByID);

module.exports = router;
