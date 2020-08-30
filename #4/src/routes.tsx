import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import UserList from "./pages/UserList";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} exact />
      <Route path="/users" component={UserList} />
    </BrowserRouter>
  );
}

export default Routes;
