const errorHandler = (err, req, res, next) => {
  console.log(err);
  switch (err.name) {
    case "HEHE":
      res.status(200).json("hehe");
      break;

    case "imageTooBig":
      res.status(400).json("Error: Image file maximum size is 300kb");
      break;

    case "followsIdError":
      res
        .status(400)
        .json("Error: followerId and followingId cannot be the same");
      break;

    case "followsDuplicate":
      res.status(400).json("Error: User already following the target user");
      break;

      case "unauthorized":
      res.status(400).json("You are unauthorized");
      break;

    case "wrongLogin":
      res.status(401).json("Invalid email/password");
      break;

    default:
      res.status(500).json(err);
      break;
  }
};

module.exports = { errorHandler };
