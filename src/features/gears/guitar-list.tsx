"use client";

import useGuitar from "./hooks/guitar";

export default function GuitarList() {
  const { items } = useGuitar();
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
