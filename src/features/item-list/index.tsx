"use client";

import { useState } from "react";
import { ItemValue } from "./Item";
import ItemList from "./ItemList";
import ItemListViewer from "./ItemListViewer";

export default function Index() {
  const [data, setData] = useState<ItemValue[][]>([]);

  const onSaveItems = (items: ItemValue[]) => {
    setData([...data, items]);
  };

  return (
    <div className="flex gap-2 border">
      <div>
        <h3>list 1</h3>
        <ItemList onSaveItems={onSaveItems} />
      </div>
      <div>
        <h3>list 2</h3>
        <ItemList onSaveItems={onSaveItems} />
      </div>
      <div>
        <h3>Saved Items</h3>
        <ItemListViewer items={data.flat()} />
      </div>
    </div>
  );
}
