import { useEffect, useState } from "react";
import { cn } from "../utils/utils";

type weekDaysType = {
  day: number;
  date: string;
};

const WeekDayFilter = () => {
  const [currentWeek, setCurrentWeek] = useState<{
    today: number;
    weekDays: weekDaysType[];
  }>({
    today: 1,
    weekDays: [],
  });

  useEffect(() => {
    const getWeekDays = () => {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const today = new Date();
      const todayIndex = today.getDay();

      const weekDays = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(today.getDate() - todayIndex + i);
        return {
          day: date.getDate(),
          date: days[i],
        };
      });

      return { today: today.getDate(), weekDays };
    };

    setCurrentWeek(getWeekDays());
  }, []);

  return (
    <div className="flex items-center justify-between gap-2 px-4 py-3">
      {currentWeek.weekDays.map((day, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 px-2 cursor-pointer"
        >
          <p className="text-xs font-medium text-neutral-text uppercase">
            {day.date}
          </p>
          <p
            className={cn(
              "text-lg font-medium text-neutral-text flex items-center justify-center w-[35px] h-[35px]",
              currentWeek.today === day.day &&
                "bg-primary-strong text-base-white rounded-full"
            )}
          >
            {day.day}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeekDayFilter;
