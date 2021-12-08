import { Formik, Form } from "formik";
import { ButtonGroup, Col, Row } from "reactstrap";
import * as Yup from "yup";
import { Botao } from "../../components/Botao";
import { Campo } from "../../components/Campo";
import { ContainerApp } from "../../components/Container";
import { AlertMensagemErro } from "../../components/Mensagem";
import { MensagemErro } from "../../utils/utils";

interface DataTypes {
  nome: string;
  pais_origem: string;
  status: string;
  classificacao: string; /* aereo/terrestre/naval/espacial */
  tipo: string;
  fabricante: string;
  utilizadores: string;
  variantes: string;
  quantidade_produzida: number;
  quantidade_produzida_unidade: string;
  periodo_servico: string;
  massa: number;
  massa_unidade: string;
  comprimento: number;
  comprimento_unidade: string;
  altura: number;
  altura_unidade: string;
  largura: number;
  largura_unidade: string;
  tripulacao: number;
  custo_unitario: number;
  custo_unitario_moeda: string;
  armamento: string;
}

export function VeiculoCadastro() {
  const valoresIniciais: DataTypes = {
    nome: '',
    pais_origem: '',
    status: '',
    classificacao: '',
    tipo: '',
    fabricante: '',
    utilizadores: '',
    variantes: '',
    quantidade_produzida: 0,
    quantidade_produzida_unidade: '',
    periodo_servico: '',
    massa: 0,
    massa_unidade: '',
    comprimento: 0,
    comprimento_unidade: '',
    altura: 0,
    altura_unidade: '',
    largura: 0,
    largura_unidade: '',
    tripulacao: 0,
    custo_unitario: 0,
    custo_unitario_moeda: '',
    armamento: '',
  };

  const validacaoSchema = Yup.object().shape({
    nome: Yup.string().required(MensagemErro('nome')),
    pais_origem: Yup.string().required(MensagemErro('pais_origem')),
    status: Yup.string().required(MensagemErro('status')),
    classificacao: Yup.string().required(MensagemErro('classificacao')),
    tipo: Yup.string().required(MensagemErro('tipo')),
    fabricante: Yup.string().required(MensagemErro('fabricante')),
    utilizadores: Yup.string().required(MensagemErro('utilizadores')),
    variantes: Yup.string().required(MensagemErro('variantes')),
    quantidade_produzida: Yup.number().required(MensagemErro('quantidade_produzida')),
    quantidade_produzida_unidade: Yup.string().required(MensagemErro('quantidade_produzida_unidade')),
    perido_servico: Yup.string().required(MensagemErro('perido_servico')),
    massa: Yup.number().required(MensagemErro('massa')),
    massa_unidade: Yup.string().required(MensagemErro('massa_unidade')),
    comprimento: Yup.number().required(MensagemErro('comprimento')),
    comprimento_unidade: Yup.string().required(MensagemErro('comprimento_unidade')),
    altura: Yup.number().required(MensagemErro('altura')),
    altura_unidade: Yup.string().required(MensagemErro('altura_unidade')),
    largura: Yup.number().required(MensagemErro('largura')),
    largura_unidade: Yup.string().required(MensagemErro('largura_unidade')),
    tripulacao: Yup.number().required(MensagemErro('tripulacao')),
    custo_unitario: Yup.number().required(MensagemErro('custo_unitario')),
    custo_unitario_moeda: Yup.string().required(MensagemErro('custo_unitario_moeda')),
    armamento: Yup.string().required(MensagemErro('armamento')),
  });

  return (
    <ContainerApp>
      <h1>Cadastro de veiculo</h1>
      <Formik
        validationSchema={validacaoSchema}
        initialValues={valoresIniciais}
        onSubmit={() => { }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <Row className="w-100">
              <Col md={12}>
                <Campo
                  type_input="text"
                  label="Nome"
                  htmlfor_label="nome"
                  input_id="nome"
                  name="nome"
                  placeholder="Digite o nome"
                  value={values.nome}
                  erro={(errors.nome && touched.nome) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.nome} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={6}>
                <Campo
                  type_input="text"
                  label="Pais de origem"
                  htmlfor_label="pais_origem"
                  input_id="pais_origem"
                  name="pais_origem"
                  placeholder="Digite o pais de origem"
                  value={values.pais_origem}
                  erro={(errors.pais_origem && touched.pais_origem) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.pais_origem} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={6}>
                <Campo
                  type_input="text"
                  label="Status" /* (Arrumar - colocar select - opcional) */
                  htmlfor_label="status"
                  input_id="status"
                  name="status"
                  placeholder="Status do veiculo"
                  value={values.status}
                  erro={(errors.status && touched.status) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.status} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={6}>
                <Campo
                  type_input="text"
                  label="Classificação" /* (Arrumar - colocar select - opcional) */
                  htmlfor_label="classificacao"
                  input_id="classificacao"
                  name="classificacao"
                  placeholder="Classificação do veiculo"
                  value={values.classificacao}
                  erro={(errors.classificacao && touched.classificacao) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.classificacao} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={6}>
                <Campo
                  type_input="text"
                  label="Tipo"
                  htmlfor_label="tipo"
                  input_id="tipo"
                  name="tipo"
                  placeholder="Tipo do veiculo"
                  value={values.tipo}
                  erro={(errors.tipo && touched.tipo) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.tipo} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={12}>
                <Campo
                  type_input="text"
                  label="Fabricante"
                  htmlfor_label="fabricante"
                  input_id="fabricante"
                  name="fabricante"
                  placeholder="Fabricante do veiculo"
                  value={values.fabricante}
                  erro={(errors.fabricante && touched.fabricante) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.fabricante} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={12}>
                <Campo
                  type_input="text"
                  label="Utilizadores"
                  htmlfor_label="utilizadores"
                  input_id="utilizadores"
                  name="utilizadores"
                  placeholder="Utilizadores do veiculo"
                  value={values.utilizadores}
                  erro={(errors.utilizadores && touched.utilizadores) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.utilizadores} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={12}>
                <Campo
                  type_input="text"
                  label="Variantes"
                  htmlfor_label="variantes"
                  input_id="variantes"
                  name="variantes"
                  placeholder="Variantes do veiculo"
                  value={values.variantes}
                  erro={(errors.variantes && touched.variantes) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.variantes} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="number"
                  label="Quantidade produzida"
                  htmlfor_label="quantidade_produzida"
                  input_id="quantidade_produzida"
                  name="quantidade_produzida"
                  placeholder="Quantidade produzida do veiculo"
                  value={values.quantidade_produzida}
                  erro={(errors.quantidade_produzida && touched.quantidade_produzida) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.quantidade_produzida} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="text"
                  label="Quantidade produzida unidade" /* (Arrumar - colocar select - opcional) */
                  htmlfor_label="quantidade_produzida_unidade"
                  input_id="quantidade_produzida_unidade"
                  name="quantidade_produzida_unidade"
                  placeholder="Quantidade produzida unidade"
                  value={values.quantidade_produzida_unidade}
                  erro={(errors.quantidade_produzida_unidade && touched.quantidade_produzida_unidade) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.quantidade_produzida_unidade} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={4}>
                <Campo
                  type_input="text"
                  label="Periodo serviço"
                  htmlfor_label="periodo_servico"
                  input_id="periodo_servico"
                  name="periodo_servico"
                  placeholder="Periodo de serviço do veiculo"
                  value={values.periodo_servico}
                  erro={(errors.periodo_servico && touched.periodo_servico) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.periodo_servico} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="number"
                  label="Massa"
                  htmlfor_label="massa"
                  input_id="massa"
                  name="massa"
                  placeholder="Massa do veiculo"
                  value={values.massa}
                  erro={(errors.massa && touched.massa) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.massa} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="text"
                  label="Massa unidade" /* (Arrumar - colocar select - opcional) */
                  htmlfor_label="massa_unidade"
                  input_id="massa_unidade"
                  name="massa_unidade"
                  placeholder="Massa unidade"
                  value={values.massa_unidade}
                  erro={(errors.massa_unidade && touched.massa_unidade) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.massa_unidade} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="number"
                  label="Comprimento"
                  htmlfor_label="comprimento"
                  input_id="comprimento"
                  name="comprimento"
                  placeholder="Comprimento do veiculo"
                  value={values.comprimento}
                  erro={(errors.comprimento && touched.comprimento) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.comprimento} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="text"
                  label="Comprimento unidade" /* (Arrumar - colocar select - opcional) */
                  htmlfor_label="comprimento_unidade"
                  input_id="comprimento_unidade"
                  name="comprimento_unidade"
                  placeholder="Comprimento unidade"
                  value={values.comprimento_unidade}
                  erro={(errors.comprimento_unidade && touched.comprimento_unidade) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.comprimento_unidade} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="number"
                  label="Altura"
                  htmlfor_label="altura"
                  input_id="altura"
                  name="altura"
                  placeholder="Altura do veiculo"
                  value={values.altura}
                  erro={(errors.altura && touched.altura) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.altura} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="text"
                  label="Altura unidade" /* (Arrumar - colocar select - opcional) */
                  htmlfor_label="altura_unidade"
                  input_id="altura_unidade"
                  name="altura_unidade"
                  placeholder="Altura unidade"
                  value={values.altura_unidade}
                  erro={(errors.altura_unidade && touched.altura_unidade) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.altura_unidade} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="number"
                  label="Largura"
                  htmlfor_label="largura"
                  input_id="largura"
                  name="largura"
                  placeholder="Largura do veiculo"
                  value={values.largura}
                  erro={(errors.largura && touched.largura) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.largura} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="text"
                  label="Largura unidade" /* (Arrumar - colocar select - opcional) */
                  htmlfor_label="largura_unidade"
                  input_id="largura_unidade"
                  name="largura_unidade"
                  placeholder="Largura unidade"
                  value={values.largura_unidade}
                  erro={(errors.largura_unidade && touched.largura_unidade) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.largura_unidade} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="number"
                  label="Tripulação"
                  htmlfor_label="tripulacao"
                  input_id="tripulacao"
                  name="tripulacao"
                  placeholder="Tripulação do veiculo quantidade"
                  value={values.tripulacao}
                  erro={(errors.tripulacao && touched.tripulacao) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.tripulacao} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              
              <Col md={2}>
                <Campo
                  type_input="number"
                  label="Custo unitario"
                  htmlfor_label="custo_unitario"
                  input_id="custo_unitario"
                  name="custo_unitario"
                  placeholder="Custo unitario do veiculo"
                  value={values.custo_unitario}
                  erro={(errors.custo_unitario && touched.custo_unitario) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.custo_unitario} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={2}>
                <Campo
                  type_input="text"
                  label="Custo unitario moeda" /* (Arrumar - colocar select - opcional) */
                  htmlfor_label="custo_unitario_moeda"
                  input_id="custo_unitario_moeda"
                  name="custo_unitario_moeda"
                  placeholder="Custo unitario moeda"
                  value={values.custo_unitario_moeda}
                  erro={(errors.custo_unitario_moeda && touched.custo_unitario_moeda) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.custo_unitario_moeda} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={12}>
                <Campo
                  type_input="text"
                  label="Armamento"
                  htmlfor_label="custo_unitario_moeda"
                  input_id="custo_unitario_moeda"
                  name="custo_unitario_moeda"
                  placeholder="Armamento do veiculo"
                  value={values.custo_unitario_moeda}
                  erro={(errors.custo_unitario_moeda && touched.custo_unitario_moeda) ? (<AlertMensagemErro color="danger" erro_mensagem={errors.custo_unitario_moeda} />) : null}
                  class_div_container_campo="mb-3"
                />
              </Col>
              <Col md={12} className="text-right mb-5">
                <ButtonGroup>
                  <Botao
                    type="submit"
                    color="primary"
                  >Salvar</Botao>
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
    </ContainerApp>
  );
}