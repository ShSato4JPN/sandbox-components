import { useDataField } from "../hooks/data-field";

export default function SelectField() {
  const { fieldCode, availableFields, onFieldCodeChange } = useDataField();

  return (
    <select
      value={fieldCode || ""}
      onChange={(e) => {
        onFieldCodeChange(e.target.value);
      }}
    >
      {availableFields.map((field) => (
        <option key={field.code} value={field.code}>
          {field.label}
        </option>
      ))}
    </select>
  );
}
