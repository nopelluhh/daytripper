import React from 'react'

import Daytripper, { IDaytripperProps } from '../src/index'

const weekStyle = {
  borderBottom: '1px solid black',
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  maxWidth: '700px',
}

const dayStyle: React.CSSProperties = {
  borderRight: '1px solid black',
  flex: '1 auto',
  width: '100px',
  height: '100px',
  padding: '10px',
  boxSizing: 'border-box',
  position: 'relative',
}
const eventStyle: React.CSSProperties = {
  width: '80%',
  height: '80%',
  position: 'absolute',
  top: '10%',
  left: '10%',
  borderRadius: '50%',
  textAlign: 'center',
  background: 'purple',
  transition: 'all 0.2s ease-in',
  lineHeight: '80px',
}

const Week = ({ children }: any) => {
  return <div style={weekStyle}>{children}</div>
}

const Day = ({ date, children }: any) => {
  return (
    <div style={dayStyle}>
      {date}
      {children}
    </div>
  )
}

const Event = ({ events }: any) => {
  return <div style={eventStyle}>{events && events[0]}</div>
}

const first = new Date(new Date().setDate(1))

export default {
  component: Daytripper,
  props: {
    month: new Date(),
    events: [
      { start: new Date(), event: 'Today' },
      { start: first, event: '1st' },
    ],
    weekComponent: Week,
    dayComponent: Day,
    eventComponent: Event,
  },
}
