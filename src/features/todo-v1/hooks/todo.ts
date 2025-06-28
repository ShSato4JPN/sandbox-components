import { useAtom } from "jotai";
import {
  filterCategoryAtom,
  filterCompleteStatusAtom,
  filterWordAtom,
  TodoItem,
  todosAtom,
} from "../store/todo";

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

  const filteredTodo = todos
    .filter((todo) => {
      return filterWord === "" ? true : todo.description.includes(filterWord);
    })
    .filter((todo) => {
      if (filterCompleteStatus === "all") {
        return true;
      } else if (filterCompleteStatus === "completed") {
        return todo.isCompleted;
      } else {
        return !todo.isCompleted;
      }
    })
    .filter((todo) => {
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
    setFilterWord,
    setFilterCategory,
    setFilterCompleteStatus,
  };
}
