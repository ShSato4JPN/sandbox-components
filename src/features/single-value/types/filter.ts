// import { DataField } from "./field";

// type FilterWithOption = {
//   fieldType: ;
//   code: string;
//   options: string[];
// };

// type FilterWithoutOption = {
//   fieldType: DataField;
//   code: string;
// };

// type FilterBase = FilterWithOption | FilterWithoutOption;

export type RecordFilter = {
  index: number;
  code: string;
  value: string;
  sign: string;
};
