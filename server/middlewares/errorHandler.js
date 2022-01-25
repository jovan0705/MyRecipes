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

    case "SequelizeDatabaseError": {
      res.status(400).json({ message: 'Date cannot be Null' });
      break;
    }
    case "JsonWebTokenError": {
      res.status(400).json({ message: 'Invalid Access Token' })
    }
    case "emptyName":
      res.status(400).json({ message: "Name required" });
      break;

    case "emptySteps":
      res.status(400).json({ message: "Steps required" });
      break;

    case "emptyTotalCalories":
      res.status(400).json({ message: "Total Calories required" });
      break;

    case "emptyImage":
      res.status(400).json({ message: "Please insert an image" });
      break;

    case "ALREADY_FAVORITED": 
      res.status(400).json({ message: "Recipe already Favorited" })
      break;

    case "NOT_FAVORITED": 
      res.status(400).json({ message: "Recipe not Favorited" })
      break;
      
    case "errorCreateRecipe":
      res.status(500).json({message: "Internal Server Error: error creating recipe"})
      break;
    case "errorUpdateRecipe":
      res.status(500).json({message: 'Internal Server Error: error updating recipe'})
      break;
    case "errorDeleteRecipe":
      res.status(500).json({message: 'Internal Server Error: error deleting recipe'})
      break;
    default:
      res.status(500).json(err);
      break;
  }
};

module.exports = { errorHandler };
