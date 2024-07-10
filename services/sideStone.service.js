const SideStone = require("../model/SideStone");
const Product = require("../model/Products");

// create side stone service
exports.createSideStoneService = async (data) => {
  const sideStone = await SideStone.create(data);
  return sideStone;
};

// update side stone service
exports.updateSideStoneService = async (id, updateData) => {
  const sideStone = await SideStone.findById(id);
  if (sideStone) {
    sideStone.name = updateData.name || sideStone.name;
    sideStone.currentBuyPrice =
      updateData.currentBuyPrice || sideStone.currentBuyPrice;
    sideStone.currentSellPrice =
      updateData.currentSellPrice || sideStone.currentSellPrice;
    sideStone.currentEffectDate =
      updateData.currentEffectDate || sideStone.currentEffectDate;
    sideStone.currentUpdateDate =
      updateData.currentUpdateDate || sideStone.currentUpdateDate;

    if (updateData.priceHistory) {
      sideStone.priceHistory = [
        ...sideStone.priceHistory,
        ...updateData.priceHistory,
      ];
    }

    await sideStone.save();
  }
  return sideStone;
};

// get all side stones service
exports.getAllSideStonesService = async () => {
  const sideStones = await SideStone.find({});
  return sideStones;
};

// get side stone by id service
exports.getSideStoneByIdService = async (id) => {
  const sideStone = await SideStone.findById(id);
  return sideStone;
};

// delete side stone service
exports.deleteSideStoneService = async (id) => {
  const sideStone = await SideStone.findByIdAndDelete(id);
  return sideStone;
};

// link product to side stone service
exports.linkProductToSideStoneService = async (sideStoneId, productId) => {
  const sideStone = await SideStone.findById(sideStoneId);
  if (sideStone) {
    sideStone.products.push(productId);
    await sideStone.save();
  }
  const product = await Product.findById(productId);
  if (product) {
    product.sideStone = sideStoneId;
    await product.save();
  }
  return sideStone;
};

// unlink product from side stone service
exports.unlinkProductFromSideStoneService = async (sideStoneId, productId) => {
  const sideStone = await SideStone.findById(sideStoneId);
  if (sideStone) {
    sideStone.products.pull(productId);
    await sideStone.save();
  }
  const product = await Product.findById(productId);
  if (product) {
    product.sideStone = null;
    await product.save();
  }
  return sideStone;
};
