import { ButtonGroup, Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { Botao, BotaoLink } from '../../components/Botao';
import { ContainerLogin } from '../../components/Container';
import * as Yup from "yup";
import { MensagemErro } from '../../utils/utils';
import { Formik, Form } from 'formik';
import { Campo } from '../../components/Campo';
import { AlertMensagemErro } from '../../components/Mensagem';

interface FormTypes {
  email: string;
  senha: string;
}

export function Login() {
  const valoresIniciais: FormTypes = {
    email: '',
    senha: ''
  };

  const validacaoSchema = Yup.object().shape({
    email: Yup.string().required(MensagemErro('email')),
    senha: Yup.string().required(MensagemErro('senha'))
  });

  return (
    <ContainerLoginEstilizado>
      <Row className="w-75">
        <Col md={12} className="text-center">
          <h1>Login</h1>
        </Col>
        <Col md={12}>
          <Formik
            initialValues={valoresIniciais}
            validationSchema={validacaoSchema}
            onSubmit={() => { }}
          >
            {({ errors, touched, values }) => (
              <Form>
                <Row>
                  <Col md={12}>
                    <Campo
                      type_input="email"
                      label="Email"
                      htmlfor_label="email"
                      input_id="email"
                      name="email"
                      placeholder="Digite o seu email"
                      value={values.email}
                      erro={(errors.email && touched.email) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.email} />) : null}
                      class_div_container_campo="mb-3"
                    />
                  </Col>
                  <Col md={12}>
                    <Campo
                      type_input="password"
                      label="Senha"
                      htmlfor_label="senha"
                      input_id="senha"
                      name="senha"
                      placeholder="Digite a sua senha"
                      value={values.senha}
                      erro={(errors.senha && touched.senha) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.senha} />) : null}
                      class_div_container_campo="mb-3"
                    />
                  </Col>
                  <Col md={12} className="text-right">
                    <ButtonGroup>
                      <Botao
                        type="submit"
                        color="primary"
                      >Entrar</Botao>
                      <Botao
                        type="reset"
                        color="danger"
                      >Limpar</Botao>
                      <BotaoLink
                        className="btn btn-info"
                        to_link="/novo-usuario"
                      >Novo Usuario</BotaoLink>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </ContainerLoginEstilizado>
  );
}

const ContainerLoginEstilizado = styled(ContainerLogin)`
  margin-top: 3rem;
`;