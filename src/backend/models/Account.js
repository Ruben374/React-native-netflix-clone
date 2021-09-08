const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Login'
    }

})


module.exports = mongoose.model('Account', AccountSchema)