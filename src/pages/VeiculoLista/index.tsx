import { useState } from "react";
import { Row, Col } from "reactstrap";
import { ContainerApp } from "../../components/Container";

interface DataTypes {
  nome: string;
  pais_origem: string;
  tipo: string;
}

export function VeiculoLista() {
  const [data, setData] = useState<DataTypes[]>([]);

  return (
    <ContainerApp>
      <h1>Lista de veiculos</h1>
      <Row>
        <Col md={12}></Col>
      </Row>
    </ContainerApp>
  );
}