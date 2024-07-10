const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
// const DiamondShellSchema = mongoose.Schema(
//   {
//     diamondShellType: {
//       type: ObjectId,
//       ref: "DiamondShellType",
//       required: true,
//     },
//     material: {
//       type: ObjectId,
//       ref: "Material",
//       required: true,
//     },
//     currentPrice: {
//       effectDate: {
//         type: Date,
//         required: true,
//       },
//       date: {
//         type: Date,
//         default: Date.now,
//         required: true,
//       },
//       priceTable: [
//         {
//           size: {
//             type: String,
//             required: true,
//           },
//           weight: {
//             type: String,
//             required: true,
//           },
//           buyPrice: {
//             type: Number,
//             required: true,
//           },
//           sellPrice: {
//             type: Number,
//             required: true,
//           },
//         },
//       ],
//     },
//     priceHistory: [
//       {
//         effectDate: {
//           type: Date,
//           required: true,
//         },
//         date: {
//           type: Date,
//           default: Date.now,
//           required: true,
//         },
//         priceTable: [
//           {
//             size: {
//               type: String,
//               required: true,
//             },
//             weight: {
//               type: String,
//               required: true,
//             },
//             buyPrice: {
//               type: Number,
//               required: true,
//             },
//             sellPrice: {
//               type: Number,
//               required: true,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

const DiamondShellSchema = mongoose.Schema(
  {
    material: {
      type: String,
      required: true,
    },
    diamondShellType: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    weight: {
      value: {
        type: Number,
      },
      unit: {
        type: String,
        default: "g", // Đơn vị mặc định là gram trên centimet vuông
      },
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
const DiamondShell = mongoose.model("DiamondShell", DiamondShellSchema);
module.exports = DiamondShell;
