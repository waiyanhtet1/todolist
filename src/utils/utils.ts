import clsx from "clsx";
import { format } from "date-fns";
import moment from "moment-timezone";
import { twMerge } from "tailwind-merge";

type Input =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, boolean>
  | Input[];

export function cn(...inputs: Input[]): string {
  return twMerge(clsx(inputs));
}

export const formatTime12Hour = (time: string): string => {
  if (!time) return "";

  const [hours, minutes] = time.split(":");
  const hoursNum = parseInt(hours, 10);

  const ampm = hoursNum >= 12 ? "PM" : "AM";
  const formattedHours = hoursNum % 12 || 12;

  return `${formattedHours}:${minutes} ${ampm}`;
};

export const formatDateString = (date: Date) => {
  return date.toLocaleDateString("en-Us", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export const changeDateTimeStamp = (date: Date) => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ssXXX");
};

export const formattedDateString = (date: Date) => {
  return moment(date)
    .tz("Asia/Yangon")
    .format("ddd MMM DD YYYY HH:mm:ss [GMT]Z (z)");
};
