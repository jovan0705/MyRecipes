
const errorHandler = (err, req, res, next) => {
    console.log(err);
    switch (err.name) {
        case "BALANCE_NOT_ENOUGH":
            res.status(400).json({message: 'Balance not Enough'})
            break;
        case "CLASS_ALREADY_REGISTERED":
            res.status(400).json({message: 'Class already Registered'})
            break;
            
        case "MY_CLASS_NOT_FOUND":
            res.status(400).json({message: 'Class not Found'})
            break;
        default:
            res.status(500).json(err)
            break;
    }
}

module.exports = {errorHandler}