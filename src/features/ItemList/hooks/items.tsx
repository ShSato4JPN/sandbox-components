import { useCallback, useState } from "react";
import { v7 as uuid } from "uuid";
import { ItemValue } from "../Item";

export default function useItems() {
  const [items, setItems] = useState<ItemValue[]>([]);

  const onItemAdd = () => {
    setItems((prevItems) => [
      ...prevItems,
      { key: uuid(), value: "", sing: "", type: "normal", isCheck: false },
    ]);
  };

  const onItemDelete = useCallback(
    (key: string) => {
      setItems(() => [...items.filter((item) => item.key !== key)]);
    },
    [items]
  );

  return {
    items,
    onItemAdd,
    onItemDelete,
  };
}
