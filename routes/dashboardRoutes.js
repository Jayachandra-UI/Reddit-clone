const express = require("express");
const { createPostUser } = require("../controllers/createPost");
const verifyToken = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const { getPosts } = require("../controllers/getPosts");
const { getPostById } = require("../controllers/getPostById");

const router = express.Router();

router.post("/createPost",verifyToken,upload.single("attachment"),createPostUser);
router.get("/getPosts",verifyToken,getPosts);
router.get("/getPostById/:id",verifyToken,getPostById)

module.exports = router;