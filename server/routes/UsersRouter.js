const { Router } = require("express");
const UsersController = require("../controller/users/UsersController");

const router = Router();

router.get("/", UsersController.getAllUsers);
router.get("/:id", UsersController.getUsersByID);
router.post("/", UsersController.postUser);
router.put("/:id");
router.delete("/:id");

module.exports = router;
