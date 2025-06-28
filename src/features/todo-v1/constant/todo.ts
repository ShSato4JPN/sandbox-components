export const CATEGORY = [
  {
    label: "すべてのカテゴリ",
    code: "all",
  },
  {
    label: "仕事",
    code: "work",
  },
  {
    label: "プライベート",
    code: "private",
  },
  {
    label: "買い物",
    code: "shopping",
  },
  {
    label: "健康",
    code: "health",
  },
  {
    label: "学習",
    code: "study",
  },
] as const;

export type CategoryCode = (typeof CATEGORY)[number]["code"];

export const PRIORITY = [
  {
    label: "高",
    code: "high",
  },
  {
    label: "中",
    code: "middle",
  },
  {
    label: "低",
    code: "low",
  },
] as const;

export type PriorityCode = (typeof PRIORITY)[number]["code"];

export const COMPLETE_STATUS = [
  {
    label: "すべて",
    code: "all",
  },
  {
    label: "未完了",
    code: "uncompleted",
  },
  {
    label: "完了済み",
    code: "completed",
  },
] as const;

export type CompleteStatusCode = (typeof COMPLETE_STATUS)[number]["code"];
