import "react-datepicker/dist/react-datepicker.css";
import { StatusType } from "../types/taskTypes";
import Button from "./Button";
import DateTimeSelect from "./DateTimeSelect";

type DateTimeInputProps = {
  isDisabled?: boolean;
  startDate: Date;
  setStartDate: (value: Date) => void;
  endDate: Date;
  setEndDate: (value: Date) => void;
  startTime: string;
  setStartTime: (value: string) => void;
  endTime: string;
  setEndTime: (value: string) => void;
  status: StatusType;
  setStatus: (value: StatusType) => void;
};

const DateTimeInput = ({
  isDisabled,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  status,
  setStatus,
}: DateTimeInputProps) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [startTime, setStartTime] = useState("10:00");
  // const [endDate, setEndDate] = useState(new Date());
  // const [endTime, setEndTime] = useState("10:00");
  // const [currentStatus, setCurrentStatus] = useState<
  //   "todo" | "processing" | "complete"
  // >("todo");

  // useEffect(() => {
  //   if (inputStartDate) {
  //     const formattedDate = formattedDateString(inputStartDate);
  //     setStartDate(new Date(formattedDate));
  //   }
  //   if (inputEndDate) {
  //     const formattedDate = formattedDateString(inputEndDate);
  //     setEndDate(new Date(formattedDate));
  //   }
  //   if (inputStartTime) setStartTime(inputStartTime);

  //   if (inputEndTime) setEndTime(inputEndTime);

  //   if (inputStatus) setCurrentStatus(inputStatus);
  //   if (status) setCurrentStatus(status);
  // }, [status]);

  const handleStatusChange = () => {
    switch (status) {
      case "todo":
        setStatus("processing");
        break;
      case "processing":
        setStatus("complete");
        break;
      case "complete":
        setStatus("todo");
        break;
    }
  };

  return (
    <div className="flex flex-col gap-2 shadow-medium p-3 rounded-sm">
      <DateTimeSelect
        title="Starts"
        date={startDate}
        setDate={setStartDate}
        time={startTime}
        setTime={setStartTime}
        isDisabled={isDisabled as boolean}
      />
      <DateTimeSelect
        title="Ends"
        date={endDate}
        setDate={setEndDate}
        time={endTime}
        setTime={setEndTime}
        isDisabled={isDisabled as boolean}
      />

      <div className="flex items-center justify-between px-4 pb-3 border-b border-border-natural">
        <p>Status</p>
        <Button
          isDisabled={isDisabled as boolean}
          variant={
            status === "todo"
              ? "todo"
              : status === "complete"
              ? "success"
              : "pending"
          }
          onClick={handleStatusChange}
        >
          {status === "todo"
            ? "Todo"
            : status === "complete"
            ? "Complete"
            : "Processing"}
        </Button>
      </div>
    </div>
  );
};

export default DateTimeInput;
