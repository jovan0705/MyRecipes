const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(8)

const hashPassword = (password) =>{
    return bcrypt.hashSync(password, salt)
}

const decryptPassword = (inputPassword, hash) => {
    return bcrypt.compareSync(inputPassword, hash)
}

module.exports = {hashPassword, decryptPassword}