"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var range = function (n, offset) {
    if (offset === void 0) { offset = 0; }
    return new Array(n).fill(0).map(function (_, i) { return offset + i; });
};
function getMonthData(month) {
    var d = month instanceof Date ? new Date(month) : new Date();
    d.setDate(1);
    var dowOffset = d.getDay();
    var lastDay = date_fns_1.lastDayOfMonth(d).getDate();
    var rows = Math.ceil((dowOffset + lastDay) / 7);
    var weeks = range(rows).map(function (_, w) {
        return range(7).map(function (d) {
            if (d + w * 7 >= dowOffset && d - dowOffset + w * 7 < lastDay) {
                return d - dowOffset + w * 7;
            }
            else
                return null;
        });
    });
    return { dowOffset: dowOffset, rows: rows, weeks: weeks };
}
exports.getMonthData = getMonthData;
;
