import { useAtom } from "jotai";
import {
  digitAtom,
  scaleAtom,
  unitAtom,
  unitPositionAtom,
} from "../store/fiels";

export default function useNumericField() {
  const [digit, setDigit] = useAtom(digitAtom);
  const [scale, setScale] = useAtom(scaleAtom);
  const [unit, setUnit] = useAtom(unitAtom);
  const [unitPosition, setUnitPosition] = useAtom(unitPositionAtom);

  return {
    digit,
    scale,
    unit,
    unitPosition,
    setDigit,
    setScale,
    setUnit,
    setUnitPosition,
  };
}
