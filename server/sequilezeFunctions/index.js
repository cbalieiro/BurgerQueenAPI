const findAllSelect = async (base, ...args) => {
  const response = await base.findAll(...args);
  return response;
};

const findByPkSelect = async (base, id) => {
  const response = await base.findByPk(Number(id));
  return response;
};

const createInsert = async (base, ...args) => {
  const response = await base.create(...args);
  return response;
};

const createSelectInsert = async (base, ...args) => {
  const response = await base.findOrCreate(...args);
  return response;
};

const updateDB = async (base, ...args) => {
  const response = await base.update(...args);
  return response;
};

const destroyDelete = async (base, parameters) => {
  const response = await base.destroy(parameters);
  return response;
};

module.exports = {
  findAllSelect,
  findByPkSelect,
  createInsert,
  createSelectInsert,
  updateDB,
  destroyDelete,
};
