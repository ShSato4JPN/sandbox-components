import { useDataField } from "../hooks/data-field";

export default function Title() {
  const { selectedAvailableFieldLabel } = useDataField();

  return <div>{selectedAvailableFieldLabel}</div>;
}
