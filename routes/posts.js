const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");
const auth = require("../middlewares/auth");

router.get("/posts", postsCtrl.selectAllPosts);
router.get("/posts/:id_posts", postsCtrl.selectOnePost);
router.post("/users/:id_users/posts", auth, postsCtrl.insertOnePost);
router.put("/users/:id_users/posts/:id_posts", auth, postsCtrl.modifyOnePost);


module.exports = router;