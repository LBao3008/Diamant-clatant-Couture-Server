const mongoose = require("mongoose");

const DiamondShellTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sizes: [
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

const DiamondShellType = mongoose.model(
  "DiamondShellType",
  DiamondShellTypeSchema
);
module.exports = DiamondShellType;
