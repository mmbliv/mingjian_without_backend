require("dotenv");
module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: process.env.COLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECREAT,
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
