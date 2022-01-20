
const errorHandler = (err, req, res, next) => {
    console.log(err);
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