let createDate = () => {
  let d = new Date();
  let formattedDate = '';

  /*   console.log(`▓${formattedDate}`); */
  formattedDate += `${d.getMonth() + 1}_`;
  /*   console.log(`▓${formattedDate}`); */
  formattedDate += `${d.getDate()}_`;
  /*   console.log(`▓${formattedDate}`); */
  formattedDate += d.getFullYear();
  /*   console.log(`▓${formattedDate}`); */

  return formattedDate;
};

module.exports = createDate;
