import { AnchorHTMLAttributes, ButtonHTMLAttributes, LiHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button, DropdownItem, NavbarText, NavItem } from "reactstrap";

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "link";
  children: ReactNode;
}

export function Botao(props: BotaoProps) {
  return (
    <Button
      color={props.color}
      {...props}
    >
      {props.children}
    </Button>
  );
}

interface BotaoLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  toLink: any;
  children: ReactNode;
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <Link
      className="btn btn-link"
      to={props.toLink}
      {...props}
    >
      {props.children}
    </Link>
  );
}

interface NavItemLinkProps extends LiHTMLAttributes<HTMLLIElement> {
  to: any;
  label_button: string;
}

interface BotaoDropdownLinkProps {
  to: any;
  label_button: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function NavItemLink(props: NavItemLinkProps) {
  return (
    <NavItem {...props}>
      <Link
        to={props.to}
      >
        <NavbarText>{props.label_button}</NavbarText>
      </Link>
    </NavItem>
  );
}

interface BotaoDropdownLinkProps {
  to: any;
  label_button: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function BotaoDropdownLink(props: BotaoDropdownLinkProps) {
  return (
    <Link
      to={props.to}
      onClick={props.onClick}
      style={{ textDecoration: 'none' }}
    >
      <DropdownItem>{props.label_button}</DropdownItem>
    </Link>
  );
}
