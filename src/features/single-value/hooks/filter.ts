import { SetStateAction } from "jotai";
import { DataField } from "../types/field";
import { RecordFilter } from "../types/filter";

type UseFilterProps = {
  filter: DataField[];
  additionalFilter: RecordFilter[];
  setAdditionalFilter: (update: SetStateAction<RecordFilter[]>) => void;
};

export default function useFilter({
  filter,
  additionalFilter,
  setAdditionalFilter,
}: UseFilterProps) {
  const addFilter = (code: string) =>
    setAdditionalFilter((prevFilter, index) => [
      ...prevFilter,
      { index, code, value: "value", sign: "test" },
    ]);

  return { addFilter };
}
