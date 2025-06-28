import {
  CategoryCode,
  CompleteStatusCode,
  PriorityCode,
} from "@/features/todo-v1/constant/todo";
import { atom } from "jotai";

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
export const filterCompleteStatusAtom = atom<CompleteStatusCode>("all");
export const filterCategoryAtom = atom<CategoryCode>("all");
