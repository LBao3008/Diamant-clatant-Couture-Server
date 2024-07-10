const Component = require("../model/Component");

// create component service
exports.createComponentService = async (data) => {
  const component = await Component.create(data);
  return component;
};

// update component service
exports.updateComponentService = async (id, updateData) => {
  const component = await Component.findById(id);
  if (component) {
    component.name = updateData.name || component.name;
    component.values = updateData.values || component.values;
    await component.save();
  }
  return component;
};

// get all components service
exports.getAllComponentsService = async () => {
  const components = await Component.find({});
  return components;
};

// get component by id service
exports.getComponentByIdService = async (id) => {
  const component = await Component.findById(id);
  return component;
};

// delete component service
exports.deleteComponentService = async (id) => {
  const component = await Component.findByIdAndDelete(id);
  return component;
};
