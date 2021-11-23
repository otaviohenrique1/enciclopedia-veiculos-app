import { useEffect, useState } from "react";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { Row, Col, Table } from "reactstrap";
import { Botao } from "../../components/Botao";
import { ContainerApp } from "../../components/Container";
import { lista_veiculo } from "../../utils/lista";

interface DataTypes {
  nome: string;
  pais_origem: string;
  tipo: string;
}

export function VeiculoLista() {
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    setData(lista_veiculo);
  }, []);

  return (
    <ContainerApp>
      <Row>
        <Col md={12}>
          <h1>Lista de veiculos</h1>
        </Col>
        <Col md={12}>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Pais origem</th>
                <th>Tipo</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              {(!data) ? (
                <tr>
                  <td className="text-center" colSpan={5}>Lista vazia</td>
                </tr>
              ) : data.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.nome}</td>
                  <td>{item.pais_origem}</td>
                  <td>{item.tipo}</td>
                  <td className="d-flex flex-row">
                    <Botao type="button" color="primary" className="mr-2">
                      <AiTwotoneEdit size={20} />
                    </Botao>
                    <Botao type="button" color="danger">
                      <AiTwotoneDelete size={20} />
                    </Botao>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </ContainerApp>
  );
}