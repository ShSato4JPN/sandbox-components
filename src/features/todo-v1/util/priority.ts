import { PRIORITY, PriorityCode } from "../constant/todo";

export const getPriorityLabel = (code: PriorityCode) => {
  return PRIORITY.find((v) => v.code == code)?.label as string;
};
