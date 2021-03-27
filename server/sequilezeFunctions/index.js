const findSelect = async (base, ...args) => {
  try {
    const response = await base.findAll(...args);
    return response;
  } catch {
    // alert('Ops! Something went wrong. Please, try again.')
  }
};

module.exports = {
  findSelect,
};
