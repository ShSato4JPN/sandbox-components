import useTodos from "@/features/todo-v1/hooks/todo";
import { todosAtom } from "@/features/todo-v1/store/todo";
import { renderHook, waitFor } from "@testing-library/react";
import { createStore, Provider } from "jotai";
import React, { act } from "react";

describe("useTodos フック", () => {
  const wrapperFactory = () => {
    const store = createStore();
    store.set(todosAtom, [
      {
        id: "1",
        description: "テストデータ1",
        category: "work",
        priority: "high",
        expire: "2023-12-31",
        isCompleted: false,
      },
      {
        id: "2",
        description: "テストデータ2",
        category: "work",
        priority: "middle",
        expire: "2023-12-31",
        isCompleted: false,
      },
      {
        id: "3",
        description: "テストデータ3",
        category: "work",
        priority: "low",
        expire: "2023-12-31",
        isCompleted: false,
      },
    ]);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    return { wrapper };
  };

  it("初期状態の todos を返す", () => {
    const { result } = renderHook(() => useTodos(), wrapperFactory());

    expect(result.current.todos).toEqual([
      {
        id: "1",
        description: "テストデータ1",
        category: "work",
        priority: "high",
        expire: "2023-12-31",
        isCompleted: false,
      },
      {
        id: "2",
        description: "テストデータ2",
        category: "work",
        priority: "middle",
        expire: "2023-12-31",
        isCompleted: false,
      },
      {
        id: "3",
        description: "テストデータ3",
        category: "work",
        priority: "low",
        expire: "2023-12-31",
        isCompleted: false,
      },
    ]);
  });

  it("todo を追加することができる", async () => {
    const { result } = renderHook(() => useTodos(), wrapperFactory());

    act(() => {
      result.current.addTodo({
        id: "4",
        description: "テストデータ4",
        category: "work",
        priority: "high",
        expire: "2023-12-31",
        isCompleted: false,
      });
    });

    await waitFor(() => {
      expect(result.current.todos).toEqual([
        {
          id: "1",
          description: "テストデータ1",
          category: "work",
          priority: "high",
          expire: "2023-12-31",
          isCompleted: false,
        },
        {
          id: "2",
          description: "テストデータ2",
          category: "work",
          priority: "middle",
          expire: "2023-12-31",
          isCompleted: false,
        },
        {
          id: "3",
          description: "テストデータ3",
          category: "work",
          priority: "low",
          expire: "2023-12-31",
          isCompleted: false,
        },
        {
          id: "4",
          description: "テストデータ4",
          category: "work",
          priority: "high",
          expire: "2023-12-31",
          isCompleted: false,
        },
      ]);
    });
  });

  it("todo を更新することができる", async () => {
    const { result } = renderHook(() => useTodos(), wrapperFactory());

    act(() => {
      result.current.updateTodo({
        id: "1",
        description: " 更新後",
        category: "study",
        priority: "low",
        expire: "2025-6-28",
        isCompleted: true,
      });
    });

    await waitFor(() => {
      expect(result.current.todos).toEqual([
        {
          id: "1",
          description: " 更新後",
          category: "study",
          priority: "low",
          expire: "2025-6-28",
          isCompleted: true,
        },
        {
          id: "2",
          description: "テストデータ2",
          category: "work",
          priority: "middle",
          expire: "2023-12-31",
          isCompleted: false,
        },
        {
          id: "3",
          description: "テストデータ3",
          category: "work",
          priority: "low",
          expire: "2023-12-31",
          isCompleted: false,
        },
      ]);
    });
  });

  it("todo を削除することができる", async () => {
    const { result } = renderHook(() => useTodos(), wrapperFactory());

    act(() => {
      result.current.deleteTodo("1");
      result.current.deleteTodo("3");
    });

    await waitFor(() => {
      expect(result.current.todos).toEqual([
        {
          id: "2",
          description: "テストデータ2",
          category: "work",
          priority: "middle",
          expire: "2023-12-31",
          isCompleted: false,
        },
      ]);
    });
  });
});
