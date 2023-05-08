import { useState } from "react";
import "./CalenderStyle.css";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const daysInMonth = () => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderDays = () => {
    const days = [];
    const daysCount = daysInMonth();
    const firstDay = firstDayOfMonth();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      days.push(<div key={`day-${i}`} className="day">{i}</div>);
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{date.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
