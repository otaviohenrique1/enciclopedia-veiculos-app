import { Field } from "formik";
import { InputHTMLAttributes } from "react";
import { InputType } from "reactstrap/es/Input";
import styled from "styled-components";

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
  typeInput: InputType;
  erro: any;
  htmlForLabel: string;
  label: string;
  inputId: string;
  classDivContainerCampo?: string;
}

export function Campo(props: CampoProps) {
  return (
    <ContainerCampo className={props.classDivContainerCampo}>
      <LabelEstilizado htmlFor={props.htmlForLabel}>{props.label}</LabelEstilizado>
      <FieldEstilizado
        type={props.typeInput}
        id={props.inputId}
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