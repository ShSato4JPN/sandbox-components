import { useAtom } from "jotai";
import { guitarItemsAtom } from "../store/items";
import useGearItems from "./gear";

export default function useGuitar() {
  const [items, setItems] = useAtom(guitarItemsAtom);

  return useGearItems({ items, setItems });
}
