const router = require("express").Router();
const userController = require("../controller/userController");
const {userAuthorization, adminRegisterAuthorization} = require("../middlewares/authorization");
const instanceMulter = require("../middlewares/multer");
const imageKitUpload = require("../middlewares/imageKit");


router.post("/follows", userController.doFollows);
router.post("/adminregister", adminRegisterAuthorization, userController.adminRegister);
router.post('/topup', userController.topUpBalance)

router.put(
  "/editprofile/:id",
  userAuthorization,
  instanceMulter.single("imageFile"),
  imageKitUpload,
  userController.editProfile
);

module.exports = router;
