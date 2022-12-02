const User = require('../../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
    create: createUser
  };
  
  function createJWT(user) {
    return jwt.sign(
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

  async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        console.log('🪲', token)
        res.json(token);
        
      } catch (err) {
        res.status(400).json(err);
      }
  }
  