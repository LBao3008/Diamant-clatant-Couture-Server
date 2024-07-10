const DiamondShell = require("../model/DiamondShell");
const Product = require("../model/Products");

// create diamond shell service
exports.createDiamondShellService = async (data) => {
  const diamondShell = await DiamondShell.create(data);
  return diamondShell;
};

// update diamond shell service
exports.updateDiamondShellService = async (id, updateData) => {
  const diamondShell = await DiamondShell.findById(id);
  if (diamondShell) {
    diamondShell.material = updateData.material || diamondShell.material;
    diamondShell.diamondShellType =
      updateData.diamondShellType || diamondShell.diamondShellType;
    diamondShell.size = updateData.size || diamondShell.size;
    diamondShell.weight = updateData.weight || diamondShell.weight;
    diamondShell.currentBuyPrice =
      updateData.currentBuyPrice || diamondShell.currentBuyPrice;
    diamondShell.currentSellPrice =
      updateData.currentSellPrice || diamondShell.currentSellPrice;
    diamondShell.currentEffectDate =
      updateData.currentEffectDate || diamondShell.currentEffectDate;
    diamondShell.currentUpdateDate =
      updateData.currentUpdateDate || diamondShell.currentUpdateDate;

    if (updateData.priceHistory) {
      diamondShell.priceHistory = [
        ...diamondShell.priceHistory,
        ...updateData.priceHistory,
      ];
    }

    await diamondShell.save();
  }
  return diamondShell;
};

// get all diamond shells service
exports.getAllDiamondShellsService = async () => {
  const diamondShells = await DiamondShell.find({});
  return diamondShells;
};

// get diamond shell by id service
exports.getDiamondShellByIdService = async (id) => {
  const diamondShell = await DiamondShell.findById(id);
  return diamondShell;
};

// delete diamond shell service
exports.deleteDiamondShellService = async (id) => {
  const diamondShell = await DiamondShell.findByIdAndDelete(id);
  return diamondShell;
};

// link product to diamond shell service
exports.linkProductToDiamondShellService = async (
  diamondShellId,
  productId
) => {
  const diamondShell = await DiamondShell.findById(diamondShellId);
  if (diamondShell) {
    diamondShell.products.push(productId);
    await diamondShell.save();
  }
  const product = await Product.findById(productId);
  if (product) {
    product.diamondShell = diamondShellId;
    await product.save();
  }
  return diamondShell;
};

// unlink product from diamond shell service
exports.unlinkProductFromDiamondShellService = async (
  diamondShellId,
  productId
) => {
  const diamondShell = await DiamondShell.findById(diamondShellId);
  if (diamondShell) {
    diamondShell.products.pull(productId);
    await diamondShell.save();
  }
  const product = await Product.findById(productId);
  if (product) {
    product.diamondShell = null;
    await product.save();
  }
  return diamondShell;
};
