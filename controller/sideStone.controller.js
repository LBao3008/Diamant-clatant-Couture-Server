const sideStoneServices = require("../services/sideStone.service");

// create side stone
exports.createSideStone = async (req, res, next) => {
  try {
    const result = await sideStoneServices.createSideStoneService(req.body);
    res.status(200).json({
      success: true,
      message: "Side Stone created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update side stone
exports.updateSideStone = async (req, res, next) => {
  try {
    const result = await sideStoneServices.updateSideStoneService(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Side Stone updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get all side stones
exports.getAllSideStones = async (req, res, next) => {
  try {
    const result = await sideStoneServices.getAllSideStonesService();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get side stone by id
exports.getSideStoneById = async (req, res, next) => {
  try {
    const result = await sideStoneServices.getSideStoneByIdService(
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

// delete side stone
exports.deleteSideStone = async (req, res, next) => {
  try {
    await sideStoneServices.deleteSideStoneService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Side Stone deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// link product to side stone
exports.linkProductToSideStone = async (req, res, next) => {
  try {
    const result = await sideStoneServices.linkProductToSideStoneService(
      req.params.sideStoneId,
      req.params.productId
    );
    res.status(200).json({
      success: true,
      message: "Product linked to Side Stone successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// unlink product from side stone
exports.unlinkProductFromSideStone = async (req, res, next) => {
  try {
    const result = await sideStoneServices.unlinkProductFromSideStoneService(
      req.params.sideStoneId,
      req.params.productId
    );
    res.status(200).json({
      success: true,
      message: "Product unlinked from Side Stone successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
