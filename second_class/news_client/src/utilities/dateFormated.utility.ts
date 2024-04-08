const dateFormatted = (date: string) => {
  const dateToFormatted = new Date(date)
  const year = dateToFormatted.getFullYear();
  let month: string | number = dateToFormatted.getMonth() + 1;
  let day: string | number = dateToFormatted.getDate();

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${day}-${month}-${year}`
}

export default dateFormatted