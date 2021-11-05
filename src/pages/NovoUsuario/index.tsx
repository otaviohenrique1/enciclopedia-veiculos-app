import styled from "styled-components";
import { ContainerLogin } from "../../components/Container";
import * as Yup from "yup";
import { Mensagem, MensagemErro } from "../../utils/utils";
import { ButtonGroup, Col, Row } from "reactstrap";
import { Form, Formik } from "formik";
import { Campo } from "../../components/Campo";
import { AlertMensagemErro } from "../../components/Mensagem";
import { Botao, BotaoLink } from "../../components/Botao";

interface FormTypes {
  nome: string;
  perfil: string;
  email: string;
  senha: string;
  data_nascimento: string;
}

export function NovoUsuario() {
  const validacaoSchema = Yup.object().shape({
    nome: Yup.string()
      .required(MensagemErro('nome')),
    perfil: Yup.string()
      .min(8, Mensagem('Minimo 6 caracteres'))
      .required(MensagemErro('nome de usuario')),
    email: Yup.string()
      .email(Mensagem('Email invalido'))
      .required(MensagemErro('email')),
    senha: Yup.string()
      .min(8, Mensagem('Minimo 8 caracteres'))
      .max(99, Mensagem('Maximo 99 caracteres'))
      .required(MensagemErro('senha')),
    data_nascimento: Yup.string()
      .required(MensagemErro('data de nascimento')),
  });

  const valoresIniciais: FormTypes = {
    nome: '',
    perfil: '',
    email: '',
    senha: '',
    data_nascimento: '',
  };

  // function handleSubmitForm() {
    // 
  // }

  return (
    <ContainerLoginEstilizado>
      <Row>
        <Col md={12} className="text-center">
          <h1>Novo Usuario</h1>
        </Col>
        <Col md={12} className="mt-5">
          <Formik
            initialValues={valoresIniciais}
            validationSchema={validacaoSchema}
            onSubmit={() => {}}
          >
            {({ errors, touched, values }) => (
              <Form>
                <Row className="w-100">
                  <Col md={12}>
                    <Campo
                      typeInput="text"
                      label="Nome"
                      htmlForLabel="nome"
                      inputId="nome"
                      name="nome"
                      placeholder="Digite o seu nome"
                      value={values.nome}
                      erro={(errors.nome && touched.nome) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.nome}/>) : null}
                      classDivContainerCampo="mb-3"
                    />
                  </Col>
                  <Col md={12}>
                    <Campo
                      typeInput="text"
                      label="Nome de usuario (Perfil)"
                      htmlForLabel="perfil"
                      inputId="perfil"
                      name="perfil"
                      placeholder="Digite o seu perfil de usuario"
                      value={values.perfil}
                      erro={(errors.perfil && touched.perfil) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.perfil}/>) : null}
                      classDivContainerCampo="mb-3"
                    />
                  </Col>
                  <Col md={12}>
                    <Campo
                      typeInput="email"
                      label="Email"
                      htmlForLabel="email"
                      inputId="email"
                      name="email"
                      placeholder="Digite o seu email"
                      value={values.email}
                      erro={(errors.email && touched.email) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.email}/>) : null}
                      classDivContainerCampo="mb-3"
                    />
                  </Col>
                  <Col md={12}>
                    <Campo
                      typeInput="password"
                      label="Senha"
                      htmlForLabel="senha"
                      inputId="senha"
                      name="senha"
                      placeholder="Digite a sua senha"
                      value={values.senha}
                      erro={(errors.senha && touched.senha) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.senha}/>) : null}
                      classDivContainerCampo="mb-3"
                    />
                  </Col>
                  <Col md={12}>
                    <Campo
                      typeInput="date"
                      label="Data de nascimento"
                      htmlForLabel="data_nascimento"
                      inputId="data_nascimento"
                      name="data_nascimento"
                      placeholder="Digite a sua data de nascimento"
                      value={values.data_nascimento}
                      erro={(errors.data_nascimento && touched.data_nascimento) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.data_nascimento}/>) : null}
                      classDivContainerCampo="mb-5"
                    />
                  </Col>
                  <Col md={12} className="text-right">
                    <ButtonGroup>
                      <Botao
                        type="submit"
                        color="primary"
                      >Salvar</Botao>
                      <Botao
                        type="reset"
                        color="danger"
                      >Limpar</Botao>
                      <BotaoLink
                        className="btn btn-info"
                        toLink="/"
                      >Voltar</BotaoLink>
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
  margin-top: 2rem;
`;