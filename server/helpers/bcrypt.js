const bcrypt = require('bcrypt');

let comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}

let getSalt = (password) => {
    return bcrypt.hashSync(password, 10)
}

module.exports = { getSalt, comparePassword }