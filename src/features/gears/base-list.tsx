"use client";

import useBass from "./hooks/bass";

export default function BassList() {
  const { items } = useBass();
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
