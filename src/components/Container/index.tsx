import { ReactNode } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";

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
    <>
      <Header
        id={'data.id'}
        perfil={'data.perfil'}
      />
      <ContainerAppEstilizado>
        {props.children}
      </ContainerAppEstilizado>
      <Footer />
    </>
  );
}

const ContainerAppEstilizado = styled(Container)`
  width: 100%;
  height: 100%;
`;
