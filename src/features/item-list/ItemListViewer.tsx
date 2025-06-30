import { ItemValue } from "./Item";

type ItemListViewerProps = {
  items: ItemValue[];
};

export default function ItemListViewer({ items }: ItemListViewerProps) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={item.key} className="border p-2">
          <div>条件{index + 1}</div>
          <div>{item.value}</div>
          <div>{item.sing}</div>
          <input type="checkbox" checked={item.isCheck} readOnly />
        </div>
      ))}
    </div>
  );
}
