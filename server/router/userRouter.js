const router = require("express").Router();
const userController = require("../controller/userController");
const {
  editProfileAuthorization,
  adminRegisterAuthorization,
} = require("../middlewares/authorization");
const instanceMulter = require("../middlewares/multer");
const imageKitUpload = require("../middlewares/imageKit");

router.get("/", userController.allUsers);
router.post("/follows", userController.doFollows);
router.delete("/unfollow/:id", userController.doUnfollow);
router.post(
  "/adminregister",
  adminRegisterAuthorization,
  userController.adminRegister
);
router.post("/topup", userController.topUpBalance);
router.put("/successTopUp", userController.successTopUp);

router.get("/profile", userController.profileDetails);
router.get("/followers", userController.getFollowers);
router.get("/followings", userController.getFollowings);
router.get("/:id", userController.detailUserbyId);

router.put(
  "/editprofile/:id",
  editProfileAuthorization,
  instanceMulter.single("imageFile"),
  imageKitUpload,
  userController.editProfile
);

module.exports = router;
