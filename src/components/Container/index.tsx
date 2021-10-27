import { ReactNode } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

export const ContainerLogin = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface ContainerAppProps {
  children: ReactNode;
}

export function ContainerApp(props: ContainerAppProps) {
  return (
    <ContainerAppEstilizado>
      {props.children}
    </ContainerAppEstilizado>
  );
}

export const ContainerAppEstilizado = styled(Container)`
  width: 100%;
  height: 100%;
`;
