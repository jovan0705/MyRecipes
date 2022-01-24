const errorHandler = (err, req, res, next) => {
  console.log(err);
  switch (err.name) {
    case "BALANCE_NOT_ENOUGH":
      res.status(400).json({ message: "Balance not Enough" });
      break;
    case "CLASS_ALREADY_REGISTERED":
      res.status(400).json({ message: "Class already Registered" });
      break;

    case "MY_CLASS_NOT_FOUND":
      res.status(400).json({ message: "Class not Found" });
      break;

    case "isRated":
      res.status(400).json({ message: "Item already rated" });
      break;
    case "badRequest":
      res.status(400).json({ message: "Bad Request" });
      break;
    case "notFound":
      res.status(404).json({ message: "Request Not Found" });
      break;

    case "userNotFound":
      res.status(404).json({ message: "You are unauthorized" });
      break;

    case "imageTooBig":
      res.status(400).json({ message: "Image file maximum size is 300kb" });
      break;

    case "notImageFile":
      res
        .status(400)
        .json({ message: "Image uploaded must be image file type" });
      break;

    case "followsIdError":
      res
        .status(400)
        .json({ message: "FollowerId and followingId cannot be the same" });
      break;

    case "followsDuplicate":
      res
        .status(400)
        .json({ message: "User already following the target user" });
      break;

    case "unauthorized":
      res.status(400).json({ message: "You are unauthorized" });
      break;

    case "wrongLogin":
      res.status(400).json({ message: "Invalid email/password" });
      break;

    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;

    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;

    default:
      res.status(500).json(err);
      break;
  }
};

module.exports = { errorHandler };
