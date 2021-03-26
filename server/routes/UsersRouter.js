const { Router } = require("express");
const UsersController = require("../controller/users/UsersController");

const router = Router();

router.get("/", UsersController.getAllUsers);
router.post("/", UsersController.postUser);

module.exports = router;
