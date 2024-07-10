const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    values: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Component =
  mongoose.models.Component || mongoose.model("Component", componentSchema);
module.exports = Component;
