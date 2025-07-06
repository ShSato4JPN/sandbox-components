import { DataField } from "../types/field";

export const AVAILABLE_FIELDS = [
  "TEXT",
  "NUMBER",
  "CALC",
  "CHECK_BOX",
] as const;

export const data: DataField[] = [
  {
    type: "CHECK_BOX",
    code: "checkbox_1",
    label: "チェックボックス",
    value: [
      { key: "aaa", value: "AAA", check: true },
      { key: "bbb", value: "BBB", check: false },
      { key: "ccc", value: "CCC", check: false },
    ],
  },
  {
    type: "NUMBER",
    code: "number_1",
    label: "ナンバー１",
    value: 123,
    digit: true,
    scale: 0,
    unit: "¥",
    unitPosition: "BEFORE",
  },
  {
    type: "TEXT",
    code: "text_1",
    label: "テキスト１",
    value: "text",
  },
  {
    type: "NUMBER",
    code: "number_2",
    label: "ナンバー2",
    value: 234,
    digit: false,
    scale: 100,
    unit: "$",
    unitPosition: "AFTER",
  },
  {
    type: "NUMBER",
    code: "number_3",
    label: "ナンバー3",
    value: 567,
    digit: true,
    scale: 200,
    unit: "€",
    unitPosition: "BEFORE",
  },
  {
    type: "CALC",
    code: "calc_1",
    label: "計算1",
    value: 1,
    scale: 100,
    unit: "$",
    unitPosition: "AFTER",
  },
  {
    type: "CALC",
    code: "計算_2",
    label: "計算2",
    value: 2,
    scale: 200,
    unit: "¥",
    unitPosition: "BEFORE",
  },

  {
    type: "DROP_DOWN",
    code: "dropdown_1",
    label: "ドロップダウン",
    value: [
      { key: "aaa", value: "AAA", check: true },
      { key: "bbb", value: "BBB", check: false },
      { key: "ccc", value: "CCC", check: false },
    ],
  },
  {
    type: "TEXTAREA",
    code: "textarea_1",
    label: "テキストエリア",
    value: "texttexttexttexttexttexttexttexttexttexttexttext",
  },
  {
    type: "DATE",
    code: "date_1",
    label: "日付",
    value: "2025-07-04",
  },
];
