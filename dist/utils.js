"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var range = function (n, offset) {
    if (offset === void 0) { offset = 0; }
    return new Array(n).fill(0).map(function (_, i) { return offset + i; });
};
function resolveMonthData(month, events) {
    if (month === void 0) { month = new Date(); }
    var d = month instanceof Date ? new Date(month) : new Date();
    d.setDate(1);
    var dowOffset = d.getDay();
    var lastDay = date_fns_1.lastDayOfMonth(d).getDate();
    var rows = Math.ceil((dowOffset + lastDay) / 7);
    var weeks = range(rows).map(function (_, w) {
        return range(7).map(function (d) {
            if (d + w * 7 >= dowOffset && d - dowOffset + w * 7 < lastDay) {
                var day = d - dowOffset + 1 + w * 7;
                var date = new Date();
                date.setDate(day);
                return { day: day, date: date, events: events[day] };
            }
            else
                return null;
        });
    });
    return { dowOffset: dowOffset, rows: rows, weeks: weeks };
}
exports.resolveMonthData = resolveMonthData;
function resolveEvents(events, month) {
    var resolvedEvents = [];
    events.forEach(function (e) {
        if (!date_fns_1.isSameMonth(e.start, month))
            return;
        var date = e.start.getDate();
        if (resolvedEvents[date]) {
            resolvedEvents[date].push(e);
        }
        else {
            resolvedEvents[date] = [e];
        }
    });
    return resolvedEvents;
}
exports.resolveEvents = resolveEvents;
