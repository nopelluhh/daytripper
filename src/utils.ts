import { lastDayOfMonth, isSameMonth } from 'date-fns'

let range = (n: number, offset = 0) =>
  new Array(n).fill(0).map((_, i) => offset + i)

export function resolveMonthData(month: Date = new Date(), events: any[] ) {
  const d = month instanceof Date ? new Date(month) : new Date()
  d.setDate(1)
  const dowOffset = d.getDay()
  const lastDay = lastDayOfMonth(d).getDate()

  let rows = Math.ceil((dowOffset + lastDay) / 7)

  const weeks = range(rows).map((_, w) => {
    return range(7).map(d => {
      if (d + w * 7 >= dowOffset && d - dowOffset + w * 7 < lastDay) {
        const day = d - dowOffset + 1 + w * 7
        const date = new Date()
        date.setDate(day)
        return { day, date, events: events[day] }
      } else return null
    })
  })

  return { dowOffset, rows, weeks }
}

export interface IEvent<T = {}> {
  start: Date
  end?: Date
  event: T
}

export function resolveEvents<T = {}>(events: IEvent<T>[], month: Date): IEvent<T>[][] {
  const resolvedEvents: IEvent<T>[][] = []
  events.forEach(e => {
    if (!isSameMonth(e.start, month)) return
    const date = e.start.getDate()
    if (resolvedEvents[date]) {
      resolvedEvents[date].push(e)
    } else {
      resolvedEvents[date] = [e]
    }
  })
  return resolvedEvents
}
