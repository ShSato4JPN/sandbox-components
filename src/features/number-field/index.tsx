"use client";

import { useDataField } from "./hooks/data-field";
import useNumericField from "./hooks/numeric-field";

export default function NumberField() {
  const { fieldCode, isNumeric, availableFields, onFieldCodeChange } =
    useDataField();
  const { digit, scale, unit, unitPosition } = useNumericField();

  return (
    <div>
      <div>{fieldCode}</div>
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
      {isNumeric ? (
        <form>
          <p>fieldCode: {fieldCode}</p>
          <label>digit: </label>
          <input type="checkbox" checked={digit} onChange={() => {}} />
          <p>scale: {scale}</p>
          <p>unit: {unit}</p>
          <p>unitPosition: {unitPosition}</p>
        </form>
      ) : (
        <div>
          <h1>Not Numeric Field!!</h1>
        </div>
      )}
    </div>
  );
}
