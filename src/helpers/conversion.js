export default (conversion, kelvin) => {
  if (conversion == "c") {
    return Math.floor(kelvin - 273);
  }

  if (conversion == "f") {
    return Math.floor((kelvin - 273) * (9 / 5) + 32);
  }
};
