import { useDataField } from "../hooks/data-field";

export default function FilterField() {
  const { firstFieldCode, allFields, onFieldCodeChange } = useDataField();

  return (
    <select
      value={firstFieldCode || ""}
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
