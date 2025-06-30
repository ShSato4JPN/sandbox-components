import { atom } from "jotai";
import { BassItem, GuitarItem } from "../types/items";

export const itemsAtom = atom<(GuitarItem | BassItem)[]>([]);
export const guitarItemsAtom = atom<GuitarItem[]>([]);
export const bassItemsAtom = atom<BassItem[]>([]);
