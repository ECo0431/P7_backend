const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");
const auth = require("../middlewares/auth");

router.get("/posts", postsCtrl.selectAllPosts);
router.get("/posts/:id_posts", postsCtrl.selectOnePost);
router.post("/users/:id_users/posts", postsCtrl.insertOnePost);
router.put("/users/:id_users/posts/:id_posts", postsCtrl.modifyOnePost);
router.delete("/users/:id_users/posts/:id_posts", postsCtrl.deleteOnePost);

module.exports = router;
