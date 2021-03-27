const findAllSelect = async (base, ...args) => {
  try {
    const response = await base.findAll(...args);
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

const findByPkSelect = async (base, id) => {
  try {
    const response = await base.findByPk(Number(id));
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

const createInsert = async (base, ...args) => {
  try {
    const response = await base.create(...args);
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

const createSelectInsert = async (base, ...args) => {
  try {
    const response = await base.findOrCreate(...args);
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

const updateDB = async (base, ...args) => {
  try {
    const response = await base.update(...args);
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

const destroyDelete = async (base, parameters) => {
  try {
    const response = await base.destroy(parameters);
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

module.exports = {
  findAllSelect,
  findByPkSelect,
  createInsert,
  createSelectInsert,
  updateDB,
  destroyDelete,
};
