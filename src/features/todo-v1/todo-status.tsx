"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import useTodo from "./hooks/todo";
import TodoCreate from "./todo-create";

export default function TodoStatus() {
  const { allTodosCount, completedTodoCount, unCompletedTodoCount } = useTodo();
  const [isCreateFormVisible, setIsCreateFormVisible] =
    useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col shadow-lg rounded-lg p-7 gap-4">
        <h1 className="text-3xl font-bold">TODO アプリ</h1>
        <div className="grid grid-cols-3 gap-5 mb-3 text-gray-600">
          <div className="flex flex-col items-center p-5 rounded-lg bg-blue-100">
            <p className="text-3xl font-bold text-blue-700">{allTodosCount}</p>
            <p>総タスク数</p>
          </div>
          <div className="flex flex-col items-center p-5 rounded-lg bg-orange-100 ">
            <p className="text-3xl font-bold text-orange-500">
              {unCompletedTodoCount}
            </p>
            <p>未完了</p>
          </div>
          <div className="flex flex-col items-center p-5 rounded-lg bg-green-100 ">
            <p className="text-3xl font-bold text-green-600">
              {completedTodoCount}
            </p>
            <p>完了済み</p>
          </div>
        </div>
        <button
          className="flex justify-center items-center gap-2 rounded-lg p-3 text-lg font-bold cursor-pointer text-white bg-blue-500"
          onClick={() => setIsCreateFormVisible(true)}
        >
          <Plus size={20} />
          新しいタスクを追加
        </button>
      </div>
      {isCreateFormVisible && (
        <TodoCreate onClose={() => setIsCreateFormVisible(false)} />
      )}
    </>
  );
}
