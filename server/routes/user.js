const express = require("express");
const { handleCreateUser, handleLogIn } = require("../controller/user");
const router = express()

router.post("/create-user", handleCreateUser);
router.post("/log-in", handleLogIn);

module.exports = router;