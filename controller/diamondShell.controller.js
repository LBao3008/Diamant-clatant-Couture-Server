const diamondShellServices = require("../services/diamondShell.service");

// create diamond shell
exports.createDiamondShell = async (req, res, next) => {
  try {
    const result = await diamondShellServices.createDiamondShellService(
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Diamond Shell created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update diamond shell
exports.updateDiamondShell = async (req, res, next) => {
  try {
    const result = await diamondShellServices.updateDiamondShellService(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Diamond Shell updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get all diamond shells
exports.getAllDiamondShells = async (req, res, next) => {
  try {
    const result = await diamondShellServices.getAllDiamondShellsService();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get diamond shell by id
exports.getDiamondShellById = async (req, res, next) => {
  try {
    const result = await diamondShellServices.getDiamondShellByIdService(
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

// delete diamond shell
exports.deleteDiamondShell = async (req, res, next) => {
  try {
    await diamondShellServices.deleteDiamondShellService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Diamond Shell deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// link product to diamond shell
exports.linkProductToDiamondShell = async (req, res, next) => {
  try {
    const result = await diamondShellServices.linkProductToDiamondShellService(
      req.params.diamondShellId,
      req.params.productId
    );
    res.status(200).json({
      success: true,
      message: "Product linked to Diamond Shell successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// unlink product from diamond shell
exports.unlinkProductFromDiamondShell = async (req, res, next) => {
  try {
    const result =
      await diamondShellServices.unlinkProductFromDiamondShellService(
        req.params.diamondShellId,
        req.params.productId
      );
    res.status(200).json({
      success: true,
      message: "Product unlinked from Diamond Shell successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
