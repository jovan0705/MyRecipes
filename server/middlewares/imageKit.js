const formData = require("form-data");
const imagekitAxios = require("../apis/imagekitAxios");
const axios = require("axios");
const imageKitUpload = async (req, res, next) => {
  if (req.file === undefined) {
    console.log("MASUK KESINI REQ.FILENYA");
    next();
  } else {
    try {
      const fileType = req.file.mimetype.split("/")[0];
      if (fileType !== "image") {
        throw { name: "notImageFile" };
      }
      if (req.file.size > 300000) {
        throw { name: "imageTooBig" };
      }

      const sentData = req.file.buffer.toString("base64");

      let form = new formData();
      form.append("file", sentData);
      form.append("fileName", req.file.originalname);

      const privateKey = "private_tuI0W9YXaMB5UZWACMAX68tpkMI=:";
      const endcodedPrivateKey = Buffer.from(privateKey).toString("base64");
      const response = await axios.post(
        "https://upload.imagekit.io/api/v1/files/upload",
        form,
        {
          headers: {
            ...form.getHeaders(),
            Authorization: `Basic ${endcodedPrivateKey}`,
          },
        }
      );

      req.additionalData = response.data.url;

      next();
    } catch (err) {
      // console.log(err);
      next(err);
      // res.status(500).json(err);
    }
  }
};

module.exports = imageKitUpload;
