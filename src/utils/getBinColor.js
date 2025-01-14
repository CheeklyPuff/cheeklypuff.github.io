export const getBinColor = (d) => {
  // Copy date so don't modify original
  let currentDate = d;
  currentDate = new Date(Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  currentDate.setUTCDate(currentDate.getDate() + 4 - (currentDate.getDay()||7));

  // Get first day of year
  var yearStart = new Date(Date(currentDate.getFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(( ( (currentDate - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return weekNo % 2 === 1 ? 'recycle' : 'green';
}
