import { CATEGORY, CategoryCode } from "../constant/todo";

export const getCategoryLabel = (code: CategoryCode) => {
  return CATEGORY.find((v) => v.code == code)?.label as string;
};
