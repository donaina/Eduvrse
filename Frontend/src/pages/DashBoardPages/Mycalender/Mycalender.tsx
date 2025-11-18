import React, { useState } from 'react'
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import "react-calendar/dist/Calendar.css";
import "../Mycalender/MyCalenderStyle.css";

const Mycalender = () => {
    const [date, setDate] = useState<Value>(new Date());

  return (
    <div>
      <div className="calendar-container">
      {/* <h1 className="calendar-title">📅 My Website Calendar</h1> */}
      <Calendar
        onChange={setDate}
        value={date}
        className="custom-calendar"
      />
      {/* <p className="calendar-selected">
        Selected Date:{" "}
        {date instanceof Date ? date.toDateString() : "No date selected"}
      </p> */}
    </div>
    </div>
  )
}

export default Mycalender