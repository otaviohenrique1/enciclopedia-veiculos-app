import { ButtonGroup, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import styled from 'styled-components';
import { Botao, BotaoLink } from '../../components/Botao';
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
                  <Input typeInput="email" id="email" />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label htmlFor="senha">Senha</Label>
                  <Input typeInput="password" id="senha" />
                </FormGroup>
              </Col>
              <Col md={12}>
                <ButtonGroup>
                  <Botao
                    type="button"
                    color="primary"
                  >Salvar</Botao>
                  <Botao
                    type="button"
                    color="danger"
                  >Limpar</Botao>
                  <BotaoLink
                    className="btn btn-info"
                    toLink="/novo-usuario"
                  >Novo Usuario</BotaoLink>
                  <BotaoLink
                    className="btn btn-link"
                    toLink="/lista"
                  >Lista</BotaoLink>
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