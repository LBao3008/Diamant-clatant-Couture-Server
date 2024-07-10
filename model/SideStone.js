const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const SideStoneSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

const SideStone = mongoose.model("SideStone", SideStoneSchema);
module.exports = SideStone;
