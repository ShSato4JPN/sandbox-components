// ItemList.tsx
"use client";

import { JSX, useMemo } from "react";
import Item, { ItemValue } from "./Item";
import useItems from "./hooks/items";

type ItemListProps = {
  onSaveItems: (items: ItemValue[]) => void;
};

export default function ItemList({ onSaveItems }: ItemListProps) {
  const {
    items,
    onNormalItemAdd,
    onQueryItemAdd,
    onItemDelete,
    onChangeCheckToggle,
  } = useItems();

  const itemsMemo = useMemo<JSX.Element[]>(() => {
    return items.map((item, index) => (
      <li key={item.key}>
        <Item
          {...item}
          index={index + 1}
          onItemDelete={() => onItemDelete(item.key)}
          // 修正：item.keyを渡すように変更
          onItemCheckToggle={() => onChangeCheckToggle(item.key)}
        />
      </li>
    ));
  }, [items, onChangeCheckToggle, onItemDelete]);

  return (
    <div className="w-full grid place-items-center">
      <div className="max-w-[800px] w-full p-4">
        <h2>Item List</h2>
        <ul>{itemsMemo}</ul>
        <div className="flex gap-3">
          <button className="border p-1" onClick={onNormalItemAdd}>
            ノーマルアイテム追加
          </button>
          <button className="border p-1" onClick={onQueryItemAdd}>
            クエリーアイテム追加
          </button>
          <button className="border p-1" onClick={() => onSaveItems(items)}>
            保存
          </button>
        </div>
      </div>
    </div>
  );
}
