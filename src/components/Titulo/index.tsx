interface TituloProps {
  titulo: string;
}

export function Titulo(props: TituloProps) {
  return (
    <h1>{props.titulo}</h1>
  );
}