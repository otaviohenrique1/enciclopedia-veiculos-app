import styled from "styled-components";
import { ContainerLogin } from "../../components/Container";
import * as Yup from "yup";
import { MensagemErro } from "../../utils/utils";
import { Alert, Button, Col, Row } from "reactstrap";
import { Form, Formik } from "formik";
import { Campo } from "../../components/Campo";

interface FormTypes {
  nome: string;
  nomeUsuario: string;
  email: string;
  senha: string;
  dataNascimento: string;
}

export function NovoUsuario() {
  const validacaoSchema = Yup.object().shape({
    nome: Yup.string().required(MensagemErro('Campo nome esta vazio')),
    nomeUsuario: Yup.string().required(MensagemErro('Campo nome do usuario esta vazio')),
    email: Yup.string().required(MensagemErro('Campo email esta vazio')),
    senha: Yup.string().required(MensagemErro('Campo senha esta vazio')),
    dataNascimento: Yup.string().required(MensagemErro('Campo data de nascimento esta vazio')),
  });

  const valoresIniciais: FormTypes = {
    nome: '',
    nomeUsuario: '',
    email: '',
    senha: '',
    dataNascimento: '',
  };

  function handleSubmitForm() {
    // 
  }

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
                <Row>
                  <Col md={12}>
                    <Campo
                      type="text"
                      id="nome"
                      name="nome"
                      value={values.nome}
                      erro={(errors.nome && touched.nome) ? (<Alert color="danger">{errors.nome}</Alert>) : null}
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