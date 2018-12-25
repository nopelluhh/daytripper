import React from 'react'

import { getMonthData } from './utils'

export interface IDayProps {
    date: number | null
}

export interface IWeekProps {
  weekNumber?: number
}

export interface IEventProps {
    events: any[]
}

export interface ICalendarProps {
    style?: React.CSSProperties
    className?: string
    month?: Date
    events?: any[] | { [key: number]: any }
    dayComponent?: React.ComponentType<IDayProps>
    weekComponent?: React.ComponentType<IWeekProps>
    eventComponent?: React.ComponentType<IEventProps>
}

const Calendar: React.FunctionComponent<ICalendarProps> = ({
    // Container
    style,
    className,

    // Data
    month,
    events = [],

    // Subcomponents
    dayComponent,
    weekComponent,
    eventComponent,
}) => {
    const { weeks } = getMonthData(month)
    const Day = dayComponent!
    const Week = weekComponent!
    const Events = eventComponent!

    return (
        <div style={style} className={className}>
            {weeks.map((w, i) => (
                <Week key={i} weekNumber={i}>
                    {w.map(d => (
                        <Day date={d}>
                            {d === null ? null : d + 1}
                            {d && events[d] && (
                                <Events events={events[d]}>{events[d]}</Events>
                            )}
                        </Day>
                    ))}
                </Week>
            ))}
        </div>
    )
}

Calendar.defaultProps = {
    dayComponent: ({ date }) => <div>{date}</div>,
    weekComponent: ({ children }) => <div>{children}</div>,
}

export default Calendar
