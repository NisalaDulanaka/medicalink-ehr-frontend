import React from "react";
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

export enum TextInputTypes {
  TEXT = "text",
  PASSWORD = "password",
  EMAIL = "email",
  TEL = "tel",
  NUMBER = "number",
  DATE = "date",
}

export enum FieldVariants {
  OUTLINED = "outlined",
}

export enum SelectFieldTypes {
  SELECT = "select",
  RADIO = "radio",
  CHECK_BOX = "checkBox",
}

export interface AppFormProps<FormFieldValues extends FieldValues> {
  form: UseFormReturn<FormFieldValues>;
  onSubmit: SubmitHandler<FormFieldValues>;
  children: React.ReactNode;
  className?: string;
}

export interface AppFormFieldProps<FormFieldValues extends FieldValues = FieldValues> {
  type: TextInputTypes;
  name: Path<FormFieldValues>;
  placeholder?: string;
  label?: string;
  controller: Control<FormFieldValues>;
  disabled?: boolean;
  required?: boolean;
  variant?: FieldVariants;
}

export interface AppSelectFieldProps<FormFieldValues extends FieldValues = FieldValues> {
  name: Path<FormFieldValues>;
  placeholder?: string;
  label?: string;
  controller: Control<FormFieldValues>;
  disabled?: boolean;
  required?: boolean;
  type: SelectFieldTypes;
  children: React.ReactNode;
}

export interface CustomFormFieldProps<FormFieldValues extends FieldValues = FieldValues> {
    name: Path<FormFieldValues>;
    value: PathValue<FormFieldValues, Path<FormFieldValues>>,
    onChange?: (...event: any[]) => void;
    onBlur?: (...event: any[]) => void;
    type: TextInputTypes;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    variant?: FieldVariants;
}

export interface CustomFormSelectProps<FormFieldValues extends FieldValues = FieldValues> {
  name: Path<FormFieldValues>;
  value: PathValue<FormFieldValues, Path<FormFieldValues>>,
  onChange?: (...event: any[]) => void;
  onBlur?: (...event: any[]) => void;
  type: SelectFieldTypes;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  children: React.ReactNode;
}
