export declare function resolveMonthData(month: Date | undefined, events: any[]): {
    dowOffset: number;
    rows: number;
    weeks: ({
        day: number;
        date: Date;
        events: any;
    } | null)[][];
};
export interface IEvent<T = {}> {
    start: Date;
    end?: Date;
    event: T;
}
export declare function resolveEvents<T = {}>(events: IEvent<T>[], month: Date): IEvent<T>[][];
