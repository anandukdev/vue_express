const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//Get post
router.get('/', async(req,res ) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});
//Add post

router.post('/', async(req,res ) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send(); 
});

//Delete post

router.delete('/:id', async (res, req) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id:new mongodb.ObjectID(req.params.id)});
    res.status(201).send();
});

//mongodb Connect

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://abc123:123Varnam@cluster0.hopbz.mongodb.net/node_exp_mon?retryWrites=true&w=majority', {
        useNewUrlParser: true , 
        useUnifiedTopology: true
    });
    return client.db('node_exp_vue').collection('posts');
}

module.exports = router;