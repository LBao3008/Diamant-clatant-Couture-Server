const componentServices = require("../services/component.service");

// create component
exports.createComponent = async (req, res, next) => {
  try {
    const result = await componentServices.createComponentService(req.body);
    res.status(200).json({
      success: true,
      message: "Component created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update component
exports.updateComponent = async (req, res, next) => {
  try {
    const result = await componentServices.updateComponentService(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Component updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get all components
exports.getAllComponents = async (req, res, next) => {
  try {
    const result = await componentServices.getAllComponentsService();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get component by id
exports.getComponentById = async (req, res, next) => {
  try {
    const result = await componentServices.getComponentByIdService(
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

// delete component
exports.deleteComponent = async (req, res, next) => {
  try {
    await componentServices.deleteComponentService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Component deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
