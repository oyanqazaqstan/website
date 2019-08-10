module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  // const months = [
  //   'Январь',
  //   'Февраль',
  //   'Март',
  //   'Апрель',
  //   'Май',
  //   'Июнь',
  //   'Июль',
  //   'Август',
  //   'Сентябр',
  //   'Октябрь',
  //   'Ноябрь',
  //   'Декабрь'
  // ];

  return `${dateObject.getDate()}.${dateObject.getMonth() +
    1}.${dateObject.getFullYear()}`;
};
