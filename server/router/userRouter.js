const router = require("express").Router();
const userController = require("../controller/userController");
const userAuthentication = require("../middlewares/authentication");
const userAuthorization = require("../middlewares/authorization");
const instanceMulter = require("../middlewares/multer");
const imageKitUpload = require("../middlewares/imageKit");

// router.post("/userregister", userController.userRegister);
router.post("/adminregister", userController.adminRegister);
// router.post("/login", userController.doLogin);
router.put(
  "/editprofile/:id",
  userAuthentication,
  userAuthorization,
  instanceMulter.single("imageFile"),
  imageKitUpload,
  userController.editProfile
);

module.exports = router;
