const Login = require('../models/Login')

module.exports = {

    async store(req, res) {

        const { email } = req.body
        const { password } = req.body

        const logged = await Login.create({
            email,
            password
        })

        console.log(logged)


        return res.json(logged)
    }
}