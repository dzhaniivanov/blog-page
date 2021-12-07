const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error)

    }
});


//update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {

            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body
                    }
                    , { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(404).json("You can update only your post!")
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {

            try {
                await post.delete();
                res.status(200).json("Post has been deleted successufully!");
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(404).json("You can delete only your post!")
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//get post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;