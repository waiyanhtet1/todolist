import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { formatDateString, formatTime12Hour } from "../utils/utils";
import Button from "./Button";
import DateTimeSelect from "./DateTimeSelect";

const DateTimeInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");

  const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState("10:00");

  const [currentStatus, setCurrentStatus] = useState<
    "todo" | "processing" | "complete"
  >("todo");

  const handleStatusChange = () => {
    switch (currentStatus) {
      case "todo":
        setCurrentStatus("processing");
        break;
      case "processing":
        setCurrentStatus("complete");
        break;
      case "complete":
        setCurrentStatus("todo");
        break;
    }
  };

  console.log("startDate", formatDateString(startDate));
  console.log("startTime", formatTime12Hour(startTime));

  console.log("endDate", formatDateString(endDate));
  console.log("endTime", formatTime12Hour(endTime));

  return (
    <div className="flex flex-col gap-2 shadow-medium p-3 rounded-sm">
      <DateTimeSelect
        title="Starts"
        date={startDate}
        setDate={setStartDate}
        time={startTime}
        setTime={setStartTime}
      />
      <DateTimeSelect
        title="Ends"
        date={endDate}
        setDate={setEndDate}
        time={endTime}
        setTime={setEndTime}
      />

      <div className="flex items-center justify-between px-4 pb-3 border-b border-border-natural">
        <p>Status</p>
        <Button
          variant={
            currentStatus === "todo"
              ? "todo"
              : currentStatus === "complete"
              ? "success"
              : "pending"
          }
          onClick={handleStatusChange}
        >
          {currentStatus === "todo"
            ? "Todo"
            : currentStatus === "complete"
            ? "Complete"
            : "Processing"}
        </Button>
      </div>
    </div>
  );
};

export default DateTimeInput;
