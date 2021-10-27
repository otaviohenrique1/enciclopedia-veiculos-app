import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerLogin } from "../../components/Container";
import ReactPaginate from "react-paginate";
import { listaExemplo2 } from "./lista_exemplo";
import { Col, Row, Table } from "reactstrap";
import styles from './styles.module.css';

interface DataTypes {
  id: number;
  item: string;
}

export function Lista() {
  const [itens, setItens] = useState<DataTypes[]>([]);
  const [page, setPage] = useState<number>(0);
  
  const PER_PAGE = 6;
  const offset = page * PER_PAGE;
  const pageCount = Math.ceil(itens.length / PER_PAGE);
  
  useEffect(() => {
    setItens(listaExemplo2);
  }, []);

  return (
    <ContainerLoginEstilizado>
      <Row className="w-100 h-100">
        <Col md={12}>
          <h1>Lista de itens</h1>
        </Col>
        <Col md={12}>
          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome do item</th>
              </tr>
            </thead>
            <tbody>
              {itens
                .slice(offset, offset + PER_PAGE)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.item}</td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
            <ReactPaginate
              previousLabel={'Voltar'}
              nextLabel={'Proximo'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={styles.pagination}
              previousLinkClassName={styles.pagination_link}
              nextLinkClassName={styles.pagination_link}
              disabledClassName={styles.pagination_link_disabled}
              activeClassName={styles.pagination_link_active}
            />
            </tfoot>
          </Table>
        </Col>
      </Row>
    </ContainerLoginEstilizado>
  );

  function handlePageClick(selectedItem: {selected: number}) {
    setPage(selectedItem.selected);
  }
}

const ContainerLoginEstilizado = styled(ContainerLogin)`
  margin-top: 2rem;
`;

/*
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerLogin } from "../../components/Container";
import ReactPaginate from "react-paginate";
import { listaExemplo } from "./lista_exemplo";
import { Col, Row, Table } from "reactstrap";
import styles from './styles.module.css';

export function Lista() {
  const [itens, setItens] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  
  const PER_PAGE = 6;
  const offset = page * PER_PAGE;
  const pageCount = Math.ceil(itens.length / PER_PAGE);
  
  useEffect(() => {
    setItens(listaExemplo);
  }, []);

  return (
    <ContainerLoginEstilizado>
      <Row>
        <Col md={12}>
          <h1>Lista de itens</h1>
        </Col>
        <Col md={12}>
          <Table striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome do item</th>
              </tr>
            </thead>
            <tbody>
              {itens
                .slice(offset, offset + PER_PAGE)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{item}</td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
            <ReactPaginate
              previousLabel={'Voltar'}
              nextLabel={'Proximo'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={handlePageClick}
              // onPageChange={(selectedItem: {selected: number}) => setPage(selectedItem.selected)}
              containerClassName={styles.pagination}
              previousLinkClassName={styles.pagination_link}
              nextLinkClassName={styles.pagination_link}
              disabledClassName={styles.pagination_link_disabled}
              activeClassName={styles.pagination_link_active}
            />
            </tfoot>
          </Table>
        </Col>
      </Row>
    </ContainerLoginEstilizado>
  );

  function handlePageClick(selectedItem: {selected: number}) {
    setPage(selectedItem.selected);
  }
}

const ContainerLoginEstilizado = styled(ContainerLogin)`
  margin-top: 2rem;
`;
*/