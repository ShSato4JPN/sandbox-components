import TodoEdit from "./todo-edit";
import TodoSearch from "./todo-search";
import TodoStatus from "./todo-status";

export default function TodoV1() {
  return (
    <div className="grid place-items-center">
      <div className="w-full max-w-[1000px] flex flex-col gap-5">
        <TodoStatus />
        <TodoSearch />
        <TodoEdit />
      </div>
    </div>
  );
}
