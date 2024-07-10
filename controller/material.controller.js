const materialServices = require("../services/material.service");

// create material
exports.createMaterial = async (req, res, next) => {
  try {
    const result = await materialServices.createMaterialService(req.body);
    res.status(200).json({
      success: true,
      message: "Material created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update material
exports.updateMaterial = async (req, res, next) => {
  try {
    const result = await materialServices.updateMaterialService(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Material updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get all materials
exports.getAllMaterials = async (req, res, next) => {
  try {
    const result = await materialServices.getAllMaterialsService();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get material by id
exports.getMaterialById = async (req, res, next) => {
  try {
    const result = await materialServices.getMaterialByIdService(req.params.id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete material
exports.deleteMaterial = async (req, res, next) => {
  try {
    await materialServices.deleteMaterialService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Material deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
