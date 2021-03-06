const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middlewares/auth");

router.get("/users", userCtrl.selectAllUsers);
router.get("/users/:id_users", userCtrl.selectOneUser);
router.post("/users/login", userCtrl.loginUser);
router.post("/users/register", userCtrl.registerUsers);
router.put("/users/:id_users", userCtrl.updateUsers);
router.delete("/users/:id_users", userCtrl.deleteUsers);

module.exports = router;
