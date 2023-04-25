import React, { useState } from "react";

function DateToolbar() {
  const [dates, setDates] = useState([
    "2023-04-24",
    "2023-04-25",
    "2023-04-26",
    "2023-04-27",
    "2023-04-28"
  ]);

  function handleDateClick(date) {
    console.log("Clicked date:", date);
  }

  return (
    <div className="date-toolbar">
      {dates.map(date => (
        <button
          key={date}
          className="date-button"
          onClick={() => handleDateClick(date)}
        >
          {date}
        </button>
      ))}
    </div>
  );
}

export default DateToolbar;
