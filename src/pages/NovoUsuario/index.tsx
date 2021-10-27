import styled from "styled-components";
import { ContainerLogin } from "../../components/Container";
import * as Yup from "yup";
import { Mensagem, MensagemErro } from "../../utils/utils";
import { Button, Col, Row } from "reactstrap";
import { Form, Formik } from "formik";
import { Campo } from "../../components/Campo";
import { AlertMensagemErro } from "../../components/Mensagem";

interface FormTypes {
  nome: string;
  nome_usuario: string;
  email: string;
  senha: string;
  data_nascimento: string;
}

export function NovoUsuario() {
  const validacaoSchema = Yup.object().shape({
    nome: Yup.string()
      .required(MensagemErro('nome')),
    nome_usuario: Yup.string()
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
    nome_usuario: '',
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
        <Col md={12}>
          <h1>Novo Usuario</h1>
        </Col>
        <Col md={12}>
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
                      classDivContainerCampo="mb-1"
                    />
                  </Col>
                  <Col md={12}>
                    <Campo
                      typeInput="text"
                      label="Nome de usuario"
                      htmlForLabel="nome_usuario"
                      inputId="nome_usuario"
                      name="nome_usuario"
                      placeholder="Digite o seu nome de usuario"
                      value={values.nome_usuario}
                      erro={(errors.nome_usuario && touched.nome_usuario) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.nome_usuario}/>) : null}
                      classDivContainerCampo="mb-1"
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
                      classDivContainerCampo="mb-1"
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
                      classDivContainerCampo="mb-1"
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
                      classDivContainerCampo="mb-3"
                    />
                  </Col>
                  <Col md={12}>
                    <Button type="submit" color="primary">Salvar</Button>
                    <Button type="reset" color="danger">Limpar</Button>
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