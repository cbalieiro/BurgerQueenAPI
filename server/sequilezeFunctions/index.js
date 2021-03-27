const findAllSelect = async (base, ...args) => {
  try {
    const response = await base.findAll(...args);
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

const findByPkSelect = async (base, ...args) => {
  try {
    const response = await base.findByPk(Number(...args));
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

const update = async (base, ...args) => {
  try {
    const response = await base.update(...args);
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

const destroyDelete = async (base, ...args) => {
  try {
    const response = await base.destroy(...args);
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
  update,
  destroyDelete
};
