const express = require("express");
const { createRegistrationUser } = require("../controllers/registrationUser");
const { loginUser } = require("../controllers/loginUser");
// const { createPost } = require("../controllers/createPost");
const router = express.Router();

router.post("/registration",createRegistrationUser)
router.post("/login",loginUser)
// router.post("/createPost",createPost)

module.exports = router;