import dayjs from "dayjs";
export function formatDate(date, formatString = "MM月DD日") {
  return dayjs(date).format(formatString);
}
export function getDiffDate(start, end) {
  return dayjs(end).diff(start, "day");
}
