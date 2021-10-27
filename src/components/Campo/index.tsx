import { Field } from "formik";
import { InputHTMLAttributes } from "react";
import { InputType } from "reactstrap/es/Input";

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  erro?: any;
}

export function Campo(props: CampoProps) {
  return (
    <>
      <Field
        type={props.type}
        {...props}
      />
      {props.erro}
    </>
  );
}