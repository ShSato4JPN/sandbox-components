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
};

export default function Item({
  index,
  value,
  type,
  sing,
  isCheck,
  onItemDelete,
}: ItemProps) {
  return (
    <div className="w-full grid place-items-center border">
      <div>条件{index}</div>
      <button onClick={onItemDelete}>削除</button>
      <div>{value}</div>
      <div>{sing}</div>
      <input type="checkbox" checked={isCheck} />
      {type === "normal" ? <div>normal</div> : <div>normal</div>}
    </div>
  );
}
