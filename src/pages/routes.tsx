import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Lista } from "./Lista";
import { Login } from "./Login";
import { NovoUsuario } from "./NovoUsuario";
import { VeiculoLista } from "./VeiculoLista";
import { VeiculoCadastro } from "./VeiculoCadastro";
import { CategoriaLista } from "./CategoriaLista";
import { CategoriaCadastro } from "./CategoriaCadastro";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Login} path="/" />
        <Route exact component={NovoUsuario} path="/novo-usuario" />
        <Route exact component={Lista} path="/lista" />
        <Route exact component={Home} path="/home" />
        <Route exact component={VeiculoLista} path="/veiculos/lista" />
        <Route exact component={VeiculoCadastro} path="/veiculos/cadastro" />
        <Route exact component={CategoriaLista} path="/categorias/lista" />
        <Route exact component={CategoriaCadastro} path="/categorias/cadastro" />
      </Switch>
    </BrowserRouter>
  );
}