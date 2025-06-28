import {
  filterCategoryAtom,
  filterCompleteStatusAtom,
  filterWordAtom,
  TodoItem,
  todosAtom,
} from "@/features/todo-v1/store/todo";
import { useAtom } from "jotai";

export default function useTodos() {
  const [todos, setTodos] = useAtom(todosAtom);
  const [filterWord, setFilterWord] = useAtom(filterWordAtom);
  const [filterCategory, setFilterCategory] = useAtom(filterCategoryAtom);
  const [filterCompleteStatus, setFilterCompleteStatus] = useAtom(
    filterCompleteStatusAtom
  );

  const addTodo = (newTodo: TodoItem) => {
    setTodos((prevTodo) => [...prevTodo, { ...newTodo }]);
  };

  const updateTodo = (changedTodo: TodoItem) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === changedTodo.id ? changedTodo : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodo = todos
    .filter((todo) => {
      // 曖昧検索
      return filterWord === "" ? true : todo.description.includes(filterWord);
    })
    .filter((todo) => {
      // 完了ステータスのフィルタリング
      if (filterCompleteStatus === "all") {
        return true;
      } else if (filterCompleteStatus === "completed") {
        return todo.isCompleted;
      } else {
        return !todo.isCompleted;
      }
    })
    .filter((todo) => {
      // カテゴリのフィルタリング
      if (filterCategory === "all") {
        return true;
      } else {
        return todo.category === filterCategory;
      }
    });

  return {
    todos,
    filteredTodo,
    allTodosCount: todos.length,
    completedTodoCount: todos.filter((todo) => todo.isCompleted).length,
    unCompletedTodoCount: todos.filter((todo) => !todo.isCompleted).length,
    addTodo,
    updateTodo,
    deleteTodo,
    setFilterWord,
    setFilterCategory,
    setFilterCompleteStatus,
  };
}
