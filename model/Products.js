const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
const MainDiamond = require("./MainDiamond");
const DiamondShell = require("./DiamondShell");

const productsSchema = mongoose.Schema(
  {
    sku: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide valid url(s)"],
    },
    title: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [200, "Name is too large"],
    },
    slug: {
      type: String,
      trim: true,
      required: false,
    },
    unit: {
      type: String,
      required: true,
    },
    imageURLs: [
      {
        color: {
          name: {
            type: String,
            required: false,
            trim: true,
          },
          clrCode: {
            type: String,
            required: false,
            trim: true,
          },
        },
        img: {
          type: String,
          required: false,
          validate: [validator.isURL, "Please provide valid url(s)"],
        },
        sizes: [String],
      },
    ],
    parent: {
      type: String,
      required: true,
      trim: true,
    },
    children: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Product price can't be negative"],
    },
    discount: {
      type: Number,
      min: [0, "Product price can't be negative"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Product quantity can't be negative"],
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },
    category: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Category",
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE} ",
      },
      default: "in-stock",
    },
    mainDiamond: {
      origin: {
        type: String,
        required: false,
      },
      caratWeight: {
        type: String,
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
    },
    diamondShell: {
      size: {
        type: String,
        required: false,
      },
      material: {
        type: String,
        required: false,
      },
    },
    sideStone: {
      sideStoneName: {
        type: String,
        required: false,
      },
      sideStoneAmount: {
        type: Number,
        required: false,
      },
    },
    processingFee: {
      type: Number,
      required: false,
    },
    classificationAttributes: [
      {
        type: {
          type: String,
        },
        attributes: [
          {
            key: { type: String },
            value: [{ type: String }],
          },
        ],
      },
    ],
    productSpecifications: [
      {
        type: {
          type: String,
        },
        sets: [
          {
            set_id: { type: Number },
            set_values: [
              {
                key: { type: String },
                value: { type: String },
              },
            ],
            set_price: { type: Number },
          },
        ],
      },
    ],
    productVariants: [
      {
        productVariantAttributes: [
          {
            type: {
              type: String,
            },
            set: {
              set_id: { type: Number },
              set_values: [
                {
                  key: { type: String },
                  value: { type: String },
                },
              ],
              set_price: { type: Number },
            },
          },
        ],
        finalPrice: {
          type: Number,
          min: [0, "Product price can't be negative"],
        },
        quantity: {
          type: Number,
          min: [0, "Product quantity can't be negative"],
        },
      },
    ],
    lowestPrice: {
      type: Number,
      required: false,
      min: [0, "Product price can't be negative"],
    },
    highestPrice: {
      type: Number,
      required: false,
      min: [0, "Product price can't be negative"],
    },
    reviews: [{ type: ObjectId, ref: "Reviews" }],
    productType: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: false,
    },
    additionalInformation: [
      {
        key: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    tags: [String],
    sizes: [String],
    offerDate: {
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
    featured: {
      type: Boolean,
      default: false,
    },
    sellCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// // Pre-save middleware to compute lowest and highest prices
// productsSchema.pre("save", function (next) {
//   if (this.productVariants && this.productVariants.length > 0) {
//     const prices = this.productVariants
//       .filter((variant) => typeof variant === "string") // Ensure the variant is a string
//       .map((variant) => {
//         const parts = variant.split(";");
//         return parseFloat(parts[parts.length - 2]);
//       });

//     this.lowestPrice = Math.min(...prices);
//     this.highestPrice = Math.max(...prices);
//   } else {
//     this.lowestPrice = this.price;
//     this.highestPrice = this.price;
//   }
//   next();
// });

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
