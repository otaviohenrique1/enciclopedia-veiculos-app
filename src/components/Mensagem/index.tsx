import { Alert, AlertProps } from "reactstrap";

interface AlertMensagemErroProps extends AlertProps {
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";
  erro_mensagem: any;
}

export function AlertMensagemErro(props: AlertMensagemErroProps) {
  return (
    <Alert
      color={props.color}
      className='w-100'
      {...props}
    >{props.erro_mensagem}</Alert>
  );
}