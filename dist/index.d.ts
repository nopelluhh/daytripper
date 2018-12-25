import React from 'react';
export interface IDayProps {
    date: number | null;
}
export interface IWeekProps {
    weekNumber?: number;
}
export interface IEventProps {
    events: any[];
}
export interface ICalendarProps {
    style?: React.CSSProperties;
    className?: string;
    month?: Date;
    events?: any[] | {
        [key: number]: any;
    };
    dayComponent?: React.ComponentType<IDayProps>;
    weekComponent?: React.ComponentType<IWeekProps>;
    eventComponent?: React.ComponentType<IEventProps>;
}
declare const Calendar: React.FunctionComponent<ICalendarProps>;
export default Calendar;
