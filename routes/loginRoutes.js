const express = require("express");
const { createRegistrationUser } = require("../controllers/registrationUser");
const { loginUser } = require("../controllers/loginUser");
const router = express.Router();

router.post("/registration",createRegistrationUser)
router.post("/login",loginUser)

module.exports = router;