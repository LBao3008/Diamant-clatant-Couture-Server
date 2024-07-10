const Material = require("../model/Material");
const DiamondShell = require("../model/DiamondShell");

// create material service
exports.createMaterialService = async (data) => {
  const material = await Material.create(data);
  return material;
};

// update material service
exports.updateMaterialService = async (id, updateData) => {
  const material = await Material.findById(id);
  if (material) {
    material.name = updateData.name || material.name;
    material.density = updateData.density || material.density;
    material.priceUnit = updateData.priceUnit || material.priceUnit;
    material.currentBuyPrice =
      updateData.currentBuyPrice || material.currentBuyPrice;
    material.currentSellPrice =
      updateData.currentSellPrice || material.currentSellPrice;
    material.currentEffectDate =
      updateData.currentEffectDate || material.currentEffectDate;
    material.currentUpdateDate =
      updateData.currentUpdateDate || material.currentUpdateDate;

    if (updateData.priceHistory) {
      material.priceHistory = [
        ...material.priceHistory,
        ...updateData.priceHistory,
      ];
    }

    await material.save();
  }
  return material;
};

// get all materials service
exports.getAllMaterialsService = async () => {
  const materials = await Material.find({});
  return materials;
};

// get material by id service
exports.getMaterialByIdService = async (id) => {
  const material = await Material.findById(id);
  return material;
};

// delete material service
exports.deleteMaterialService = async (id) => {
  const material = await Material.findByIdAndDelete(id);
  return material;
};

// link diamond shell to material service
exports.linkDiamondShellToMaterialService = async (
  materialId,
  diamondShellId
) => {
  const material = await Material.findById(materialId);
  if (material) {
    material.DiamondShells.push(diamondShellId);
    await material.save();
  }
  const diamondShell = await DiamondShell.findById(diamondShellId);
  if (diamondShell) {
    diamondShell.material = materialId;
    await diamondShell.save();
  }
  return material;
};

// unlink diamond shell from material service
exports.unlinkDiamondShellFromMaterialService = async (
  materialId,
  diamondShellId
) => {
  const material = await Material.findById(materialId);
  if (material) {
    material.DiamondShells.pull(diamondShellId);
    await material.save();
  }
  const diamondShell = await DiamondShell.findById(diamondShellId);
  if (diamondShell) {
    diamondShell.material = null;
    await diamondShell.save();
  }
  return material;
};
