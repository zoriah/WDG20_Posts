import express from 'express';

const app = express();
const port = process.env.PORT || 4321;

app.get('/', (req, res) => res.send('Hello, World!'))
app.get('/posts', (req, res) => res.json(posts))
app.get('/posts/:id', (req, res) => {
    const post = posts.find(post => post.id === parseInt(req.params.id));
    if (!post)
        return res.status(404).json({ message: 'Post not found' });
    return res.json(post);
})

// app.get('/posts', (req, res) => res.json({ message: 'GET all posts' }));
// app.post('/posts', (req, res) => res.json({ message: 'POST a new post' }));
// app.get('/posts/:id', (req, res) => res.json({ message: 'GET a post by id' }));
// app.put('/posts/:id', (req, res) => res.json({ message: 'PUT a post by id' }));
// app.delete('/posts/:id', (req, res) => res.json({ message: 'DELETE a post by id' }));

app.listen(port, () => { console.log(`Server is running on port ${port}`) });
