const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
  const data = [...(await promiseTheaterIXX()), ...(await promiseTheaterVGC())];
  return data.reduce((total, item) => {
    if (item.hasil === hasil) {
      return total + 1;
    }
    return total + 0;
  }, 0);
};

module.exports = {
  promiseOutput,
};
