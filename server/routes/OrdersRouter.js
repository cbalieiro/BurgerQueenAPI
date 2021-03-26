const { Router } = require("express");
const ExampleController = require("../controller/orders/ExampleController");

const router = Router();

router.get("/", ExampleController.getAllExamples);

module.exports = router;
