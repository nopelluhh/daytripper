"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("./utils");
var Calendar = function (_a) {
    var 
    // Container
    style = _a.style, className = _a.className, 
    // Data
    month = _a.month, _b = _a.events, events = _b === void 0 ? [] : _b, 
    // Subcomponents
    dayComponent = _a.dayComponent, weekComponent = _a.weekComponent, eventComponent = _a.eventComponent;
    var weeks = utils_1.getMonthData(month).weeks;
    var Day = dayComponent;
    var Week = weekComponent;
    var Events = eventComponent;
    return (react_1.default.createElement("div", { style: style, className: className }, weeks.map(function (w, i) { return (react_1.default.createElement(Week, { key: i, weekNumber: i }, w.map(function (d) { return (react_1.default.createElement(Day, { date: d },
        d === null ? null : d + 1,
        d && events[d] && (react_1.default.createElement(Events, { events: events[d] }, events[d])))); }))); })));
};
Calendar.defaultProps = {
    dayComponent: function (_a) {
        var date = _a.date;
        return react_1.default.createElement("div", null, date);
    },
    weekComponent: function (_a) {
        var children = _a.children;
        return react_1.default.createElement("div", null, children);
    },
};
exports.default = Calendar;
