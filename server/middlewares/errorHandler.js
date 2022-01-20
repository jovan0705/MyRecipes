
const errorHandler = (err, req, res, next) => {
    console.log(err);
    switch (err.name) {
        case "HEHE":
            res.status(200).json('hehe')
            break;
        case 'isRated':
            res.status(400).json({message: 'Item already rated'})
        case 'badRequest':
            res.status(400).json({message: 'Bad Request'})
        case 'notFound':
            res.status(404).json({message: 'Request Not Found'})
        default:
            res.status(500).json(err)
            break;
    }
}

module.exports = {errorHandler}