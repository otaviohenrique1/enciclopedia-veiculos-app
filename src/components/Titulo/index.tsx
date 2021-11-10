import { Col, Row } from "reactstrap";

interface TituloProps {
  titulo: string;
}

export function Titulo(props: TituloProps) {
  return (
    <Row>
      <Col md={12}>
        <h1>{props.titulo}</h1>
      </Col>
    </Row>
  );
}

export function Subtitulo(props: TituloProps) {
  return (
    <Row>
      <Col md={12}>
        <h2>{props.titulo}</h2>
      </Col>
    </Row>
  );
}