
const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case "HEHE":
            res.status(200).json('hehe')
            break;
    
        default:
            res.status(500).json(err)
            break;
    }
}

module.exports = {errorHandler}