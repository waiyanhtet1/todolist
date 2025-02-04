import clsx from "clsx";
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
