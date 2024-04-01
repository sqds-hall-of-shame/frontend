export const isSameDay = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const formatUnixTime = (unixTime: number) => {
  const date = new Date(unixTime * 1000);
  const currentDate = new Date();
  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(currentDate.getDate() - 1);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? 0 + minutes : minutes;

  if (isSameDay(date, currentDate)) {
    return "Today at " + hours + ":" + minutes + " " + amPm;
  }

  if (isSameDay(date, yesterdayDate)) {
    return "Yesterday at " + hours + ":" + minutes + " " + amPm;
  }

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return day + " " + month + " " + year;
};

export default formatUnixTime;
