"use client";

import { JSX, useMemo } from "react";
import Item from "./Item";
import useItems from "./hooks/items";

export default function ItemList() {
  const { items, onItemAdd, onItemDelete } = useItems();

  const itemsMemo = useMemo<JSX.Element[]>(() => {
    return items.map((item, index) => (
      <li key={item.key}>
        <Item
          {...item}
          index={index + 1}
          onItemDelete={() => onItemDelete(item.key)}
        />
      </li>
    ));
  }, [items, onItemDelete]);

  return (
    <div className="w-full grid place-items-center">
      <div className="max-w-[800px] w-full p-4">
        <h2>Item List</h2>
        <ul>{itemsMemo}</ul>
        <div>
          <button onClick={onItemAdd}>追加</button>
        </div>
      </div>
    </div>
  );
}
