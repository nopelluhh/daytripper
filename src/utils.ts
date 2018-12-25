import { lastDayOfMonth } from "date-fns";

let range = (n: number, offset = 0) =>
    new Array(n).fill(0).map((_, i) => offset + i)

export function getMonthData(month?: Date) {
  const d = month instanceof Date ? new Date(month) : new Date();
  d.setDate(1);
  const dowOffset = d.getDay();
  const lastDay = lastDayOfMonth(d).getDate();

  let rows = Math.ceil((dowOffset + lastDay) / 7);

  const weeks = range(rows).map((_, w) => {
    return range(7).map(d => {
      if (d + w * 7 >= dowOffset && d - dowOffset + w * 7 < lastDay) {
        return d - dowOffset + w * 7;
      } else return null;
    });
  });

  return { dowOffset, rows, weeks };
};
