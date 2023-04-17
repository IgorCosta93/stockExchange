import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import routes from "./const/routes";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { PrivateRoute } from "./auth/PrivateRoute";
import LoginContainer from "./containers/Login";
import HomeContainer from "./containers/Home";
import UsersContainer from "./containers/Users";
import UsersScreensContainer from "./containers/UsersScreens";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Switch>          
            <Route exact path={routes.LOGIN} component={LoginContainer}/>
            <PrivateRoute exact path={routes.HOME} auth={"ALL_USERS"} component={HomeContainer} pageTitle={"Home"} breadcrumb="Home" icon={FaHome}/>
            <PrivateRoute exact path={routes.USUARIOS} auth={"USUARIOS"} component={UsersContainer} pageTitle={"Usuarios"} breadcrumb="Usuarios" icon={FaUsers}/>
            <PrivateRoute exact path={routes.LIBERACAO_TELAS} auth={"LIBERACAO_TELAS"} component={UsersScreensContainer} pageTitle={"Usuarios Telas"} breadcrumb="Usuarios Telas" icon={FaUsers}/>
            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
