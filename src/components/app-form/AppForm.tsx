import { FieldValues } from "react-hook-form";
import {
  AppFormFieldProps,
  AppFormProps,
  AppSelectFieldProps,
  CustomFormFieldProps,
  CustomFormSelectProps,
  SelectFieldTypes,
  TextInputTypes,
} from "../../utils/interfaces";
import { FormControl, FormHelperText, FormLabel, RadioGroup, Select, TextField } from "@mui/material";
import { Form, FormField, useFormField } from ".";

const AppForm = <FormFieldValues extends FieldValues>({
  children,
  form,
  onSubmit,
  className,
}: AppFormProps<FormFieldValues>) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </Form>
  );
};

export const AppFormField = <TextFieldValues extends FieldValues>({
  controller,
  name,
  label,
  placeholder,
  type,
  disabled,
  required,
  variant,
}: AppFormFieldProps<TextFieldValues>) => {
  return (
    <FormField
      name={name}
      control={controller}
      render={({ field }) => (
        <CustomFormField
          variant={variant}
          name={field.name}
          value={field.value}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          onBlur={field.onBlur}
          label={label}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          required={required}
        />
      )}
    />
  );
};

export const AppSelectField = <TextFieldValues extends FieldValues>({
  controller,
  name,
  type,
  label,
  placeholder,
  disabled,
  required,
  children,
}: AppSelectFieldProps<TextFieldValues>) => {
  return (
    <FormField
      name={name}
      control={controller}
      render={({ field }) => (
        <CustomFormSelect
          type={type}
          name={field.name}
          value={field.value}
          label={label}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          onChange={field.onChange}
          onBlur={field.onBlur}
        >
          {children}
        </CustomFormSelect>
      )}
    />
  );
};

export const CustomFormField = <TextFieldValues extends FieldValues>({
  name,
  value,
  onChange,
  onBlur,
  type,
  placeholder,
  disabled,
  required,
  label,
  variant,
}: CustomFormFieldProps<TextFieldValues>) => {
  const { error } = useFormField();

  return (
    <TextField
      variant={variant}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      error={!!error}
      helperText={error && error.message}
      InputLabelProps={
        type === TextInputTypes.DATE
          ? {
              shrink: true,
            }
          : undefined
      }
      fullWidth
    />
  );
};

export const CustomFormSelect = <TextFieldValues extends FieldValues>({
  type,
  name,
  value,
  label,
  onChange,
  onBlur,
  placeholder,
  disabled,
  required,
  children,
}: CustomFormSelectProps<TextFieldValues>) => {
  const { error } = useFormField();

  return (
    <FormControl
      component="fieldset"
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      required={required}
      fullWidth
    >
      <FormLabel>{label}</FormLabel>
      {type === SelectFieldTypes.RADIO ? (
        <RadioGroup 
        row 
        name={name} 
        value={value}
        >
          {children}
        </RadioGroup>
      ) : type === SelectFieldTypes.SELECT ? (
        <Select
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          error={!!error}
        >
          {children}
        </Select>
      ) : null}
      {
        error && <FormHelperText error>{error.message}</FormHelperText>
      }
    </FormControl>
  );
};

export default AppForm;
