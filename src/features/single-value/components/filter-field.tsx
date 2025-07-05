import { useState } from "react";
import { useDataField } from "../hooks/data-field";
import { RecordFilter } from "../types/filter";

type FilterItem = {
  filter: RecordFilter
  setRecordFilter:
}

function FilterItem() {
  const { allFields, fieldCode, onFieldCodeChange } = useDataField();

  return (
    <select
      value={fieldCode || ""}
      onChange={(e) => {
        onFieldCodeChange(e.target.value);
      }}
    >
      {allFields.map((field) => (
        <option key={field.code} value={field.code}>
          {field.label}
        </option>
      ))}
    </select>
  );
}

export default function FilterField() {
  const { allFields, fieldCode, onFieldCodeChange } = useDataField();
  const [recordFilter, setRecordFilter] = useState<RecordFilter[]>([]);

  return <div>{
    recordFilter.map(filter => <div key={filter.code}>
      <FilterItem></FilterItem>
    </div>)
  }</div>;
}
