const mongoose = require("mongoose");
const DiamondShell = require("./DiamondShell");
const { ObjectId } = mongoose.Schema.Types;

const MaterialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    density: {
      value: {
        type: Number,
      },
      unit: {
        type: String,
        default: "g/cm³", // Đơn vị mặc định là gram trên centimet vuông
      },
    },
    priceUnit: {
      type: String,
      default: "g", // Đơn vị mặc định là gram
    },
    DiamondShells: [
      {
        type: ObjectId,
        ref: "DiamondShell",
      },
    ],
    currentBuyPrice: {
      type: Number,
      required: true,
    },
    currentSellPrice: {
      type: Number,
      required: true,
    },
    currentEffectDate: {
      type: Date,
      required: true,
    },
    currentUpdateDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    priceHistory: [
      {
        buyPrice: {
          type: Number,
          required: true,
        },
        sellPrice: {
          type: Number,
        },
        effectDate: {
          type: Date,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Material = mongoose.model("Material", MaterialSchema);
module.exports = Material;
