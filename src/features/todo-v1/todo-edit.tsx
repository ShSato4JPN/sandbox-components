"use client";

import useTodos from "@/features/todo-v1/hooks/todo";
import { getCategoryLabel } from "@/features/todo-v1/util/category";
import { getPriorityLabel } from "@/features/todo-v1/util/priority";
import clsx from "clsx";
import { Check, Circle, Pencil, Tag, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { TodoItem } from "./store/todo";

type EditingTodoProps = {
  todo: TodoItem;
  onEditEnd: () => void;
  onUpdate: (changedTodo: TodoItem) => void;
};

function EditingTodo({ todo, onEditEnd, onUpdate }: EditingTodoProps) {
  const descriptionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (descriptionRef.current !== null) {
      descriptionRef.current.value = todo.description;
    }
  }, [todo.description]);

  return (
    <div className="grid grid-cols-[auto_1fr_auto] place-items-center gap-3">
      <button className="rounded-full overflow-hidden">
        {todo.isCompleted ? (
          <Check
            size={35}
            className="p-1.5 text-white bg-green-400 cursor-pointer"
            onClick={() =>
              onUpdate({
                ...todo,
                isCompleted: false,
              })
            }
          />
        ) : (
          <Circle
            size={35}
            className="stroke-1 text-gray-300 cursor-pointer"
            onClick={() =>
              onUpdate({
                ...todo,
                isCompleted: true,
              })
            }
          />
        )}
      </button>
      <input
        ref={descriptionRef}
        type="text"
        className="w-full border border-gray-300 rounded-lg px-3 py-1"
        value={descriptionRef.current?.value}
      />
      <div className="flex justify-between gap-5">
        <Check
          size={20}
          className="cursor-pointer text-green-400"
          onClick={() => {
            onUpdate({
              ...todo,
              description: descriptionRef.current?.value ?? todo.description,
            });
            onEditEnd();
          }}
        />
        <X
          size={20}
          className="cursor-pointer text-red-500"
          onClick={onEditEnd}
        />
      </div>
    </div>
  );
}

export default function TodoEdit() {
  const { filteredTodo, updateTodo, deleteTodo } = useTodos();
  const [isEditing, setIsEditing] = useState<string>("");

  console.table(filteredTodo);

  const todoList = useMemo(
    () =>
      filteredTodo.map((todo) => (
        <li key={todo.id} className="p-5 rounded-lg shadow-lg">
          {isEditing === todo.id ? (
            <EditingTodo
              todo={todo}
              onEditEnd={() => setIsEditing("")}
              onUpdate={(changedTodo) => updateTodo(changedTodo)}
            />
          ) : (
            <div className="grid grid-cols-[auto_1fr_auto] place-items-center gap-3">
              <button className="rounded-full overflow-hidden">
                {todo.isCompleted ? (
                  <Check
                    size={35}
                    className="p-1.5 text-white bg-green-400 cursor-pointer"
                    onClick={() =>
                      updateTodo({
                        ...todo,
                        isCompleted: false,
                      })
                    }
                  />
                ) : (
                  <Circle
                    size={35}
                    className="stroke-1 text-gray-300 cursor-pointer"
                    onClick={() =>
                      updateTodo({
                        ...todo,
                        isCompleted: true,
                      })
                    }
                  />
                )}
              </button>
              <div
                className={clsx(
                  "w-full flex flex-col gap-2 ",
                  todo.isCompleted && "opacity-75"
                )}
              >
                <h2
                  className={clsx(
                    "text-xl",
                    todo.isCompleted && "line-through text-gray-400"
                  )}
                >
                  {todo.description}
                </h2>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Tag size={18} />
                    <span className="rounded-lg py-1 px-2.5 font-bold text-sm text-white bg-blue-500">
                      {getCategoryLabel(todo.category)}
                    </span>
                  </div>
                  <p className="text-blue-500">
                    優先度: {getPriorityLabel(todo.priority)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <Pencil
                  size={20}
                  className="cursor-pointer text-blue-500"
                  onClick={() => setIsEditing(todo.id)}
                />
                <Trash2
                  size={20}
                  className="cursor-pointer text-red-500"
                  onClick={() => deleteTodo(todo.id)}
                />
              </div>
            </div>
          )}
        </li>
      )),
    [filteredTodo, isEditing, updateTodo, deleteTodo]
  );

  return (
    <div>
      <ul className="flex flex-col gap-4">{todoList}</ul>
    </div>
  );
}
