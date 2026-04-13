const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex =
          /^https?:\/\/(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[A-Za-z0-9._~:/?#[\]@!$&'()*+,;=-]*)?$/;
        return regex.test(v);
      },
      message: "URL no valida",
    },
  },
});
module.exports = mongoose.model("User", userSchema);
