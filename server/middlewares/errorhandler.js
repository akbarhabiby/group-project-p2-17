const errStatusJoin = require('../helpers/errstatusjoin')

module.exports = (err, req, res, next) => {
    const errName = err.name
    const errErrors = err.errors

    let message = 'Internal Server Error'
    let status = 500

    // * Default Sequelize Error Message
    const uniqueErr = `SequelizeUniqueConstraintError`
    const validationErr = `SequelizeValidationError`

    switch(errName) {
        case uniqueErr:
            message = errStatusJoin(errErrors)
            status = 400
            break
        case validationErr:
            message = errStatusJoin(errErrors)
            status = 400
            break
    }

    req.status(status).json({ msg: message })
}