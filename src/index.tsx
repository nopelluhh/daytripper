import React from 'react'

import { resolveMonthData, resolveEvents, IEvent } from './utils'

type ResolvedDay = {
  day: number;
  date: Date;
} | null

export interface IDayProps<T = {}> {
  day: number | null
  date: Date | null
  events: IEvent<T>[] | null
}

export interface IWeekProps {
  weekNumber?: number,
  week: ResolvedDay[]
}

export interface IEventProps {
  events: any[]
}

export interface IDaytripperProps<T = {}> {
  style?: React.CSSProperties
  className?: string
  month?: Date
  events: IEvent<T>[]
  dayComponent: React.ComponentType<IDayProps>
  weekComponent: React.ComponentType<IWeekProps>
  eventComponent: React.ComponentType<IEventProps>
}

const Daytripper: React.FunctionComponent<IDaytripperProps> = ({
  // Container
  style,
  className,

  // Data
  month = new Date(),
  events = [],

  // Subcomponents
  dayComponent: Day,
  weekComponent: Week,
  eventComponent: Events,
}) => {
  const allResolvedEvents = resolveEvents(events, month);
  const { weeks } = resolveMonthData(month, allResolvedEvents)

  return (
    <div style={style} className={className}>
      {weeks.map((w, i) => (
        <Week key={i} weekNumber={i} week={w}>
          {w.map(d => (
            <Day day={d === null ? d : d.day} date={d && d.date} events={d && allResolvedEvents[d.day]}>
              {d && allResolvedEvents[d.day] ? (
                <Events events={allResolvedEvents[d.day]} />
              ) : null}
            </Day>
          ))}
        </Week>
      ))}
    </div>
  )
}

Daytripper.defaultProps = {
  dayComponent: ({ date }) => <div>{date}</div>,
  weekComponent: ({ children }) => <div>{children}</div>,
  eventComponent: ({ events }) => <div>{JSON.stringify(events)}</div>
}

export default Daytripper
