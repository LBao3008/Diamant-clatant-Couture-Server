const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const MainDiamondSchema = mongoose.Schema(
  {
    origin: {
      type: String,
      enum: ["natural", "lab grown"],
    },
    caratWeight: {
      type: Number,
    },
    cut: {
      type: String,
    },
    color: {
      type: String,
    },
    clarity: {
      type: String,
    },
    products: [
      {
        type: ObjectId,
        ref: "Products",
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
          required: true,
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

const MainDiamond = mongoose.model("MainDiamond", MainDiamondSchema);
module.exports = MainDiamond;
