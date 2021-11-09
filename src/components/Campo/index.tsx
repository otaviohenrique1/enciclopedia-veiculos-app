import { Field } from "formik";
import { InputHTMLAttributes } from "react";
import { InputType } from "reactstrap/es/Input";
import styled from "styled-components";

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
  type_input: InputType;
  erro: any;
  htmlfor_Label: string;
  label: string;
  input_id: string;
  class_div_container_campo?: string;
}

export function Campo(props: CampoProps) {
  return (
    <ContainerCampo className={props.class_div_container_campo}>
      <LabelEstilizado htmlFor={props.htmlfor_Label}>{props.label}</LabelEstilizado>
      <FieldEstilizado
        type={props.type_input}
        id={props.input_id}
        className="form-control"
        {...props}
      />
      {props.erro}
    </ContainerCampo>
  );
}

const ContainerCampo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LabelEstilizado = styled.label`
  width: 100%;
`;

const FieldEstilizado = styled(Field)`
  width: 100%;
`;