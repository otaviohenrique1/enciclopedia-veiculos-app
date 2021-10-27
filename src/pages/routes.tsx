import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Lista } from "./Lista";
import { Login } from "./Login";
import { NovoUsuario } from "./NovoUsuario";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Login} path="/" />
        <Route exact component={NovoUsuario} path="/novo-usuario" />
        <Route exact component={Lista} path="/lista" />
      </Switch>
    </BrowserRouter>
  );
}