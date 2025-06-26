import { useCallback, useState } from "react";
import { v7 as uuid } from "uuid";
import { ItemValue } from "../Item";

export default function useItems() {
  const [items, setItems] = useState<ItemValue[]>([]);

  const onNormalItemAdd = () => {
    setItems([
      ...items,
      { key: uuid(), value: "", sing: "", type: "normal", isCheck: false },
    ]);
  };

  const onQueryItemAdd = () => {
    setItems([
      ...items,
      { key: uuid(), value: "", sing: "", type: "query", isCheck: false },
    ]);
  };

  const onChangeCheckToggle = (key: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.key === key ? { ...item, isCheck: !item.isCheck } : item
      )
    );
  };

  const onItemDelete = useCallback(
    (key: string) => {
      setItems(() => [...items.filter((item) => item.key !== key)]);
    },
    [items]
  );

  const onSave = () => {
    return items;
  };

  return {
    items,
    onNormalItemAdd,
    onQueryItemAdd,
    onItemDelete,
    onChangeCheckToggle,
    onSave,
  };
}
