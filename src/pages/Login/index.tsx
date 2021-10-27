import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import styled from 'styled-components';
import { ContainerLogin } from '../../components/Container';

export function Login() {
  return (
    <ContainerLoginEstilizado>
      <Row>
        <Col md={12}>
          <h1>Login</h1>
        </Col>
        <Col md={12}>
          <Form>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label htmlFor="senha">Senha</Label>
                  <Input type="password" id="senha" />
                </FormGroup>
              </Col>
              <Col md={12}>
                <ButtonGroup>
                  <Button type="button" color="primary">Salvar</Button>
                  <Button type="button" color="danger">Limpar</Button>
                  <Link className="btn btn-info" to="/novo-usuario">Novo Usuario</Link>
                  <Link className="btn btn-link" to="/lista">Lista</Link>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </ContainerLoginEstilizado>
  );
}

const ContainerLoginEstilizado = styled(ContainerLogin)`
  margin-top: 3rem;
`;