import * as Yup from "yup";
import { ContainerApp } from "../../components/Container";
import { MensagemErro } from "../../utils/utils";
// paisOrigem
// status
// tipo
// imagem
// fabricante
// utilizadores
// quantidadeProduzida
// peridoServico
// massa
// comprimento
// altura
// largura
// tripulacao
// custoUnitario
// armamento

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
  perido_servico: string;
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
    perido_servico: '',
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

  const validacaoExemplo = Yup.object().shape({
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
    </ContainerApp>
  );
}