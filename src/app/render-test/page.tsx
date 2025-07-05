"use client";

import { useCallback, useMemo, useState } from "react";

export default function Page() {
  const [inputLabel, setInputLabel] = useState<string>("");
  const [showLabel, setShowLabel] = useState<string>("");
  const [showLabel3, setShowLabel3] = useState<string>("");

  const showLabel2 = useMemo<string>(() => showLabel, [showLabel]);

  const onSaveLabel = useCallback(() => {
    setShowLabel(inputLabel);
  }, [inputLabel]);

  const onSaveLabel3 = useCallback(() => {
    console.log("here!!!");
    setShowLabel3(showLabel2);
  }, [showLabel2]);

  return (
    <div>
      <div>label1: {showLabel}</div>
      <div>label2: {showLabel2}</div>
      <div>label3: {showLabel3}</div>
      <input
        className="border border-gray-500 rounded-lg mr-2"
        onChange={(e) => setInputLabel(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          className="p-1 rounded-lg border border-gray-500"
          onClick={() => onSaveLabel()}
        >
          update show label2
        </button>
        <button
          className="p-1 rounded-lg border border-gray-500"
          onClick={() => onSaveLabel3()}
        >
          update show label3
        </button>
      </div>
    </div>
  );
}
