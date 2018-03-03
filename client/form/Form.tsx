import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type InputType = "EMAIL" | "PASSWORD";

interface BaseInput {
  type: InputType;
  label: string;
  layout:
    | "FILL_LINE"
    | {
        width?: number | string;
        flexGrow?: number;
      };
}

interface EmailInput extends BaseInput {
  type: "EMAIL";
}

interface PasswordInput extends BaseInput {
  type: "PASSWORD";
}

type Input = EmailInput | PasswordInput;

interface Response {
  success: boolean;
  details?: string;
}

interface InputsTemplate {
  [name: string]: Input;
}

interface Props<T extends InputsTemplate> {
  inputs: T;

  values: { [name: string]: string };

  submit: {
    style: "PRIMARY" | "SECONDARY";
    label: string;
    onTrigger: (
      values: { [name: string]: string }
    ) => Promise<Response> | Response;
  };
}

const styles = StyleSheet.create({
  label: {},
  input: {}
});

export class Form<T extends InputsTemplate> extends React.Component<Props<T>> {
  render() {
    const inputs = Object.keys(this.props.inputs).map(id => ({
      id,
      input: this.props.inputs[id]
    }));

    return <View>{inputs.map(this.renderInput)}</View>;
  }

  renderInput({ id, input }: { id: string; input: Input }) {
    return (
      <View key={id}>
        <Text>{input.label}</Text>
        <TextInput placeholder={input.label} />
      </View>
    );
  }
}
