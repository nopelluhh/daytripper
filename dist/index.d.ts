import React from 'react';
import { IEvent } from './utils';
declare type ResolvedDay = {
    day: number;
    date: Date;
} | null;
export interface IDayProps<T = {}> {
    day: number | null;
    date: Date | null;
    events: IEvent<T>[] | null;
}
export interface IWeekProps {
    weekNumber?: number;
    week: ResolvedDay[];
}
export interface IEventProps {
    events: any[];
}
export interface IDaytripperProps<T = {}> {
    style?: React.CSSProperties;
    className?: string;
    month?: Date;
    events: IEvent<T>[];
    dayComponent: React.ComponentType<IDayProps>;
    weekComponent: React.ComponentType<IWeekProps>;
    eventComponent: React.ComponentType<IEventProps>;
}
declare const Daytripper: React.FunctionComponent<IDaytripperProps>;
export default Daytripper;
