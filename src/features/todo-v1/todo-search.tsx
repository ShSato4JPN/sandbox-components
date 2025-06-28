"use client";

import { Search } from "lucide-react";
import {
  CATEGORY,
  CategoryCode,
  COMPLETE_STATUS,
  CompleteStatusCode,
} from "./constant/todo";
import useTodos from "./hooks/todo";

export default function TodoSearch() {
  const { setFilterWord, setFilterCompleteStatus, setFilterCategory } =
    useTodos();

  return (
    <div className="flex flex-col w-full shadow-lg rounded-lg p-7 gap-4">
      <div className="flex flex-col gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="タスクを検索..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => {
              setFilterWord(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <select
          className="border border-gray-300 rounded-lg px-5 py-3"
          onChange={(e) =>
            setFilterCompleteStatus(e.target.value as CompleteStatusCode)
          }
        >
          {COMPLETE_STATUS.map((v) => (
            <option key={v.code} value={v.code}>
              {v.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <select
          className="border border-gray-300 rounded-lg px-5 py-3"
          onChange={(e) => setFilterCategory(e.target.value as CategoryCode)}
        >
          {CATEGORY.map((v) => (
            <option key={v.code} value={v.code}>
              {v.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
