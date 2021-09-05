const Login = require('../models/Login')

module.exports = {

    async show(req, res) {
        const { user_id } = req.headers

        const conta = await Login.findById(user_id)

        return res.json(conta)
    }
}