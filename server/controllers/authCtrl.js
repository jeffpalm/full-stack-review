const bcrypt = require('bcrypt')

module.exports = {
  login: async (req, res) => {
    const db = req.app.get('db'),
      { email, password } = req.body,
      checkUser = await db.check_user(email),
      user = checkUser[0]

    if (!user) return res.status(404).send('User does not exist')

    const authenticated = bcrypt.compareSync(password, user.password)

    if (!authenticated) return res.status(403).send('Email or password incorrect')

    delete user.password

    req.session.user = user

    res.status(200).send(req.session.user)
  },
  register: async (req, res) => {
    const db = req.app.get('db'),
      { email, password } = req.body,
      existingUser = (await db.check_user(email))[0]

    if (existingUser) return res.status(409).send('User already exists')

    const salt = bcrypt.genSaltSync(10),
      hash = bcrypt.hashSync(password, salt),
      newUser = (await db.register_user(email, hash))[0]

    req.session.user = newUser
    res.status(200).send(req.session.user)
  },
  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user)
    } else {
      res.sendStatus(404)
    }
  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }
}
