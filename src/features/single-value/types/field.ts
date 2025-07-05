export type UnitPosition = "BEFORE" | "AFTER";

type Text_ = { type: "TEXT"; code: string; label: string; value: string };

type Number_ = {
  type: "NUMBER";
  code: string;
  label: string;
  value: number;
  digit: boolean;
  scale: number;
  unit: string;
  unitPosition: UnitPosition;
};

type Calc_ = {
  type: "CALC";
  code: string;
  label: string;
  value: number;
  scale: number;
  unit: string;
  unitPosition: UnitPosition;
};

type CheckBox_ = {
  type: "CHECK_BOX";
  code: string;
  label: string;
  value: { key: string; value: string; check: boolean }[];
};

type DropDown_ = {
  type: "DROP_DOWN";
  code: string;
  label: string;
  value: { key: string; value: string; check: boolean }[];
};

type TextArea_ = {
  type: "TEXTAREA";
  code: string;
  label: string;
  value: string;
};

type Date_ = {
  type: "DATE";
  code: string;
  label: string;
  value: string;
};

export type DataField =
  | Text_
  | Number_
  | Calc_
  | CheckBox_
  | DropDown_
  | TextArea_
  | Date_;
