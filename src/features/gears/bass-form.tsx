"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import useBass from "./hooks/bass";

const bassSchema = z.object({
  name: z.string(),
  brand: z.string(),
  type: z.string(),
  price: z.number(),
  description: z.string(),
});

type FormData = z.infer<typeof bassSchema>;

export default function BassForm() {
  const { addItem } = useBass();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(bassSchema),
  });

  const onSubmit = handleSubmit((data) => addItem({ ...data }));

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <label htmlFor="name">ベース名：</label>
      <input
        type="text"
        className="border border-gray-400"
        {...register("name")}
      />
      <label htmlFor="brand">ブランド名：</label>
      <input
        type="text"
        className="border border-gray-400"
        {...register("brand")}
      />
      <label htmlFor="type">タイプ：</label>
      <input
        type="text"
        className="border border-gray-400"
        {...register("type")}
      />
      <label htmlFor="price">価格：</label>
      <input
        type="number"
        className="border border-gray-400"
        {...register("price", { valueAsNumber: true })}
      />
      <label htmlFor="description">説明：</label>
      <input
        type="text"
        className="border border-gray-400"
        {...register("description")}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        登録
      </button>
    </form>
  );
}
