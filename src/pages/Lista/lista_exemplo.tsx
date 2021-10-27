export function listaExemplo() {
  let lista = [];

  for (let index = 0; index < 200; index++) {
    lista.push(`Item ${index + 1}`);
  }

  return lista;
}

export function listaExemplo2() {
  let lista = [];

  for (let index = 0; index < 200; index++) {
    lista.push({
      id: index + 1,
      item: `Item ${index + 1}`
    });
  }

  return lista;
}