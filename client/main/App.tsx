import React from "react";
import { Form } from "client/form";
import { Layout } from "client/layout";
import { Header } from "client/header";
import { autobind } from "core-decorators";

@autobind
export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Form
          inputs={{
            email: {
              type: "EMAIL",
              label: "Email",
              layout: "FILL_LINE"
            },
            password: {
              type: "PASSWORD",
              label: "Password",
              layout: "FILL_LINE"
            }
          }}
          values={{
            email: "",
            password: ""
          }}
          submit={{
            label: "Login",
            style: "PRIMARY",
            onTrigger(values) {
              values;
              return { success: true };
            }
          }}
        />
      </Layout>
    );
  }
}
