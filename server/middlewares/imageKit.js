const formData = require("form-data");
const imagekitAxios = require("../apis/imagekitAxios");

const imageKitUpload = async (req, res, next) => {
  if (req.file === undefined) {
    next();
  } else {
    try {
      const sentData = req.file.buffer.toString("base64");
      
      let form = new formData();
      form.append("file", sentData);
      form.append("fileName", req.file.originalname);


      const response = await imagekitAxios.post("/files/upload", form, {
        headers: form.getHeaders(),
      });

      req.additionalData = response.data.url;

      next();
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = imageKitUpload;
