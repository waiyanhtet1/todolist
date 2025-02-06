import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateTimeSelectProps = {
  title: string;
  date: Date;
  time: string;
  setDate?: (value: Date) => void;
  setTime?: (value: string) => void;
  isDisabled: boolean;
};

const DateTimeSelect = ({
  title,
  date,
  time,
  setDate,
  setTime,
  isDisabled,
}: DateTimeSelectProps) => {
  return (
    <div className="flex items-center justify-between px-4 pb-3 border-b border-border-natural">
      <p>{title}</p>

      <div className="relative flex items-center gap-1">
        <DatePicker
          selected={date}
          onChange={(date) => {
            if (setDate) setDate(date as Date);
          }}
          dateFormat="MMM dd, yyyy"
          className="outline-none px-3 py-2 bg-primary-active text-neutral-text text-sm rounded-md text-center w-[120px] h-[35px]"
          popperPlacement="bottom-start"
          portalId="root-portal"
          disabled={isDisabled}
        />

        <input
          type="time"
          id="appt"
          name="appt"
          min="09:00"
          max="18:00"
          className="outline-none px-3 py-2 bg-primary-active text-neutral-text text-sm rounded-md text-center w-[120px] h-[35px]"
          value={time}
          onChange={(e) => {
            if (setTime) setTime(e.target.value);
          }}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default DateTimeSelect;
