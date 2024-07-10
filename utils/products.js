const products = [
  {
    _id: "6431364df5a812bd37e765ac",
    sku: "AEB7SDVX70",
    img: "https://i.ibb.co/J7C8xSR/bracelet-1.png",
    title: "Robert Lee Bangle Bracelet",
    slug: "robert-lee-bangle-bracelet",
    unit: "18 kt",
    mainDiamond: {
      origin: "natural",
      caratWeight: "4 ct",
      cut: "very good",
      color: "H",
      clarity: "VVS1",
    },
    diamondShell: {
      size: "10 mm",
      material: "gold 99k",
    },
    sideStone: {
      sideStoneName: "quartz",
      sideStoneAmount: 40,
    },
    processingFee: 1000,
    classificationAttributes: [
      {
        type: "diamond shell",
        attributes: [
          {
            key: "size",
            value: ["10 mm", "12 mm"],
          },
          {
            key: "material",
            value: ["gold 18K", "gold 99K"],
          },
        ],
      },
      {
        type: "main diamond",
        attributes: [
          {
            key: "carat weight",
            value: ["4 ct", "5 ct"],
          },
        ],
      },
      {
        type: "side stone",
        attributes: [
          {
            key: "side stone",
            value: ["quartz", "bloodstone"],
          },
        ],
      },
    ],
    productSpecifications: [
      {
        type: "diamond shell",
        sets: [
          {
            set_id: 1,
            set_values: [
              {
                key: "size",
                value: "10 mm",
              },
              {
                key: "material",
                value: "gold 18k",
              },
            ],
            set_price: 1000,
          },
          {
            set_id: 2,
            set_values: [
              {
                key: "size",
                value: "10 mm",
              },
              {
                key: "material",
                value: "gold 99k",
              },
            ],
            set_price: 1200,
          },
          {
            set_id: 3,
            set_values: [
              {
                key: "size",
                value: "12 mm",
              },
              {
                key: "material",
                value: "gold 18k",
              },
            ],
            set_price: 2200,
          },
          {
            set_id: 4,
            set_values: [
              {
                key: "size",
                value: "12 mm",
              },
              {
                key: "material",
                value: "gold 99k",
              },
            ],
            set_price: 2600,
          },
        ],
      },
      {
        type: "main diamond",
        sets: [
          {
            set_id: 5,
            set_values: [
              {
                key: "carat weight",
                value: "4 ct",
              },
            ],
            set_price: 8000,
          },
          {
            set_id: 6,
            set_values: [
              {
                key: "carat weight",
                value: "5 ct",
              },
            ],
            set_price: 10000,
          },
        ],
      },
      {
        type: "side stone",
        sets: [
          {
            set_id: 7,
            set_values: [
              {
                key: "side stone",
                value: "quartz",
              },
            ],
            set_price: 1200,
          },
          {
            set_id: 8,
            set_values: [
              {
                key: "side stone",
                value: "bloodstone",
              },
            ],
            set_price: 1400,
          },
        ],
      },
    ],
    productVariants: [
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 1,
              set_values: [
                { key: "size", value: "10 mm" },
                { key: "material", value: "gold 18k" },
              ],
              set_price: 1000,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 5,
              set_values: [{ key: "carat weight", value: "4 ct" }],
            },
            set_price: 8000,
          },
          {
            type: "side stone",
            set: {
              set_id: 7,
              set_values: [{ key: "side stone", value: "quartz" }],
            },
            set_price: 1200,
          },
        ],
        finalPrice: 1000 + 8000 + 1200 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 2,
              set_values: [
                { key: "size", value: "10 mm" },
                { key: "material", value: "gold 99k" },
              ],
              set_price: 1200,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 5,
              set_values: [{ key: "carat weight", value: "4 ct" }],
            },
            set_price: 8000,
          },
          {
            type: "side stone",
            set: {
              set_id: 7,
              set_values: [{ key: "side stone", value: "quartz" }],
            },
            set_price: 1200,
          },
        ],
        finalPrice: 1200 + 8000 + 1200 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 3,
              set_values: [
                { key: "size", value: "12 mm" },
                { key: "material", value: "gold 18k" },
              ],
              set_price: 2200,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 5,
              set_values: [{ key: "carat weight", value: "4 ct" }],
            },
            set_price: 8000,
          },
          {
            type: "side stone",
            set: {
              set_id: 7,
              set_values: [{ key: "side stone", value: "quartz" }],
            },
            set_price: 1200,
          },
        ],
        finalPrice: 2200 + 8000 + 1200 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 4,
              set_values: [
                { key: "size", value: "12 mm" },
                { key: "material", value: "gold 99k" },
              ],
              set_price: 2600,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 5,
              set_values: [{ key: "carat weight", value: "4 ct" }],
            },
            set_price: 8000,
          },
          {
            type: "side stone",
            set: {
              set_id: 7,
              set_values: [{ key: "side stone", value: "quartz" }],
            },
            set_price: 1200,
          },
        ],
        finalPrice: 2600 + 8000 + 1200 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 1,
              set_values: [
                { key: "size", value: "10 mm" },
                { key: "material", value: "gold 18k" },
              ],
              set_price: 1000,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 6,
              set_values: [{ key: "carat weight", value: "5 ct" }],
            },
            set_price: 10000,
          },
          {
            type: "side stone",
            set: {
              set_id: 7,
              set_values: [{ key: "side stone", value: "quartz" }],
            },
            set_price: 1200,
          },
        ],
        finalPrice: 1000 + 10000 + 1200 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 2,
              set_values: [
                { key: "size", value: "10 mm" },
                { key: "material", value: "gold 99k" },
              ],
              set_price: 1200,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 6,
              set_values: [{ key: "carat weight", value: "5 ct" }],
            },
            set_price: 10000,
          },
          {
            type: "side stone",
            set: {
              set_id: 7,
              set_values: [{ key: "side stone", value: "quartz" }],
            },
            set_price: 1200,
          },
        ],
        finalPrice: 1200 + 10000 + 1200 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 3,
              set_values: [
                { key: "size", value: "12 mm" },
                { key: "material", value: "gold 18k" },
              ],
              set_price: 2200,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 6,
              set_values: [{ key: "carat weight", value: "5 ct" }],
            },
            set_price: 10000,
          },
          {
            type: "side stone",
            set: {
              set_id: 7,
              set_values: [{ key: "side stone", value: "quartz" }],
            },
            set_price: 1200,
          },
        ],
        finalPrice: 2200 + 10000 + 1200 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 4,
              set_values: [
                { key: "size", value: "12 mm" },
                { key: "material", value: "gold 99k" },
              ],
              set_price: 2600,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 6,
              set_values: [{ key: "carat weight", value: "5 ct" }],
            },
            set_price: 10000,
          },
          {
            type: "side stone",
            set: {
              set_id: 7,
              set_values: [{ key: "side stone", value: "quartz" }],
            },
            set_price: 1200,
          },
        ],
        finalPrice: 2600 + 10000 + 1200 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 1,
              set_values: [
                { key: "size", value: "10 mm" },
                { key: "material", value: "gold 18k" },
              ],
              set_price: 1000,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 5,
              set_values: [{ key: "carat weight", value: "4 ct" }],
            },
            set_price: 8000,
          },
          {
            type: "side stone",
            set: {
              set_id: 8,
              set_values: [{ key: "side stone", value: "bloodstone" }],
            },
            set_price: 1400,
          },
        ],
        finalPrice: 1000 + 8000 + 1400 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 2,
              set_values: [
                { key: "size", value: "10 mm" },
                { key: "material", value: "gold 99k" },
              ],
              set_price: 1200,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 5,
              set_values: [{ key: "carat weight", value: "4 ct" }],
            },
            set_price: 8000,
          },
          {
            type: "side stone",
            set: {
              set_id: 8,
              set_values: [{ key: "side stone", value: "bloodstone" }],
            },
            set_price: 1400,
          },
        ],
        finalPrice: 1200 + 8000 + 1400 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 3,
              set_values: [
                { key: "size", value: "12 mm" },
                { key: "material", value: "gold 18k" },
              ],
              set_price: 2200,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 5,
              set_values: [{ key: "carat weight", value: "4 ct" }],
            },
            set_price: 8000,
          },
          {
            type: "side stone",
            set: {
              set_id: 8,
              set_values: [{ key: "side stone", value: "bloodstone" }],
            },
            set_price: 1400,
          },
        ],
        finalPrice: 2200 + 8000 + 1400 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 4,
              set_values: [
                { key: "size", value: "12 mm" },
                { key: "material", value: "gold 99k" },
              ],
              set_price: 2600,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 5,
              set_values: [{ key: "carat weight", value: "4 ct" }],
            },
            set_price: 8000,
          },
          {
            type: "side stone",
            set: {
              set_id: 8,
              set_values: [{ key: "side stone", value: "bloodstone" }],
            },
            set_price: 1400,
          },
        ],
        finalPrice: 2600 + 8000 + 1400 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 1,
              set_values: [
                { key: "size", value: "10 mm" },
                { key: "material", value: "gold 18k" },
              ],
              set_price: 1000,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 6,
              set_values: [{ key: "carat weight", value: "5 ct" }],
            },
            set_price: 10000,
          },
          {
            type: "side stone",
            set: {
              set_id: 8,
              set_values: [{ key: "side stone", value: "bloodstone" }],
            },
            set_price: 1400,
          },
        ],
        finalPrice: 1000 + 10000 + 1400 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 2,
              set_values: [
                { key: "size", value: "10 mm" },
                { key: "material", value: "gold 99k" },
              ],
              set_price: 1200,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 6,
              set_values: [{ key: "carat weight", value: "5 ct" }],
            },
            set_price: 10000,
          },
          {
            type: "side stone",
            set: {
              set_id: 8,
              set_values: [{ key: "side stone", value: "bloodstone" }],
            },
            set_price: 1400,
          },
        ],
        finalPrice: 1200 + 10000 + 1400 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 3,
              set_values: [
                { key: "size", value: "12 mm" },
                { key: "material", value: "gold 18k" },
              ],
              set_price: 2200,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 6,
              set_values: [{ key: "carat weight", value: "5 ct" }],
            },
            set_price: 10000,
          },
          {
            type: "side stone",
            set: {
              set_id: 8,
              set_values: [{ key: "side stone", value: "bloodstone" }],
            },
            set_price: 1400,
          },
        ],
        finalPrice: 2200 + 10000 + 1400 + 1000,
        quantity: 10,
      },
      {
        productVariantAttributes: [
          {
            type: "diamond shell",
            set: {
              set_id: 4,
              set_values: [
                { key: "size", value: "12 mm" },
                { key: "material", value: "gold 99k" },
              ],
              set_price: 2600,
            },
          },
          {
            type: "main diamond",
            set: {
              set_id: 6,
              set_values: [{ key: "carat weight", value: "5 ct" }],
            },
            set_price: 10000,
          },
          {
            type: "side stone",
            set: {
              set_id: 8,
              set_values: [{ key: "side stone", value: "bloodstone" }],
            },
            set_price: 1400,
          },
        ],
        finalPrice: 2600 + 10000 + 1400 + 1000,
        quantity: 10,
      },
    ],
    lowestPrice: 11200,
    highestPrice: 15000,
    price: 11200,
    imageURLs: [
      {
        img: "https://i.ibb.co/J7C8xSR/bracelet-1.png",
      },
      {
        img: "https://i.ibb.co/8g1W4Pp/bracelet-2.png",
      },
      {
        img: "https://i.ibb.co/2W3S5Xc/bracelet-3.png",
      },
    ],
    parent: "Rings",
    children: "Gold",
    discount: 3,
    quantity: 10,
    brand: {
      name: "Louis Vuitton",
      id: "643134d4e2c1bd22cebb2130",
    },
    category: {
      name: "Rings",
      id: "98765cf0e2c1bd22cebb212b",
    },
    status: "in-stock",
    reviews: ["6468636b4edd5c527109318f"],
    productType: "jewelry",
    description:
      "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
    additionalInformation: [
      {
        key: "Material",
        value: "Gold 99k",
      },
      {
        key: "Size",
        value: "12 mm",
      },
      {
        key: "GREAT FOR FLEXING",
        value:
          "Behold elegance in its purest form with our exquisite diamond ring. Crafted to capture hearts with timeless brilliance, it embodies enduring beauty and unparalleled craftsmanship",
      },
    ],
    tags: ["rings", "gold"],
    featured: true,
    sellCount: 0,
    sizes: [],
  },
  // {
  //   _id: "64313abdf5a812bd37e765bc",
  //   sku: "ABC7SDVX70",
  //   img: "https://i.ibb.co/s2gB5tt/earring-1.png",
  //   title: "Fortuna Creole Earring",
  //   slug: "fortuna-creole-earring",
  //   unit: "18 kt",
  //   classificationAttributes: [
  //     {
  //       key: "Size",
  //       value: ["10 mm", "12 mm"],
  //     },
  //     {
  //       key: "Material",
  //       value: ["gold 18K", "gold 99K"],
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: ["5 ly", "6.4 ly"],
  //     },
  //     {
  //       key: "Side Stone",
  //       value: ["Quartz"],
  //     },
  //     // "Size|10 mm;12 mm",
  //     // "Material|gold 18K;gold 99K",
  //     // "Main Diamond Size|5 ly;6.4 ly",
  //     // "Side Stone|Quartz",
  //   ],
  //   productVariants: [
  //     "10 mm;gold 18K;5 ly;Quartz;10;1500;SKU0000001",
  //     "10 mm;gold 18K;6.4 ly;Quartz;11;1600;SKU0000002",
  //     "10 mm;gold 99K;5 ly;Quartz;12;1700;SKU0000003",
  //     "10 mm;gold 99K;6.4 ly;Quartz;13;1800;SKU0000004",
  //     "12 mm;gold 18K;5 ly;Quartz;14;9500;SKU0000005",
  //     "12 mm;gold 18K;6.4 ly;Quartz;15;2000;SKU0000006",
  //     "12 mm;gold 99K;5 ly;Quartz;16;2500;SKU0000007",
  //     "12 mm;gold 99K;6.4 ly;Quartz;17;3500;SKU0000008",
  //   ],
  //   lowestPrice: 1500,
  //   highestPrice: 9500,
  //   imageURLs: [
  //     {
  //       img: "https://i.ibb.co/s2gB5tt/earring-1.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/4TTyyZ2/earring-2.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/k0x8r9r/earring-3.png",
  //     },
  //   ],
  //   parent: "Earrings",
  //   children: "Gold",
  //   price: 180,
  //   discount: 0,
  //   quantity: 10,
  //   brand: {
  //     name: "Louis Vuitton",
  //     id: "643134d4e2c1bd22cebb2130",
  //   },
  //   category: {
  //     name: "Earrings",
  //     id: "64312cf0e2c1bd22cebb212b",
  //   },
  //   status: "in-stock",
  //   reviews: [],
  //   productType: "jewelry",

  //   description:
  //     "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
  //   additionalInformation: [
  //     {
  //       key: "Material",
  //       value: "Gold 18k",
  //     },
  //     {
  //       key: "Size",
  //       value: "10 mm",
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: "5 ly",
  //     },
  //     {
  //       key: "Side Stone",
  //       value: "Quartz",
  //     },
  //     {
  //       key: "Diamond Origin",
  //       value: "Natural",
  //     },
  //     {
  //       key: "Cut",
  //       value: "Excellent",
  //     },
  //     {
  //       key: "Color",
  //       value: "D",
  //     },
  //     {
  //       key: "Clarity",
  //       value: "VVS1",
  //     },
  //     {
  //       key: "Carat Weight",
  //       value: "2 ct",
  //     },
  //     {
  //       key: "GREAT FOR LAYERING",
  //       value: "Mini waffle fabric construction",
  //     },
  //     {
  //       key: "LEGENDARY STYLING",
  //       value: "Cute keyhole notch neck with custom",
  //     },
  //     {
  //       key: "CUFF DETAILS",
  //       value: "Velvet details with lace trim on the cuffs",
  //     },
  //   ],
  //   tags: ["earrings", "gold"],
  //   featured: true,
  //   sellCount: 0,
  // },
  // {
  //   _id: "64313e92f5a812bd37e765cf",
  //   classificationAttributes: [
  //     {
  //       key: "Size",
  //       value: ["10 mm", "12 mm"],
  //     },
  //     {
  //       key: "Material",
  //       value: ["gold 18K", "gold 99K"],
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: ["5 ly", "6.4 ly"],
  //     },
  //     {
  //       key: "Side Stone",
  //       value: ["Quartz"],
  //     },
  //     // "Size|10 mm;12 mm",
  //     // "Material|gold 18K;gold 99K",
  //     // "Main Diamond Size|5 ly;6.4 ly",
  //     // "Side Stone|Quartz",
  //   ],
  //   productVariants: [
  //     "10 mm;gold 18K;5 ly;Quartz;10;1500;SKU0000001",
  //     "10 mm;gold 18K;6.4 ly;Quartz;11;1600;SKU0000002",
  //     "10 mm;gold 99K;5 ly;Quartz;12;1700;SKU0000003",
  //     "10 mm;gold 99K;6.4 ly;Quartz;13;1800;SKU0000004",
  //     "12 mm;gold 18K;5 ly;Quartz;14;9500;SKU0000005",
  //     "12 mm;gold 18K;6.4 ly;Quartz;15;2000;SKU0000006",
  //     "12 mm;gold 99K;5 ly;Quartz;16;2500;SKU0000007",
  //     "12 mm;gold 99K;6.4 ly;Quartz;17;3500;SKU0000008",
  //   ],
  //   lowestPrice: 1500,
  //   highestPrice: 9500,
  //   sku: "ADC7SDVX70",
  //   img: "https://i.ibb.co/KsZ69S3/necklaces-1.png",
  //   title: "asiyah necklace",
  //   slug: "asiyah-necklace",
  //   unit: "15 kt",
  //   imageURLs: [
  //     {
  //       img: "https://i.ibb.co/KsZ69S3/necklaces-1.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/WPMYcmL/necklaces-2.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/kBB1p6F/necklaces-3.png",
  //     },
  //   ],
  //   parent: "Necklaces",
  //   children: "Gold",
  //   price: 200,
  //   discount: 2,
  //   quantity: 8,
  //   brand: {
  //     name: "Louis Vuitton",
  //     id: "643134d4e2c1bd22cebb2130",
  //   },
  //   category: {
  //     name: "Necklaces",
  //     id: "64312d00e2c1bd22cebb212d",
  //   },
  //   status: "in-stock",
  //   reviews: ["646863a14edd5c5271093199"],
  //   productType: "jewelry",
  //   description:
  //     "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
  //   additionalInformation: [
  //     {
  //       key: "Material",
  //       value: "Gold 18k",
  //     },
  //     {
  //       key: "Size",
  //       value: "10 mm",
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: "5 ly",
  //     },
  //     {
  //       key: "Side Stone",
  //       value: "Quartz",
  //     },
  //     {
  //       key: "Diamond Origin",
  //       value: "Natural",
  //     },
  //     {
  //       key: "Cut",
  //       value: "Excellent",
  //     },
  //     {
  //       key: "Color",
  //       value: "D",
  //     },
  //     {
  //       key: "Clarity",
  //       value: "VVS1",
  //     },
  //     {
  //       key: "Carat Weight",
  //       value: "2 ct",
  //     },
  //     {
  //       key: "GREAT FOR LAYERING",
  //       value: "Mini waffle fabric construction",
  //     },
  //     {
  //       key: "LEGENDARY STYLING",
  //       value: "Cute keyhole notch neck with custom",
  //     },
  //     {
  //       key: "CUFF DETAILS",
  //       value: "Velvet details with lace trim on the cuffs",
  //     },
  //   ],
  //   tags: ["necklaces", "gold"],
  //   featured: true,
  //   sellCount: 0,
  //   sizes: [],
  // },
  // {
  //   _id: "6431418c5e1d915c39ada44b",
  //   classificationAttributes: [
  //     {
  //       key: "Size",
  //       value: ["10 mm", "12 mm"],
  //     },
  //     {
  //       key: "Material",
  //       value: ["gold 18K", "gold 99K"],
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: ["5 ly", "6.4 ly"],
  //     },
  //     {
  //       key: "Side Stone",
  //       value: ["Quartz"],
  //     },
  //     // "Size|10 mm;12 mm",
  //     // "Material|gold 18K;gold 99K",
  //     // "Main Diamond Size|5 ly;6.4 ly",
  //     // "Side Stone|Quartz",
  //   ],
  //   productVariants: [
  //     "10 mm;gold 18K;5 ly;Quartz;10;1500;SKU0000001",
  //     "10 mm;gold 18K;6.4 ly;Quartz;11;1600;SKU0000002",
  //     "10 mm;gold 99K;5 ly;Quartz;12;1700;SKU0000003",
  //     "10 mm;gold 99K;6.4 ly;Quartz;13;1800;SKU0000004",
  //     "12 mm;gold 18K;5 ly;Quartz;14;9500;SKU0000005",
  //     "12 mm;gold 18K;6.4 ly;Quartz;15;2000;SKU0000006",
  //     "12 mm;gold 99K;5 ly;Quartz;16;2500;SKU0000007",
  //     "12 mm;gold 99K;6.4 ly;Quartz;17;3500;SKU0000008",
  //   ],
  //   lowestPrice: 1500,
  //   highestPrice: 9500,
  //   sku: "AEC7SDVX70",
  //   img: "https://i.ibb.co/nnxXBTh/bracelet-4.png",
  //   title: "Fortuna Bangle Three-row",
  //   slug: "fortuna-bangle-three-row",
  //   unit: "14 kt",
  //   imageURLs: [
  //     {
  //       img: "https://i.ibb.co/nnxXBTh/bracelet-4.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/rvmPWxc/bracelet-5.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/VqGrnz9/bracelet-6.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/CKkRNnQ/bracelet-7.png",
  //     },
  //   ],
  //   parent: "Bracelets",
  //   children: "Silver",
  //   price: 110,
  //   discount: 0,
  //   quantity: 18,
  //   brand: {
  //     name: "Louis Vuitton",
  //     id: "643134d4e2c1bd22cebb2130",
  //   },
  //   category: {
  //     name: "Bracelets",
  //     id: "64312cd3e2c1bd22cebb2129",
  //   },
  //   status: "in-stock",
  //   reviews: [],
  //   productType: "jewelry",
  //   description:
  //     "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
  //   additionalInformation: [
  //     {
  //       key: "Material",
  //       value: "Gold 18k",
  //     },
  //     {
  //       key: "Size",
  //       value: "10 mm",
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: "5 ly",
  //     },
  //     {
  //       key: "Side Stone",
  //       value: "Quartz",
  //     },
  //     {
  //       key: "Diamond Origin",
  //       value: "Natural",
  //     },
  //     {
  //       key: "Cut",
  //       value: "Excellent",
  //     },
  //     {
  //       key: "Color",
  //       value: "D",
  //     },
  //     {
  //       key: "Clarity",
  //       value: "VVS1",
  //     },
  //     {
  //       key: "Carat Weight",
  //       value: "2 ct",
  //     },
  //     {
  //       key: "GREAT FOR LAYERING",
  //       value: "Mini waffle fabric construction",
  //     },
  //     {
  //       key: "LEGENDARY STYLING",
  //       value: "Cute keyhole notch neck with custom",
  //     },
  //     {
  //       key: "CUFF DETAILS",
  //       value: "Velvet details with lace trim on the cuffs",
  //     },
  //   ],
  //   tags: ["bracelets", "silver"],
  //   featured: true,
  //   sellCount: 0,
  // },
  // {
  //   _id: "64323fd99814bb139594c443",
  //   classificationAttributes: [
  //     {
  //       key: "Size",
  //       value: ["10 mm", "12 mm"],
  //     },
  //     {
  //       key: "Material",
  //       value: ["gold 18K", "gold 99K"],
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: ["5 ly", "6.4 ly"],
  //     },
  //     {
  //       key: "Side Stone",
  //       value: ["Quartz"],
  //     },
  //     // "Size|10 mm;12 mm",
  //     // "Material|gold 18K;gold 99K",
  //     // "Main Diamond Size|5 ly;6.4 ly",
  //     // "Side Stone|Quartz",
  //   ],
  //   productVariants: [
  //     "10 mm;gold 18K;5 ly;Quartz;10;1500;SKU0000001",
  //     "10 mm;gold 18K;6.4 ly;Quartz;11;1600;SKU0000002",
  //     "10 mm;gold 99K;5 ly;Quartz;12;1700;SKU0000003",
  //     "10 mm;gold 99K;6.4 ly;Quartz;13;1800;SKU0000004",
  //     "12 mm;gold 18K;5 ly;Quartz;14;9500;SKU0000005",
  //     "12 mm;gold 18K;6.4 ly;Quartz;15;2000;SKU0000006",
  //     "12 mm;gold 99K;5 ly;Quartz;16;2500;SKU0000007",
  //     "12 mm;gold 99K;6.4 ly;Quartz;17;3500;SKU0000008",
  //   ],
  //   lowestPrice: 1500,
  //   highestPrice: 9500,
  //   sku: "BAC7SDVX70",
  //   img: "https://i.ibb.co/s12Fy6m/earring-4.png",
  //   title: "Palm Ring",
  //   slug: "palm-ring",
  //   unit: "18 kt",
  //   imageURLs: [
  //     {
  //       img: "https://i.ibb.co/s12Fy6m/earring-4.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/7rL5bgs/earring-5.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/p2BCQrp/earring-6.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/JBnqqJH/earring-7.png",
  //     },
  //   ],
  //   parent: "Earrings",
  //   children: "Silver",
  //   price: 135,
  //   discount: 0,
  //   quantity: 13,
  //   brand: {
  //     name: "Louis Vuitton",
  //     id: "643134d4e2c1bd22cebb2130",
  //   },
  //   category: {
  //     name: "Earrings",
  //     id: "64312cf0e2c1bd22cebb212b",
  //   },
  //   status: "in-stock",
  //   reviews: [],
  //   productType: "jewelry",
  //   description:
  //     "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
  //   additionalInformation: [
  //     {
  //       key: "Material",
  //       value: "Gold 18k",
  //     },
  //     {
  //       key: "Size",
  //       value: "10 mm",
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: "5 ly",
  //     },
  //     {
  //       key: "Side Stone",
  //       value: "Quartz",
  //     },
  //     {
  //       key: "Diamond Origin",
  //       value: "Natural",
  //     },
  //     {
  //       key: "Cut",
  //       value: "Excellent",
  //     },
  //     {
  //       key: "Color",
  //       value: "D",
  //     },
  //     {
  //       key: "Clarity",
  //       value: "VVS1",
  //     },
  //     {
  //       key: "Carat Weight",
  //       value: "2 ct",
  //     },
  //     {
  //       key: "GREAT FOR LAYERING",
  //       value: "Mini waffle fabric construction",
  //     },
  //     {
  //       key: "LEGENDARY STYLING",
  //       value: "Cute keyhole notch neck with custom",
  //     },
  //     {
  //       key: "CUFF DETAILS",
  //       value: "Velvet details with lace trim on the cuffs",
  //     },
  //   ],
  //   tags: ["earrings", "silver"],
  //   featured: true,
  //   sellCount: 3,
  // },
  // {
  //   _id: "6432433c9814bb139594c44c",
  //   sku: "BCC7SDVX54",
  //   img: "https://i.ibb.co/cwzhf2G/necklaces-4.png",
  //   title: "Birthstone Necklace for Women",
  //   slug: "birthstone-necklace-for-women",
  //   unit: "14 kt",
  //   imageURLs: [
  //     {
  //       img: "https://i.ibb.co/cwzhf2G/necklaces-4.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/fCMG4Fb/necklaces-5.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/FDB60xJ/necklaces-6.png",
  //     },
  //   ],
  //   parent: "Necklaces",
  //   children: "Silver",
  //   price: 100,
  //   discount: 3,
  //   quantity: 13,
  //   brand: {
  //     name: "Louis Vuitton",
  //     id: "643134d4e2c1bd22cebb2130",
  //   },
  //   category: {
  //     name: "Necklaces",
  //     id: "64312d00e2c1bd22cebb212d",
  //   },
  //   status: "in-stock",
  //   reviews: [],
  //   productType: "jewelry",
  //   description:
  //     "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
  //   additionalInformation: [
  //     {
  //       key: "Material",
  //       value: "Gold 18k",
  //     },
  //     {
  //       key: "Size",
  //       value: "10 mm",
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: "5 ly",
  //     },
  //     {
  //       key: "Side Stone",
  //       value: "Quartz",
  //     },
  //     {
  //       key: "Diamond Origin",
  //       value: "Natural",
  //     },
  //     {
  //       key: "Cut",
  //       value: "Excellent",
  //     },
  //     {
  //       key: "Color",
  //       value: "D",
  //     },
  //     {
  //       key: "Clarity",
  //       value: "VVS1",
  //     },
  //     {
  //       key: "Carat Weight",
  //       value: "2 ct",
  //     },
  //     {
  //       key: "GREAT FOR LAYERING",
  //       value: "Mini waffle fabric construction",
  //     },
  //     {
  //       key: "LEGENDARY STYLING",
  //       value: "Cute keyhole notch neck with custom",
  //     },
  //     {
  //       key: "CUFF DETAILS",
  //       value: "Velvet details with lace trim on the cuffs",
  //     },
  //   ],
  //   tags: ["necklaces", "silver"],
  //   featured: false,
  //   sellCount: 0,
  // },
  // {
  //   _id: "643249b49814bb139594c454",
  //   sku: "BAD7SDVX55",
  //   img: "https://i.ibb.co/SvdvsxT/bracelet-8.png",
  //   title: "Asiyah Bangle Bracelet",
  //   slug: "asiyah-bangle-bracelet",
  //   unit: "10 kt",
  //   imageURLs: [
  //     {
  //       img: "https://i.ibb.co/SvdvsxT/bracelet-8.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/nRtHQf5/bracelet-9.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/1LJ7nnR/bracelet-10.png",
  //     },
  //   ],
  //   parent: "Bracelets",
  //   children: "Silver",
  //   price: 118,
  //   discount: 0,
  //   quantity: 15,
  //   brand: {
  //     name: "Louis Vuitton",
  //     id: "643134d4e2c1bd22cebb2130",
  //   },
  //   category: {
  //     name: "Bracelets",
  //     id: "64312cd3e2c1bd22cebb2129",
  //   },
  //   status: "in-stock",
  //   reviews: [],
  //   productType: "jewelry",
  //   description:
  //     "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
  //   additionalInformation: [
  //     {
  //       key: "Material",
  //       value: "Gold 18k",
  //     },
  //     {
  //       key: "Size",
  //       value: "10 mm",
  //     },
  //     {
  //       key: "Main Diamond Size",
  //       value: "5 ly",
  //     },
  //     {
  //       key: "Side Stone",
  //       value: "Quartz",
  //     },
  //     {
  //       key: "Diamond Origin",
  //       value: "Natural",
  //     },
  //     {
  //       key: "Cut",
  //       value: "Excellent",
  //     },
  //     {
  //       key: "Color",
  //       value: "D",
  //     },
  //     {
  //       key: "Clarity",
  //       value: "VVS1",
  //     },
  //     {
  //       key: "Carat Weight",
  //       value: "2 ct",
  //     },
  //     {
  //       key: "GREAT FOR LAYERING",
  //       value: "Mini waffle fabric construction",
  //     },
  //     {
  //       key: "LEGENDARY STYLING",
  //       value: "Cute keyhole notch neck with custom",
  //     },
  //     {
  //       key: "CUFF DETAILS",
  //       value: "Velvet details with lace trim on the cuffs",
  //     },
  //   ],
  //   tags: ["bracelets", "silver"],
  //   featured: true,
  //   sellCount: 0,
  // },
  // {
  //   _id: "64324f0c9814bb139594c47c",
  //   sku: "BDC7SDVX88",
  //   img: "https://i.ibb.co/Bf0gXqY/earring-8.png",
  //   title: "Fortuna Creole Hoop",
  //   slug: "fortuna-creole-hoop",
  //   unit: "12 kt",
  //   imageURLs: [
  //     {
  //       img: "https://i.ibb.co/Bf0gXqY/earring-8.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/FX5VyWP/earring-9.png",
  //     },
  //     {
  //       img: "https://i.ibb.co/zQzsWqW/earring-10.png",
  //     },
  //   ],
  //   parent: "Earrings",
  //   children: "Silver",
  //   price: 99,
  //   discount: 0,
  //   quantity: 9,
  //   brand: {
  //     name: "Louis Vuitton",
  //     id: "643134d4e2c1bd22cebb2130",
  //   },
  //   category: {
  //     name: "Earrings",
  //     id: "64312cf0e2c1bd22cebb212b",
  //   },
  //   status: "in-stock",
  //   reviews: [],
  //   productType: "jewelry",
  //   description:
  //     "Achieve that sun-kissed glow with the Baked Mineral Bronzer from INIKA. Perfect for contouring, the loose powder adds a subtle and natural tanned tone to skin, perfectly complementing fair to medium complexions. Lightweight and non-cakey, it effortlessly sculpts and defines cheekbones to leave skin looking healthy and radiant. Certified Vegan. Cruelty free.",
  //   additionalInformation: [
  //     {
  //       key: "GREAT FOR LAYERING",
  //       value: "Mini waffle fabric construction",
  //     },
  //     {
  //       key: "LEGENDARY STYLING",
  //       value: "Cute keyhole notch neck with custom",
  //     },
  //     {
  //       key: "CUFF DETAILS",
  //       value: "Velvet details with lace trim on the cuffs",
  //     },
  //   ],
  //   tags: ["earrings", "silver"],
  //   featured: true,
  //   sellCount: 2,
  // },
];

module.exports = products;
