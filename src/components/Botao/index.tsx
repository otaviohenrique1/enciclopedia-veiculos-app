import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

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
