// Item.tsx
import Normal from "./Normal";
import Query from "./Query";

export type ItemValue = {
  key: string;
  value: string;
  type: "normal" | "query";
  sing: string;
  isCheck: boolean;
};

type ItemProps = {
  index: number;
  value: string;
  type: "normal" | "query";
  sing: string;
  isCheck: boolean;
  onItemDelete: () => void;
  onItemCheckToggle: () => void;
};

export default function Item({
  index,
  value,
  type,
  sing,
  isCheck,
  onItemDelete,
  onItemCheckToggle,
}: ItemProps) {
  // デバッグ用ログ
  const handleCheckToggle = () => {
    console.log(
      `チェックボックスクリック: index=${index}, 現在の状態=${isCheck}`
    );
    onItemCheckToggle();
  };

  return (
    <div className="w-full grid place-items-center border">
      <div>条件{index}</div>
      <button onClick={onItemDelete}>削除</button>
      <div>{value}</div>
      <div>{sing}</div>
      <input type="checkbox" checked={isCheck} onChange={handleCheckToggle} />
      {type === "normal" ? <Normal /> : <Query />}
    </div>
  );
}
