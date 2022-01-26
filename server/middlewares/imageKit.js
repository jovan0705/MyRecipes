// const formData = require("form-data");
// const imagekitAxios = require("../apis/imagekitAxios");
// const axios = require("axios");

// const imageKitUpload = async (req, res, next) => {
//   if (req.file === undefined) {
//     console.log("MASUK KESINI REQ.FILENYA")
//     next();
//   } else {
//     try {
//       const fileType = req.file.mimetype.split("/")[0];
//       if (fileType !== "image") {
//         throw { name: "notImageFile" };
//       }
//       if (req.file.size > 300000) {
//         throw { name: "imageTooBig" };
//       }

//       const sentData = req.file.buffer.toString("base64");

//       let form = new formData();
//       form.append("file", sentData);
//       form.append("fileName", req.file.originalname);

//       // if(req.headers.testing) {
//       //   const response = await axios.post('https://upload.imagekit.io/api/v1/files/upload', {
//       //     headers: form.getHeaders(),
//       //     data: form
//       //   })
//       //   req.additionalData = response.data.url
//       //   console.log('MASUK -----> ', response.data.url)
//       //   next()
//       // } else {
//         // const response = await imagekitAxios.post("/files/upload", form, {
//         //   headers: form.getHeaders(),
//         // });
  
//         // req.additionalData = response.data.url;
//       const privateKey = 'private_tuI0W9YXaMB5UZWACMAX68tpkMI=:'
//       const endcodedPrivateKey = Buffer.from(privateKey).toString('base64');
//       const response = await axios.post("https://upload.imagekit.io/api/v1/files/upload", form, {
//         headers: {
//           ...form.getHeaders(),
//           Authorization: `Basic ${endcodedPrivateKey}`
//         },
//       });

//       req.additionalData = response.data.url;

//       next();
//         next();
//       // }
//     } catch (err) {
//       // console.log(err);
//       next(err);
//       // res.status(500).json(err);
//     }
//   }
// };

// module.exports = imageKitUpload;
// Jovan — Today at 9:43 PM
const formData = require("form-data");
const imagekitAxios = require("../apis/imagekitAxios");
const axios = require("axios");
const imageKitUpload = async (req, res, next) => {
  if (req.file === undefined) {
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

      const privateKey = `${process.env.IMAGEKIT_KEY}:`
      const endcodedPrivateKey = Buffer.from(privateKey).toString('base64');
      const response = await axios.post("https://upload.imagekit.io/api/v1/files/upload", form, {
        headers: {
          ...form.getHeaders(),
          Authorization: `Basic ${endcodedPrivateKey}`
        },
      });

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