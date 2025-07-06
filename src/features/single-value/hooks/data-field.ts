import { useAtom, useSetAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { AVAILABLE_FIELDS, data } from "../constant/field";
import {
  digitAtom,
  fieldCodeAtom,
  scaleAtom,
  unitAtom,
  unitPositionAtom,
} from "../store/single-value";
import { DataField } from "../types/field";

type AvailableField = Extract<
  DataField,
  { type: (typeof AVAILABLE_FIELDS)[number] }
>;

function useFields(): { data: DataField[] } {
  return { data };
}

export function useDataField() {
  const { data } = useFields();
  const [fieldCode, setFieldCode] = useAtom(fieldCodeAtom);
  const setDigit = useSetAtom(digitAtom);
  const setScale = useSetAtom(scaleAtom);
  const setUnit = useSetAtom(unitAtom);
  const setUnitPosition = useSetAtom(unitPositionAtom);

  const isAvailableField = (field: DataField): field is AvailableField =>
    (AVAILABLE_FIELDS as readonly DataField["type"][]).includes(field.type);

  const allFields = data.map((field) => ({ ...field }));

  const availableFields = data.filter(isAvailableField);

  const firstFieldCode = allFields.at(0)?.code;

  const selectedAvailableFieldLabel =
    availableFields.find((field) => field.code === fieldCode)?.label || "";

  // 現在選択されているフィールドコードが数値系のフィールドであるか判定する
  const isNumeric = ["CALC", "NUMBER"].includes(
    availableFields.find((field) => field.code === fieldCode)?.type || ""
  );

  // 引数で渡されたフィールドコードが数値系のフィールドであるか判定する
  const isNumericField = useCallback(
    (code: string) => !!availableFields.find((field) => field.code === code),
    [availableFields]
  );

  // フィールドコードに該当するフィールドを取得する
  const getField = useCallback(
    (code: string) => availableFields.find((field) => field.code === code),
    [availableFields]
  );

  const getSelectedField = useCallback(
    (code: string | null) => code ?? availableFields.at(0)?.code,
    [availableFields]
  );

  const updateNumericField = useCallback(
    (field: AvailableField | undefined) => {
      if (!field) return;

      if (field.type === "CALC") {
        setDigit(true);
        setScale(field.scale);
        setUnit(field.unit);
        setUnitPosition(field.unitPosition);
      }
      if (field.type === "NUMBER") {
        setDigit(field.digit);
        setScale(field.scale);
        setUnit(field.unit);
        setUnitPosition(field.unitPosition);
      }
    },
    [setDigit, setScale, setUnit, setUnitPosition]
  );

  useEffect(() => {
    const selectedFieldCode = getSelectedField(fieldCode);
    // 初回登録時
    if (fieldCode === null && selectedFieldCode !== undefined) {
      setFieldCode(selectedFieldCode);

      const field = getField(selectedFieldCode);
      if (isNumericField(selectedFieldCode)) {
        updateNumericField(field);
      }
    }
  }, [
    fieldCode,
    getField,
    getSelectedField,
    isNumeric,
    isNumericField,
    setFieldCode,
    updateNumericField,
  ]);

  const onFieldCodeChange = useCallback(
    (newFieldCode: string) => {
      setFieldCode(newFieldCode);

      if (isNumericField(newFieldCode)) {
        const field = getField(newFieldCode);
        updateNumericField(field);
      }
    },
    [getField, isNumericField, setFieldCode, updateNumericField]
  );

  return {
    allFields,
    fieldCode,
    firstFieldCode,
    availableFields,
    selectedAvailableFieldLabel,
    isNumeric,
    onFieldCodeChange,
  };
}
