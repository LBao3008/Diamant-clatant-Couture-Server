const diamondShells = [
  {
    _id: "60f0c1b3e6f1f3b3b4f1f6b3",
    material: "gold 18k", // gold 18k
    diamondShellType: "ring",
    size: "10 mm",
    weight: {
      value: 80,
      unit: "g",
    },
    products: ["6431364df5a812bd37e765ac"],
    currentBuyPrice: 60 * 80,
    currentSellPrice: 65 * 80,
    currentEffectDate: new Date("2024-05-22T00:00:00Z"),
    currentUpdateDate: new Date("2024-05-22T00:00:00Z"),
    priceHistory: [
      {
        buyPrice: 60 * 80,
        sellPrice: 65 * 80,
        effectDate: new Date("2024-05-22T18:00:00Z"),
        date: new Date("2024-05-22T00:00:00Z"),
      },
    ],
  },
  {
    _id: "60f0c1b3e6f1f7b7b4f1f6b3",
    material: "gold 99k", // gold 99k
    diamondShellType: "ring",
    size: "10 mm",
    weight: {
      value: 100,
      unit: "g",
    },
    products: ["6431364df5a812bd37e765ac"],
    currentBuyPrice: 80 * 100,
    currentSellPrice: 90 * 100,
    currentEffectDate: new Date("2024-05-22T00:00:00Z"),
    currentUpdateDate: new Date("2024-05-22T00:00:00Z"),
    priceHistory: [
      {
        buyPrice: 80 * 100,
        sellPrice: 90 * 100,
        effectDate: new Date("2024-05-22T18:00:00Z"),
        date: new Date("2024-05-22T00:00:00Z"),
      },
    ],
  },
];

module.exports = diamondShells;
