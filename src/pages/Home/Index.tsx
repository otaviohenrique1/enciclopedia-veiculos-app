import { ContainerApp } from "../../components/Container";
import * as Yup from "yup";
import { ButtonGroup, Col, Row } from "reactstrap";
import { MensagemErro } from "../../utils/utils";
import { Formik, Form } from "formik";
import { Botao } from "../../components/Botao";
import { Campo } from "../../components/Campo";
import { AlertMensagemErro } from "../../components/Mensagem";

interface FormTypes {
  termo_busca: string
}

export function Home() {
  const valoresIniciais: FormTypes = {
    termo_busca: '',
  };

  const validacaoSchema = Yup.object().shape({
    termo_busca: Yup.string().required(MensagemErro('termoBusca'))
  });

  return (
    <ContainerApp>
      <Row>
        <Col md={12}>
          <h1>Busca de veiculos</h1>
        </Col>
        <Col md={12}>
          <Formik
            initialValues={valoresIniciais}
            validationSchema={validacaoSchema}
            onSubmit={() => {}}
          >
            {({errors, touched, values}) => (
              <Form>
                <Row>
                  <Col md={12}>
                    <Campo
                      type_input="search"
                      label="Buscar"
                      htmlfor_Label="termoBusca"
                      input_id="termoBusca"
                      name="termoBusca"
                      placeholder="Busca de veiculos"
                      value={values.termo_busca}
                      erro={(errors.termo_busca && touched.termo_busca) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.termo_busca} />) : null}
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
                    </ButtonGroup>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </ContainerApp>
  );
}