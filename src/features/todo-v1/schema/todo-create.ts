import z from "zod";
import { CATEGORY, PRIORITY } from "../constant/todo";

export const todoCreateScheme = z.object({
  description: z
    .string()
    .nonempty({ message: "タスク内容が入力されていません" }),
  category: z.string().refine((code) => CATEGORY.some((v) => v.code === code), {
    message: "不正なカテゴリです",
  }),
  priority: z.string().refine((code) => PRIORITY.some((v) => v.code === code), {
    message: "不正な優先度です。",
  }),
  expire: z.string().refine(
    (dateString) => {
      return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
    },
    { message: "日付は YYYY-MM-DD の形式で入力してください" }
  ),
});

export type TodoCreateFormat = z.infer<typeof todoCreateScheme>;
