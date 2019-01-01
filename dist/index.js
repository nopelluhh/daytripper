"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var utils_1 = require("./utils");
var Daytripper = function (_a) {
    var 
    // Container
    style = _a.style, className = _a.className, 
    // Data
    _b = _a.month, 
    // Data
    month = _b === void 0 ? new Date() : _b, _c = _a.events, events = _c === void 0 ? [] : _c, 
    // Subcomponents
    Day = _a.dayComponent, Week = _a.weekComponent, Events = _a.eventComponent;
    var allResolvedEvents = utils_1.resolveEvents(events, month);
    var weeks = utils_1.resolveMonthData(month, allResolvedEvents).weeks;
    return (react_1.default.createElement("div", { style: style, className: className }, weeks.map(function (w, i) { return (react_1.default.createElement(Week, { key: i, weekNumber: i, week: w }, w.map(function (d) { return (react_1.default.createElement(Day, { day: d === null ? d : d.day, date: d && d.date, events: d && allResolvedEvents[d.day] }, d && allResolvedEvents[d.day] ? (react_1.default.createElement(Events, { events: allResolvedEvents[d.day] })) : null)); }))); })));
};
Daytripper.defaultProps = {
    dayComponent: function (_a) {
        var date = _a.date;
        return react_1.default.createElement("div", null, date);
    },
    weekComponent: function (_a) {
        var children = _a.children;
        return react_1.default.createElement("div", null, children);
    },
    eventComponent: function (_a) {
        var events = _a.events;
        return react_1.default.createElement("div", null, JSON.stringify(events));
    }
};
exports.default = Daytripper;
