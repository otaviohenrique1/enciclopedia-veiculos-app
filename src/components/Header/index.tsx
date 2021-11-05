import { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from "reactstrap";
import { BiUserCircle } from "react-icons/bi";
import { GiBattleTank } from "react-icons/gi";
import styled from "styled-components";
import { BotaoDropdownLink } from "../Botao";

const AvatarLogo = styled.div`
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;

const AvatarPerfil = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 5px;
  margin-right: 5px;
`;

interface HeaderProps {
  id?: string;
  nome?: string;
  perfil?: string;
  email?: string;
}

export function Header(props: HeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/home">
        <GiBattleTank size={30} style={{ marginRight: '10px' }} />
        Enciclopedia de Veiculos
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <DropdownLista />
          <DropdownCategorias />
          <DropdownVeiculos />
        </Nav>
        <Nav>
          <DropdownAvatar
            id={props.id}
            perfil={props.perfil || "Perfil"}
          />
        </Nav>
      </Collapse>
    </Navbar>
  );
}

function DropdownLista() {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Lista
      </DropdownToggle>
      <DropdownMenu right>
        <BotaoDropdownLink
          to='/lista'
          label_button='Lista'
        />
        <DropdownItem divider />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

function DropdownCategorias() {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Categorias
      </DropdownToggle>
      <DropdownMenu right>
        <BotaoDropdownLink
          to='/categorias/lista'
          label_button='Todas as categorias'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/categorias/cadastro'
          label_button='Nova categoria'
        />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

function DropdownVeiculos() {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Veiculos
      </DropdownToggle>
      <DropdownMenu right>
        <BotaoDropdownLink
          to='/veiculos/lista'
          label_button='Todos os veiculos'
        />
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/veiculos/cadastro'
          label_button='Novo veiculo'
        />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

function DropdownAvatar(props: HeaderProps) {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <AvatarLogo>
          <BiUserCircle size={30} />
        </AvatarLogo>
        <AvatarPerfil>{props.perfil}</AvatarPerfil>
      </DropdownToggle>
      <DropdownMenu right>
        <BotaoDropdownLink
          to={`/perfil/${props.id}`}
          label_button='Perfil'
        />
        <DropdownItem divider />
        <DropdownItem>
          Favoritos
        </DropdownItem>
        <DropdownItem divider />
        <BotaoDropdownLink
          to='/'
          label_button='Sair'
        />
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
