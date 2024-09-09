import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CreditCardList } from "./creditCard/CreditCardList";
import { CreditCardCreate } from "./creditCard/CreditCardCreate";
import { CreditCardEdit } from "./creditCard/CreditCardEdit";
import { CreditCardShow } from "./creditCard/CreditCardShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"card-management-service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CreditCard"
          list={CreditCardList}
          edit={CreditCardEdit}
          create={CreditCardCreate}
          show={CreditCardShow}
        />
      </Admin>
    </div>
  );
};

export default App;
