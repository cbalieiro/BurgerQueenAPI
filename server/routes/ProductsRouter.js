const { Router } = require("express");
const ExampleController = require("../controller/products/ExampleController");

const router = Router();

router.get("/", ExampleController.getAllExamples);

module.exports = router;
