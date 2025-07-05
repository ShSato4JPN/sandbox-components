import { useAtom } from "jotai";
import { recordFilterAtom } from "../store/single-value";
import { useDataField } from "./data-field";
import useFilter from "./filter";

export default function useRecordFilter() {
  const { allFields } = useDataField();
  const [recordFilter, setRecordFilter] = useAtom(recordFilterAtom);

  return useFilter({
    filter: allFields,
    additionalFilter: recordFilter,
    setAdditionalFilter: setRecordFilter,
  });
}
