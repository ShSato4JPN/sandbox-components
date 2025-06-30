import { useAtom } from "jotai";
import { bassItemsAtom } from "../store/items";
import useGear from "./gear";

export default function useBass() {
  const [items, setItems] = useAtom(bassItemsAtom);

  return useGear({ items, setItems });
}
