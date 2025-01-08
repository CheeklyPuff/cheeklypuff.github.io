const getWeekPattern = (currentDate) => {
  const date = new Date(currentDate);
  if (isNaN(date)) {
    throw new Error("Invalid date provided");
  }
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1); // Jan 1 of the year
  const dayOfYear = Math.floor((date - firstDayOfYear) / (1000 * 60 * 60 * 24)) + 1; // Day of the year
  const weekNumber = Math.ceil(dayOfYear / 7); // Week number (1-based)

  return weekNumber % 2 === 1 ? 'recycle' : 'green';
}

export default getWeekPattern;