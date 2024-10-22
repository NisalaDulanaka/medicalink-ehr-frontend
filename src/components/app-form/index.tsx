import React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const Form = FormProvider;

type FormFieldContextValue <
  TextFieldValues extends FieldValues = FieldValues,
  TextFieldName extends FieldPath<TextFieldValues> = FieldPath<TextFieldValues>,
> = {
  name: TextFieldName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TextFieldValues extends FieldValues = FieldValues,
  TextFieldName extends FieldPath<TextFieldValues> = FieldPath<TextFieldValues>,
>(props: ControllerProps<TextFieldValues, TextFieldName>) => {
  return (
    <FormFieldContext.Provider
      value={{
        name: props.name,
      }}
    >
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const context = React.useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(context.name, formState);

  if (!context) {
    throw new Error("useFormField should be used inside a provider");
  }

  return {
    name: context.name,
    ...fieldState,
  };
};

export { Form, FormField, useFormField };
