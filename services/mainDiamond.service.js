const MainDiamond = require("../model/MainDiamond");
const Product = require("../model/Products");

// create main diamond service
exports.createMainDiamondService = async (data) => {
  const mainDiamond = await MainDiamond.create(data);
  return mainDiamond;
};

// update main diamond service
exports.updateMainDiamondService = async (id, updateData) => {
  const mainDiamond = await MainDiamond.findById(id);
  if (mainDiamond) {
    if (updateData.origin) mainDiamond.origin = updateData.origin;
    if (updateData.caratWeight)
      mainDiamond.caratWeight = updateData.caratWeight;
    if (updateData.cut) mainDiamond.cut = updateData.cut;
    if (updateData.color) mainDiamond.color = updateData.color;
    if (updateData.clarity) mainDiamond.clarity = updateData.clarity;
    if (updateData.currentBuyPrice)
      mainDiamond.currentBuyPrice = updateData.currentBuyPrice;
    if (updateData.currentSellPrice)
      mainDiamond.currentSellPrice = updateData.currentSellPrice;
    if (updateData.currentEffectDate)
      mainDiamond.currentEffectDate = updateData.currentEffectDate;
    if (updateData.currentUpdateDate)
      mainDiamond.currentUpdateDate = updateData.currentUpdateDate;

    // If there is a price history update
    if (updateData.priceHistory) {
      mainDiamond.priceHistory = [
        ...mainDiamond.priceHistory,
        ...updateData.priceHistory,
      ];
    }

    await mainDiamond.save();
  }
  return mainDiamond;
};

// get all main diamonds service
exports.getAllMainDiamondsService = async () => {
  const mainDiamonds = await MainDiamond.find({});
  return mainDiamonds;
};

// get main diamond by id service
exports.getMainDiamondByIdService = async (id) => {
  const mainDiamond = await MainDiamond.findById(id);
  return mainDiamond;
};

// delete main diamond service
exports.deleteMainDiamondService = async (id) => {
  const mainDiamond = await MainDiamond.findByIdAndDelete(id);
  return mainDiamond;
};

// link product to main diamond service
exports.linkProductToMainDiamondService = async (mainDiamondId, productId) => {
  const mainDiamond = await MainDiamond.findById(mainDiamondId);
  if (mainDiamond) {
    mainDiamond.products.push(productId);
    await mainDiamond.save();
  }
  const product = await Product.findById(productId);
  if (product) {
    product.mainDiamond = mainDiamondId;
    await product.save();
  }
  return mainDiamond;
};

// unlink product from main diamond service
exports.unlinkProductFromMainDiamondService = async (
  mainDiamondId,
  productId
) => {
  const mainDiamond = await MainDiamond.findById(mainDiamondId);
  if (mainDiamond) {
    mainDiamond.products.pull(productId);
    await mainDiamond.save();
  }
  const product = await Product.findById(productId);
  if (product) {
    product.mainDiamond = null;
    await product.save();
  }
  return mainDiamond;
};
