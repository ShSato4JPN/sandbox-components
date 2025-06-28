"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { v7 } from "uuid";
import {
  CATEGORY,
  CategoryCode,
  PRIORITY,
  PriorityCode,
} from "./constant/todo";
import useTodos from "./hooks/todo";
import { todoCreateScheme } from "./schema/todo-create";

type TodoCreateProps = {
  onClose: () => void;
};

export default function TodoCreate({ onClose }: TodoCreateProps) {
  const { addTodo } = useTodos();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(todoCreateScheme),
  });

  const onSubmit = handleSubmit((data) => {
    addTodo({
      id: v7(),
      description: data.description,
      category: data.category as CategoryCode,
      priority: data.priority as PriorityCode,
      expire: data.expire,
      isCompleted: false,
    });

    onClose();
  });

  return (
    <form
      className="flex flex-col w-full shadow-lg rounded-lg p-7 gap-4"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2 ">
        <label htmlFor="description">タスク内容</label>
        <input
          className={clsx(
            "border rounded-lg px-5 py-3",
            errors.description ? "border-2 border-red-500" : "border-gray-300"
          )}
          placeholder="新しいタスクを入力..."
          {...register("description")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category">カテゴリ</label>
        <select
          className={clsx(
            "border rounded-lg px-5 py-3",
            errors.category ? "border-2 border-red-500" : "border-gray-300"
          )}
          {...register("category")}
        >
          {CATEGORY.map(
            (v) =>
              v.code !== "all" && (
                <option key={v.code} value={v.code}>
                  {v.label}
                </option>
              )
          )}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="priority">優先度</label>
        <select
          className={clsx(
            "border rounded-lg px-5 py-3",
            errors.priority ? "border-2 border-red-500" : "border-gray-300"
          )}
          {...register("priority")}
        >
          {PRIORITY.map((v) => (
            <option key={v.code} value={v.code}>
              {v.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="expire">期限</label>
        <input
          type="date"
          className={clsx(
            "border rounded-lg px-5 py-3",
            errors.expire ? "border-2 border-red-500" : "border-gray-300"
          )}
          {...register("expire")}
        />
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-2">
        <button className="flex justify-center items-center gap-2 rounded-lg p-3 text-lg font-bold cursor-pointer text-white bg-blue-500">
          追加
        </button>
        <button
          className="flex justify-center items-center gap-2 border border-gray-300 rounded-lg p-3 text-lg cursor-pointer"
          onClick={() => onClose()}
        >
          キャンセル
        </button>
      </div>
    </form>
  );
}
