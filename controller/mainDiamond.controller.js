const mainDiamondServices = require("../services/mainDiamond.service");

// create main diamond
exports.createMainDiamond = async (req, res, next) => {
  try {
    const result = await mainDiamondServices.createMainDiamondService(req.body);
    res.status(200).json({
      success: true,
      message: "Main Diamond created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update main diamond
exports.updateMainDiamond = async (req, res, next) => {
  try {
    const result = await mainDiamondServices.updateMainDiamondService(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Main Diamond updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get all main diamonds
exports.getAllMainDiamonds = async (req, res, next) => {
  try {
    const result = await mainDiamondServices.getAllMainDiamondsService();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get main diamond by id
exports.getMainDiamondById = async (req, res, next) => {
  try {
    const result = await mainDiamondServices.getMainDiamondByIdService(
      req.params.id
    );
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete main diamond
exports.deleteMainDiamond = async (req, res, next) => {
  try {
    await mainDiamondServices.deleteMainDiamondService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Main Diamond deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// link product to main diamond
exports.linkProductToMainDiamond = async (req, res, next) => {
  try {
    const result = await mainDiamondServices.linkProductToMainDiamondService(
      req.params.mainDiamondId,
      req.params.productId
    );
    res.status(200).json({
      success: true,
      message: "Product linked to Main Diamond successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// unlink product from main diamond
exports.unlinkProductFromMainDiamond = async (req, res, next) => {
  try {
    const result =
      await mainDiamondServices.unlinkProductFromMainDiamondService(
        req.params.mainDiamondId,
        req.params.productId
      );
    res.status(200).json({
      success: true,
      message: "Product unlinked from Main Diamond successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
