export type TaskType = {
  id: string;
  title: string;
  text: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  status: "todo" | "processing" | "complete";
  notification: boolean;
};

export type StatusType = "todo" | "processing" | "complete";

export interface GoogleUser {
  name?: string;
  email?: string;
  picture?: string;
}
