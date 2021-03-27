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

module.exports = {
  findSelect,
  findByPkSelect,
};
