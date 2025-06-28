import { atom } from "jotai";
import {
  CategoryCode,
  FilterCompleteStatusCode,
  PriorityCode,
} from "../constant/todo";

export type TodoItem = {
  id: string;
  description: string;
  category: CategoryCode;
  priority: PriorityCode;
  expire: string;
  isCompleted: boolean;
};

export const todosAtom = atom<TodoItem[]>([]);
export const filterWordAtom = atom<string>("");
export const filterCompleteStatusAtom = atom<FilterCompleteStatusCode>("all");
export const filterCategoryAtom = atom<CategoryCode>("all");
