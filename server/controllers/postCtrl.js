module.exports = {
  getAllPosts: async (req, res) => {
    const db = req.app.get('db'),
      posts = await db.get_all_posts()

    res.status(200).send(posts)
  },
  createPost: async (req, res) => {
    const db = req.app.get('db'),
      { user_id, content } = req.body,
      post = (await db.create_post(user_id, content))[0]

    res.status(200).send(post)
  },
  editPost: (req, res) => {},
  deletePost: (req, res) => {}
}
